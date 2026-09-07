"use client";

import React from "react";
import { Cloud, Brain, ShieldCheck, RefreshCw } from "lucide-react";
import { FrameSequenceHero } from "./ui/mac-book-neo-hero";

const FRAME_COUNT = 941;
const framePath = (i) =>
  `https://raw.githubusercontent.com/duthiljean/hero-apple/main/frames/frame_${String(i).padStart(4, "0")}.jpg`;

const featuredSteps = [
  {
    from: 0.0,
    to: 0.25,
    color: "#09A8B5",
    num: "01",
    total: "04",
    icon: <Cloud size={18} color="#09A8B5" />,
    title: "Servidores en la Nube y Conectividad",
    description:
      "Tu página web y sistemas siempre disponibles, rápidos y sin caídas, listos para atender a miles de clientes al mismo tiempo.",
    label: "Nube Confiable",
  },
  {
    from: 0.25,
    to: 0.50,
    color: "#8B5CF6",
    num: "02",
    total: "04",
    icon: <Brain size={18} color="#8B5CF6" />,
    title: "Inteligencia Artificial y Asistentes",
    description:
      "Automatiza tareas repetitivas, atiende a tus clientes 24/7 por WhatsApp y toma decisiones comerciales con datos claros.",
    label: "IA Práctica",
  },
  {
    from: 0.50,
    to: 0.75,
    color: "#087F9F",
    num: "03",
    total: "04",
    icon: <ShieldCheck size={18} color="#087F9F" />,
    title: "Seguridad y Protección Digital",
    description:
      "Blindamos la información de tu negocio y la de tus clientes contra fraudes, pérdidas y accesos no autorizados.",
    label: "Protección Total",
  },
  {
    from: 0.75,
    to: 1.0,
    color: "#F59E0B",
    num: "04",
    total: "04",
    icon: <RefreshCw size={18} color="#F59E0B" />,
    title: "Renovación de Sistemas Antiguos",
    description:
      "Transformamos programas lentos o difíciles de usar en sistemas modernos, rápidos y sencillos para ti y tu equipo.",
    label: "Modernización",
  },
];

export default function FeaturedServices() {
  return (
    <section id="servicios-destacados" style={{ position: "relative", width: "100%" }}>
      <FrameSequenceHero
        frameCount={FRAME_COUNT}
        framePath={framePath}
        eagerCount={120}
        scrollHeight="360vh"
        brand={
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="fsh-brand-dot" />
            <span style={{ fontSize: "0.85rem", color: "#D5E8EC", letterSpacing: "0.06em", fontWeight: 700 }}>
              GAT TECHNOLOGY CONSULTING
            </span>
          </div>
        }
        title={
          <>
            <span className="fsh-title-dark">Soluciones</span>{" "}
            <span className="fsh-title-rainbow">Destacadas</span>
          </>
        }
        subtitle="Haz scroll para conocer cómo la tecnología puede transformar y hacer crecer tu negocio."
        steps={featuredSteps}
      />
    </section>
  );
}
