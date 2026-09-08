"use client";

import React from "react";
import {
  Shield,
  Zap,
  Target,
  ArrowRight,
  Code2,
  Lock,
  Cloud,
  Brain,
  MessageCircle,
  Eye,
  Award,
  Users,
  Sparkles,
} from "lucide-react";
import { getWhatsAppUrl } from "../config/contact";
import Methodology from "./Methodology";

export default function AboutUsPage({ onNavigateHome, onNavigateContact, onSelectService }) {
  const handleWhatsApp = () => {
    const url = getWhatsAppUrl(
      "¡Hola GAT Technology Consulting! He visto su video institucional y me gustaría agendar una reunión de asesoría."
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="about-page-root" style={{ minHeight: "100vh", background: "transparent", color: "#FFFFFF" }}>
      {/* ──── HERO SECTION: 50% TEXTO / 50% VIDEO CUADRADO ──── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          padding: "clamp(88px, 11vh, 120px) clamp(16px, 4vw, 56px) clamp(24px, 4vh, 40px) clamp(16px, 4vw, 56px)",
          boxSizing: "border-box",
          maxWidth: "1360px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(24px, 3.5vw, 48px)",
            alignItems: "center",
          }}
        >
          {/* ──── LEFT COLUMN: TEXTO & PROPUESTA ──── */}
          <div style={{ maxWidth: "620px" }}>
            <div className="tech-badge" style={{ marginBottom: "10px" }}>
              <span className="tech-badge-dot" />
              <span>SOBRE NOSOTROS · GAT TECHNOLOGY CONSULTING</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)",
                fontWeight: 800,
                lineHeight: 1.14,
                letterSpacing: "-0.03em",
                marginBottom: "12px",
              }}
            >
              Elevamos la <span className="text-gradient-brand">Solución Digital</span> de tu Empresa
            </h1>

            <p
              style={{
                fontSize: "clamp(0.88rem, 1.05vw, 0.98rem)",
                color: "#B4CAD6",
                lineHeight: 1.55,
                marginBottom: "18px",
              }}
            >
              Somos un equipo especializado en consultoría tecnológica, ingeniería de software a medida, arquitecturas cloud resilientes e Inteligencia Artificial aplicada. Construimos herramientas digitales de alto impacto preparadas para escalar.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <button
                type="button"
                onClick={onNavigateContact}
                className="btn-primary"
                style={{
                  padding: "11px 24px",
                  fontSize: "0.88rem",
                  borderRadius: "9999px",
                }}
              >
                <span>Solicitar Diagnóstico</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "11px 20px",
                  borderRadius: "9999px",
                  background: "rgba(34, 197, 94, 0.15)",
                  border: "1px solid rgba(34, 197, 94, 0.4)",
                  color: "#22C55E",
                  fontSize: "0.86rem",
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
                <MessageCircle size={15} />
                <span>Contactar por WhatsApp</span>
              </button>
            </div>

            {/* Mini Trust Badges in Single Compact Row */}
            <div className="about-mini-stats-grid">
              {[
                { num: "+50", label: "Proyectos", accent: "#09A8B5" },
                { num: "99.9%", label: "Cloud SLA", accent: "#2CD8E8" },
                { num: "100%", label: "Código Propio", accent: "#5C9DFF" },
                { num: "ISO 27001", label: "Seguridad", accent: "#087F9F" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "8px 10px",
                    backdropFilter: "blur(12px)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.15rem",
                      fontWeight: 800,
                      color: stat.accent,
                      lineHeight: 1.1,
                      marginBottom: "2px",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#8CA5B5", fontWeight: 500, whiteSpace: "nowrap" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ──── RIGHT COLUMN: VIDEO PANORÁMICO CON GLOW ──── */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            {/* Ambient Glow behind the video */}
            <div
              className="ambient-glow-orb orb-cyan"
              style={{
                top: "10%",
                left: "10%",
                width: "360px",
                height: "360px",
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
                aspectRatio: "16 / 10",
                borderRadius: "24px",
                overflow: "hidden",
                background: "linear-gradient(145deg, rgba(18, 50, 74, 0.9) 0%, rgba(7, 21, 33, 0.95) 100%)",
                border: "1px solid rgba(9, 168, 181, 0.45)",
                borderTop: "1px solid rgba(44, 216, 232, 0.7)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.75), 0 0 35px rgba(9, 168, 181, 0.25)",
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
        <div className="ambient-glow-orb orb-cyan" style={{ top: "5%", left: "10%", width: "400px", height: "400px" }} />
        <div className="ambient-glow-orb orb-blue" style={{ bottom: "10%", right: "5%", width: "450px", height: "450px" }} />
        <div className="ambient-glow-orb orb-ai" style={{ top: "35%", right: "15%", width: "350px", height: "350px" }} />
        <div className="ambient-glow-orb orb-amber" style={{ bottom: "30%", left: "5%", width: "260px", height: "260px" }} />
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
              accent: "#F59E0B",
            },
            {
              icon: Shield,
              title: "Seguridad por Diseño",
              desc: "La privacidad y protección de datos son la base de cada arquitectura, desde el primer wireframe.",
              accent: "#09A8B5",
            },
            {
              icon: Sparkles,
              title: "Innovación Pragmática",
              desc: "Adoptamos IA y tecnologías emergentes solo cuando aportan valor cuantificable y ROI tangible para el negocio.",
              accent: "#8B5CF6",
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

      {/* ──── NUESTRA FORMA DE TRABAJAR (METODOLOGÍA) ──── */}
      <div style={{ position: "relative", zIndex: 10, margin: "20px 0" }}>
        <Methodology onStartProject={onNavigateContact} />
      </div>

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

      <style>{`
        .about-mini-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        @media (max-width: 640px) {
          .about-mini-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </div>
  );
}
