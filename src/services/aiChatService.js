// AI Service Orchestrator for GAT Technology Consulting Chatbot
// Reads keys from environment variables (import.meta.env) without hardcoding.

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || "";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

const SYSTEM_PROMPT = `Eres el Asistente Virtual Inteligente de "GAT Technology Consulting" (consultora en software a medida, apps web/móviles iOS y Android, ciberseguridad Zero Trust, cloud e Inteligencia Artificial).

REGLA FUNDAMENTAL:
- Da respuestas CORTAS, DIRECTAS Y CONCISAS (máximo 1 a 3 líneas o viñetas muy breves).
- Evita párrafos largos, rodeos o introducciones extensas.
- Habla en español con tono profesional, amable y ejecutivo.
- Información de contacto: WhatsApp oficial +51 925 229 293.
- Si el usuario pregunta por precios o iniciar un proyecto, dale una respuesta concisa de 1 frase e invítale a escribir por WhatsApp o solicitar el diagnóstico gratuito.`;

// 1. Call Groq AI API (Ultra-Fast Response)
async function callGroq(conversationHistory) {
  if (!GROQ_API_KEY) throw new Error("Groq API Key no configurada en .env");

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
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.5,
      max_tokens: 180,
    }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error?.message || `Groq HTTP error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "";
}

// 2. Call OpenRouter AI API (Fallback Provider)
async function callOpenRouter(conversationHistory) {
  if (!OPENROUTER_API_KEY) throw new Error("OpenRouter API Key no configurada en .env");

  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...conversationHistory.map((m) => ({
      role: m.sender === "bot" ? "assistant" : "user",
      content: m.text,
    })),
  ];

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "HTTP-Referer": window.location.origin || "http://localhost:3006",
      "X-Title": "GAT Technology Consulting Chatbot",
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3.3-70b-instruct",
      messages,
      temperature: 0.5,
      max_tokens: 180,
    }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error?.message || `OpenRouter HTTP error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "";
}

// 3. Call Google Gemini API (Alternative Provider)
async function callGemini(conversationHistory) {
  if (!GEMINI_API_KEY) throw new Error("Gemini API Key no configurada en .env");

  const contents = conversationHistory.map((m) => ({
    role: m.sender === "bot" ? "model" : "user",
    parts: [{ text: m.text }],
  }));

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents,
        generationConfig: {
          temperature: 0.5,
          maxOutputTokens: 180,
        },
      }),
    }
  );

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error?.message || `Gemini HTTP error: ${response.status}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
}

/**
 * Resilient multi-provider AI response generator.
 * Tries Groq -> OpenRouter -> Gemini -> Local Fallback.
 */
export async function getAiChatResponse(conversationHistory) {
  // 1. Try Groq (Ultra-fast, lowest latency)
  try {
    const answer = await callGroq(conversationHistory);
    if (answer && answer.trim()) {
      return answer.trim();
    }
  } catch (err) {
    console.warn("Groq failed, falling back to OpenRouter:", err.message);
  }

  // 2. Try OpenRouter
  try {
    const answer = await callOpenRouter(conversationHistory);
    if (answer && answer.trim()) {
      return answer.trim();
    }
  } catch (err) {
    console.warn("OpenRouter failed, falling back to Gemini:", err.message);
  }

  // 3. Try Gemini
  try {
    const answer = await callGemini(conversationHistory);
    if (answer && answer.trim()) {
      return answer.trim();
    }
  } catch (err) {
    console.warn("Gemini failed, falling back to local engine:", err.message);
  }

  // 4. Local Fallback
  return `¡Hola! En **GAT Technology Consulting** desarrollamos soluciones web, apps móviles, ciberseguridad e IA a medida. Escríbenos directamente por WhatsApp al **+51 925 229 293** para asesorarte.`;
}
