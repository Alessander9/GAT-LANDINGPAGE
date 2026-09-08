import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ArrowUp, Heart, ExternalLink } from "lucide-react";
import { getWhatsAppUrl, getEmailUrl } from "../config/contact";

// Official Authentic Brand SVG Vectors
function EmailIcon({ size = 22, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.17 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
    </svg>
  );
}

function LinkedInIcon({ size = 22, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function InstagramIcon({ size = 23, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterXIcon({ size = 21, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// ──── DIRECTIONAL FLOWING MARQUEE SOCIAL CARD (PURE CSS, 0 REFLOWS) ────
function SocialFlowCard({ item }) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      className="social-flow-card"
      style={{
        color: item.customColor || "#E6F5F8",
      }}
    >
      {/* Base Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          filter: `drop-shadow(0 2px 8px ${item.brandGlow || "rgba(9, 168, 181, 0.35)"})`,
        }}
      >
        <Icon size={25} />
      </div>

      {/* Pure CSS Hover Marquee Overlay */}
      <div
        className="social-flow-overlay"
        style={{
          background: item.marqueeBg || "#09A8B5",
          color: item.marqueeTextColor || "#071521",
        }}
      >
        <div className="social-flow-marquee-track">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "0 8px",
                flexShrink: 0,
                fontSize: "0.78rem",
                fontWeight: 900,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              <Icon size={18} color={item.marqueeTextColor || "#071521"} />
              <span>{item.shortLabel || item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

const NAVIGATION_SECTIONS = [
  {
    title: "Soluciones",
    items: [
      { name: "Páginas Web Corporativas", href: "#servicio/landing-page" },
      { name: "Aplicativos Web & SaaS", href: "#servicio/app-web" },
      { name: "Apps Android & Móviles", href: "#servicio/app-android" },
      { name: "Apps iOS & Apple", href: "#servicio/app-ios" },
      { name: "Automatizaciones con IA", href: "#servicio/automatizaciones-ia" },
      { name: "Asistente Virtual IA", href: "#servicio/asistente-ia" },
      { name: "Ciberseguridad Zero Trust", href: "#servicio/ciberseguridad" },
      { name: "Cloud & DevOps", href: "#servicio/cloud-devops" },
    ],
  },
  {
    title: "Quiénes Somos & Proceso",
    items: [
      { name: "Nuestra Forma de Trabajar", href: "#nosotros" },
      { name: "Quiénes Somos", href: "#nosotros" },
      { name: "Video Institucional", href: "#nosotros" },
      { name: "Garantía de Calidad", href: "#nosotros" },
      { name: "El Camino de tu Proyecto", href: "#nosotros" },
      { name: "Soporte Continuo", href: "#contacto" },
    ],
  },
  {
    title: "Compañía & Soluciones",
    items: [
      { name: "Catálogo de Soluciones", href: "#servicios-todos" },
      { name: "Resultados Reales & Casos", href: "#servicios-todos" },
      { name: "Desarrollo Web & Apps", href: "#servicios-todos" },
      { name: "Inteligencia Artificial", href: "#servicios-todos" },
      { name: "Ciberseguridad & Cloud", href: "#servicios-todos" },
    ],
  },
  {
    title: "Contacto & Legal",
    items: [
      { name: "Solicitar Asesoría Gratuita", href: "#contacto" },
      { name: "Contactar por WhatsApp", href: getWhatsAppUrl(), external: true },
      { name: "Términos de Servicio", href: "#contacto" },
      { name: "Política de Privacidad", href: "#contacto" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Email",
    shortLabel: "Mail",
    href: getEmailUrl(),
    icon: EmailIcon,
    customColor: "#2CD8E8",
    brandGlow: "rgba(44, 216, 232, 0.45)",
    marqueeBg: "#09A8B5",
    marqueeTextColor: "#071521",
  },
  {
    label: "WhatsApp",
    shortLabel: "Chat",
    href: getWhatsAppUrl(),
    icon: WhatsAppIcon,
    customColor: "#25D366",
    brandGlow: "rgba(37, 211, 102, 0.45)",
    marqueeBg: "#22C55E",
    marqueeTextColor: "#041C0C",
  },


  {
    label: "Instagram",
    shortLabel: "Insta",
    href: "https://instagram.com",
    icon: InstagramIcon,
    customColor: "#E1306C",
    brandGlow: "rgba(225, 48, 108, 0.45)",
    marqueeBg: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)",
    marqueeTextColor: "#FFFFFF",
  },
  {
    label: "X / Twitter",
    shortLabel: "X",
    href: "https://x.com",
    icon: TwitterXIcon,
    customColor: "#FFFFFF",
    brandGlow: "rgba(255, 255, 255, 0.35)",
    marqueeBg: "#000000",
    marqueeTextColor: "#FFFFFF",
  },
  {
    label: "YouTube",
    shortLabel: "YouTube",
    href: "https://youtube.com",
    icon: YouTubeIcon,
    customColor: "#FF0000",
    brandGlow: "rgba(255, 0, 0, 0.45)",
    marqueeBg: "#EF4444",
    marqueeTextColor: "#FFFFFF",
  },
];

export default function Footer({ onNavigate }) {
  const handleScrollTop = () => {
    if (onNavigate) {
      onNavigate("#hero");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLinkClick = (e, href, external) => {
    if (external) return;
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid rgba(9, 168, 181, 0.25)",
        borderBottom: "1px solid rgba(9, 168, 181, 0.25)",
        background: "rgba(7, 21, 33, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* ──── 1. TOP BRAND HERO BANNER ──── */}
      <div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(32px, 5vw, 48px) clamp(20px, 4vw, 32px) 0 clamp(20px, 4vw, 32px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          textAlign: "center",
        }}
      >
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero", false)}
          style={{ textDecoration: "none", display: "inline-block" }}
          aria-label="GAT Technology Consulting"
        >
          <img
            src="/assets/GAT_Logo_Fondo_Oscuro_Transparente_HD.webp"
            alt="GAT Technology Consulting"
            width="128"
            height="128"
            loading="lazy"
            decoding="async"
            style={{
              width: "128px",
              height: "128px",
              maxWidth: "100%",
              aspectRatio: "1 / 1",
              objectFit: "contain",
              filter: "drop-shadow(0 8px 24px rgba(9, 168, 181, 0.55))",
            }}
          />
        </a>

        <p
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            fontSize: "0.86rem",
            lineHeight: 1.6,
            color: "#9FB5C4",
          }}
        >
          En <strong>GAT Technology Consulting</strong> transformamos la visión estratégica de empresas e instituciones en software resiliente, aplicaciones móviles de alto impacto, automatizaciones con IA y ciberseguridad Zero Trust de misión crítica. Construimos con estándares de ingeniería de grado enterprise y retorno de inversión medible.
        </p>
      </div>

      {/* ──── 2. CATEGORY NAVIGATION WITH DOTTED DIVIDERS ──── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(24px, 4vh, 40px) clamp(20px, 4vw, 32px)",
        }}
      >
        <div style={{ borderBottom: "1px dotted rgba(9, 168, 181, 0.35)", marginBottom: "32px" }} />

        <div
          className="gat-footer-categories-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "clamp(24px, 3vw, 40px)",
            paddingBottom: "32px",
          }}
        >
          {NAVIGATION_SECTIONS.map((section) => (
            <div key={section.title} className="gat-footer-category-col">
              <h4
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-heading, sans-serif)",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#09A8B5" }} />
                <span>{section.title}</span>
              </h4>

              <ul
                role="list"
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {section.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href, item.external)}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      style={{
                        fontSize: "0.84rem",
                        color: "#8CA5B5",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#09A8B5";
                        e.currentTarget.style.transform = "translateX(3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#8CA5B5";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <span>{item.name}</span>
                      {item.external && <ExternalLink size={11} opacity={0.6} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderBottom: "1px dotted rgba(9, 168, 181, 0.35)" }} />
      </div>

      {/* ──── 3. SOCIAL MEDIA & CONTROL PILLS WITH FLOWING MARQUEE HOVER ──── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 32px) 24px clamp(20px, 4vw, 32px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "18px",
        }}
      >
        {/* Email Direct Access Card (Restablecido únicamente el correo electrónico) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {SOCIAL_LINKS.filter((soc) => soc.label === "Email").map((soc) => (
            <SocialFlowCard key={soc.label} item={soc} />
          ))}
        </div>

        {/* Central Scroll-to-Top Control Pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "9999px",
            border: "1.5px dotted rgba(9, 168, 181, 0.5)",
            background: "rgba(18, 50, 74, 0.6)",
            padding: "5px 10px",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.3)",
          }}
        >
          <button
            type="button"
            onClick={handleScrollTop}
            aria-label="Volver arriba"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              border: "none",
              color: "#2CD8E8",
              fontSize: "0.82rem",
              fontWeight: 700,
              padding: "8px 16px",
              borderRadius: "9999px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(9, 168, 181, 0.25)";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#2CD8E8";
            }}
          >
            <ArrowUp size={15} />
            <span>Subir al Inicio</span>
          </button>
        </div>
      </div>

      {/* ──── 4. COPYRIGHT & MANIFESTO FOOTER ──── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "16px clamp(20px, 4vw, 32px) 28px clamp(20px, 4vw, 32px)",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "#8CA5B5",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
        }}
      >
        <span>© {new Date().getFullYear()}</span>
        <span>·</span>
        <span>Hecho con</span>
        <Heart size={14} color="#EF4444" fill="#EF4444" style={{ margin: "0 2px" }} />
        <span>por</span>
        <strong style={{ color: "#FFFFFF" }}>GAT Technology Consulting</strong>
        <span>· Todos los derechos reservados.</span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gat-footer-categories-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .gat-footer-category-col {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .gat-footer-category-col h4 {
            justify-content: center !important;
          }
          .gat-footer-category-col ul {
            align-items: center !important;
          }
        }
        @media (max-width: 480px) {
          .gat-footer-categories-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}

