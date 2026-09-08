"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Sparkles,
  Lightbulb,
  Compass,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Maximize2,
  X,
} from "lucide-react";
import { CircuitBoard } from "./ui/circuit-board";

gsap.registerPlugin(ScrollTrigger);

// 6-step Journey from Client Idea to Final Launched Product (Ultra-Wide 740x420 & 6 Distinct Colors)
const GAT_CIRCUIT_NODES = [
  {
    id: "idea",
    x: 100,
    y: 95,
    label: "1. Tu Idea de Negocio",
    icon: <Lightbulb size={20} />,
    status: "active",
    size: "md",
    color: "#09A8B5",
  },
  {
    id: "strategy",
    x: 100,
    y: 315,
    label: "2. Estrategia & Alcance",
    icon: <Compass size={20} />,
    status: "active",
    size: "md",
    color: "#38BDF8",
  },
  {
    id: "design",
    x: 295,
    y: 205,
    label: "3. Diseño UI/UX & Prototipo",
    icon: <PenTool size={24} />,
    status: "processing",
    size: "lg",
    color: "#D946EF",
  },
  {
    id: "dev",
    x: 495,
    y: 95,
    label: "4. Desarrollo & IA",
    icon: <Code2 size={20} />,
    status: "active",
    size: "md",
    color: "#8B5CF6",
  },
  {
    id: "qa",
    x: 495,
    y: 315,
    label: "5. Pruebas & Calidad",
    icon: <ShieldCheck size={20} />,
    status: "active",
    size: "md",
    color: "#F59E0B",
  },
  {
    id: "launch",
    x: 645,
    y: 205,
    label: "6. Producto Final Lanzado",
    icon: <Rocket size={22} />,
    status: "active",
    size: "md",
    color: "#22C55E",
  },
];

const GAT_CIRCUIT_CONNECTIONS = [
  { from: "idea", to: "design", animated: true, pulseColor: "#09A8B5", color: "rgba(9, 168, 181, 0.4)" },
  { from: "strategy", to: "design", animated: true, pulseColor: "#38BDF8", color: "rgba(56, 189, 248, 0.4)" },
  { from: "design", to: "dev", animated: true, pulseColor: "#8B5CF6", color: "rgba(139, 92, 246, 0.45)" },
  { from: "design", to: "qa", animated: true, pulseColor: "#F59E0B", color: "rgba(245, 158, 11, 0.45)" },
  { from: "dev", to: "launch", animated: true, pulseColor: "#8B5CF6", color: "rgba(139, 92, 246, 0.4)" },
  { from: "qa", to: "launch", animated: true, pulseColor: "#22C55E", color: "rgba(34, 197, 94, 0.45)" },
];

export default function Hero({ onNavigate }) {
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const circuitColRef = useRef(null);
  const [isCircuitModalOpen, setIsCircuitModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsCircuitModalOpen(false);
      }
    };
    if (isCircuitModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isCircuitModalOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(leftColRef.current, {
        opacity: 0,
        x: -40,
        duration: 1,
      }).from(
        circuitColRef.current,
        {
          opacity: 0,
          scale: 0.93,
          x: 40,
          duration: 1.1,
        },
        "-=0.6"
      );

      // Subtle float animation on circuit board
      gsap.to(circuitColRef.current, {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "clamp(78px, 9vh, 96px)",
        paddingBottom: "clamp(36px, 5vh, 56px)",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Background Ambient Orbs */}
      <div
        className="ambient-glow-orb orb-cyan anim-pulse-glow"
        style={{ top: "-10%", left: "15%", width: "550px", height: "550px" }}
      />
      <div
        className="ambient-glow-orb orb-blue"
        style={{ top: "40%", right: "-5%", width: "600px", height: "600px" }}
      />
      <div
        className="ambient-glow-orb orb-navy"
        style={{ bottom: "-10%", left: "40%", width: "450px", height: "450px" }}
      />
      <div
        className="ambient-glow-orb orb-ai"
        style={{ top: "10%", right: "15%", width: "320px", height: "320px" }}
      />
      <div
        className="ambient-glow-orb orb-amber"
        style={{ bottom: "10%", right: "25%", width: "240px", height: "240px" }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "36px",
            alignItems: "flex-start",
          }}
          className="hero-split-grid"
        >
          {/* ──── LEFT COLUMN: TEXT & VALUE PROPOSITION ──── */}
          <div ref={leftColRef} style={{ maxWidth: "620px" }}>
            {/* Tagline Badge */}
            <div style={{ marginBottom: "14px" }}>
              <div className="tech-badge">
                <span className="tech-badge-dot" />
                <span>Innovación · Tecnología · Crecimiento para tu Empresa</span>
              </div>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(2rem, 3.3vw, 3.25rem)",
                lineHeight: 1.14,
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "16px",
                letterSpacing: "-0.03em",
              }}
            >
              Creamos la Tecnología que{" "}
              <span className="text-gradient-brand">Hace Crecer tu Negocio</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(0.92rem, 1.1vw, 1.02rem)",
                color: "#B4CAD6",
                lineHeight: 1.6,
                marginBottom: "24px",
                maxWidth: "560px",
              }}
            >
              En <strong style={{ color: "#FFFFFF", fontWeight: 600 }}>GAT Technology Consulting</strong> desarrollamos páginas web que atraen clientes, aplicaciones móviles para Android y iPhone, y sistemas con Inteligencia Artificial para que ahorres tiempo y multipliques tus resultados.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <button
                onClick={() => onNavigate && onNavigate("#contacto")}
                className="btn-primary hero-btn-primary"
              >
                <span>Solicitar Asesoría Gratuita</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => onNavigate && onNavigate("#servicios")}
                className="btn-secondary hero-btn-secondary"
              >
                <span>Ver Soluciones</span>
              </button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="hero-trust-badges">
              <div style={{ display: "flex", alignItems: "center", gap: "7px", color: "#9FB5C4", fontSize: "0.82rem" }}>
                <CheckCircle2 size={16} color="#09A8B5" />
                <span>Acompañamiento de Principio a Fin</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "7px", color: "#9FB5C4", fontSize: "0.82rem" }}>
                <CheckCircle2 size={16} color="#F59E0B" />
                <span>Tu Información Siempre Segura</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "7px", color: "#9FB5C4", fontSize: "0.82rem" }}>
                <CheckCircle2 size={16} color="#22C55E" />
                <span>Garantía y Soporte Continuo</span>
              </div>
            </div>
          </div>

          {/* ──── RIGHT COLUMN: END-TO-END PRODUCT FLOW CIRCUIT BOARD ──── */}
          <div
            ref={circuitColRef}
            className="hero-circuit-col"
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              alignSelf: "flex-start",
              paddingTop: "2px",
            }}
          >
            {/* Header pill explaining the circuit board with multi-color dots */}
            <div
              className="hero-circuit-badge"
              style={{
                marginBottom: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(18, 50, 74, 0.85)",
                border: "1px solid rgba(9, 168, 181, 0.45)",
                padding: "8px 18px",
                borderRadius: "22px",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                fontSize: "0.78rem",
                color: "#E2F2F5",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), 0 0 15px rgba(9, 168, 181, 0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "5px", flexShrink: 0 }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#09A8B5", boxShadow: "0 0 8px #09A8B5" }} />
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#8B5CF6", boxShadow: "0 0 8px #8B5CF6" }} />
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#F59E0B", boxShadow: "0 0 8px #F59E0B" }} />
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px #22C55E" }} />
              </div>
              <span style={{ whiteSpace: "nowrap" }}>El Camino de tu Proyecto</span>
            </div>

            {/* Glowing Pure CircuitBoard (Expanded Width 760x420 & Multi-Colored Ambient Aura) */}
            <div
              className="hero-circuit-board-wrapper"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "760 / 420",
                maxHeight: "520px",
                borderRadius: "28px",
                overflow: "hidden",
                border: "1.5px solid rgba(9, 168, 181, 0.45)",
                background: "linear-gradient(145deg, rgba(18, 50, 74, 0.82) 0%, rgba(7, 21, 33, 0.98) 100%)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow:
                  "0 25px 65px rgba(7, 18, 28, 0.9), 0 0 40px rgba(9, 168, 181, 0.3), 0 0 55px rgba(217, 70, 239, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.18)",
              }}
            >
              <CircuitBoard
                nodes={GAT_CIRCUIT_NODES}
                connections={GAT_CIRCUIT_CONNECTIONS}
                width={760}
                height={420}
                gridSize={24}
                interactive={true}
                glowColor="#09A8B5"
                lineColor="rgba(9, 168, 181, 0.35)"
                pulseSpeed={2.4}
                style={{ width: "100%", height: "100%" }}
              />

              {/* Floating Expand Button */}
              <button
                type="button"
                onClick={() => setIsCircuitModalOpen(true)}
                aria-label="Ver tablero en pantalla completa"
                style={{
                  position: "absolute",
                  bottom: "14px",
                  right: "14px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  borderRadius: "10px",
                  background: "rgba(7, 21, 33, 0.88)",
                  border: "1px solid rgba(9, 168, 181, 0.55)",
                  color: "#2CD8E8",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.6)",
                  transition: "all 0.2s ease",
                  zIndex: 10,
                }}
              >
                <Maximize2 size={13} />
                <span>Ampliar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ──── FULLSCREEN CIRCUIT BOARD MODAL ──── */}
      {isCircuitModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(4, 12, 19, 0.96)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            gap: "22px",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setIsCircuitModalOpen(false); }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "960px",
              aspectRatio: "760 / 420",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1.5px solid rgba(9, 168, 181, 0.5)",
              boxShadow: "0 25px 65px rgba(0, 0, 0, 0.85), 0 0 45px rgba(9, 168, 181, 0.35)",
            }}
          >
            <CircuitBoard
              nodes={GAT_CIRCUIT_NODES}
              connections={GAT_CIRCUIT_CONNECTIONS}
              width={760}
              height={420}
              gridSize={24}
              interactive={true}
              glowColor="#09A8B5"
              lineColor="rgba(9, 168, 181, 0.4)"
              pulseSpeed={2.2}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Centered Bottom Close Button (Verde/Celeste Gradient + White CERRAR Text) */}
          <button
            type="button"
            onClick={() => setIsCircuitModalOpen(false)}
            aria-label="Cerrar tablero en pantalla completa"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 32px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #09A8B5 0%, #2CD8E8 50%, #22C55E 100%)",
              border: "1px solid rgba(255, 255, 255, 0.35)",
              color: "#FFFFFF",
              fontSize: "0.92rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 24px rgba(9, 168, 181, 0.5), 0 0 16px rgba(34, 197, 94, 0.4)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "none";
            }}
          >
            <X size={18} strokeWidth={2.5} />
            <span>CERRAR</span>
          </button>
        </div>
      )}

      <style>{`
        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .hero-btn-primary {
          font-size: 0.92rem;
          padding: 13px 26px;
        }

        .hero-btn-secondary {
          font-size: 0.92rem;
          padding: 13px 24px;
        }

        .hero-trust-badges {
          margin-top: 26px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px;
          padding-top: 18px;
          border-top: 1px solid rgba(213, 232, 236, 0.12);
        }

        @media (max-width: 1024px) {
          #hero {
            padding-bottom: clamp(45px, 6vh, 75px) !important;
          }
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            text-align: center !important;
          }
          .hero-circuit-col {
            transform: none !important;
          }
          .hero-split-grid > div:first-child {
            margin: 0 auto !important;
          }
          .hero-split-grid > div:first-child .tech-badge {
            margin: 0 auto !important;
          }
          .hero-cta-group {
            justify-content: center !important;
          }
          .hero-trust-badges {
            justify-content: center !important;
          }
          .hero-split-grid > div:first-child p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }

        @media (max-width: 768px) {
          .hero-circuit-col {
            width: 100% !important;
            margin-top: 8px !important;
          }
          .hero-circuit-badge {
            font-size: 0.74rem !important;
            padding: 7px 14px !important;
            margin-bottom: 12px !important;
          }
          .hero-circuit-board-wrapper {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            aspect-ratio: 760 / 420 !important;
            border-radius: 18px !important;
          }
        }

        @media (max-width: 540px) {
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-btn-primary, .hero-btn-secondary {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-trust-badges {
            flex-direction: column !important;
            align-items: center !important;
            gap: 10px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-circuit-badge {
            font-size: 0.68rem !important;
            padding: 6px 12px !important;
            gap: 6px !important;
          }
          .hero-circuit-board-wrapper {
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
