"use client";

import React, { useState, useEffect } from "react";
import { SERVICES_DATA } from "../data/servicesData";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  PhoneCall,
  Send,
  Building2,
  Cpu,
  Layers,
  Shield,
  Zap,
  MessageCircle,
} from "lucide-react";

export default function ServiceDetailPage({
  serviceSlug = "landing-page",
  onNavigateHome,
  onSelectServiceForContact,
}) {
  const [currentSlug, setCurrentSlug] = useState(serviceSlug);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setCurrentSlug(serviceSlug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceSlug]);

  const service = SERVICES_DATA[currentSlug] || SERVICES_DATA["landing-page"];
  const Icon = service.icon;

  const handleSwitchService = (slug) => {
    setCurrentSlug(slug);
    window.location.hash = `#servicio/${slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuoteClick = () => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(service.title);
    }
  };

  const handleWhatsApp = () => {
    const url = getWhatsAppUrl(
      `¡Hola GAT Technology Consulting! Me gustaría agendar una asesoría sobre sus servicios de ${service.title}.`
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // SEO: Inyectar JSON-LD de Service + BreadcrumbList por cada subpágina de servicio
  useEffect(() => {
    const SITE_URL = 'https://gatconsulting.tech';
    const schemaId = 'gat-service-jsonld';
    const existing = document.getElementById(schemaId);
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "serviceType": service.title,
          "name": service.title,
          "description": service.tagline,
          "provider": {
            "@type": "Organization",
            "name": "GAT Technology Consulting",
            "url": SITE_URL
          },
          "areaServed": {
            "@type": "City",
            "name": "Lima"
          },
          "url": `${SITE_URL}/#servicio/${currentSlug}`
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Inicio",
              "item": `${SITE_URL}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Servicios",
              "item": `${SITE_URL}/#servicios`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": service.title,
              "item": `${SITE_URL}/#servicio/${currentSlug}`
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [currentSlug, service]);

  return (
    <div className="service-detail-root">
      {/* ──── MAIN SERVICE CONTENT ──── */}
      <main className="service-main-content">
        {/* ──── HERO SECTION: 50% TEXTO / 50% VIDEO CUADRADO CON GLOW ──── */}
        {/* ──── HERO SECTION: 100% WIDTH & FULL VIEWPORT HEIGHT (50% TEXTO / 50% VIDEO) ──── */}
        <section
          style={{
            position: "relative",
            width: "100%",
            minHeight: "calc(100vh - 68px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(32px, 4.5vh, 60px) clamp(20px, 4vw, 64px)",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          {/* ──── HERO SECTION CONTENT: 50% TEXTO / 50% VIDEO ──── */}
          <div
            style={{
              width: "100%",
              maxWidth: "1600px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
              gap: "clamp(32px, 5vw, 64px)",
              alignItems: "center",
            }}
          >
            {/* LEFT COLUMN: TEXTO & PROPUESTA */}
            <div style={{ width: "100%", maxWidth: "720px" }}>
              <div className="tech-badge" style={{ marginBottom: "14px" }}>
                <span className="tech-badge-dot" style={{ background: service.accent || "#09A8B5" }} />
                <span>{service.badge.toUpperCase()} · GAT TECHNOLOGY CONSULTING</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2rem, 3.4vw, 3.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: "-0.03em",
                  marginBottom: "16px",
                  color: "#FFFFFF",
                }}
              >
                {service.title.includes("&") ? (
                  <>
                    {service.title.split("&")[0]} &{" "}
                    <span className="text-gradient-brand">
                      {service.title.split("&").slice(1).join("&")}
                    </span>
                  </>
                ) : (
                  <span className="text-gradient-brand">{service.title}</span>
                )}
              </h1>

              <p
                style={{
                  fontSize: "clamp(1rem, 1.2vw, 1.18rem)",
                  color: "#B4CAD6",
                  lineHeight: 1.65,
                  marginBottom: "24px",
                }}
              >
                {service.tagline}
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
                  onClick={handleQuoteClick}
                  className="btn-primary"
                  style={{
                    padding: "13px 28px",
                    fontSize: "0.94rem",
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
                  <MessageCircle size={17} />
                  <span>Contactar por WhatsApp</span>
                </button>
              </div>

              {/* Mini Trust / Metrics Badges */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${service.metrics ? Math.min(service.metrics.length, 4) : 4}, 1fr)`,
                  gap: "12px",
                }}
              >
                {service.metrics &&
                  service.metrics.map((stat, i) => (
                    <div
                      key={i}
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "14px",
                        padding: "10px 14px",
                        backdropFilter: "blur(12px)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.25rem",
                          fontWeight: 800,
                          color: service.accent || "#09A8B5",
                          lineHeight: 1.1,
                          marginBottom: "4px",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontSize: "0.76rem",
                          color: "#8CA5B5",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        title={stat.label}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* RIGHT COLUMN: VIDEO PANORÁMICO (EXPANDED TO FULL 50% WIDTH) */}
            <div
              style={{
                position: "relative",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <div
                className="ambient-glow-orb orb-cyan"
                style={{
                  top: "10%",
                  left: "15%",
                  width: "550px",
                  height: "550px",
                  opacity: 0.7,
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  aspectRatio: "16 / 10",
                  minHeight: "clamp(340px, 46vh, 540px)",
                  borderRadius: "26px",
                  overflow: "hidden",
                  background: "linear-gradient(145deg, rgba(18, 50, 74, 0.95) 0%, rgba(7, 21, 33, 0.98) 100%)",
                  border: `1px solid ${service.accent ? `${service.accent}77` : "rgba(9, 168, 181, 0.55)"}`,
                  borderTop: "1px solid rgba(44, 216, 232, 0.8)",
                  boxShadow: `0 24px 70px rgba(0, 0, 0, 0.85), 0 0 45px ${service.accent ? `${service.accent}40` : "rgba(9, 168, 181, 0.3)"}`,
                }}
              >
                {service.heroVideo ? (
                  <video
                    key={service.heroVideo}
                    src={service.heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label={`Demostración de ${service.title}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "brightness(0.94) contrast(1.05)",
                    }}
                  >
                    <track kind="captions" src="data:text/vtt;charset=utf-8,WEBVTT" label="Español" default={false} />
                  </video>
                ) : (
                  <img
                    key={service.heroImage}
                    src={service.heroImage}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "brightness(0.94) contrast(1.05)",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW & CONTEXT */}
        <section className="service-overview-section">
          <div className="container">
            <div className="service-overview-grid">
              <div className="service-overview-text-col">
                <div className="section-tag">Descripción del Servicio</div>
                <h2 style={{ fontSize: "2rem", color: "#FFFFFF", marginBottom: "16px" }}>
                  Ingeniería Digital de <span className="text-gradient-brand">Alto Impacto</span>
                </h2>
                <p style={{ fontSize: "1.05rem", color: "#E2F2F5", lineHeight: 1.7, marginBottom: "24px" }}>
                  {service.overview}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle2 size={18} color={service.accent} />
                    <span style={{ color: "#D5E8EC", fontSize: "0.92rem", fontWeight: 500 }}>
                      Transferencia total de propiedad del código fuente y documentación técnica.
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle2 size={18} color={service.accent} />
                    <span style={{ color: "#D5E8EC", fontSize: "0.92rem", fontWeight: 500 }}>
                      Garantía de soporte, estabilidad de despliegue y SLAs de rendimiento.
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle2 size={18} color={service.accent} />
                    <span style={{ color: "#D5E8EC", fontSize: "0.92rem", fontWeight: 500 }}>
                      Diseñado bajo estándares internacionales de seguridad y escalabilidad.
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual Showcase Card */}
              <div className="service-overview-visual-col">
                <div className="service-visual-card">
                  <img src={service.heroImage} alt={service.title} className="service-visual-img" />
                  <div className="service-visual-overlay" />
                  <div className="service-visual-badge">
                    <Sparkles size={16} color={service.accent} />
                    <span>GAT Certified Engineering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS & CAPABILITIES */}
        <section id="pilares" className="service-pillars-section">
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px auto" }}>
              <div className="section-tag" style={{ justifyContent: "center" }}>
                Capacidades Clave
              </div>
              <h2 className="section-title">
                Pilares de <span className="text-gradient-brand">Arquitectura & Rendimiento</span>
              </h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Cada solución es construida con estándares de ingeniería de software corporativa de clase mundial.
              </p>
            </div>

            <div className="service-pillars-grid">
              {service.pillars.map((p, i) => {
                const PillarIcon = p.icon;
                return (
                  <div key={i} className="service-pillar-card">
                    <div
                      className="service-pillar-icon-box"
                      style={{
                        borderColor: `${service.accent}55`,
                        color: service.accent,
                        boxShadow: `0 0 20px ${service.accent}25`,
                      }}
                    >
                      <PillarIcon size={22} />
                    </div>
                    <h3 className="service-pillar-title">{p.title}</h3>
                    <p className="service-pillar-desc">{p.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS & ROADMAP */}
        <section className="service-process-section">
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px auto" }}>
              <div className="section-tag" style={{ justifyContent: "center" }}>
                Metodología de Entrega
              </div>
              <h2 className="section-title">
                Ruta de Ejecución <span className="text-gradient-brand">Paso a Paso</span>
              </h2>
            </div>

            <div className="service-process-grid">
              {service.process.map((pr, i) => (
                <div key={i} className="service-process-card">
                  <div className="service-process-num" style={{ color: service.accent }}>
                    {pr.step}
                  </div>
                  <h4 className="service-process-title">{pr.title}</h4>
                  <p className="service-process-desc">{pr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK & USE CASES */}
        <section className="service-tech-cases-section">
          <div className="container">
            <div className="service-tech-cases-grid">
              {/* Stack */}
              <div className="service-stack-card">
                <div className="section-tag">Tecnologías Principales</div>
                <h3 style={{ fontSize: "1.4rem", color: "#FFFFFF", marginBottom: "16px" }}>
                  Stack Especializado para este Servicio
                </h3>
                <div className="service-tech-pills">
                  {service.techStack.map((tech, i) => (
                    <span key={i} className="service-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="service-cases-card">
                <div className="section-tag">Casos de Uso</div>
                <h3 style={{ fontSize: "1.4rem", color: "#FFFFFF", marginBottom: "16px" }}>
                  Aplicación en Sectores Empresariales
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {service.useCases.map((uc, i) => (
                    <div key={i} className="service-usecase-item">
                      <strong style={{ color: service.accent, fontSize: "0.95rem" }}>
                        {uc.client}:
                      </strong>
                      <span style={{ color: "#D5E8EC", fontSize: "0.88rem", marginLeft: "6px" }}>
                        {uc.result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="service-faq-section">
          <div className="container" style={{ maxWidth: "850px" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div className="section-tag" style={{ justifyContent: "center" }}>
                Preguntas Frecuentes
              </div>
              <h2 className="section-title">
                Todo lo que Necesitas <span className="text-gradient-brand">Saber</span>
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {service.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="service-faq-item">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="service-faq-question-btn"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        color={service.accent}
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.25s ease",
                          flexShrink: 0,
                        }}
                      />
                    </button>
                    {isOpen && <p className="service-faq-answer">{faq.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONVERSION CTA BOX */}
        <section className="service-cta-box-section">
          <div className="container">
            <div className="service-cta-box">
              <div style={{ maxWidth: "600px" }}>
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: service.accent,
                  }}
                >
                  ¿Listo para comenzar?
                </span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#FFFFFF", margin: "8px 0 12px 0" }}>
                  Inicia tu proyecto de <span className="text-gradient-brand">{service.navLabel}</span> hoy mismo
                </h2>
                <p style={{ color: "#B4CAD6", fontSize: "0.95rem", margin: 0, lineHeight: 1.5 }}>
                  Agenda una sesión de consultoría técnica gratuita de 30 minutos con nuestros ingenieros senior.
                </p>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button
                  onClick={handleQuoteClick}
                  className="btn-primary"
                  style={{ padding: "14px 28px", fontSize: "0.95rem" }}
                >
                  <span>Solicitar Propuesta</span>
                  <Send size={15} />
                </button>
                <button
                  onClick={onNavigateHome}
                  className="btn-secondary"
                  style={{ padding: "14px 20px", fontSize: "0.95rem" }}
                >
                  <span>Volver al Inicio</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="service-subpage-footer">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="/assets/GAT_Logo_Fondo_Oscuro_Transparente_HD.png"
              alt="GAT"
              style={{ height: "28px" }}
            />
            <span style={{ fontSize: "0.82rem", color: "#8CA5B5" }}>
              © {new Date().getFullYear()} GAT Technology Consulting. Todos los derechos reservados.
            </span>
          </div>
          <button
            onClick={onNavigateHome}
            style={{
              background: "transparent",
              border: "none",
              color: "#09A8B5",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <ArrowLeft size={14} />
            <span>Volver a la Portada</span>
          </button>
        </div>
      </footer>

      {/* ──── STYLES ──── */}
      <style>{`
        .service-detail-root {
          min-height: 100vh;
          background: #071521;
          color: #FFFFFF;
          position: relative;
          z-index: 10;
        }

        /* ──── TOP SUBNAV ──── */
        .service-subnav-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(7, 21, 33, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(9, 168, 181, 0.2);
          padding: 10px 20px;
        }

        .service-subnav-container {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .service-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(213, 232, 236, 0.15);
          color: #FFFFFF;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .service-back-btn:hover {
          background: rgba(9, 168, 181, 0.2);
          border-color: #09A8B5;
          transform: translateX(-2px);
        }

        .service-subnav-divider {
          width: 1px;
          height: 24px;
          background: rgba(213, 232, 236, 0.15);
        }

        .service-tabs-scroll {
          display: flex;
          align-items: center;
          gap: 6px;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 4px 0;
        }

        .service-tabs-scroll::-webkit-scrollbar {
          display: none;
        }

        .service-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.76rem;
          font-weight: 600;
          border: 1px solid;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .service-tab-btn:hover {
          transform: translateY(-1px);
        }

        .service-cta-header-btn {
          padding: 7px 16px !important;
          font-size: 0.8rem !important;
          white-space: nowrap;
        }

        /* ──── MAIN CONTENT ──── */
        .service-main-content {
          padding-bottom: 60px;
        }

        .service-hero-section {
          padding: 80px 0 60px 0;
          position: relative;
          overflow: hidden;
        }

        .service-hero-title {
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #FFFFFF;
          max-width: 950px;
          margin: 0 0 18px 0;
        }

        .service-hero-tagline {
          font-size: clamp(1.05rem, 1.6vw, 1.35rem);
          color: #B4CAD6;
          line-height: 1.5;
          max-width: 800px;
          margin: 0 0 32px 0;
        }

        /* Metrics */
        .service-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .service-metric-card {
          background: rgba(18, 50, 74, 0.6);
          border: 1px solid rgba(9, 168, 181, 0.25);
          backdrop-filter: blur(16px);
          border-radius: 16px;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
        }

        .service-metric-val {
          font-size: clamp(1.8rem, 2.8vw, 2.5rem);
          font-weight: 800;
          font-family: var(--font-heading);
          line-height: 1;
          margin-bottom: 6px;
        }

        .service-metric-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 2px;
        }

        .service-metric-sub {
          font-size: 0.75rem;
          color: #8CA5B5;
        }

        /* Overview */
        .service-overview-section {
          padding: 60px 0;
          border-top: 1px solid rgba(213, 232, 236, 0.08);
        }

        .service-overview-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }

        .service-visual-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(9, 168, 181, 0.3);
          box-shadow: 0 20px 50px rgba(7, 18, 28, 0.8);
          height: 380px;
        }

        .service-visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.15) saturate(1.1);
        }

        .service-visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(7, 21, 33, 0.2) 0%, rgba(7, 21, 33, 0.85) 100%);
        }

        .service-visual-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(7, 21, 33, 0.85);
          backdrop-filter: blur(12px);
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid rgba(9, 168, 181, 0.4);
          font-size: 0.8rem;
          font-weight: 700;
          color: #FFFFFF;
        }

        /* Pillars */
        .service-pillars-section {
          padding: 80px 0;
          background: rgba(11, 30, 45, 0.4);
          border-top: 1px solid rgba(213, 232, 236, 0.08);
          border-bottom: 1px solid rgba(213, 232, 236, 0.08);
        }

        .service-pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        .service-pillar-card {
          background: linear-gradient(155deg, rgba(18, 50, 74, 0.7) 0%, rgba(7, 21, 33, 0.9) 100%);
          border: 1px solid rgba(9, 168, 181, 0.22);
          border-radius: 18px;
          padding: 28px 24px;
          backdrop-filter: blur(16px);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .service-pillar-card:hover {
          transform: translateY(-4px);
          border-color: rgba(9, 168, 181, 0.55);
        }

        .service-pillar-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(9, 168, 181, 0.12);
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .service-pillar-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 8px 0;
        }

        .service-pillar-desc {
          font-size: 0.88rem;
          color: #B4CAD6;
          line-height: 1.5;
          margin: 0;
        }

        /* Process */
        .service-process-section {
          padding: 80px 0;
        }

        .service-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .service-process-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(213, 232, 236, 0.1);
          border-radius: 16px;
          padding: 24px 20px;
        }

        .service-process-num {
          font-size: 1.8rem;
          font-family: var(--font-heading);
          font-weight: 900;
          line-height: 1;
          margin-bottom: 12px;
        }

        .service-process-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 8px 0;
        }

        .service-process-desc {
          font-size: 0.82rem;
          color: #8CA5B5;
          line-height: 1.45;
          margin: 0;
        }

        /* Tech & Cases */
        .service-tech-cases-section {
          padding: 40px 0 80px 0;
        }

        .service-tech-cases-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .service-stack-card, .service-cases-card {
          background: linear-gradient(155deg, rgba(18, 50, 74, 0.6) 0%, rgba(7, 21, 33, 0.9) 100%);
          border: 1px solid rgba(9, 168, 181, 0.25);
          border-radius: 20px;
          padding: 32px 28px;
          backdrop-filter: blur(16px);
        }

        .service-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .service-tech-pill {
          background: rgba(9, 168, 181, 0.12);
          border: 1px solid rgba(9, 168, 181, 0.3);
          color: #D5E8EC;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 20px;
        }

        .service-usecase-item {
          background: rgba(7, 18, 28, 0.5);
          border: 1px solid rgba(213, 232, 236, 0.08);
          border-radius: 12px;
          padding: 12px 16px;
        }

        /* FAQ */
        .service-faq-section {
          padding: 60px 0;
          border-top: 1px solid rgba(213, 232, 236, 0.08);
        }

        .service-faq-item {
          background: rgba(18, 50, 74, 0.4);
          border: 1px solid rgba(9, 168, 181, 0.2);
          border-radius: 14px;
          overflow: hidden;
        }

        .service-faq-question-btn {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: 18px 20px;
          color: #FFFFFF;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .service-faq-answer {
          padding: 0 20px 18px 20px;
          font-size: 0.88rem;
          color: #B4CAD6;
          line-height: 1.6;
          margin: 0;
        }

        /* CTA Box */
        .service-cta-box-section {
          padding: 40px 0;
        }

        .service-cta-box {
          background: linear-gradient(135deg, rgba(9, 168, 181, 0.22) 0%, rgba(7, 21, 33, 0.95) 100%);
          border: 1px solid rgba(9, 168, 181, 0.4);
          border-radius: 24px;
          padding: 48px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          box-shadow: 0 20px 60px rgba(7, 18, 28, 0.8), 0 0 30px rgba(9, 168, 181, 0.2);
        }

        /* Footer */
        .service-subpage-footer {
          border-top: 1px solid rgba(213, 232, 236, 0.1);
          padding: 24px 0;
          background: #050E17;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .service-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .service-overview-grid {
            grid-template-columns: 1fr !important;
          }
          .service-process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .service-tech-cases-grid {
            grid-template-columns: 1fr !important;
          }
          .service-cta-box {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }

        @media (max-width: 600px) {
          .service-metrics-grid {
            grid-template-columns: 1fr !important;
          }
          .service-process-grid {
            grid-template-columns: 1fr !important;
          }
          .service-tabs-scroll {
            display: flex !important;
            overflow-x: auto !important;
            scrollbar-width: none !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          .service-tabs-scroll::-webkit-scrollbar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
