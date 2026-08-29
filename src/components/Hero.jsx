"use client";

import React, { useEffect, useRef } from "react";
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
} from "lucide-react";
import { CircuitBoard } from "./ui/circuit-board";

gsap.registerPlugin(ScrollTrigger);

// 6-step Journey from Client Idea to Final Launched Product
const GAT_CIRCUIT_NODES = [
  {
    id: "idea",
    x: 80,
    y: 85,
    label: "1. Tu Idea de Negocio",
    icon: <Lightbulb size={18} />,
    status: "active",
    size: "md",
    color: "#09A8B5",
  },
  {
    id: "strategy",
    x: 80,
    y: 260,
    label: "2. Estrategia & Alcance",
    icon: <Compass size={18} />,
    status: "active",
    size: "md",
    color: "#087F9F",
  },
  {
    id: "design",
    x: 230,
    y: 175,
    label: "3. Diseño UI/UX & Prototipo",
    icon: <PenTool size={22} />,
    status: "processing",
    size: "lg",
    color: "#2CD8E8",
  },
  {
    id: "dev",
    x: 375,
    y: 85,
    label: "4. Desarrollo & IA",
    icon: <Code2 size={18} />,
    status: "active",
    size: "md",
    color: "#00E5FF",
  },
  {
    id: "qa",
    x: 375,
    y: 260,
    label: "5. Pruebas & Calidad",
    icon: <ShieldCheck size={18} />,
    status: "active",
    size: "md",
    color: "#5C9DFF",
  },
  {
    id: "launch",
    x: 485,
    y: 175,
    label: "6. Producto Final Lanzado",
    icon: <Rocket size={20} />,
    status: "active",
    size: "md",
    color: "#09A8B5",
  },
];

const GAT_CIRCUIT_CONNECTIONS = [
  { from: "idea", to: "design", animated: true, pulseColor: "#09A8B5", color: "rgba(9, 168, 181, 0.45)" },
  { from: "strategy", to: "design", animated: true, pulseColor: "#087F9F", color: "rgba(8, 127, 159, 0.45)" },
  { from: "design", to: "dev", animated: true, pulseColor: "#2CD8E8", color: "rgba(44, 216, 232, 0.45)" },
  { from: "design", to: "qa", animated: true, pulseColor: "#5C9DFF", color: "rgba(92, 157, 255, 0.45)" },
  { from: "dev", to: "launch", animated: true, pulseColor: "#00E5FF", color: "rgba(0, 229, 255, 0.45)" },
  { from: "qa", to: "launch", animated: true, pulseColor: "#09A8B5", color: "rgba(9, 168, 181, 0.45)" },
];

export default function Hero({ onNavigate }) {
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const circuitColRef = useRef(null);

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
        duration: 4.2,
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
        paddingTop: "clamp(95px, 12vh, 120px)",
        paddingBottom: "clamp(40px, 5vh, 60px)",
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

      <div className="container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.08fr 0.92fr",
            gap: "44px",
            alignItems: "center",
          }}
          className="hero-split-grid"
        >
          {/* ──── LEFT COLUMN: TEXT & VALUE PROPOSITION ──── */}
          <div ref={leftColRef} style={{ maxWidth: "620px" }}>
            {/* Tagline Badge */}
            <div style={{ marginBottom: "14px" }}>
              <div className="tech-badge">
                <span className="tech-badge-dot" />
                <span>Technology · Strategy · Innovation</span>
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
              Convertimos tu Idea en un{" "}
              <span className="text-gradient-brand">Producto Digital de Alto Impacto</span>
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
              En <strong style={{ color: "#FFFFFF", fontWeight: 600 }}>GAT Technology Consulting</strong> guiamos a tu empresa desde el concepto inicial hasta el producto final: páginas web, aplicaciones móviles, software a medida y automatizaciones con IA de alto rendimiento.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => onNavigate && onNavigate("#contacto")}
                className="btn-primary"
                style={{ fontSize: "0.92rem", padding: "13px 26px" }}
              >
                <span>Agendar Sesión de Diagnóstico</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => onNavigate && onNavigate("#servicios")}
                className="btn-secondary"
                style={{ fontSize: "0.92rem", padding: "13px 24px" }}
              >
                <span>Explorar Capacidades</span>
              </button>
            </div>

            {/* Trust Micro-Badges */}
            <div
              style={{
                marginTop: "26px",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "18px",
                paddingTop: "18px",
                borderTop: "1px solid rgba(213, 232, 236, 0.12)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "7px", color: "#9FB5C4", fontSize: "0.82rem" }}>
                <CheckCircle2 size={16} color="#09A8B5" />
                <span>Metodología Ágil de Extremo a Extremo</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "7px", color: "#9FB5C4", fontSize: "0.82rem" }}>
                <CheckCircle2 size={16} color="#09A8B5" />
                <span>Desarrollo Seguro &amp; Escalable</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "7px", color: "#9FB5C4", fontSize: "0.82rem" }}>
                <CheckCircle2 size={16} color="#09A8B5" />
                <span>SLA &amp; Soporte Continuo</span>
              </div>
            </div>
          </div>

          {/* ──── RIGHT COLUMN: END-TO-END PRODUCT FLOW CIRCUIT BOARD ──── */}
          <div
            ref={circuitColRef}
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Header pill explaining the circuit board */}
            <div
              style={{
                marginBottom: "12px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(18, 50, 74, 0.7)",
                border: "1px solid rgba(9, 168, 181, 0.3)",
                padding: "6px 14px",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                fontSize: "0.74rem",
                color: "#D5E8EC",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#09A8B5",
                  boxShadow: "0 0 8px #09A8B5",
                }}
              />
              <span>Ruta de Desarrollo · De la Idea al Producto Final</span>
            </div>

            {/* Glowing Pure CircuitBoard */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "560 / 380",
                maxHeight: "440px",
                borderRadius: "28px",
                overflow: "hidden",
                border: "1px solid rgba(9, 168, 181, 0.35)",
                background: "linear-gradient(145deg, rgba(18, 50, 74, 0.72) 0%, rgba(7, 21, 33, 0.94) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow:
                  "0 25px 60px rgba(7, 18, 28, 0.85), 0 0 35px rgba(9, 168, 181, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
              }}
            >
              <CircuitBoard
                nodes={GAT_CIRCUIT_NODES}
                connections={GAT_CIRCUIT_CONNECTIONS}
                gridSize={24}
                interactive={true}
                glowColor="#09A8B5"
                lineColor="rgba(9, 168, 181, 0.3)"
                pulseSpeed={2.4}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #hero {
            padding-bottom: clamp(50px, 7vh, 80px) !important;
          }
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
            text-align: center !important;
          }
          .hero-split-grid > div:first-child {
            margin: 0 auto !important;
          }
          .hero-split-grid > div:first-child .tech-badge {
            margin: 0 auto !important;
          }
          .hero-split-grid > div:first-child div[style*="display: flex"] {
            justify-content: center !important;
          }
          .hero-split-grid > div:first-child p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
