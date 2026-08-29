"use client";

import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  Zap,
  Target,
  Eye,
  Award,
  Sparkles,
  Users,
  CheckCircle2,
  Code2,
  Lock,
  Cloud,
  Brain,
  MessageCircle,
} from "lucide-react";

export default function AboutUsPage({ onNavigateHome, onNavigateContact, onSelectService }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "¡Hola GAT Technology Consulting! He visto su video institucional y me gustaría agendar una reunión de asesoría."
    );
    window.open(`https://wa.me/51925229293?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="about-page-root" style={{ minHeight: "100vh", background: "transparent", color: "#FFFFFF" }}>
      {/* ──── STICKY TOP NAV ──── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(7, 21, 33, 0.85)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            type="button"
            onClick={onNavigateHome}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              borderRadius: "12px",
              padding: "8px 14px",
              color: "#FFFFFF",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(9, 168, 181, 0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)")}
          >
            <ArrowLeft size={16} />
            <span>Volver al Inicio</span>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#09A8B5" }} />
            <span style={{ fontSize: "0.84rem", color: "#B4CAD6", fontWeight: 600 }}>
              GAT Technology Consulting · Nosotros
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onNavigateContact}
          className="btn-primary"
          style={{
            padding: "8px 18px",
            fontSize: "0.84rem",
            borderRadius: "9999px",
          }}
        >
          <span>Agendar Diagnóstico</span>
          <ArrowRight size={14} />
        </button>
      </nav>

      {/* ──── HERO SECTION: 50% TEXTO / 50% VIDEO CUADRADO ──── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          padding: "clamp(18px, 3vh, 36px) clamp(20px, 5vw, 64px) clamp(40px, 6vh, 60px) clamp(20px, 5vw, 64px)",
          boxSizing: "border-box",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(28px, 4vw, 56px)",
            alignItems: "center",
          }}
        >
          {/* ──── LEFT COLUMN: TEXTO & PROPUESTA ──── */}
          <div style={{ maxWidth: "640px" }}>
            <div className="tech-badge" style={{ marginBottom: "14px" }}>
              <span className="tech-badge-dot" />
              <span>SOBRE NOSOTROS · GAT TECHNOLOGY CONSULTING</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.1rem, 3.8vw, 3.4rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: "14px",
              }}
            >
              Impulsamos la <span className="text-gradient-brand">Evolución Digital</span> de Empresas de Misión Crítica
            </h1>

            <p
              style={{
                fontSize: "clamp(0.95rem, 1.2vw, 1.08rem)",
                color: "#B4CAD6",
                lineHeight: 1.65,
                marginBottom: "22px",
              }}
            >
              Somos un equipo especializado en consultoría tecnológica, ingeniería de software a medida, arquitecturas cloud resilientes e Inteligencia Artificial aplicada. Construimos herramientas digitales de alto impacto preparadas para escalar.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center",
                marginBottom: "28px",
              }}
            >
              <button
                type="button"
                onClick={onNavigateContact}
                className="btn-primary"
                style={{
                  padding: "13px 28px",
                  fontSize: "0.92rem",
                  borderRadius: "9999px",
                }}
              >
                <span>Solicitar Diagnóstico</span>
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 24px",
                  borderRadius: "9999px",
                  background: "rgba(34, 197, 94, 0.15)",
                  border: "1px solid rgba(34, 197, 94, 0.4)",
                  color: "#22C55E",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(34, 197, 94, 0.25)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(34, 197, 94, 0.15)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <MessageCircle size={17} />
                <span>WhatsApp: +51 925 229 293</span>
              </button>
            </div>

            {/* Mini Trust Badges Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "14px",
              }}
            >
              {[
                { num: "+50", label: "Proyectos Entregados", accent: "#09A8B5" },
                { num: "99.9%", label: "Disponibilidad Cloud", accent: "#2CD8E8" },
                { num: "100%", label: "Propiedad de Código", accent: "#5C9DFF" },
                { num: "ISO 27001", label: "Estándares de Seguridad", accent: "#087F9F" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "14px",
                    padding: "12px 16px",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: stat.accent,
                      lineHeight: 1.1,
                      marginBottom: "2px",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#8CA5B5", fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ──── RIGHT COLUMN: VIDEO CUADRADO CON CONTROLES (WIDER) ──── */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            {/* Ambient Glow behind the video */}
            <div
              className="ambient-glow-orb orb-cyan"
              style={{
                top: "10%",
                left: "10%",
                width: "420px",
                height: "420px",
                opacity: 0.65,
                zIndex: 0,
              }}
            />

            {/* Widescreen Video Container */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                aspectRatio: "4 / 3",
                borderRadius: "28px",
                overflow: "hidden",
                background: "linear-gradient(145deg, rgba(18, 50, 74, 0.9) 0%, rgba(7, 21, 33, 0.95) 100%)",
                border: "1px solid rgba(9, 168, 181, 0.45)",
                borderTop: "1px solid rgba(44, 216, 232, 0.7)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.75), 0 0 45px rgba(9, 168, 181, 0.25)",
              }}
            >
              <video
                src="https://res.cloudinary.com/piun1mwb/video/upload/v1787976526/Comercial_gat_consulting.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.92) contrast(1.05)",
                }}
              />

              {/* Top Video Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  zIndex: 10,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  borderRadius: "9999px",
                  background: "rgba(7, 21, 33, 0.8)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(9, 168, 181, 0.4)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#2CD8E8",
                  letterSpacing: "0.04em",
                  pointerEvents: "none",
                }}
              >
                <Sparkles size={12} />
                <span>Comercial Oficial GAT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── MISIÓN, VISIÓN & COMPROMISO (BENTO CARDS) ──── */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          padding: "clamp(40px, 6vh, 80px) clamp(20px, 5vw, 64px)",
          maxWidth: "1340px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <div className="section-tag" style={{ margin: "0 auto 12px auto" }}>
            Principios Fundacionales
          </div>
          <h2 className="section-title">
            Misión, Visión y <span className="text-gradient-brand">Compromiso</span>
          </h2>
          <p style={{ color: "#B4CAD6", fontSize: "0.95rem", maxWidth: "600px", margin: "12px auto 0 auto" }}>
            Los pilares estratégicos que guían cada proyecto de arquitectura de software, inteligencia artificial y ciberseguridad.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {/* 1. MISIÓN */}
          <div
            style={{
              background: "linear-gradient(145deg, rgba(18, 50, 74, 0.6) 0%, rgba(7, 21, 33, 0.85) 100%)",
              border: "1px solid rgba(9, 168, 181, 0.25)",
              borderRadius: "24px",
              padding: "34px 30px",
              backdropFilter: "blur(16px)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "15px",
                background: "linear-gradient(135deg, rgba(9, 168, 181, 0.2) 0%, rgba(8, 127, 159, 0.3) 100%)",
                border: "1px solid rgba(9, 168, 181, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#09A8B5",
              }}
            >
              <Target size={24} />
            </div>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
              Nuestra Misión
            </h3>
            <p style={{ fontSize: "0.92rem", color: "#B4CAD6", lineHeight: 1.65, margin: 0 }}>
              Diseñar, construir y desplegar soluciones de software y arquitecturas tecnológicas de máxima calidad que aceleren el crecimiento de nuestros clientes, garantizando alta disponibilidad, seguridad inquebrantable y retorno de inversión real.
            </p>
          </div>

          {/* 2. VISIÓN */}
          <div
            style={{
              background: "linear-gradient(145deg, rgba(18, 50, 74, 0.6) 0%, rgba(7, 21, 33, 0.85) 100%)",
              border: "1px solid rgba(44, 216, 232, 0.25)",
              borderRadius: "24px",
              padding: "34px 30px",
              backdropFilter: "blur(16px)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "15px",
                background: "linear-gradient(135deg, rgba(44, 216, 232, 0.2) 0%, rgba(9, 168, 181, 0.3) 100%)",
                border: "1px solid rgba(44, 216, 232, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2CD8E8",
              }}
            >
              <Eye size={24} />
            </div>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
              Nuestra Visión
            </h3>
            <p style={{ fontSize: "0.92rem", color: "#B4CAD6", lineHeight: 1.65, margin: 0 }}>
              Ser reconocidos como el partner estratégico y de consultoría tecnológica referente a nivel internacional en el desarrollo de productos digitales escalables y adopción pragmática de Inteligencia Artificial aplicada para empresas de vanguardia.
            </p>
          </div>

          {/* 3. PROPÓSITO & CULTURA */}
          <div
            style={{
              background: "linear-gradient(145deg, rgba(18, 50, 74, 0.6) 0%, rgba(7, 21, 33, 0.85) 100%)",
              border: "1px solid rgba(92, 157, 255, 0.25)",
              borderRadius: "24px",
              padding: "34px 30px",
              backdropFilter: "blur(16px)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "15px",
                background: "linear-gradient(135deg, rgba(92, 157, 255, 0.2) 0%, rgba(9, 168, 181, 0.3) 100%)",
                border: "1px solid rgba(92, 157, 255, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#5C9DFF",
              }}
            >
              <Award size={24} />
            </div>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
              Nuestra Cultura
            </h3>
            <p style={{ fontSize: "0.92rem", color: "#B4CAD6", lineHeight: 1.65, margin: 0 }}>
              Combinamos rigor ingenieril con mentalidad de producto. Cada línea de código, pipeline de CI/CD y modelo de IA se diseña con un único objetivo: resolver problemas empresariales reales y generar ventajas competitivas duraderas.
            </p>
          </div>
        </div>
      </section>

      {/* ──── VALORES NO NEGOCIABLES ──── */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0 clamp(20px, 5vw, 64px) clamp(60px, 8vh, 100px) clamp(20px, 5vw, 64px)",
          maxWidth: "1340px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-tag" style={{ margin: "0 auto 12px auto" }}>
            ADN GAT
          </div>
          <h2 className="section-title">
            Valores <span className="text-gradient-brand">Innegociables</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              icon: Zap,
              title: "Excelencia sin Excusas",
              desc: "No aceptamos código mediocre ni soluciones improvisadas. Construimos con estándares de grado enterprise.",
              accent: "#09A8B5",
            },
            {
              icon: Shield,
              title: "Seguridad por Diseño",
              desc: "La privacidad y protección de datos son la base de cada arquitectura, desde el primer wireframe.",
              accent: "#2CD8E8",
            },
            {
              icon: Sparkles,
              title: "Innovación Pragmática",
              desc: "Adoptamos IA y tecnologías emergentes solo cuando aportan valor cuantificable y ROI tangible para el negocio.",
              accent: "#5C9DFF",
            },
            {
              icon: Users,
              title: "Transparencia Total",
              desc: "Comunicación directa, entregables verificables y propiedad intelectual 100% transferida al cliente.",
              accent: "#087F9F",
            },
          ].map((val, i) => {
            const Icon = val.icon;
            return (
              <div
                key={i}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "20px",
                  padding: "24px 22px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(9, 168, 181, 0.4)";
                  e.currentTarget.style.background = "rgba(9, 168, 181, 0.06)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: `${val.accent}15`,
                    border: `1px solid ${val.accent}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: val.accent,
                    marginBottom: "14px",
                  }}
                >
                  <Icon size={20} />
                </div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>
                  {val.title}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#8CA5B5", lineHeight: 1.5, margin: 0 }}>
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ──── CALL TO ACTION BANNER ──── */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0 clamp(20px, 5vw, 64px) clamp(80px, 10vh, 120px) clamp(20px, 5vw, 64px)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, rgba(9, 168, 181, 0.15) 0%, rgba(7, 21, 33, 0.9) 100%)",
            border: "1px solid rgba(9, 168, 181, 0.4)",
            borderRadius: "32px",
            padding: "clamp(36px, 6vw, 56px) clamp(24px, 4vw, 48px)",
            textAlign: "center",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(9, 168, 181, 0.2)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            ¿Listo para construir el futuro digital de tu empresa?
          </h2>
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
              color: "#B4CAD6",
              maxWidth: "640px",
              margin: "0 auto 32px auto",
              lineHeight: 1.6,
            }}
          >
            Agenda una sesión de consultoría técnica gratuita con nuestros arquitectos de software e ingenieros de IA.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <button
              type="button"
              onClick={onNavigateContact}
              className="btn-primary"
              style={{
                padding: "14px 32px",
                fontSize: "0.95rem",
                borderRadius: "9999px",
              }}
            >
              <span>Solicitar Diagnóstico Gratuito</span>
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "9999px",
                background: "rgba(34, 197, 94, 0.15)",
                border: "1px solid rgba(34, 197, 94, 0.4)",
                color: "#22C55E",
                fontSize: "0.92rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(34, 197, 94, 0.25)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(34, 197, 94, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <MessageCircle size={18} />
              <span>Contactar por WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
