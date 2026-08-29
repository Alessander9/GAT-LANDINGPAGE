"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  Compass,
  Cpu,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const METHODOLOGY_STEPS = [
  {
    number: "01",
    watermark: "01",
    icon: Search,
    title: "Discovery & Diagnóstico Profundo",
    tagline: "Análisis exhaustivo del estado actual y cuello de botella",
    description:
      "Auditamos tu stack tecnológico actual, arquitectura de datos, deuda técnica, vulnerabilidades y costos cloud para identificar las oportunidades de mayor impacto y ROI inmediato.",
    flowingText:
      "FASE 01: DISCOVERY & DIAGNÓSTICO PROFUNDO · AUDITORÍA FINOPS · MAPA AS-IS & TO-BE",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    marqueeBg:
      "linear-gradient(135deg, rgba(9, 168, 181, 0.82) 0%, rgba(0, 194, 209, 0.76) 50%, rgba(8, 127, 159, 0.86) 100%)",
    accent: "#09A8B5",
    deliverables: [
      "Mapa de Arquitectura As-Is & To-Be",
      "Informe de Vulnerabilidades y Cumplimiento",
      "Auditoría FinOps de Costos Cloud",
      "Matriz de Priorización de Impacto vs. Esfuerzo",
    ],
    duration: "Semanas 1 - 2",
  },
  {
    number: "02",
    watermark: "02",
    icon: Compass,
    title: "Diseño de Arquitectura & Estrategia",
    tagline: "Planificación de soluciones robustas y escalables",
    description:
      "Diseñamos la hoja de ruta tecnológica con especificaciones de grado empresarial: microservicios, seguridad Zero Trust, pipelines de CI/CD y selección de tecnologías óptimas.",
    flowingText:
      "FASE 02: DISEÑO DE ARQUITECTURA & ESTRATEGIA · BLUEPRINT ENTERPRISE · ZERO-DOWNTIME",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    marqueeBg:
      "linear-gradient(135deg, rgba(0, 229, 255, 0.8) 0%, rgba(9, 168, 181, 0.86) 100%)",
    accent: "#00E5FF",
    deliverables: [
      "Blueprint de Arquitectura de Sistemas",
      "Plan de Migración Zero-Downtime",
      "Definición de SLAs, SLOs y KPIs de rendimiento",
      "Estrategia de Seguridad y Gobernanza de Datos",
    ],
    duration: "Semanas 3 - 4",
  },
  {
    number: "03",
    watermark: "03",
    icon: Cpu,
    title: "Implementación Ágil & Despliegue",
    tagline: "Construcción con estándares de ingeniería de élite",
    description:
      "Nuestros consultores e ingenieros senior ejecutan la solución utilizando metodologías ágiles, pruebas automatizadas, infraestructura como código (IaC) e integración continua.",
    flowingText:
      "FASE 03: IMPLEMENTACIÓN ÁGIL & DESPLIEGUE · INFRAESTRUCTURA COMO CÓDIGO · GITOPS",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    marqueeBg:
      "linear-gradient(135deg, rgba(44, 216, 232, 0.8) 0%, rgba(9, 168, 181, 0.88) 100%)",
    accent: "#2CD8E8",
    deliverables: [
      "Infraestructura como Código (Terraform/Pulumi)",
      "Pipelines GitOps Automatizados",
      "Despliegues en entornos Staging y Producción",
      "Capacitación y transferencia al equipo interno",
    ],
    duration: "Sprints Quincenales",
  },
  {
    number: "04",
    watermark: "04",
    icon: TrendingUp,
    title: "Optimización Continua & Escalamiento",
    tagline: "Gobernanza activa, resiliencia y evolución",
    description:
      "Monitoreamos en tiempo real la salud de la plataforma, optimizamos el rendimiento, afinamos costos y adaptamos la tecnología conforme tu negocio acelera su crecimiento.",
    flowingText:
      "FASE 04: OPTIMIZACIÓN CONTINUA & ESCALAMIENTO · OBSERVABILIDAD 24/7 · FINOPS",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    marqueeBg:
      "linear-gradient(135deg, rgba(92, 157, 255, 0.82) 0%, rgba(9, 168, 181, 0.88) 100%)",
    accent: "#5C9DFF",
    deliverables: [
      "Observabilidad 24/7 (APM, Logs, Tracing)",
      "Revisiones FinOps periódicas",
      "Actualizaciones proactivas de seguridad",
      "Soporte estratégico y evolución continua",
    ],
    duration: "Acompañamiento Continuo",
  },
];

// Methodology Stepper Card with the Flowing Marquee Hover Effect
function MethodologyStepCard({ step, isCurrent, onClick }) {
  const cardRef = useRef(null);
  const marqueeRef = useRef(null);

  const animationDefaults = { duration: 0.5, ease: "expo.out" };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const handleMouseEnter = (ev) => {
    if (!cardRef.current || !marqueeRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.killTweensOf(marqueeRef.current);
    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeRef.current, { y: "0%" });
  };

  const handleMouseLeave = (ev) => {
    if (!cardRef.current || !marqueeRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.killTweensOf(marqueeRef.current);
    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" });
  };

  const Icon = step.icon;

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`method-step-card ${isCurrent ? "method-step-current" : ""}`}
    >
      {/* ──── BASE DEFAULT CONTENT ──── */}
      <div className="method-step-card-content">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
          <Icon size={24} color={isCurrent ? "#09A8B5" : "#8CA5B5"} />
          <span
            style={{
              fontSize: "1.2rem",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              color: isCurrent ? "#09A8B5" : "#5C6E78",
            }}
          >
            {step.number}
          </span>
        </div>
        <h4 style={{ fontSize: "1.05rem", color: "#FFFFFF", marginBottom: "6px" }}>
          {step.title.split("&")[0]}
        </h4>
        <p style={{ fontSize: "0.8rem", color: "#8CA5B5", margin: 0 }}>
          {step.tagline}
        </p>
      </div>

      {/* ──── FLOWING MARQUEE HOVER LAYER ──── */}
      <div className="method-step-marquee" ref={marqueeRef}>
        {/* Background Image */}
        {step.image && (
          <div className="method-marquee-img-wrap">
            <img src={step.image} alt="" className="method-marquee-img" />
          </div>
        )}

        {/* Translucent Chromatic Overlay */}
        <div
          className="method-marquee-overlay"
          style={{ background: step.marqueeBg }}
        />

        {/* Kinetic Continuous Marquee Stream */}
        <div className="method-marquee-inner">
          <div className="method-marquee-track">
            <div className="method-marquee-group">
              <span className="method-marquee-text">{step.flowingText}</span>
              <span className="method-marquee-bullet">✦</span>
              <span className="method-marquee-text">{step.flowingText}</span>
              <span className="method-marquee-bullet">✦</span>
            </div>
            <div className="method-marquee-group" aria-hidden="true">
              <span className="method-marquee-text">{step.flowingText}</span>
              <span className="method-marquee-bullet">✦</span>
              <span className="method-marquee-text">{step.flowingText}</span>
              <span className="method-marquee-bullet">✦</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Methodology({ onStartProject }) {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  const steps = METHODOLOGY_STEPS;

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((el, index) => {
        if (!el) return;
        gsap.from(el, {
          opacity: 0,
          x: index % 2 === 0 ? -40 : 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      style={{
        position: "relative",
        background: "transparent",
        padding: "clamp(80px, 11vh, 130px) 0 clamp(40px, 6vh, 60px) 0",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 60px auto" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Nuestra Metodología
          </div>
          <h2 className="section-title">
            El Método GAT: <span className="text-gradient-brand">Precisión, Velocidad y Cero Fricción</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Un marco de trabajo probado en proyectos de alta criticidad para asegurar que cada entrega genere valor medible desde el primer sprint.
          </p>
        </div>

        {/* Step Selector Pills for Fast Navigation */}
        <div
          className="method-pills-container"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          {steps.map((step, idx) => (
            <button
              key={step.number}
              className="method-pill-btn"
              onClick={() => setActiveStep(idx)}
              style={{
                padding: "12px 20px",
                borderRadius: "14px",
                background:
                  activeStep === idx
                    ? "linear-gradient(135deg, #09A8B5, #087F9F)"
                    : "rgba(255, 255, 255, 0.05)",
                border:
                  activeStep === idx
                    ? "1px solid #09A8B5"
                    : "1px solid rgba(213, 232, 236, 0.15)",
                color: activeStep === idx ? "#FFFFFF" : "#B4CAD6",
                fontWeight: 600,
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease",
                boxShadow: activeStep === idx ? "0 8px 24px rgba(9, 168, 181, 0.35)" : "none",
                cursor: "pointer",
              }}
            >
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}>
                {step.number}
              </span>
              <span>{step.title.split("&")[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Step Feature Box */}
        <div
          className="glass-card methodology-active-box"
          style={{
            padding: "44px 36px",
            border: "1px solid rgba(9, 168, 181, 0.35)",
            background:
              "linear-gradient(145deg, rgba(18, 50, 74, 0.9) 0%, rgba(11, 30, 45, 0.95) 100%)",
            boxShadow: "0 20px 50px rgba(7, 18, 28, 0.7)",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "40px",
              alignItems: "center",
            }}
            className="methodology-active-grid"
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 900,
                    color: "#09A8B5",
                    lineHeight: 1,
                  }}
                >
                  {steps[activeStep].number}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "#8CA5B5",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Fase de Ejecución · {steps[activeStep].duration}
                  </div>
                  <h3 style={{ fontSize: "1.6rem", color: "#FFFFFF", fontWeight: 700, margin: 0 }}>
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: "1.05rem", color: "#E2F2F5", lineHeight: 1.7, marginBottom: "28px" }}>
                {steps[activeStep].description}
              </p>

              <button
                onClick={() => onStartProject && onStartProject(steps[activeStep].title)}
                className="btn-primary method-active-btn"
                style={{ fontSize: "0.92rem", padding: "12px 24px" }}
              >
                <span>Aplicar esta fase a mi empresa</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Deliverables List */}
            <div
              style={{
                background: "rgba(7, 18, 28, 0.6)",
                border: "1px solid rgba(9, 168, 181, 0.2)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <h4
                style={{
                  fontSize: "1rem",
                  color: "#09A8B5",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "18px",
                }}
              >
                Entregables Clave de Esta Fase:
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {steps[activeStep].deliverables.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <CheckCircle
                      size={18}
                      color="#09A8B5"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <span style={{ color: "#D5E8EC", fontSize: "0.92rem", fontWeight: 500 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Process Stepper Visual with Flowing Marquee Hover */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {steps.map((step, idx) => (
            <div key={step.number} ref={(el) => (stepsRef.current[idx] = el)}>
              <MethodologyStepCard
                step={step}
                isCurrent={activeStep === idx}
                onClick={() => setActiveStep(idx)}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .methodology-active-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }

        @media (max-width: 768px) {
          .method-pills-container {
            justify-content: flex-start !important;
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            scrollbar-width: none !important;
            padding-bottom: 8px !important;
          }
          .method-pills-container::-webkit-scrollbar {
            display: none !important;
          }
          .method-pill-btn {
            flex-shrink: 0 !important;
          }
          .methodology-active-box {
            padding: 22px 18px !important;
          }
          .method-active-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        /* ──── METHODOLOGY STEP CARD WITH FLOWING HOVER ──── */
        .method-step-card {
          position: relative;
          cursor: pointer;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(213, 232, 236, 0.1);
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
          min-height: 120px;
        }

        .method-step-card:hover {
          border-color: rgba(9, 168, 181, 0.6);
          box-shadow: 0 15px 35px rgba(7, 18, 28, 0.8), 0 0 25px rgba(9, 168, 181, 0.25);
          transform: translateY(-2px);
        }

        .method-step-current {
          background: rgba(9, 168, 181, 0.12);
          border: 1px solid #09A8B5;
          box-shadow: 0 0 20px rgba(9, 168, 181, 0.2);
        }

        .method-step-card-content {
          padding: 24px 20px;
          position: relative;
          z-index: 1;
        }

        /* ──── FLOWING MARQUEE HOVER LAYER ──── */
        .method-step-marquee {
          position: absolute;
          inset: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
          z-index: 10;
          pointer-events: none;
          transform: translate3d(0, 101%, 0);
          display: flex;
          align-items: center;
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }

        .method-marquee-img-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          pointer-events: none;
        }

        .method-marquee-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.45;
          filter: contrast(1.2) saturate(1.3);
          transform: scale(1.05);
          transition: transform 0.5s ease;
        }

        .method-step-card:hover .method-marquee-img {
          transform: scale(1.1);
        }

        .method-marquee-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          mix-blend-mode: color-burn;
          opacity: 0.9;
        }

        .method-marquee-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .method-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
          animation: gat-method-marquee 18s linear infinite;
        }

        .method-marquee-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .method-marquee-text {
          white-space: nowrap;
          text-transform: uppercase;
          font-weight: 800;
          font-size: clamp(1rem, 1.4vw, 1.25rem);
          line-height: 1;
          letter-spacing: -0.02em;
          padding: 0 10px;
          color: #FFFFFF;
          text-shadow: 0 4px 14px rgba(0, 0, 0, 0.7);
        }

        .method-marquee-bullet {
          font-size: 0.85rem;
          opacity: 0.8;
          margin: 0 8px;
          color: #FFFFFF;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        @keyframes gat-method-marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
