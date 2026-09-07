"use client";

import React, { useState } from "react";
import { SERVICES_DATA } from "../data/servicesData";
import { getWhatsAppUrl } from "../config/contact";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Sparkles,
  CheckCircle2,
  Globe,
  Layers,
  Smartphone,
  Apple,
  Shield,
  Brain,
  Bot,
  Cloud,
  Zap,
  ChevronRight,
  Check,
  X,
  PhoneCall,
  MessageSquare,
  Play,
  Activity,
  Terminal,
  Server,
  Lock,
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "Todos los Servicios", count: 8 },
  { id: "web", label: "🌐 Web & SaaS", count: 2 },
  { id: "mobile", label: "📱 Apps Móviles", count: 2 },
  { id: "ai", label: "🤖 Inteligencia Artificial", count: 2 },
  { id: "cloud", label: "🛡️ Seguridad & Cloud", count: 2 },
];

const SERVICE_CATEGORY_MAP = {
  "landing-page": "web",
  "app-web": "web",
  "app-android": "mobile",
  "app-ios": "mobile",
  "automatizaciones-ia": "ai",
  "asistente-ia": "ai",
  "ciberseguridad": "cloud",
  "cloud-devops": "cloud",
};

export default function AllServicesPage({
  onNavigateHome,
  onNavigateContact,
  onNavigateToServiceDetail,
  onSelectServiceForContact,
}) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allServicesList = [
    SERVICES_DATA["landing-page"],
    SERVICES_DATA["app-web"],
    SERVICES_DATA["app-android"],
    SERVICES_DATA["app-ios"],
    SERVICES_DATA["automatizaciones-ia"],
    SERVICES_DATA["asistente-ia"],
    SERVICES_DATA["ciberseguridad"],
    SERVICES_DATA["cloud-devops"],
  ].filter(Boolean);

  const filteredServices = allServicesList.filter((service) => {
    const matchesCategory =
      activeCategory === "all" ||
      SERVICE_CATEGORY_MAP[service.slug] === activeCategory;

    const matchesSearch =
      searchQuery.trim() === "" ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (service.techStack &&
        service.techStack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        ));

    return matchesCategory && matchesSearch;
  });

  const handleWhatsApp = () => {
    const url = getWhatsAppUrl(
      "¡Hola GAT Technology Consulting! Me gustaría recibir asesoría integral sobre su catálogo de servicios tecnológicos."
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="all-services-page-root"
      style={{
        minHeight: "100vh",
        background: "transparent",
        color: "#FFFFFF",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* ──── AMBIENT GLOW ORBS ──── */}
      <div className="ambient-glow-orb orb-cyan" style={{ top: "4%", left: "-6%", width: "550px", height: "550px" }} />
      <div className="ambient-glow-orb orb-ai" style={{ top: "32%", right: "-6%", width: "500px", height: "500px" }} />
      <div className="ambient-glow-orb orb-amber" style={{ bottom: "20%", left: "8%", width: "420px", height: "420px" }} />

      {/* ──── HERO INTRO & SEARCH / FILTER SECTION ──── */}
      <section
        style={{
          position: "relative",
          padding: "clamp(88px, 11vh, 120px) clamp(20px, 4vw, 56px) 24px clamp(20px, 4vw, 56px)",
          maxWidth: "1380px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
          <button
            type="button"
            onClick={onNavigateHome}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              borderRadius: "9999px",
              padding: "6px 14px",
              color: "#B4CAD6",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.background = "rgba(9, 168, 181, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#B4CAD6";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
          >
            <ArrowLeft size={14} />
            <span>Inicio</span>
          </button>
          <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>/</span>
          <span style={{ color: "#09A8B5", fontSize: "0.8rem", fontWeight: 700 }}>Soluciones</span>
        </div>
        <div className="tech-badge" style={{ marginBottom: "14px" }}>
          <span className="tech-badge-dot" />
          <span>CATÁLOGO INTEGRAL DE SOLUCIONES DIGITALES</span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            color: "#FFFFFF",
            fontFamily: "var(--font-heading, sans-serif)",
            maxWidth: "960px",
            margin: "0 auto 18px auto",
          }}
        >
          Ingeniería de Software, IA &amp; Cloud{" "}
          <span className="text-gradient-brand">de Alto Desempeño</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(0.95rem, 1.2vw, 1.12rem)",
            color: "#C3D6E0",
            maxWidth: "780px",
            margin: "0 auto 36px auto",
            lineHeight: 1.65,
          }}
        >
          Desarrollamos soluciones a medida con estándares enterprise, arquitecturas resilientes y retorno de inversión garantizado. Explora nuestras 8 líneas de servicio con demostraciones en vivo.
        </p>

        {/* ──── SEARCH & LIVE FILTER BAR ──── */}
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto 28px auto",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              background: "rgba(18, 50, 74, 0.8)",
              border: "1px solid rgba(9, 168, 181, 0.45)",
              borderRadius: "18px",
              padding: "6px 18px",
              boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(9, 168, 181, 0.15)",
              backdropFilter: "blur(16px)",
            }}
          >
            <Search size={20} color="#09A8B5" style={{ flexShrink: 0, marginRight: "12px" }} />
            <input
              type="text"
              placeholder="Buscar por tecnología, requerimiento o servicio (ej: IA, Next.js, Android, Ciberseguridad)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#FFFFFF",
                fontSize: "0.92rem",
                padding: "8px 0",
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "none",
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  cursor: "pointer",
                }}
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* ──── CATEGORY PILL TABS ──── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "46px",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isSel = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "14px",
                  background: isSel
                    ? "linear-gradient(135deg, #09A8B5 0%, #087F9F 100%)"
                    : "rgba(255, 255, 255, 0.05)",
                  border: isSel
                    ? "1px solid #2CD8E8"
                    : "1px solid rgba(213, 232, 236, 0.15)",
                  color: isSel ? "#FFFFFF" : "#B4CAD6",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: isSel ? "0 8px 24px rgba(9, 168, 181, 0.4)" : "none",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ──── REDESIGNED SERVICES CARDS (CINEMA MEDIA TOP + DETAILED SPECS) ──── */}
      <section
        style={{
          maxWidth: "1380px",
          margin: "0 auto 90px auto",
          padding: "0 clamp(20px, 4vw, 56px)",
        }}
      >
        {filteredServices.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "70px 20px",
              background: "rgba(18, 50, 74, 0.45)",
              borderRadius: "26px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <p style={{ fontSize: "1.15rem", color: "#B4CAD6", marginBottom: "16px" }}>
              No se encontraron servicios que coincidan con "<strong>{searchQuery}</strong>".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="btn-primary"
              style={{ padding: "10px 24px", fontSize: "0.88rem" }}
            >
              Ver todos los servicios
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
              gap: "32px",
            }}
          >
            {filteredServices.map((service, index) => {
              const Icon = service.icon || Sparkles;
              const accentColor = service.accent || "#09A8B5";
              const hasVideo = Boolean(service.heroVideo);

              return (
                <div
                  key={service.slug}
                  className="gat-cinema-service-card"
                  style={{
                    background:
                      "linear-gradient(170deg, rgba(16, 43, 64, 0.85) 0%, rgba(7, 21, 33, 0.98) 100%)",
                    border: `1.5px solid ${accentColor}40`,
                    borderRadius: "28px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.55)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    backdropFilter: "blur(20px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.borderColor = accentColor;
                    e.currentTarget.style.boxShadow = `0 30px 70px rgba(0, 0, 0, 0.75), 0 0 35px ${accentColor}35`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = `${accentColor}40`;
                    e.currentTarget.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.55)";
                  }}
                >
                  {/* ──── 1. TOP CINEMA MEDIA VIEWPORT (100% CLEAN & UNOBSTRUCTED VIDEO / IMAGE) ──── */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "210px",
                      background: "rgba(7, 21, 33, 0.98)",
                      overflow: "hidden",
                      borderBottom: `1px solid ${accentColor}30`,
                    }}
                  >
                    {hasVideo ? (
                      <video
                        key={service.heroVideo}
                        src={service.heroVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        ref={(el) => {
                          if (el && el.paused) {
                            el.play().catch(() => {});
                          }
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          filter: "brightness(0.96) contrast(1.05)",
                          display: "block",
                        }}
                      />
                    ) : (
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          filter: "brightness(0.9) contrast(1.05)",
                          display: "block",
                        }}
                      />
                    )}
                  </div>

                  {/* ──── 2. CARD CONTENT (HARMONIOUS & BALANCED HIERARCHY) ──── */}
                  <div style={{ padding: "20px 22px 16px 22px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {/* Unified Top Line: Category Pill + Live Demo Indicator */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "4px 10px",
                          borderRadius: "8px",
                          background: `${accentColor}15`,
                          border: `1px solid ${accentColor}40`,
                          color: accentColor,
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.03em",
                          textTransform: "uppercase",
                        }}
                      >
                        <Icon size={14} />
                        <span>{service.badge}</span>
                      </div>

                      {hasVideo && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            padding: "3px 8px",
                            borderRadius: "9999px",
                            background: "rgba(34, 197, 94, 0.12)",
                            border: "1px solid rgba(34, 197, 94, 0.35)",
                            color: "#22C55E",
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                          }}
                        >
                          <span
                            style={{
                              width: "5px",
                              height: "5px",
                              borderRadius: "50%",
                              background: "#22C55E",
                              boxShadow: "0 0 6px #22C55E",
                            }}
                          />
                          LIVE DEMO
                        </span>
                      )}
                    </div>

                    {/* Title & Concise Value Pitch */}
                    <div>
                      <h3
                        style={{
                          fontSize: "1.18rem",
                          fontWeight: 800,
                          color: "#FFFFFF",
                          lineHeight: 1.25,
                          marginBottom: "6px",
                          fontFamily: "var(--font-heading, sans-serif)",
                        }}
                      >
                        {service.title}
                      </h3>

                      <p
                        style={{
                          fontSize: "0.83rem",
                          color: "#B4CAD6",
                          lineHeight: 1.48,
                          margin: 0,
                        }}
                      >
                        {service.tagline}
                      </p>
                    </div>

                    {/* Clean Horizontal Spec Strip (Balanced & Airy) */}
                    {service.metrics && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px 14px",
                          borderRadius: "12px",
                          background: "rgba(7, 21, 33, 0.65)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span
                            style={{
                              fontSize: "1.05rem",
                              fontWeight: 800,
                              color: accentColor,
                              fontFamily: "var(--font-heading)",
                            }}
                          >
                            {service.metrics[0].value}
                          </span>
                          <span style={{ fontSize: "0.72rem", color: "#8CA5B5", fontWeight: 500 }}>
                            {service.metrics[0].label}
                          </span>
                        </div>

                        <div style={{ width: "1px", height: "18px", background: "rgba(255, 255, 255, 0.12)" }} />

                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span
                            style={{
                              fontSize: "1.05rem",
                              fontWeight: 800,
                              color: "#FFFFFF",
                              fontFamily: "var(--font-heading)",
                            }}
                          >
                            {service.metrics[1] ? service.metrics[1].value : "100%"}
                          </span>
                          <span style={{ fontSize: "0.72rem", color: "#8CA5B5", fontWeight: 500 }}>
                            {service.metrics[1] ? service.metrics[1].label : "Garantizado"}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Inline Tech Stack String */}
                    {service.techStack && (
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "#8CA5B5",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span style={{ color: "#D5E8EC", fontWeight: 600 }}>Stack:</span>
                        <span>{service.techStack.slice(0, 4).join(" · ")}</span>
                      </div>
                    )}
                  </div>

                  {/* ──── 3. DUAL-ACTION COMMAND FOOTER ──── */}
                  <div
                    style={{
                      padding: "14px 22px 18px 22px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "grid",
                      gridTemplateColumns: "1fr 1.2fr",
                      gap: "10px",
                      background: "rgba(7, 21, 33, 0.35)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        onNavigateToServiceDetail && onNavigateToServiceDetail(service.slug)
                      }
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        padding: "10px 12px",
                        borderRadius: "12px",
                        background: "rgba(255, 255, 255, 0.06)",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        color: "#FFFFFF",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${accentColor}25`;
                        e.currentTarget.style.borderColor = accentColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
                      }}
                    >
                      <span>Ficha Técnica</span>
                      <ChevronRight size={14} />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectServiceForContact) {
                          onSelectServiceForContact(service.title);
                        }
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        padding: "10px 16px",
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${accentColor} 0%, #087F9F 100%)`,
                        border: "none",
                        color: "#FFFFFF",
                        fontSize: "0.82rem",
                        fontWeight: 800,
                        cursor: "pointer",
                        boxShadow: `0 4px 16px ${accentColor}45`,
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = `0 8px 22px ${accentColor}70`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = `0 4px 16px ${accentColor}45`;
                      }}
                    >
                      <span>Cotizar Proyecto</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ──── VALUE COMPARISON MATRIX (POR QUÉ GAT) ──── */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto 90px auto",
          padding: "0 clamp(20px, 4vw, 56px)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(145deg, rgba(18, 50, 74, 0.85) 0%, rgba(7, 21, 33, 0.96) 100%)",
            border: "1px solid rgba(9, 168, 181, 0.35)",
            borderRadius: "28px",
            padding: "clamp(28px, 4vw, 44px)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.55)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div className="section-tag" style={{ margin: "0 auto 10px auto" }}>
              ESTÁNDARES DE INGENIERÍA
            </div>
            <h2 style={{ fontSize: "1.85rem", color: "#FFFFFF", fontWeight: 800, margin: 0 }}>
              ¿Por Qué las Empresas Eligen a <span className="text-gradient-brand">GAT Technology</span>?
            </h2>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.15)" }}>
                  <th style={{ textAlign: "left", padding: "14px", color: "#8CA5B5", fontSize: "0.85rem" }}>
                    CRITERIO DE CALIDAD
                  </th>
                  <th style={{ textAlign: "center", padding: "14px", color: "#FF6B6B", fontSize: "0.85rem" }}>
                    Agencias Tradicionales
                  </th>
                  <th style={{ textAlign: "center", padding: "14px", color: "#F59E0B", fontSize: "0.85rem" }}>
                    Freelancers
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "14px",
                      color: "#09A8B5",
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      background: "rgba(9, 168, 181, 0.14)",
                      borderRadius: "12px 12px 0 0",
                    }}
                  >
                    ✦ GAT Technology
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    title: "Tecnología Base",
                    agency: "Plantillas lentas (WordPress / Elementor)",
                    freelance: "Depende del perfil",
                    gat: "React, Next.js, Flutter, Python & Cloud Edge",
                  },
                  {
                    title: "Propiedad Intelectual",
                    agency: "Retienen código y cobran mantenimiento rehén",
                    freelance: "Variable",
                    gat: "100% Código transferido con accesos de despliegue",
                  },
                  {
                    title: "Seguridad & Cumplimiento",
                    agency: "Plugins genéricos con alta vulnerabilidad",
                    freelance: "Básica",
                    gat: "Zero Trust, Cifrado AES-256 & ISO 27001",
                  },
                  {
                    title: "Inteligencia Artificial",
                    agency: "Chatbots rígidos de opciones fijas",
                    freelance: "Nula o superficial",
                    gat: "Modelos RAG, Agentes Autónomos & GPT-4o",
                  },
                  {
                    title: "Garantía & Soporte SLA",
                    agency: "Soporte lento por tickets",
                    freelance: "Sin respaldo legal garantizado",
                    gat: "SLA 99.9% con atención directa WhatsApp 24/7",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                      background: i % 2 === 0 ? "rgba(255, 255, 255, 0.02)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "14px", color: "#FFFFFF", fontWeight: 600, fontSize: "0.88rem" }}>
                      {row.title}
                    </td>
                    <td style={{ padding: "14px", textAlign: "center", color: "#9FB5C4", fontSize: "0.82rem" }}>
                      {row.agency}
                    </td>
                    <td style={{ padding: "14px", textAlign: "center", color: "#9FB5C4", fontSize: "0.82rem" }}>
                      {row.freelance}
                    </td>
                    <td
                      style={{
                        padding: "14px",
                        textAlign: "center",
                        color: "#2CD8E8",
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        background: "rgba(9, 168, 181, 0.08)",
                      }}
                    >
                      {row.gat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ──── BOTTOM CONVERSION BANNER ──── */}
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto 80px auto",
          padding: "0 clamp(20px, 4vw, 56px)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #09A8B5 0%, #087F9F 50%, #071521 100%)",
            borderRadius: "28px",
            padding: "clamp(36px, 5vw, 60px) clamp(24px, 4vw, 48px)",
            textAlign: "center",
            boxShadow: "0 25px 60px rgba(9, 168, 181, 0.35)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
              fontWeight: 900,
              color: "#FFFFFF",
              marginBottom: "14px",
              fontFamily: "var(--font-heading)",
            }}
          >
            ¿Listo para Transformar tu Negocio con Tecnología de Élite?
          </h2>
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
              color: "#E2F2F5",
              maxWidth: "680px",
              margin: "0 auto 30px auto",
              lineHeight: 1.6,
            }}
          >
            Agenda una sesión de diagnóstico técnico y estratégico de 45 minutos sin costo. Evaluaremos tu arquitectura y te entregaremos una hoja de ruta con ROI estimado.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <button
              type="button"
              onClick={() => onNavigateContact && onNavigateContact()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                borderRadius: "14px",
                background: "#FFFFFF",
                color: "#071521",
                fontWeight: 800,
                fontSize: "0.95rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <span>Solicitar Diagnóstico Gratuito</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                borderRadius: "14px",
                background: "rgba(7, 21, 33, 0.6)",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.95rem",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(7, 21, 33, 0.85)";
                e.currentTarget.style.borderColor = "#22C55E";
                e.currentTarget.style.color = "#22C55E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(7, 21, 33, 0.6)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.color = "#FFFFFF";
              }}
            >
              <MessageSquare size={18} />
              <span>Chatear por WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
