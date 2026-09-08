"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  MessageSquare,
  Sparkles,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  FileCheck,
  Lock,
  Headphones,
  ChevronDown,
  ArrowUpRight,
  Zap,
  CheckCircle2,
} from "lucide-react";
import ContactSection from "./ContactSection";
import { getWhatsAppUrl, getEmailUrl } from "../config/contact";
import "./ContactPage.css";

// WhatsApp Custom Icon
function WhatsAppIcon({ size = 22, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.17 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
    </svg>
  );
}

const FAQ_ITEMS = [
  {
    q: "¿La primera conversación tiene algún costo o me compromete a algo?",
    a: "No, la primera reunión de 30 a 45 minutos es 100% gratuita y sin ningún compromiso. Conversamos contigo, escuchamos tu idea o necesidad y te damos consejos claros sobre cómo solucionarlo.",
  },
  {
    q: "¿En cuánto tiempo sabré cuánto costará mi proyecto y cuándo estará listo?",
    a: "Tras nuestra primera conversación, te enviamos una cotización detallada en 24 a 48 horas con el precio exacto, qué incluye y las fechas de entrega, sin costos ocultos.",
  },
  {
    q: "¿Mis ideas y los datos de mi negocio estarán seguros con ustedes?",
    a: "Totalmente. Tratamos la información de cada cliente con total reserva y seriedad. Si lo prefieres, firmamos un documento legal de confidencialidad antes de que nos cuentes los detalles de tu negocio.",
  },
  {
    q: "¿Atienden a empresas de provincias o fuera de Lima?",
    a: "Sí, trabajamos con negocios de todo el Perú y del extranjero. Nos reunimos por videollamada y te mostramos cómo va avanzando tu página o sistema paso a paso por internet.",
  },
  {
    q: "¿Seré dueño de mi página web, aplicación y contraseñas?",
    a: "Sí, el 100% de todo lo que construyamos pertenece a tu empresa. Al terminar te entregamos todas las contraseñas, accesos y archivos para que tengas el control total.",
  },
  {
    q: "¿Qué pasa si no sé nada de tecnología o computación?",
    a: "¡No te preocupes! Nosotros nos encargamos de toda la parte difícil. Diseñamos todo para que sea muy fácil de usar y capacitamos con paciencia a ti y a tu equipo para que aprendan a usarlo sin problemas.",
  },
];

export default function ContactPage({
  prefilledService,
  prefilledData,
  onNavigateHome,
}) {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="contact-subpage-root"
      style={{
        minHeight: "100vh",
        background: "transparent",
        color: "#FFFFFF",
        paddingTop: "clamp(80px, 12vh, 120px)",
        paddingBottom: "80px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="contact-subpage-container">
        {/* Top Breadcrumb & Live Status Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <button
            type="button"
            onClick={onNavigateHome}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              background: "rgba(9, 168, 181, 0.12)",
              border: "1px solid rgba(44, 216, 232, 0.3)",
              borderRadius: "9999px",
              color: "#2CD8E8",
              fontSize: "0.85rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(9, 168, 181, 0.25)";
              e.currentTarget.style.transform = "translateX(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(9, 168, 181, 0.12)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <ArrowLeft size={16} />
            <span>Volver al Inicio</span>
          </button>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              background: "rgba(37, 211, 102, 0.12)",
              border: "1px solid rgba(37, 211, 102, 0.35)",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#4ADE80",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#22C55E",
                boxShadow: "0 0 10px #22C55E",
              }}
            />
            <span>Atención Rápida · Asesoría Inicial 100% Gratis</span>
          </div>
        </div>

        {/* ──── PUNTO 3: CANALES DIRECTOS (LENGUAJE SENCILLO) ──── */}
        <div className="contact-channels-grid">
          <a
            href={getWhatsAppUrl("Hola GAT Technology Consulting, me gustaría consultar sobre un proyecto para mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-card"
          >
            <div className="contact-channel-icon whatsapp">
              <WhatsAppIcon size={24} color="#25D366" />
            </div>
            <div className="contact-channel-info">
              <div className="contact-channel-badge">
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#25D366" }} />
                <span>Escríbenos por WhatsApp</span>
              </div>
              <h4 className="contact-channel-title">+51 927 086 003</h4>
              <p className="contact-channel-sub">Te respondemos en menos de 5 minutos</p>
            </div>
            <ArrowUpRight size={18} color="#25D366" />
          </a>

          <a
            href={getEmailUrl("Consulta sobre Proyecto", "Hola equipo de GAT, me gustaría recibir información sobre una solución para mi negocio...")}
            className="contact-channel-card"
          >
            <div className="contact-channel-icon email">
              <Mail size={22} color="#2CD8E8" />
            </div>
            <div className="contact-channel-info">
              <div className="contact-channel-badge">
                <span>Escríbenos por Correo</span>
              </div>
              <h4 className="contact-channel-title">contacto@gatconsulting.pe</h4>
              <p className="contact-channel-sub">Envíanos lo que necesitas para tu empresa</p>
            </div>
            <ArrowUpRight size={18} color="#2CD8E8" />
          </a>

          <div className="contact-channel-card" style={{ cursor: "default" }}>
            <div className="contact-channel-icon schedule">
              <Clock size={22} color="#F59E0B" />
            </div>
            <div className="contact-channel-info">
              <div className="contact-channel-badge">
                <span>Horario de Atención</span>
              </div>
              <h4 className="contact-channel-title">Lun a Vie: 8:30 AM – 7:00 PM</h4>
              <p className="contact-channel-sub">Sábados: 9:00 AM – 1:00 PM</p>
            </div>
          </div>
        </div>

        {/* ──── FORMULARIO PRINCIPAL DE CONTACTO ──── */}
        <ContactSection
          prefilledService={prefilledService}
          prefilledData={prefilledData}
        />

        {/* ──── PUNTO 1: ¿CÓMO TRABAJAMOS JUNTOS? (LENGUAJE SENCILLO) ──── */}
        <section className="contact-timeline-section">
          <div className="contact-section-header-center">
            <div
              className="section-tag"
              style={{ justifyContent: "center", marginBottom: "12px" }}
            >
              Paso a Paso Sencillo
            </div>
            <h3
              style={{
                fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                margin: "0 0 12px 0",
              }}
            >
              ¿Cómo empezamos a trabajar juntos?
            </h3>
            <p style={{ color: "#B5D2DB", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
              Un proceso fácil, rápido y sin palabras raras para que sepas qué haremos y cuánto costará tu proyecto.
            </p>
          </div>

          <div className="contact-timeline-grid">
            <div className="contact-step-card">
              <div className="contact-step-num">01</div>
              <h4 className="contact-step-title">1. Te respondemos de inmediato</h4>
              <p className="contact-step-desc">
                Leemos lo que necesitas y te escribimos o llamamos en menos de 15 minutos para ponernos de acuerdo.
              </p>
            </div>

            <div className="contact-step-card">
              <div className="contact-step-num">02</div>
              <h4 className="contact-step-title">2. Conversamos sobre tu negocio (Gratis)</h4>
              <p className="contact-step-desc">
                Nos reunimos por videollamada para escuchar qué problemas quieres resolver y cómo la tecnología puede ayudarte a vender más o ahorrar tiempo.
              </p>
            </div>

            <div className="contact-step-card">
              <div className="contact-step-num">03</div>
              <h4 className="contact-step-title">3. Te damos una propuesta y precio claro</h4>
              <p className="contact-step-desc">
                En 24 a 48 horas te entregamos un plan de trabajo con fechas exactas de entrega y un presupuesto cerrado sin sorpresas.
              </p>
            </div>
          </div>
        </section>

        {/* ──── PUNTO 2: GARANTÍAS Y TRANQUILIDAD (LENGUAJE SENCILLO) ──── */}
        <section className="contact-trust-section">
          <div className="contact-section-header-center">
            <div
              className="section-tag"
              style={{ justifyContent: "center", marginBottom: "12px" }}
            >
              Tu Tranquilidad Primero
            </div>
            <h3
              style={{
                fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                margin: "0 0 12px 0",
              }}
            >
              Nuestras Garantías para tu Negocio
            </h3>
            <p style={{ color: "#B5D2DB", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
              Cuidamos tu dinero, tus ideas y tu información para que trabajes con total seguridad.
            </p>
          </div>

          <div className="contact-trust-grid">
            <div className="contact-trust-card">
              <div className="contact-trust-icon-box">
                <Lock size={20} />
              </div>
              <h4 className="contact-trust-title">Secreto y Privacidad Total</h4>
              <p className="contact-trust-desc">
                Tus ideas, datos y clientes están 100% protegidos. Si lo deseas, firmamos un acuerdo legal de confidencialidad antes de empezar.
              </p>
            </div>

            <div className="contact-trust-card">
              <div className="contact-trust-icon-box">
                <FileCheck size={20} />
              </div>
              <h4 className="contact-trust-title">Eres el Único Dueño de Todo</h4>
              <p className="contact-trust-desc">
                Tu página web, app o sistema te pertenece totalmente a ti. Te entregamos todas las contraseñas, accesos y archivos sin restricciones.
              </p>
            </div>

            <div className="contact-trust-card">
              <div className="contact-trust-icon-box">
                <ShieldCheck size={20} />
              </div>
              <h4 className="contact-trust-title">Facturación y Contrato Formal</h4>
              <p className="contact-trust-desc">
                Trabajamos con total formalidad y emitimos facturas legales. Todo queda por escrito con fechas y compromisos claros.
              </p>
            </div>

            <div className="contact-trust-card">
              <div className="contact-trust-icon-box">
                <Headphones size={20} />
              </div>
              <h4 className="contact-trust-title">Soporte y Ayuda Continua</h4>
              <p className="contact-trust-desc">
                No te dejamos solo después de terminar. Te enseñamos con paciencia a usar tu sistema y estamos listos para ayudarte siempre.
              </p>
            </div>
          </div>
        </section>

        {/* ──── PUNTO 5: PREGUNTAS FRECUENTES (LENGUAJE SENCILLO) ──── */}
        <section className="contact-faq-section">
          <div className="contact-section-header-center">
            <div
              className="section-tag"
              style={{ justifyContent: "center", marginBottom: "12px" }}
            >
              Resolvemos tus Dudas
            </div>
            <h3
              style={{
                fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                margin: "0 0 12px 0",
              }}
            >
              Preguntas Frecuentes
            </h3>
            <p style={{ color: "#B5D2DB", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
              Respuestas claras a las dudas más comunes antes de empezar a trabajar juntos.
            </p>
          </div>

          <div className="contact-faq-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`contact-faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="contact-faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <div className="contact-faq-icon-chevron">
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="contact-faq-answer">
                      <p style={{ margin: 0 }}>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
