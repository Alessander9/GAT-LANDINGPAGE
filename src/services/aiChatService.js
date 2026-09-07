// AI Service Client for GAT Technology Consulting Chatbot
// Calls backend serverless function (/api/chat) to protect API keys securely.

const SYSTEM_PROMPT = `Eres el Asistente Virtual Inteligente de "GAT Technology Consulting" (consultora en software a medida, apps web/móviles iOS y Android, ciberseguridad Zero Trust, cloud e Inteligencia Artificial).

REGLA FUNDAMENTAL:
- Da respuestas CORTAS, DIRECTAS Y CONCISAS (máximo 1 a 3 líneas o viñetas muy breves).
- Evita párrafos largos, rodeos o introducciones extensas.
- Habla en español con tono profesional, amable y ejecutivo.
- Información de contacto: Invitar a contactar por WhatsApp o solicitar el diagnóstico gratuito. Nunca dictes números telefónicos en texto, solo indica hacer clic en "Contactar por WhatsApp".
- Si el usuario pregunta por precios o iniciar un proyecto, dale una respuesta concisa de 1 frase e invítale a hacer clic en Contactar por WhatsApp o solicitar el diagnóstico gratuito.`;

/**
 * Multi-provider AI response generator.
 * Tries serverless endpoint /api/chat first, with client fallback.
 */
export async function getAiChatResponse(conversationHistory) {
  // 1. Call secure serverless API
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ conversationHistory }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.reply) {
        return data.reply;
      }
    }
  } catch (err) {
    console.warn("Backend /api/chat not available, trying local resolution:", err?.message);
  }

  // 2. Client-side fallback using env keys if present in local dev
  const clientGroqKey = import.meta.env.VITE_GROQ_API_KEY;
  if (clientGroqKey) {
    try {
      const messages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...conversationHistory.map((m) => ({
          role: m.sender === "bot" ? "assistant" : "user",
          content: m.text,
        })),
      ];

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${clientGroqKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages,
          temperature: 0.5,
          max_tokens: 180,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const content = data.choices?.[0]?.message?.content;
        if (content) return content.trim();
      }
    } catch (e) {
      console.warn("Client Groq fallback failed:", e?.message);
    }
  }

  // 3. Clean fallback response without phone numbers
  return `¡Hola! En **GAT Technology Consulting** desarrollamos soluciones web, apps móviles, ciberseguridad e IA a medida. Puedes hacer clic en **Contactar por WhatsApp** para asesorarte de inmediato.`;
}
