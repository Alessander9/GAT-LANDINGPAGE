"use client";

import React from "react";
import { Cloud, Brain, ShieldCheck, RefreshCw } from "lucide-react";
import { FrameSequenceHero } from "./ui/mac-book-neo-hero";

const FRAME_COUNT = 941;
const framePath = (i) =>
  `https://raw.githubusercontent.com/duthiljean/hero-apple/main/frames/frame_${String(i).padStart(4, "0")}.jpg`;

// Perfectly distributed thresholds from 0.00 to 1.00 for instant scroll responsiveness
const featuredSteps = [
  {
    from: 0.00,
    to: 0.25,
    color: "#09A8B5",
    num: "01",
    total: "04",
    icon: <Cloud size={18} color="#09A8B5" />,
    title: "Arquitectura Cloud & DevOps",
    description:
      "Diseño, migración y automatización de infraestructuras multi-cloud (AWS, Azure, GCP) con Kubernetes y GitOps de alta disponibilidad.",
    label: "Cloud & DevOps",
  },
  {
    from: 0.25,
    to: 0.50,
    color: "#2CD8E8",
    num: "02",
    total: "04",
    icon: <Brain size={18} color="#2CD8E8" />,
    title: "Inteligencia Artificial & Data",
    description:
      "Modelos aplicados de IA generativa (RAG/LLMs), Data Lakes de baja latencia y canalizaciones analíticas en tiempo real.",
    label: "AI & Data Mesh",
  },
  {
    from: 0.50,
    to: 0.75,
    color: "#087F9F",
    num: "03",
    total: "04",
    icon: <ShieldCheck size={18} color="#087F9F" />,
    title: "Ciberseguridad Zero Trust",
    description:
      "Blindaje integral de activos críticos, DevSecOps y cumplimiento normativo internacional conforme a normas ISO 27001 y SOC2.",
    label: "Zero Trust",
  },
  {
    from: 0.75,
    to: 1.00,
    color: "#5C9DFF",
    num: "04",
    total: "04",
    icon: <RefreshCw size={18} color="#5C9DFF" />,
    title: "Modernización de Legados",
    description:
      "Evolución ágil de sistemas monolíticos hacia microservicios desacoplados y arquitecturas API-first con cero fricción.",
    label: "Modernization",
  },
];

export default function FeaturedServices() {
  return (
    <section id="servicios-destacados" style={{ position: "relative", width: "100%" }}>
      <FrameSequenceHero
        frameCount={FRAME_COUNT}
        framePath={framePath}
        eagerCount={140}
        scrollDistance={2600}
        brand={
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="fsh-brand-dot" />
            <span style={{ fontSize: "0.85rem", color: "#D5E8EC", letterSpacing: "0.06em", fontWeight: 700 }}>
              SERVICIOS DESTACADOS · GAT
            </span>
          </div>
        }
        title={
          <>
            <span className="fsh-title-dark">Soluciones</span>{" "}
            <span className="fsh-title-rainbow">Destacadas</span>
          </>
        }
        subtitle="Desliza o toca los pasos para explorar la evolución de nuestras 4 soluciones tecnológicas insignia."
        steps={featuredSteps}
      />
    </section>
  );
}

