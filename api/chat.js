// Vercel Serverless Function: Secure AI Chat Endpoint
// Runs securely on server side. API keys are never bundled to client JS.

const SYSTEM_PROMPT = `Eres el Asistente Virtual Inteligente de "GAT Technology Consulting" (consultora en software a medida, apps web/móviles iOS y Android, ciberseguridad Zero Trust, cloud e Inteligencia Artificial).

REGLA FUNDAMENTAL:
- Da respuestas CORTAS, DIRECTAS Y CONCISAS (máximo 1 a 3 líneas o viñetas muy breves).
- Evita párrafos largos, rodeos o introducciones extensas.
- Habla en español con tono profesional, amable y ejecutivo.
- Información de contacto: Invitar a contactar por WhatsApp o solicitar el diagnóstico gratuito en el sitio web. Nunca dictes números de teléfono en texto, solo indica hacer clic en "Contactar por WhatsApp".
- Si el usuario pregunta por precios o iniciar un proyecto, dale una respuesta concisa de 1 frase e invítale a hacer clic en Contactar por WhatsApp o solicitar el diagnóstico gratuito.`;

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { conversationHistory } = req.body || {};
  if (!Array.isArray(conversationHistory)) {
    return res.status(400).json({ error: 'Invalid conversationHistory' });
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY;
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

  // 1. Try Groq
  if (GROQ_API_KEY) {
    try {
      const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...conversationHistory.map((m) => ({
          role: m.sender === 'bot' ? 'assistant' : 'user',
          content: m.text,
        })),
      ];

      const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages,
          temperature: 0.5,
          max_tokens: 180,
        }),
      });

      if (groqRes.ok) {
        const data = await groqRes.json();
        const reply = data.choices?.[0]?.message?.content;
        if (reply) return res.status(200).json({ reply: reply.trim() });
      }
    } catch (err) {
      console.warn('Groq backend error:', err);
    }
  }

  // 2. Try OpenRouter
  if (OPENROUTER_API_KEY) {
    try {
      const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...conversationHistory.map((m) => ({
          role: m.sender === 'bot' ? 'assistant' : 'user',
          content: m.text,
        })),
      ];

      const orRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          'X-Title': 'GAT Consulting Chatbot',
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-3.3-70b-instruct',
          messages,
          temperature: 0.5,
          max_tokens: 180,
        }),
      });

      if (orRes.ok) {
        const data = await orRes.json();
        const reply = data.choices?.[0]?.message?.content;
        if (reply) return res.status(200).json({ reply: reply.trim() });
      }
    } catch (err) {
      console.warn('OpenRouter backend error:', err);
    }
  }

  // 3. Try Gemini
  if (GEMINI_API_KEY) {
    try {
      const contents = conversationHistory.map((m) => ({
        role: m.sender === 'bot' ? 'model' : 'user',
        parts: [{ text: m.text }],
      }));

      const gemRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents,
            generationConfig: { temperature: 0.5, maxOutputTokens: 180 },
          }),
        }
      );

      if (gemRes.ok) {
        const data = await gemRes.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) return res.status(200).json({ reply: reply.trim() });
      }
    } catch (err) {
      console.warn('Gemini backend error:', err);
    }
  }

  // Default fallback response
  return res.status(200).json({
    reply: '¡Hola! En GAT Technology Consulting desarrollamos software a medida, apps móviles, ciberseguridad e IA. Puedes hacer clic en "Contactar por WhatsApp" para asesorarte de inmediato.',
  });
}
