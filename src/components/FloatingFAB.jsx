"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  Bot,
  Sparkles,
  X,
  Send,
  ArrowRight,
  RefreshCw,
  ChevronRight,
} from "lucide-react";
import { getAiChatResponse } from "../services/aiChatService";
import { getWhatsAppUrl } from "../config/contact";

// WhatsApp Custom Icon
function WhatsAppIcon({ size = 24, color = "#FFFFFF" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.472 14.382C17.112 14.202 15.344 13.332 15.014 13.212C14.684 13.092 14.444 13.032 14.204 13.392C13.964 13.752 13.274 14.562 13.064 14.802C12.854 15.042 12.644 15.072 12.284 14.892C11.924 14.712 10.764 14.332 9.38402 13.102C8.30402 12.142 7.57402 10.952 7.36402 10.592C7.15402 10.232 7.34402 10.038 7.52402 9.858C7.68602 9.696 7.88402 9.438 8.06402 9.228C8.24402 9.018 8.30402 8.868 8.42402 8.628C8.54402 8.388 8.48402 8.178 8.39402 7.998C8.30402 7.818 7.58402 6.048 7.28402 5.328C6.99202 4.628 6.69602 4.724 6.47402 4.714C6.26402 4.704 6.02402 4.702 5.78402 4.702C5.54402 4.702 5.15402 4.792 4.82402 5.152C4.49402 5.512 3.56402 6.382 3.56402 8.152C3.56402 9.922 4.85402 11.632 5.03402 11.872C5.21402 12.112 7.57402 15.752 11.194 17.312C12.054 17.684 12.726 17.906 13.25 18.072C14.114 18.346 14.9 18.306 15.522 18.214C16.216 18.11 17.658 17.34 17.958 16.498C18.258 15.656 18.258 14.936 18.168 14.786C18.078 14.636 17.838 14.562 17.472 14.382Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12C2 13.818 2.484 15.522 3.327 17.005L2.087 21.533C2.016 21.792 2.088 22.07 2.277 22.259C2.434 22.416 2.651 22.5 2.875 22.5C2.964 22.5 3.053 22.487 3.14 22.463L7.808 21.189C9.176 21.848 10.557 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM3.8 12C3.8 7.471 7.471 3.8 12 3.8C16.529 3.8 20.2 7.471 20.2 12C20.2 16.529 16.529 20.2 12 20.2C10.669 20.2 9.387 19.882 8.243 19.281L7.962 19.133L4.471 20.088L5.452 16.512L5.291 16.216C4.334 14.461 3.8 13.256 3.8 12Z"
        fill={color}
      />
    </svg>
  );
}

// Initial prompt chips for Chatbot
const QUICK_PROMPTS = [
  { label: "🚀 Cotizar Proyecto Web / App", query: "¿Cómo puedo cotizar una aplicación web o móvil con GAT?" },
  { label: "🤖 Automatizaciones con IA", query: "¿Qué soluciones de inteligencia artificial y automatización ofrecen?" },
  { label: "🔒 Ciberseguridad & Cloud", query: "¿Qué servicios de ciberseguridad y arquitectura cloud tienen?" },
  { label: "⏱️ Tiempos & Metodología", query: "¿Cuáles son sus tiempos de entrega y metodología de trabajo?" },
  { label: "💬 Hablar por WhatsApp", query: "Quiero hablar directamente con un asesor por WhatsApp." },
];

// Pre-trained Smart Knowledge Answers
const KNOWLEDGE_BASE = [
  {
    keywords: ["cotiz", "precio", "costo", "presupuesto", "landing", "app", "web", "desarrollo", "proyecto"],
    response: `¡Excelente! En **GAT Technology Consulting** desarrollamos soluciones digitales a medida con tecnología de punta (React, Next.js, Node.js, Flutter, Swift/Kotlin, Python y Cloud AWS/Azure).\n\n📌 **Nuestros servicios principales incluyen:**\n• **Landing Pages de Alto Impacto** (desde 5-7 días hábiles).\n• **Aplicaciones Web Escalables & SaaS** con arquitecturas API-First.\n• **Apps Nativas & Multiplataforma (iOS & Android)** con 99.9% de resiliencia.\n\nPuedes solicitar una propuesta personalizada en nuestra sección de contacto o chatear ahora mismo por WhatsApp con nuestro equipo técnico.`,
    hasContactCTA: true,
    hasWhatsappCTA: true,
  },
  {
    keywords: ["ia", "inteligencia artificial", "automatiz", "asistente", "bot", "llm", "rag", "chatgpt"],
    response: `La división de **Inteligencia Artificial & Data** de GAT implementa soluciones avanzadas para automatizar procesos y elevar tu productividad:\n\n⚡ **Capacidades clave:**\n• **Asistentes de IA & Agentes Autónomos:** Respuestas contextuales conectadas a tus bases de datos y CRM.\n• **Pipelines de IA Generativa & RAG:** Integración con modelos OpenAI, Anthropic y DeepSeek.\n• **Automatización de Flujos Empresariales:** Reducción de hasta un 65% en costos operativos mediante Workflows inteligentes.`,
    hasContactCTA: true,
    serviceSlug: "automatizaciones-ia",
  },
  {
    keywords: ["seguridad", "ciberseguridad", "cloud", "devops", "aws", "azure", "kubernetes", "hack", "iso"],
    response: `🛡️ **Ciberseguridad Zero Trust & Cloud Architecture:**\n\nProtegemos y escalamos tus activos digitales con estándares internacionales (ISO 27001, SOC2):\n• **Arquitectura Multi-Cloud & DevOps:** Despliegues automatizados con CI/CD, Kubernetes y Terraform.\n• **Blindaje & Pentesting:** Pruebas de intrusión, auditoría de código y protección WAF/DDoS.\n• **SLA 99.9% de Disponibilidad:** Monitorización 24/7 y planes de recuperación ante desastres (DRP).`,
    hasContactCTA: true,
    serviceSlug: "ciberseguridad",
  },
  {
    keywords: ["tiempo", "plazo", "metodolog", "proceso", "agil", "scrum", "etapa", "fase"],
    response: `En GAT trabajamos bajo un marco **Ágil y Transparente de 4 Fases**:\n\n1️⃣ **Diagnóstico & Estrategia (Semana 1):** Definición de alcance, arquitectura y roadmap.\n2️⃣ **Diseño UI/UX & Prototipado (Semanas 1-2):** Wireframes interactivos y validación de experiencia.\n3️⃣ **Desarrollo Iterativo & IA (Semanas 2-6):** Sprints continuos con entregas funcionales semanales.\n4️⃣ **Testing QA, Seguridad & Lanzamiento:** Pruebas de estrés, despliegue cloud y soporte SLA continuo.`,
    hasContactCTA: true,
  },
  {
    keywords: ["whatsapp", "asesor", "humano", "telefono", "contacto", "llamar", "celular"],
    response: `📱 **¡Con gusto te conectamos con nuestro equipo humano!**\n\nNuestros consultores senior están disponibles para responder tus dudas técnicas o agendar una videollamada de diagnóstico sin compromiso.`,
    hasWhatsappCTA: true,
  },
];

const DEFAULT_ANSWER = `En **GAT Technology Consulting** somos tu partner estratégico en transformación digital y desarrollo de software de misión crítica.\n\nOfrecemos:\n• 🌐 Desarrollo Web & Móvil (iOS / Android)\n• 🤖 Automatizaciones e IA Aplicada\n• ☁️ Cloud, DevOps & Ciberseguridad Zero Trust\n\n¿Te gustaría que te preparemos una cotización o prefieres coordinar una llamada por WhatsApp?`;

export default function FloatingFAB({
  onNavigateContact,
  onNavigateService,
  isHidden = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [isInFeaturedMobile, setIsInFeaturedMobile] = useState(false);
  const scrollTimeoutRef = useRef(null);

  // Hide FAB in Hero section and in Soluciones Destacadas on mobile
  useEffect(() => {
    const updateScrollStatus = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
      // In Hero section if scroll position is less than threshold
      const heroThreshold = Math.min(window.innerHeight * 0.65, 420);
      setIsInHero(currentScrollY < heroThreshold);

      // Check if inside Soluciones Destacadas section on mobile
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const featuredSection = document.getElementById("servicios-destacados");
        if (featuredSection) {
          const rect = featuredSection.getBoundingClientRect();
          // Active if section is within the visible viewport range
          const inView = rect.top <= window.innerHeight * 0.85 && rect.bottom >= window.innerHeight * 0.15;
          setIsInFeaturedMobile(inView);
        } else {
          setIsInFeaturedMobile(false);
        }
      } else {
        setIsInFeaturedMobile(false);
      }
    };

    const handleScroll = () => {
      updateScrollStatus();
      setIsScrolling(true);
      if (isOpen) {
        setIsOpen(false);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 600);
    };

    updateScrollStatus();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollStatus);
    window.addEventListener("hashchange", updateScrollStatus);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollStatus);
      window.removeEventListener("hashchange", updateScrollStatus);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isOpen]);

  const isFabHidden = isHidden || isInHero || isInFeaturedMobile;

  // Auto-close popup/chat if navbar is opened or back in hero / featured
  useEffect(() => {
    if (isFabHidden) {
      setIsOpen(false);
      setIsChatOpen(false);
    }
  }, [isFabHidden]);

  const [messages, setMessages] = useState([
    {
      id: "msg-welcome",
      sender: "bot",
      text: "¡Hola! 👋 Soy el asistente virtual de **GAT Technology Consulting**.\n\n¿En qué solución digital o tecnológica podemos ayudarte hoy?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef(null);

  // Auto-scroll chat
  useEffect(() => {
    if (isChatOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isChatOpen]);

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputMessage.trim();
    if (!text || isTyping) return;

    const userMsg = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInputMessage("");
    setIsTyping(true);

    try {
      const aiResponse = await getAiChatResponse(newHistory);
      const lower = text.toLowerCase();
      const hasContactCTA =
        lower.includes("cotiz") ||
        lower.includes("precio") ||
        lower.includes("costo") ||
        lower.includes("diagnostico") ||
        lower.includes("proyecto") ||
        lower.includes("contacto");
      const hasWhatsappCTA = true;
      let serviceSlug = null;
      if (lower.includes("landing") || lower.includes("web") || lower.includes("pagina"))
        serviceSlug = "landing-page";
      else if (lower.includes("app") || lower.includes("movil") || lower.includes("android"))
        serviceSlug = "app-android";
      else if (lower.includes("ios") || lower.includes("iphone")) serviceSlug = "app-ios";
      else if (lower.includes("seguridad") || lower.includes("ciberseguridad"))
        serviceSlug = "ciberseguridad";
      else if (lower.includes("ia") || lower.includes("inteligencia") || lower.includes("bot"))
        serviceSlug = "automatizaciones-ia";

      const botReply = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: aiResponse,
        hasContactCTA,
        hasWhatsappCTA,
        serviceSlug,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error("AI chat error:", err);
      const fallbackReply = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: "¡Gracias por tu mensaje! En GAT Technology Consulting estamos listos para atenderte. Puedes contactar a un asesor ahora mismo haciendo clic en **Contactar por WhatsApp**.",
        hasWhatsappCTA: true,
        hasContactCTA: true,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, fallbackReply]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleOpenWhatsapp = (customText) => {
    const url = getWhatsAppUrl(
      customText || "¡Hola GAT Technology Consulting! Me gustaría recibir asesoría tecnológica y cotizar un proyecto."
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setIsOpen(false);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "msg-welcome-reset",
        sender: "bot",
        text: "¡Conversación reiniciada! 👋 ¿Qué proyecto o consulta tecnológica tienes en mente?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  const [showHintPill, setShowHintPill] = useState(true);

  return (
    <>
      {/* ──── FLOATING FAB WRAPPER (BOTTOM RIGHT WITH SPRING POP ANIMATION) ──── */}
      <div
        aria-label="Acciones de Contacto y Asistencia"
        className="gat-fab-wrapper"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 998,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "12px",
          pointerEvents: isFabHidden ? "none" : "auto",
          opacity: isFabHidden ? 0 : 1,
          transform: isFabHidden ? "scale(0.5) translateY(40px)" : "scale(1) translateY(0)",
          transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s",
          visibility: isFabHidden ? "hidden" : "visible",
        }}
      >
        {/* ──── FLOATING HINT PILL (WHEN CLOSED) ──── */}
        {!isOpen && !isChatOpen && showHintPill && (
          <div
            onClick={() => setIsOpen(true)}
            className={`gat-fab-hint-pill ${isScrolling ? "gat-fab-hint-scrolling" : ""}`}
            style={{
              pointerEvents: isScrolling ? "none" : "auto",
              opacity: isScrolling ? 0 : 1,
              transform: isScrolling ? "translateY(12px) scale(0.92)" : "translateY(0) scale(1)",
              visibility: isScrolling ? "hidden" : "visible",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px 8px 12px",
              background: "linear-gradient(135deg, rgba(14, 38, 58, 0.94) 0%, rgba(7, 21, 33, 0.96) 100%)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(9, 168, 181, 0.4)",
              borderTop: "1px solid rgba(44, 216, 232, 0.6)",
              borderRadius: "9999px",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(9, 168, 181, 0.25)",
              color: "#FFFFFF",
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s",
              animation: isScrolling ? "none" : "gat-fab-hint-float 3s ease-in-out infinite",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22C55E",
                boxShadow: "0 0 10px #22C55E",
                display: "inline-block",
                animation: "gat-dot-pulse 1.8s infinite",
              }}
            />
            <span style={{ color: "#E2F2F5" }}>¿Tienes un proyecto?</span>
            <span style={{ color: "#2CD8E8", fontWeight: 700 }}>¡Hablemos!</span>
            <Sparkles size={13} color="#2CD8E8" />
          </div>
        )}

        {/* ──── POPUP CARD (PREMIUM CYBER GLASS) ──── */}
        {isOpen && !isChatOpen && (
          <div
            className="gat-fab-choice-card"
            style={{
              pointerEvents: "auto",
              width: "340px",
              maxWidth: "calc(100vw - 32px)",
              background: "linear-gradient(145deg, rgba(14, 38, 58, 0.96) 0%, rgba(7, 21, 33, 0.98) 100%)",
              backdropFilter: "blur(30px) saturate(190%)",
              WebkitBackdropFilter: "blur(30px) saturate(190%)",
              borderRadius: "26px",
              padding: "20px 18px",
              boxShadow: "0 30px 70px rgba(0, 0, 0, 0.75), 0 0 35px rgba(9, 168, 181, 0.25)",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              borderTop: "1px solid rgba(44, 216, 232, 0.55)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              animation: "gat-fab-scale-up 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
              transformOrigin: "bottom right",
            }}
          >
            {/* Header Text */}
            <div style={{ marginBottom: "2px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  background: "rgba(34, 197, 94, 0.12)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#22C55E",
                    boxShadow: "0 0 8px #22C55E",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#22C55E",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Atención en Línea 24/7
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1.18rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  margin: "0 0 4px 0",
                  letterSpacing: "-0.02em",
                  fontFamily: "var(--font-heading, sans-serif)",
                }}
              >
                ¿Cómo podemos ayudarte?
              </h3>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#9FB5C4",
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                Elige tu canal preferido para respuesta inmediata
              </p>
            </div>

            {/* List of 2 Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {/* Option 1: Consultar con el asistente */}
              <button
                type="button"
                onClick={handleOpenChat}
                className="gat-fab-option-btn gat-fab-opt-ai"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "13px 14px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(139, 92, 246, 0.35)",
                  borderRadius: "18px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  outline: "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {/* Purple AI Gradient Icon Box */}
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      boxShadow: "0 8px 20px rgba(139, 92, 246, 0.45)",
                      flexShrink: 0,
                    }}
                  >
                    <Bot size={24} />
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                      <span
                        style={{
                          fontSize: "0.93rem",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Asistente IA GAT
                      </span>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          color: "#A78BFA",
                          background: "rgba(139, 92, 246, 0.22)",
                          padding: "2px 6px",
                          borderRadius: "9999px",
                          border: "1px solid rgba(139, 92, 246, 0.4)",
                        }}
                      >
                        ⚡ 24/7
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "0.76rem",
                        color: "#B4CAD6",
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      Respuestas técnicas y cotización inmediata
                    </div>
                  </div>
                </div>

                <ChevronRight size={18} color="#A78BFA" />
              </button>

              {/* Option 2: Hablar por WhatsApp */}
              <button
                type="button"
                onClick={() => handleOpenWhatsapp()}
                className="gat-fab-option-btn gat-fab-opt-wa"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "13px 14px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(34, 197, 94, 0.28)",
                  borderRadius: "18px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  outline: "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {/* Green WhatsApp Gradient Icon Box */}
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      boxShadow: "0 8px 20px rgba(34, 197, 94, 0.45)",
                      flexShrink: 0,
                    }}
                  >
                    <WhatsAppIcon size={24} color="#FFFFFF" />
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                      <span
                        style={{
                          fontSize: "0.93rem",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Hablar por WhatsApp
                      </span>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          color: "#22C55E",
                          background: "rgba(34, 197, 94, 0.2)",
                          padding: "2px 6px",
                          borderRadius: "9999px",
                          border: "1px solid rgba(34, 197, 94, 0.35)",
                        }}
                      >
                        ● En Línea
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "0.76rem",
                        color: "#B4CAD6",
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      Atención directa con consultor senior
                    </div>
                  </div>
                </div>

                <ChevronRight size={18} color="#22C55E" />
              </button>
            </div>
          </div>
        )}

        {/* ──── MAIN SOLID COLOR FAB BUTTON ──── */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <button
            type="button"
            className="gat-main-fab-btn"
            onClick={() => {
              if (isChatOpen) {
                setIsChatOpen(false);
              } else {
                setIsOpen(!isOpen);
              }
            }}
            aria-label={isOpen || isChatOpen ? "Cerrar menú" : "¿Cómo podemos ayudarte?"}
            style={{
              pointerEvents: "auto",
              position: "relative",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: isOpen || isChatOpen ? "#0F2636" : "#09A8B5",
              border: "2px solid rgba(255, 255, 255, 0.4)",
              boxShadow: isOpen || isChatOpen
                ? "0 14px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(15, 38, 54, 0.6)"
                : "0 16px 36px rgba(0, 0, 0, 0.45), 0 0 26px rgba(9, 168, 181, 0.55)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, background-color 0.25s ease",
              outline: "none",
            }}
          >
            {/* Animated Solid Glow Ring */}
            {!isOpen && !isChatOpen && (
              <span
                className="gat-fab-ring-1"
                style={{
                  position: "absolute",
                  inset: "-5px",
                  borderRadius: "50%",
                  border: "2px solid #09A8B5",
                  animation: "gat-pulse-ring 2.2s infinite",
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Icon Switcher with Smooth Rotation */}
            <div
              style={{
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: isOpen || isChatOpen ? "rotate(90deg)" : "rotate(0deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isOpen || isChatOpen ? (
                <X size={26} strokeWidth={2.5} />
              ) : (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                    fill="rgba(255, 255, 255, 0.2)"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="8" cy="11.5" r="1.25" fill="#FFFFFF" />
                  <circle cx="12" cy="11.5" r="1.25" fill="#FFFFFF" />
                  <circle cx="16" cy="11.5" r="1.25" fill="#FFFFFF" />
                </svg>
              )}
            </div>
          </button>

          {/* Corner Status Online Badge */}
          {!isOpen && !isChatOpen && (
            <span
              style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                width: "13px",
                height: "13px",
                borderRadius: "50%",
                background: "#22C55E",
                border: "2px solid #071521",
                boxShadow: "0 0 8px #22C55E",
                pointerEvents: "none",
                display: "block",
              }}
            />
          )}
        </div>
      </div>

      {/* ──── GAT AI CHATBOT INTERACTIVE MODAL ──── */}
      {isChatOpen && (
        <section
          aria-label="Ventana de Asistente Virtual GAT"
          className="gat-chat-modal"
          style={{
            position: "fixed",
            bottom: "96px",
            right: "24px",
            zIndex: 999,
            width: "380px",
            maxWidth: "calc(100vw - 28px)",
            height: "540px",
            maxHeight: "calc(100svh - 110px)",
            background: "linear-gradient(135deg, rgba(18, 50, 74, 0.96) 0%, rgba(7, 21, 33, 0.98) 100%)",
            backdropFilter: "blur(30px) saturate(190%)",
            WebkitBackdropFilter: "blur(30px) saturate(190%)",
            border: "1px solid rgba(255, 255, 255, 0.22)",
            borderTop: "1px solid rgba(255, 255, 255, 0.45)",
            borderRadius: "26px",
            boxShadow: "0 30px 70px rgba(0, 0, 0, 0.8), 0 0 35px rgba(9, 168, 181, 0.35)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "gat-chat-open 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              padding: "16px 18px",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(9, 168, 181, 0.12) 100%)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* Bot Avatar */}
              <div
                style={{
                  position: "relative",
                  width: "42px",
                  height: "42px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 16px rgba(124, 58, 237, 0.5)",
                }}
              >
                <Bot size={22} color="#FFFFFF" />
                <span
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    right: "-2px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#22C55E",
                    border: "2px solid #071521",
                  }}
                />
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontWeight: 800, fontSize: "0.95rem", color: "#FFFFFF", letterSpacing: "-0.01em" }}>
                    GAT AI Assistant
                  </span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      background: "rgba(139, 92, 246, 0.25)",
                      color: "#A78BFA",
                      border: "1px solid rgba(139, 92, 246, 0.5)",
                      padding: "1px 6px",
                      borderRadius: "6px",
                      fontWeight: 700,
                    }}
                  >
                    IA 24/7
                  </span>
                </div>
                <div style={{ fontSize: "0.74rem", color: "#B4CAD6", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>En línea · Especialista en Consultoría</span>
                </div>
              </div>
            </div>

            {/* Header Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <button
                type="button"
                onClick={handleResetChat}
                title="Reiniciar chat"
                aria-label="Reiniciar chat"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#B4CAD6",
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <RefreshCw size={14} />
              </button>

              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                title="Cerrar chat"
                aria-label="Cerrar chat"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#B4CAD6",
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div
            className="gat-chat-body"
            style={{
              flex: 1,
              padding: "16px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {messages.map((msg) => {
              const isBot = msg.sender === "bot";
              return (
                <div
                  key={msg.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: isBot ? "flex-start" : "flex-end",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "88%",
                      padding: "12px 16px",
                      borderRadius: isBot ? "18px 18px 18px 4px" : "18px 18px 4px 18px",
                      background: isBot
                        ? "linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(9, 168, 181, 0.08) 100%)"
                        : "linear-gradient(135deg, #09A8B5 0%, #087F9F 100%)",
                      border: isBot ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(44, 216, 232, 0.4)",
                      color: "#FFFFFF",
                      fontSize: "0.86rem",
                      lineHeight: "1.45",
                      boxShadow: isBot
                        ? "0 4px 14px rgba(0, 0, 0, 0.3)"
                        : "0 4px 16px rgba(9, 168, 181, 0.35)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {msg.text}

                    {/* Dynamic Action Buttons inside Bot Message */}
                    {isBot && (msg.hasContactCTA || msg.hasWhatsappCTA || msg.serviceSlug) && (
                      <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        {msg.hasWhatsappCTA && (
                          <button
                            type="button"
                            onClick={() => handleOpenWhatsapp(msg.text)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              background: "#22C55E",
                              color: "#FFFFFF",
                              border: "none",
                              borderRadius: "10px",
                              padding: "8px 12px",
                              fontSize: "0.8rem",
                              fontWeight: 700,
                              cursor: "pointer",
                              boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
                            }}
                          >
                            <WhatsAppIcon size={16} color="#FFFFFF" />
                            Abrir WhatsApp con un Asesor
                          </button>
                        )}

                        {msg.hasContactCTA && onNavigateContact && (
                          <button
                            type="button"
                            onClick={() => {
                              setIsChatOpen(false);
                              onNavigateContact();
                            }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              background: "rgba(255, 255, 255, 0.12)",
                              border: "1px solid rgba(9, 168, 181, 0.5)",
                              color: "#2CD8E8",
                              borderRadius: "10px",
                              padding: "8px 12px",
                              fontSize: "0.8rem",
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            <ArrowRight size={14} />
                            Ir al Formulario de Diagnóstico
                          </button>
                        )}

                        {msg.serviceSlug && onNavigateService && (
                          <button
                            type="button"
                            onClick={() => {
                              setIsChatOpen(false);
                              onNavigateService(msg.serviceSlug);
                            }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              background: "rgba(9, 168, 181, 0.2)",
                              border: "1px solid rgba(44, 216, 232, 0.4)",
                              color: "#FFFFFF",
                              borderRadius: "10px",
                              padding: "7px 12px",
                              fontSize: "0.78rem",
                              fontWeight: 600,
                              cursor: "pointer",
                            }}
                          >
                            <Sparkles size={13} color="#2CD8E8" />
                            Ver Detalles del Servicio
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <span style={{ fontSize: "0.68rem", color: "#8EABC0", padding: "0 4px" }}>
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Typing Animation */}
            {isTyping && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 12px" }}>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "14px",
                    padding: "8px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <span className="gat-typing-dot" style={{ animationDelay: "0ms" }} />
                  <span className="gat-typing-dot" style={{ animationDelay: "150ms" }} />
                  <span className="gat-typing-dot" style={{ animationDelay: "300ms" }} />
                </div>
                <span style={{ fontSize: "0.72rem", color: "#B4CAD6" }}>GAT AI está escribiendo...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div
            style={{
              padding: "8px 12px",
              background: "rgba(7, 21, 33, 0.6)",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              gap: "6px",
              overflowX: "auto",
              whiteSpace: "nowrap",
              scrollbarWidth: "none",
            }}
          >
            {QUICK_PROMPTS.map((p, i) => {
              const chipColor = i === 0 ? "#F59E0B" : i === 1 ? "#8B5CF6" : i === 4 ? "#22C55E" : "#09A8B5";
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSendMessage(p.query)}
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: `1px solid ${chipColor}40`,
                    borderRadius: "14px",
                    padding: "5px 10px",
                    fontSize: "0.72rem",
                    color: "#D5E8EC",
                    cursor: "pointer",
                    fontWeight: 600,
                    transition: "background 0.2s ease, border-color 0.2s ease",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${chipColor}20`;
                    e.currentTarget.style.borderColor = chipColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                    e.currentTarget.style.borderColor = `${chipColor}40`;
                  }}
                >
                  {p.label}
                </button>
              );
            })}
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={{
              padding: "12px 14px",
              background: "rgba(18, 50, 74, 0.7)",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu consulta aquí..."
              style={{
                flex: 1,
                background: "rgba(7, 21, 33, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: "14px",
                padding: "10px 14px",
                fontSize: "0.84rem",
                color: "#FFFFFF",
                outline: "none",
              }}
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              aria-label="Enviar mensaje"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "12px",
                background: inputMessage.trim()
                  ? "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)"
                  : "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: inputMessage.trim() ? "#FFFFFF" : "#5A7A90",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: inputMessage.trim() ? "pointer" : "default",
                boxShadow: inputMessage.trim() ? "0 0 12px rgba(139, 92, 246, 0.5)" : "none",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </section>
      )}

      {/* ──── FAB ANIMATIONS & MEDIA STYLES ──── */}
      <style>{`
        @keyframes gat-pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.22);
            opacity: 0;
          }
          100% {
            transform: scale(0.95);
            opacity: 0;
          }
        }

        @keyframes gat-fab-scale-up {
          from {
            opacity: 0;
            transform: scale(0.85) translateY(16px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes gat-chat-open {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gat-fab-hint-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes gat-dot-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
        }

        .gat-fab-hint-pill:hover {
          transform: translateY(-2px) scale(1.03) !important;
          border-color: #2CD8E8 !important;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), 0 0 25px rgba(9, 168, 181, 0.45) !important;
        }

        .gat-fab-opt-ai:hover {
          background: rgba(9, 168, 181, 0.14) !important;
          border-color: rgba(44, 216, 232, 0.7) !important;
          transform: translateX(-3px) scale(1.01);
          box-shadow: 0 8px 24px rgba(9, 168, 181, 0.25) !important;
        }

        .gat-fab-opt-wa:hover {
          background: rgba(34, 197, 94, 0.14) !important;
          border-color: rgba(34, 197, 94, 0.7) !important;
          transform: translateX(-3px) scale(1.01);
          box-shadow: 0 8px 24px rgba(34, 197, 94, 0.25) !important;
        }

        .gat-main-fab-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(9, 168, 181, 0.6), 0 0 20px rgba(34, 197, 94, 0.5) !important;
        }

        .gat-typing-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #A78BFA;
          display: inline-block;
          animation: gat-typing-bounce 1s infinite ease-in-out;
        }

        @keyframes gat-typing-bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        /* Mobile Adjustments for FAB & Chat */
        @media (max-width: 768px) {
          .gat-fab-wrapper {
            bottom: 18px !important;
            right: 18px !important;
          }

          .gat-main-fab-btn {
            width: 56px !important;
            height: 56px !important;
          }

          .gat-chat-modal {
            bottom: 82px !important;
            right: 14px !important;
            left: 14px !important;
            width: calc(100vw - 28px) !important;
            height: calc(100svh - 100px) !important;
            max-height: 560px !important;
          }

          .gat-fab-choice-card {
            width: calc(100vw - 32px) !important;
          }

          .gat-fab-hint-pill {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
