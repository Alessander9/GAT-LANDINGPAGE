import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Layers,
  Smartphone,
  Apple,
  Brain,
  Bot,
  Shield,
  Cloud,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  Sparkles,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { getWhatsAppUrl } from "../../config/contact";

export function ShiftingDropDown({
  onNavigateHome,
  onNavigateService,
  onNavigateContact,
  onNavigateCatalog,
  onNavigateAbout,
  onNavigateMethodology,
  currentSlug = "landing-page",
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);

  // Close mobile drawer on route/service change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentSlug]);

  const handleHomeClick = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateHome) onNavigateHome();
    else window.location.hash = "#hero";
  };

  const handleServiceClick = (slug) => {
    setMobileMenuOpen(false);
    if (onNavigateService) onNavigateService(slug);
    else window.location.hash = `#servicio/${slug}`;
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    if (onNavigateContact) onNavigateContact();
    else window.location.hash = "#contacto";
  };

  const handleCatalogClick = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateCatalog) onNavigateCatalog();
    else window.location.hash = "#servicios-todos";
  };

  const handleMethodologyClick = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateMethodology) onNavigateMethodology();
    else window.location.hash = "#metodologia";
  };

  const handleAboutClick = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateAbout) onNavigateAbout();
    else window.location.hash = "#nosotros";
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          width: "100%",
          background: "rgba(7, 21, 33, 0.94)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderBottom: "1px solid rgba(9, 168, 181, 0.25)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "10px clamp(16px, 3vw, 28px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* Left: Brand Logo + Back Pill */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="#hero"
              onClick={handleHomeClick}
              style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
              aria-label="GAT Technology Consulting"
            >
              <img
                src="/assets/GAT_Logo_Fondo_Oscuro_Transparente_HD.webp"
                alt="GAT Technology Consulting"
                style={{
                  height: "clamp(34px, 3.8vw, 42px)",
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 2px 10px rgba(9, 168, 181, 0.45))",
                }}
              />
            </a>

            <button
              type="button"
              onClick={handleHomeClick}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                borderRadius: "9999px",
                padding: "5px 12px",
                color: "#B4CAD6",
                fontSize: "0.78rem",
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
              <ArrowLeft size={13} />
              <span>Inicio</span>
            </button>
          </div>

          {/* Center: Interactive Shifting Tabs Dropdown (Desktop) */}
          <div className="shifting-tabs-desktop" style={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              onNavigateService={handleServiceClick}
              onNavigateContact={handleContactClick}
              onNavigateCatalog={handleCatalogClick}
              onNavigateMethodology={handleMethodologyClick}
              currentSlug={currentSlug}
            />
          </div>

          {/* Right: Quick Action CTAs & Mobile Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              type="button"
              onClick={() => {
                const url = getWhatsAppUrl(
                  "¡Hola GAT Technology Consulting! Me gustaría solicitar una cotización y asesoría técnica."
                );
                window.open(url, "_blank", "noopener,noreferrer");
              }}
              className="shifting-cta-whatsapp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                borderRadius: "9999px",
                background: "rgba(34, 197, 94, 0.15)",
                border: "1px solid rgba(34, 197, 94, 0.4)",
                color: "#22C55E",
                fontSize: "0.82rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(34, 197, 94, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(34, 197, 94, 0.15)";
              }}
            >
              <MessageSquare size={13} />
              <span>WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleContactClick}
              className="btn-primary shifting-cta-cotizar"
              style={{
                padding: "8px 16px",
                fontSize: "0.82rem",
                borderRadius: "9999px",
                whiteSpace: "nowrap",
              }}
            >
              <span>Cotizar</span>
              <ArrowRight size={13} />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="shifting-mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir Menú"
              style={{
                background: "rgba(9, 168, 181, 0.15)",
                border: "1px solid rgba(9, 168, 181, 0.4)",
                color: "#FFFFFF",
                borderRadius: "10px",
                width: "38px",
                height: "38px",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {mobileMenuOpen ? (
                <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#2CD8E8", lineHeight: 1 }}>✕</span>
              ) : (
                <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#2CD8E8", lineHeight: 1 }}>☰</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ──── MOBILE FULLSCREEN GLASS DRAWER (SUBPAGES) ──── */}
      {mobileMenuOpen && (
        <div
          className="shifting-mobile-drawer"
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 998,
            background: "rgba(7, 21, 33, 0.98)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            padding: "20px 24px 36px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div
              style={{
                fontSize: "0.72rem",
                color: "#8CA5B5",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontWeight: 700,
              }}
            >
              Explorar Servicios
            </div>

            {/* Servicios Accordion */}
            <div style={{ borderBottom: "1px solid rgba(213, 232, 236, 0.1)", paddingBottom: "12px" }}>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  color: "#FFFFFF",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  padding: "6px 0",
                  cursor: "pointer",
                }}
              >
                <span style={{ color: "#2CD8E8" }}>Todas las Soluciones</span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    color: "#2CD8E8",
                  }}
                />
              </button>

              {mobileServicesOpen && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "6px",
                    marginTop: "10px",
                    paddingLeft: "4px",
                  }}
                >
                  {[
                    { slug: "landing-page", title: "Páginas Web Corporativas", icon: Globe, color: "#09A8B5" },
                    { slug: "app-web", title: "Aplicativos Web & SaaS", icon: Layers, color: "#2CD8E8" },
                    { slug: "app-android", title: "Apps Android & Móviles", icon: Smartphone, color: "#F59E0B" },
                    { slug: "app-ios", title: "Apps iOS & Apple", icon: Apple, color: "#00E5FF" },
                    { slug: "automatizaciones-ia", title: "Automatizaciones con IA", icon: Brain, color: "#8B5CF6" },
                    { slug: "asistente-ia", title: "Asistente Virtual IA", icon: Bot, color: "#10B981" },
                    { slug: "ciberseguridad", title: "Ciberseguridad Zero Trust", icon: Shield, color: "#EC4899" },
                    { slug: "cloud-devops", title: "Cloud & DevOps", icon: Cloud, color: "#38BDF8" },
                  ].map((srv) => {
                    const SIcon = srv.icon;
                    const isActive = srv.slug === currentSlug;
                    return (
                      <button
                        key={srv.slug}
                        type="button"
                        onClick={() => handleServiceClick(srv.slug)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "8px 12px",
                          borderRadius: "10px",
                          background: isActive ? "rgba(9, 168, 181, 0.2)" : "rgba(255, 255, 255, 0.03)",
                          border: isActive ? "1px solid rgba(44, 216, 232, 0.4)" : "1px solid transparent",
                          color: isActive ? "#FFFFFF" : "#C3D8E2",
                          fontSize: "0.86rem",
                          fontWeight: isActive ? 700 : 500,
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <SIcon size={16} color={srv.color} />
                          <span>{srv.title}</span>
                        </div>
                        {isActive && (
                          <span
                            style={{
                              fontSize: "0.65rem",
                              padding: "2px 6px",
                              borderRadius: "9999px",
                              background: "#09A8B5",
                              color: "#071521",
                              fontWeight: 800,
                            }}
                          >
                            Activo
                          </span>
                        )}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={handleCatalogClick}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "6px",
                      padding: "8px 12px",
                      color: "#2CD8E8",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      background: "rgba(9, 168, 181, 0.1)",
                      border: "1px dashed rgba(9, 168, 181, 0.35)",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <span>Ver Catálogo Completo</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            <button
              type="button"
              onClick={handleHomeClick}
              style={{
                color: "#FFFFFF",
                fontSize: "1rem",
                fontWeight: 600,
                textAlign: "left",
                padding: "8px 0",
                borderBottom: "1px solid rgba(213, 232, 236, 0.08)",
                cursor: "pointer",
              }}
            >
              Inicio
            </button>

            <button
              type="button"
              onClick={handleMethodologyClick}
              style={{
                color: "#FFFFFF",
                fontSize: "1rem",
                fontWeight: 600,
                textAlign: "left",
                padding: "8px 0",
                borderBottom: "1px solid rgba(213, 232, 236, 0.08)",
                cursor: "pointer",
              }}
            >
              Metodología Ágil & SLA
            </button>

            <button
              type="button"
              onClick={handleAboutClick}
              style={{
                color: "#FFFFFF",
                fontSize: "1rem",
                fontWeight: 600,
                textAlign: "left",
                padding: "8px 0",
                borderBottom: "1px solid rgba(213, 232, 236, 0.08)",
                cursor: "pointer",
              }}
            >
              Sobre GAT Consulting
            </button>
          </div>

          <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              type="button"
              onClick={handleContactClick}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "0.92rem",
                borderRadius: "12px",
                justifyContent: "center",
              }}
            >
              <span>Solicitar Diagnóstico / Cotizar</span>
              <ArrowRight size={15} />
            </button>

            <button
              type="button"
              onClick={() => {
                const url = getWhatsAppUrl(
                  "¡Hola GAT Technology Consulting! Me gustaría agendar una asesoría técnica por WhatsApp."
                );
                window.open(url, "_blank", "noopener,noreferrer");
              }}
              style={{
                width: "100%",
                padding: "11px",
                fontSize: "0.88rem",
                borderRadius: "12px",
                background: "rgba(34, 197, 94, 0.18)",
                border: "1px solid rgba(34, 197, 94, 0.4)",
                color: "#22C55E",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              <MessageSquare size={15} />
              <span>Chatear por WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .shifting-tabs-desktop {
            display: none !important;
          }
          .shifting-cta-whatsapp {
            display: none !important;
          }
          .shifting-mobile-hamburger {
            display: inline-flex !important;
          }
        }
        @media (max-width: 480px) {
          .shifting-cta-cotizar {
            padding: 6px 12px !important;
            font-size: 0.76rem !important;
          }
        }
      `}</style>
    </>
  );
}

const Tabs = ({
  onNavigateService,
  onNavigateContact,
  onNavigateCatalog,
  onNavigateMethodology,
  currentSlug,
}) => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);
  const leaveTimerRef = useRef(null);

  const handleSetSelected = (val) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  const handleMouseEnter = (val) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    handleSetSelected(val);
  };

  const handleMouseLeave = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      handleSetSelected(null);
    }, 220);
  };

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const overlay = document.getElementById("shifting-tabs-container");
      if (overlay && !overlay.contains(e.target)) {
        handleSetSelected(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const tabsConfig = [
    {
      id: 1,
      title: "Soluciones",
      Component: () => (
        <ServicesContent
          onNavigateService={(slug) => {
            handleSetSelected(null);
            if (onNavigateService) onNavigateService(slug);
          }}
          onNavigateCatalog={() => {
            handleSetSelected(null);
            if (onNavigateCatalog) onNavigateCatalog();
          }}
          currentSlug={currentSlug}
        />
      ),
    },
    {
      id: 2,
      title: "Metodología & SLA",
      Component: () => (
        <MethodologyContent
          onNavigateContact={() => {
            handleSetSelected(null);
            if (onNavigateContact) onNavigateContact();
          }}
          onNavigateMethodology={() => {
            handleSetSelected(null);
            if (onNavigateMethodology) onNavigateMethodology();
          }}
        />
      ),
    },
    {
      id: 3,
      title: "Diagnóstico & Contacto",
      Component: () => (
        <ContactContent
          onNavigateContact={() => {
            handleSetSelected(null);
            if (onNavigateContact) onNavigateContact();
          }}
        />
      ),
    },
  ];

  return (
    <div
      id="shifting-tabs-container"
      onMouseEnter={() => {
        if (leaveTimerRef.current) {
          clearTimeout(leaveTimerRef.current);
          leaveTimerRef.current = null;
        }
      }}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "flex", gap: "8px" }}
    >
      {tabsConfig.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          handleMouseEnter={handleMouseEnter}
          handleSetSelected={handleSetSelected}
          tab={t.id}
        >
          {t.title}
        </Tab>
      ))}

      <AnimatePresence>
        {selected && (
          <Content
            dir={dir}
            selected={selected}
            tabs={tabsConfig}
            handleMouseEnter={() => {
              if (leaveTimerRef.current) {
                clearTimeout(leaveTimerRef.current);
                leaveTimerRef.current = null;
              }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleMouseEnter, handleSetSelected, selected }) => {
  const isTabSelected = selected === tab;
  return (
    <button
      id={`shift-tab-${tab}`}
      type="button"
      onMouseEnter={() => handleMouseEnter(tab)}
      onClick={() => handleSetSelected(isTabSelected ? null : tab)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        borderRadius: "9999px",
        padding: "6px 14px",
        fontSize: "0.85rem",
        fontWeight: isTabSelected ? 700 : 500,
        background: isTabSelected ? "rgba(9, 168, 181, 0.25)" : "transparent",
        color: isTabSelected ? "#FFFFFF" : "#C3D8E2",
        border: isTabSelected
          ? "1px solid rgba(44, 216, 232, 0.6)"
          : "1px solid transparent",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (!isTabSelected) {
          e.currentTarget.style.color = "#FFFFFF";
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isTabSelected) {
          e.currentTarget.style.color = "#C3D8E2";
          e.currentTarget.style.background = "transparent";
        }
      }}
    >
      <span>{children}</span>
      <ChevronDown
        size={14}
        style={{
          transform: isTabSelected ? "rotate(180deg)" : "rotate(0deg)",
          color: isTabSelected ? "#2CD8E8" : "#8CA5B5",
          transition: "transform 0.25s ease, color 0.25s ease",
        }}
      />
    </button>
  );
};

const Content = ({ selected, dir, tabs, handleMouseEnter }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "calc(100% + 12px)",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
      onMouseEnter={handleMouseEnter}
    >
      <Bridge />
      <motion.div
        id="overlay-content"
        initial={{ opacity: 0, y: 8, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.96 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          width: "min(680px, calc(100vw - 32px))",
          borderRadius: "20px",
          border: "1px solid rgba(9, 168, 181, 0.35)",
          background: "linear-gradient(145deg, rgba(14, 38, 58, 0.98) 0%, rgba(7, 21, 33, 0.99) 100%)",
          backdropFilter: "blur(28px) saturate(190%)",
          WebkitBackdropFilter: "blur(28px) saturate(190%)",
          color: "#FFFFFF",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.75), 0 0 30px rgba(9, 168, 181, 0.2)",
          padding: "20px",
          position: "relative",
        }}
      >
        <Nub selected={selected} />

        {tabs.map((t) => (
          <div key={t.id} style={{ overflow: "hidden" }}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 35 : dir === "r" ? -35 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Bridge = () => (
  <div
    style={{
      position: "absolute",
      top: "-18px",
      left: "-20px",
      right: "-20px",
      height: "22px",
      zIndex: 10,
    }}
  />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
    const handleResize = () => moveNub();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const contentRect = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentRect.left;
      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        position: "absolute",
        top: "-1px",
        width: "14px",
        height: "14px",
        background: "#0e263a",
        borderTop: "1px solid rgba(44, 216, 232, 0.6)",
        borderLeft: "1px solid rgba(44, 216, 232, 0.6)",
        transform: "translateX(-50%) rotate(45deg)",
        zIndex: 1,
      }}
      animate={{ left }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    />
  );
};

// ──── TAB 1: ALL 8 SERVICES GRID ────
const ServicesContent = ({ onNavigateService, onNavigateCatalog, currentSlug }) => {
  const servicesList = [
    { slug: "landing-page", title: "Páginas Web Corporativas", icon: Globe, cat: "Web & SaaS", desc: "Conversión de alta velocidad con React" },
    { slug: "app-web", title: "Aplicativos Web & SaaS", icon: Layers, cat: "Web & SaaS", desc: "Plataformas escalables con bases de datos" },
    { slug: "app-android", title: "Apps Android & Móviles", icon: Smartphone, cat: "Móviles", desc: "Aplicaciones nativas en Kotlin y Flutter" },
    { slug: "app-ios", title: "Apps iOS & Apple", icon: Apple, cat: "Móviles", desc: "Experiencias Swift certificadas para iPhone" },
    { slug: "automatizaciones-ia", title: "Automatizaciones con IA", icon: Brain, cat: "Inteligencia Artificial", desc: "Flujos de negocio autónomos y bots" },
    { slug: "asistente-ia", title: "Asistente Virtual IA", icon: Bot, cat: "Inteligencia Artificial", desc: "Chatbots omnicanal 24/7 para clientes" },
    { slug: "ciberseguridad", title: "Ciberseguridad Zero Trust", icon: Shield, cat: "Seguridad & Cloud", desc: "Auditoría de vulnerabilidades y hardening" },
    { slug: "cloud-devops", title: "Cloud & DevOps", icon: Cloud, cat: "Seguridad & Cloud", desc: "Infraestructura AWS, Docker y pipelines CI/CD" },
  ];

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "10px",
        }}
      >
        {servicesList.map((s) => {
          const SIcon = s.icon;
          const isActive = s.slug === currentSlug;
          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => onNavigateService(s.slug)}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                padding: "10px 12px",
                borderRadius: "12px",
                background: isActive ? "rgba(9, 168, 181, 0.2)" : "rgba(255, 255, 255, 0.03)",
                border: isActive
                  ? "1px solid rgba(44, 216, 232, 0.5)"
                  : "1px solid rgba(255, 255, 255, 0.06)",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(9, 168, 181, 0.12)";
                  e.currentTarget.style.borderColor = "rgba(9, 168, 181, 0.35)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                }
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "34px",
                  height: "34px",
                  borderRadius: "10px",
                  background: "rgba(9, 168, 181, 0.2)",
                  color: "#2CD8E8",
                  flexShrink: 0,
                }}
              >
                <SIcon size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                    {s.title}
                  </h4>
                  {isActive && (
                    <span
                      style={{
                        fontSize: "0.68rem",
                        padding: "2px 6px",
                        borderRadius: "9999px",
                        background: "#09A8B5",
                        color: "#071521",
                        fontWeight: 800,
                      }}
                    >
                      Actual
                    </span>
                  )}
                </div>
                <p style={{ fontSize: "0.75rem", color: "#9FB5C4", margin: "3px 0 0 0", lineHeight: 1.3 }}>
                  {s.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "16px",
          paddingTop: "12px",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: "0.78rem", color: "#8CA5B5" }}>
          Desarrollamos con arquitectura de grado enterprise y código propietario.
        </span>
        <a
          href="#servicios-todos"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateCatalog) onNavigateCatalog();
            else window.location.hash = "#servicios-todos";
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "#2CD8E8",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <span>Ver Todo el Catálogo</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

// ──── TAB 2: METHODOLOGY & SLA ────
const MethodologyContent = ({ onNavigateContact, onNavigateMethodology }) => {
  const steps = [
    { num: "01", title: "Diagnóstico & Alcance", desc: "Análisis de objetivos comerciales y arquitectura recomendada." },
    { num: "02", title: "Diseño UI/UX & Prototipo", desc: "Prototipo interactivo navegable para validar antes de programar." },
    { num: "03", title: "Desarrollo Iterativo & IA", desc: "Sprints ágiles con entregables continuos y código auditable." },
    { num: "04", title: "Testing QA & Hardening", desc: "Control de calidad exhaustivo y despliegue con SLA 99.9%." },
  ];

  const handleClick = () => {
    if (onNavigateMethodology) onNavigateMethodology();
    else if (onNavigateContact) onNavigateContact();
  };

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
        {steps.map((st) => (
          <div
            key={st.num}
            onClick={handleClick}
            style={{
              padding: "12px 14px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(9, 168, 181, 0.12)";
              e.currentTarget.style.borderColor = "rgba(9, 168, 181, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 900, color: "#2CD8E8" }}>{st.num}</span>
              <h4 style={{ fontSize: "0.84rem", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                {st.title}
              </h4>
            </div>
            <p style={{ fontSize: "0.75rem", color: "#9FB5C4", margin: 0, lineHeight: 1.35 }}>
              {st.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "14px",
          padding: "12px 14px",
          borderRadius: "12px",
          background: "rgba(9, 168, 181, 0.12)",
          border: "1px solid rgba(9, 168, 181, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CheckCircle2 size={16} color="#22C55E" />
          <span style={{ fontSize: "0.8rem", color: "#E2F2F5", fontWeight: 600 }}>
            Garantía de Entrega y Soporte 24/7
          </span>
        </div>
        <button
          type="button"
          onClick={onNavigateContact}
          style={{
            background: "transparent",
            border: "none",
            color: "#2CD8E8",
            fontSize: "0.8rem",
            fontWeight: 700,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span>Consultar Tiempos</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
};

// ──── TAB 3: CONTACT & QUOTING ────
const ContactContent = ({ onNavigateContact }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
      <div
        style={{
          padding: "16px",
          borderRadius: "14px",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div className="tech-badge" style={{ marginBottom: "8px" }}>
            <span className="tech-badge-dot" />
            <span>RESPUESTA EN MENOS DE 2H</span>
          </div>
          <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 6px 0" }}>
            Diagnóstico de Ingeniería Gratuito
          </h4>
          <p style={{ fontSize: "0.78rem", color: "#9FB5C4", margin: 0, lineHeight: 1.4 }}>
            Cuéntanos tu requerimiento o envíanos tu brief técnico para calcular costos, stack tecnológico y hoja de ruta.
          </p>
        </div>

        <button
          type="button"
          onClick={onNavigateContact}
          className="btn-primary"
          style={{
            marginTop: "14px",
            padding: "10px 16px",
            fontSize: "0.82rem",
            borderRadius: "10px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <span>Agendar Diagnóstico</span>
          <ArrowRight size={14} />
        </button>
      </div>

      <div
        style={{
          padding: "16px",
          borderRadius: "14px",
          background: "linear-gradient(145deg, rgba(34, 197, 94, 0.12) 0%, rgba(7, 21, 33, 0.6) 100%)",
          border: "1px solid rgba(34, 197, 94, 0.3)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 10px",
              borderRadius: "9999px",
              background: "rgba(34, 197, 94, 0.2)",
              color: "#22C55E",
              fontSize: "0.72rem",
              fontWeight: 800,
              marginBottom: "8px",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E" }} />
            <span>DISPONIBILIDAD INMEDIATA</span>
          </div>
          <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#FFFFFF", margin: "0 0 6px 0" }}>
            WhatsApp con Ingeniero Senior
          </h4>
          <p style={{ fontSize: "0.78rem", color: "#9FB5C4", margin: 0, lineHeight: 1.4 }}>
            Conversa directamente por WhatsApp con nuestro equipo técnico para una respuesta inmediata.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const url = getWhatsAppUrl(
              "¡Hola GAT Technology Consulting! Me gustaría agendar una llamada con un ingeniero de software."
            );
            window.open(url, "_blank", "noopener,noreferrer");
          }}
          style={{
            marginTop: "14px",
            padding: "10px 16px",
            fontSize: "0.82rem",
            fontWeight: 800,
            borderRadius: "10px",
            background: "#22C55E",
            color: "#05200E",
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <MessageSquare size={15} />
          <span>Abrir WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
