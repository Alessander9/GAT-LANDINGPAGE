"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Layers,
  Smartphone,
  Brain,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// 5 Core Services filling 100% screen width and 100% screen height (100vw x 100vh)
const BENTO_SERVICES = [
  // 1. Top Left (Col span 7) - Páginas Web Corporativas (Live Video)
  {
    id: "card-web",
    slug: "landing-page",
    gridClass: "bento-col-7",
    watermark: "PW",
    num: "01",
    tag: "Presencia & Ventas",
    title: "Páginas Web que Venden",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    video: "https://res.cloudinary.com/piun1mwb/video/upload/v1788051397/landing_page.mp4",
    shortDesc: "Diseñamos sitios web modernos, rápidos y atractivos que transmiten confianza y convierten visitantes en clientes reales.",
    flowingText: "PÁGINAS WEB QUE VENDEN · DISEÑO A MEDIDA · BOTÓN DE WHATSAPP · APARICIÓN EN GOOGLE",
    marqueeBg: "linear-gradient(135deg, rgba(9, 168, 181, 0.78) 0%, rgba(0, 194, 209, 0.72) 50%, rgba(8, 127, 159, 0.82) 100%)",
    marqueeTextColor: "#FFFFFF",
    accent: "#09A8B5",
    speed: "22s",
  },
  // 2. Top Right (Col span 5) - Automatizaciones con IA & Agentes Autónomos (Live Video)
  {
    id: "card-ai",
    slug: "automatizaciones-ia",
    gridClass: "bento-col-5",
    watermark: "IA",
    num: "02",
    tag: "Inteligencia Artificial",
    title: "Asistentes con IA & Automatizaciones",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80",
    video: "https://res.cloudinary.com/piun1mwb/video/upload/v1788051624/AI_business_automation_commercia__202608282006.mp4",
    shortDesc: "Chatbots inteligentes que atienden a tus clientes por WhatsApp 24/7 y automatizan tareas para que ahorres horas de trabajo.",
    flowingText: "ASISTENTES CON IA · CHATBOT WHATSAPP 24/7 · AHORRO DE TIEMPO · AUTOMATIZACIÓN",
    marqueeBg: "linear-gradient(135deg, rgba(139, 92, 246, 0.72) 0%, rgba(109, 40, 217, 0.82) 100%)",
    marqueeTextColor: "#FFFFFF",
    accent: "#8B5CF6",
    speed: "20s",
  },
  // 3. Bottom Left (Col span 4) - Aplicativos Web & SaaS (Live Video)
  {
    id: "card-webapp",
    slug: "app-web",
    gridClass: "bento-col-4",
    watermark: "AW",
    num: "03",
    tag: "Sistemas & Control",
    title: "Programas y Plataformas Web",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    video: "https://res.cloudinary.com/piun1mwb/video/upload/v1788051881/Developer_building_web_applicati__202608281943.mp4",
    shortDesc: "Sistemas en la nube para gestionar tus ventas, clientes, inventarios y operaciones desde cualquier computadora o celular.",
    flowingText: "SISTEMAS A MEDIDA · CONTROL DE VENTAS · PANELES EN VIVO · ACCESO DESDE CUALQUIER LUGAR",
    marqueeBg: "linear-gradient(135deg, rgba(44, 216, 232, 0.76) 0%, rgba(9, 168, 181, 0.84) 100%)",
    marqueeTextColor: "#FFFFFF",
    accent: "#2CD8E8",
    speed: "24s",
  },
  // 4. Bottom Center (Col span 4) - Apps Android & Móviles (Live Video)
  {
    id: "card-mobile",
    slug: "app-android",
    gridClass: "bento-col-4",
    watermark: "AP",
    num: "04",
    tag: "Aplicaciones Móviles",
    title: "Apps para Celulares (Android & iOS)",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    video: "https://res.cloudinary.com/piun1mwb/video/upload/v1788051987/Building_Android_mobile_applicat__202608281944.mp4",
    shortDesc: "Crea tu propia app para que tus clientes compren, reserven y se comuniquen con tu negocio directamente desde su móvil.",
    flowingText: "APPS PARA CELULARES · ANDROID & IPHONE · FÁCIL DE USAR · TU MARCA EN GOOGLE PLAY",
    marqueeBg: "linear-gradient(135deg, rgba(245, 158, 11, 0.72) 0%, rgba(217, 119, 6, 0.84) 100%)",
    marqueeTextColor: "#FFFFFF",
    accent: "#F59E0B",
    speed: "22s",
  },
  // 5. Bottom Right (Col span 4) - Ciberseguridad Zero Trust (Live Video)
  {
    id: "card-security",
    slug: "ciberseguridad",
    gridClass: "bento-col-4",
    watermark: "CS",
    num: "05",
    tag: "Seguridad Digital",
    title: "Seguridad y Protección Digital",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    video: "https://res.cloudinary.com/piun1mwb/video/upload/v1787990632/Cybersecurity_system_blocking_cy__202608282025.mp4",
    shortDesc: "Protegemos la información de tu empresa, contraseñas y datos de clientes contra virus, robos informáticos y pérdidas.",
    flowingText: "SEGURIDAD DIGITAL · PROTECCIÓN DE DATOS · COPIAS DE SEGURIDAD · TRANQUILIDAD TOTAL",
    marqueeBg: "linear-gradient(135deg, rgba(8, 127, 159, 0.82) 0%, rgba(7, 21, 33, 0.9) 100%)",
    marqueeTextColor: "#FFFFFF",
    accent: "#087F9F",
    speed: "20s",
  },
];

// Directional Edge-Detection Marquee Card with Direct Subpage Navigation
function FlowingBentoCard({ card, onSelectService, onNavigateToServiceSubpage }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);

  const animationDefaults = { duration: 0.55, ease: "expo.out" };

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
    if (!itemRef.current || !marqueeRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
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
    if (!itemRef.current || !marqueeRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap.killTweensOf(marqueeRef.current);
    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" });
  };

  const handleClickCard = () => {
    if (card.slug && onNavigateToServiceSubpage) {
      onNavigateToServiceSubpage(card.slug);
    } else if (onSelectService) {
      onSelectService(card.title);
    }
  };

  const Icon = card.icon;

  return (
    <div
      ref={itemRef}
      className="gat-flowing-bento-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClickCard}
    >
      {/* ──── BASE DEFAULT CONTENT ──── */}
      <div className="gat-card-base">
        {/* Ambient Base Video or Image Texture */}
        {card.video ? (
          <div className="gat-card-bg-img-wrap">
            <video
              src={card.video}
              autoPlay
              loop
              muted
              playsInline
              className="gat-card-bg-img"
              style={{ objectFit: "cover", width: "100%", height: "100%", opacity: 0.72 }}
            />
            <div className="gat-card-bg-overlay" />
          </div>
        ) : card.image ? (
          <div className="gat-card-bg-img-wrap">
            <img src={card.image} alt={card.title} className="gat-card-bg-img" />
            <div className="gat-card-bg-overlay" />
          </div>
        ) : null}

        {/* Top Header Row */}
        <div className="gat-card-top-row">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              className="gat-card-icon-box"
              style={{
                borderColor: `${card.accent}55`,
                color: card.accent,
                boxShadow: `0 0 16px ${card.accent}25`,
              }}
            >
              <Icon size={19} />
            </div>
            <span
              className="gat-card-tag"
              style={{
                color: card.accent,
                borderColor: `${card.accent}33`,
              }}
            >
              {card.tag}
            </span>
          </div>

          <span className="gat-card-num">GAT // {card.num}</span>
        </div>

        {/* Large Monogram Watermark */}
        <div aria-hidden="true" className="gat-card-watermark">
          {card.watermark}
        </div>

        {/* Bottom Title and Description */}
        <div className="gat-card-bottom">
          <h3 className="gat-card-title">{card.title}</h3>
          <p className="gat-card-desc">{card.shortDesc}</p>
          <div className="gat-card-footer">
            <span className="gat-card-hint">Conocer más detalles</span>
            <div
              className="gat-card-arrow-circle"
              style={{ background: `${card.accent}20`, borderColor: `${card.accent}40` }}
            >
              <ArrowRight size={13} color={card.accent} />
            </div>
          </div>
        </div>
      </div>

      {/* ──── TRANSLUCENT CHROMATIC FLOWING MARQUEE HOVER LAYER ──── */}
      <div className="gat-flowing-marquee" ref={marqueeRef}>
        {/* Translucent Background Video / Image */}
        {card.video ? (
          <div className="gat-hover-bg-img-wrap">
            <video
              src={card.video}
              autoPlay
              loop
              muted
              playsInline
              className="gat-hover-bg-img"
              style={{ objectFit: "cover", width: "100%", height: "100%", opacity: 0.85 }}
            />
          </div>
        ) : card.image ? (
          <div className="gat-hover-bg-img-wrap">
            <img src={card.image} alt="" className="gat-hover-bg-img" />
          </div>
        ) : null}

        {/* Translucent Chromatic Tint */}
        <div
          className="gat-hover-chromatic-overlay"
          style={{ background: card.marqueeBg }}
        />

        {/* Hardware-Accelerated Continuous Flowing Infinite Loop */}
        <div className="gat-marquee-inner-wrap">
          <div
            className="gat-marquee-track"
            style={{ animationDuration: card.speed || "20s" }}
          >
            <div className="gat-marquee-group">
              <span className="gat-marquee-text">{card.flowingText}</span>
              <span className="gat-marquee-bullet">✦</span>
              <span className="gat-marquee-text">{card.flowingText}</span>
              <span className="gat-marquee-bullet">✦</span>
            </div>
            <div className="gat-marquee-group" aria-hidden="true">
              <span className="gat-marquee-text">{card.flowingText}</span>
              <span className="gat-marquee-bullet">✦</span>
              <span className="gat-marquee-text">{card.flowingText}</span>
              <span className="gat-marquee-bullet">✦</span>
            </div>
          </div>
        </div>

        {/* Bottom Direct Action Bar on Marquee */}
        <div className="gat-marquee-action-bar">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 800,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
              }}
            >
              {card.title}
            </span>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              className="gat-marquee-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleClickCard();
              }}
            >
              <span>Ver Detalles</span>
              <ArrowRight size={13} color="#09A8B5" />
            </button>
            <button
              className="gat-marquee-btn"
              style={{ background: "#09A8B5", color: "#FFFFFF", borderColor: "#09A8B5" }}
              onClick={(e) => {
                e.stopPropagation();
                if (onSelectService) onSelectService(card.title);
              }}
            >
              <span>Cotizar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services({ onSelectService, onNavigateToServiceSubpage }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 25,
        stagger: 0.05,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="fullscreen-bento-section"
      style={{
        position: "relative",
        background: "transparent",
        width: "100%",
        maxWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(60px, 9vh, 110px) clamp(20px, 4vw, 48px)",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Ambient Glow Orbs */}
      <div
        className="ambient-glow-orb orb-cyan"
        style={{ top: "15%", right: "-8%", width: "450px", height: "450px" }}
      />
      <div
        className="ambient-glow-orb orb-blue"
        style={{ bottom: "10%", left: "-8%", width: "500px", height: "500px" }}
      />
      <div
        className="ambient-glow-orb orb-ai"
        style={{ top: "30%", left: "20%", width: "350px", height: "350px" }}
      />
      <div
        className="ambient-glow-orb orb-amber"
        style={{ bottom: "25%", right: "20%", width: "280px", height: "280px" }}
      />

      {/* Header Bar */}
      <div
        className="gat-services-header-bar"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          width: "100%",
          marginBottom: "clamp(24px, 4vh, 40px)",
        }}
      >
        <div className="gat-services-title-wrap" style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
          <div className="section-tag" style={{ margin: 0, padding: "4px 12px" }}>
            Soluciones para tu Negocio
          </div>
          <h2
            className="section-title"
            style={{
              margin: 0,
              fontSize: "clamp(1.4rem, 2.2vw, 2.2rem)",
              lineHeight: 1.15,
            }}
          >
            Todo lo que tu Empresa Necesita para <span className="text-gradient-brand">Crecer en Internet</span>
          </h2>
        </div>

        <div className="gat-services-cta-wrap" style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.85rem",
              color: "#B4CAD6",
              maxWidth: "420px",
              lineHeight: 1.35,
            }}
            className="header-subtitle-desktop"
          >
            Haz clic en cualquier servicio para conocer cómo podemos ayudarte y cotizar sin compromiso.
          </p>

          <button
            type="button"
            onClick={() => {
              window.location.hash = "#servicios-todos";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              borderRadius: "12px",
              background: "rgba(9, 168, 181, 0.15)",
              border: "1px solid rgba(9, 168, 181, 0.4)",
              color: "#2CD8E8",
              fontSize: "0.82rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(9, 168, 181, 0.28)";
              e.currentTarget.style.borderColor = "#2CD8E8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(9, 168, 181, 0.15)";
              e.currentTarget.style.borderColor = "rgba(9, 168, 181, 0.4)";
            }}
          >
            <span>Ver Catálogo Completo (8)</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* 100% Full-Screen Stretched Bento Grid */}
      <div className="gat-fullscreen-bento-grid">
        {BENTO_SERVICES.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`gat-fullscreen-bento-item ${card.gridClass}`}
          >
            <FlowingBentoCard
              card={card}
              onSelectService={onSelectService}
              onNavigateToServiceSubpage={onNavigateToServiceSubpage}
            />
          </div>
        ))}
      </div>

      <style>{`
        /* ──── BENTO GRID SYSTEM ──── */
        .gat-fullscreen-bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 1fr 1fr;
          gap: 18px;
          width: 100%;
          flex: 1;
          min-height: 480px;
          box-sizing: border-box;
        }

        .gat-fullscreen-bento-item {
          width: 100%;
          height: 100%;
          min-height: 0;
        }

        .bento-col-7 {
          grid-column: span 7;
        }

        .bento-col-5 {
          grid-column: span 5;
        }

        .bento-col-4 {
          grid-column: span 4;
        }

        /* ──── FLOWING BENTO CARD ──── */
        .gat-flowing-bento-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 22px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(9, 168, 181, 0.28);
          box-shadow: 0 15px 40px rgba(7, 18, 28, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.08);
          background: linear-gradient(155deg, rgba(18, 50, 74, 0.85) 0%, rgba(7, 21, 33, 0.96) 100%);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .gat-flowing-bento-card:hover {
          border-color: rgba(9, 168, 181, 0.6);
          box-shadow: 0 20px 50px rgba(7, 18, 28, 0.9), 0 0 30px rgba(9, 168, 181, 0.25);
        }

        /* ──── CARD BASE CONTENT ──── */
        .gat-card-base {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(18px, 2.2vh, 28px) clamp(18px, 2vw, 28px);
          box-sizing: border-box;
          z-index: 1;
        }

        .gat-card-bg-img-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .gat-card-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.18;
          filter: contrast(1.2) saturate(1.1);
          transform: scale(1.04);
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .gat-flowing-bento-card:hover .gat-card-bg-img {
          transform: scale(1.08);
          opacity: 0.25;
        }

        .gat-card-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(7, 21, 33, 0.45) 0%, rgba(7, 21, 33, 0.95) 100%);
        }

        .gat-card-top-row {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .gat-card-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(9, 168, 181, 0.12);
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gat-card-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          background: rgba(7, 21, 33, 0.7);
          padding: 4px 10px;
          border-radius: 18px;
          border: 1px solid;
          white-space: nowrap;
        }

        .gat-card-num {
          font-size: 0.72rem;
          color: rgba(213, 232, 236, 0.6);
          font-weight: 700;
          font-family: monospace;
        }

        .gat-card-watermark {
          position: absolute;
          inset: 0;
          display: grid;
          placeItems: center;
          font-size: clamp(6rem, 10vw, 9rem);
          font-weight: 800;
          letter-spacing: -0.08em;
          color: rgba(9, 168, 181, 0.05);
          user-select: none;
          pointer-events: none;
          z-index: 1;
          line-height: 1;
        }

        .gat-card-bottom {
          position: relative;
          z-index: 2;
        }

        .gat-card-title {
          font-size: clamp(1.3rem, 1.8vw, 1.65rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #FFFFFF;
          line-height: 1.2;
          margin: 0 0 6px 0;
        }

        .gat-card-desc {
          font-size: clamp(0.8rem, 1vw, 0.88rem);
          color: #B4CAD6;
          line-height: 1.45;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .gat-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px solid rgba(213, 232, 236, 0.12);
        }

        .gat-card-hint {
          font-size: 0.72rem;
          color: #7E9BB0;
          font-weight: 600;
        }

        .gat-card-arrow-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .gat-flowing-bento-card:hover .gat-card-arrow-circle {
          transform: translateX(3px);
        }

        /* ──── TRANSLUCENT CHROMATIC FLOWING MARQUEE HOVER LAYER ──── */
        .gat-flowing-marquee {
          position: absolute;
          inset: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
          z-index: 10;
          pointer-events: none;
          transform: translate3d(0, 101%, 0);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }

        .gat-hover-bg-img-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          pointer-events: none;
        }

        .gat-hover-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.52;
          filter: contrast(1.25) saturate(1.4) brightness(1.05);
          transform: scale(1.05);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gat-flowing-bento-card:hover .gat-hover-bg-img {
          transform: scale(1.12);
        }

        .gat-hover-chromatic-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          mix-blend-mode: color-burn;
          opacity: 0.9;
        }

        .gat-marquee-inner-wrap {
          position: relative;
          z-index: 3;
          height: 100%;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .gat-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
          animation: gat-infinite-marquee 20s linear infinite;
        }

        .gat-marquee-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .gat-marquee-text {
          white-space: nowrap;
          text-transform: uppercase;
          font-weight: 800;
          font-size: clamp(1.6rem, 3.2vw, 2.8rem);
          line-height: 1;
          letter-spacing: -0.02em;
          padding: 0 16px;
          color: #FFFFFF;
          text-shadow: 0 4px 18px rgba(0, 0, 0, 0.75), 0 0 24px rgba(0, 0, 0, 0.5);
        }

        .gat-marquee-bullet {
          font-size: 1.2rem;
          opacity: 0.8;
          margin: 0 14px;
          color: #FFFFFF;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        @keyframes gat-infinite-marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .gat-marquee-action-bar {
          position: relative;
          z-index: 12;
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
          background: rgba(7, 21, 33, 0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid rgba(255, 255, 255, 0.18);
        }

        .gat-marquee-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #071521;
          color: #FFFFFF;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 8px 18px;
          border-radius: 18px;
          border: 1px solid rgba(9, 168, 181, 0.4);
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(7, 21, 33, 0.5);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .gat-marquee-btn:hover {
          transform: translateY(-1px);
          background: #0B1E2D;
        }

        @media (max-width: 900px) {
          .fullscreen-bento-section {
            height: auto !important;
            max-height: none !important;
            min-height: auto !important;
            padding: clamp(35px, 5vh, 50px) 16px !important;
          }
          .gat-services-header-bar {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            justify-content: center !important;
          }
          .gat-services-title-wrap {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            justify-content: center !important;
          }
          .gat-services-title-wrap .section-title {
            text-align: center !important;
          }
          .gat-services-cta-wrap {
            justify-content: center !important;
            width: 100% !important;
          }
          .gat-fullscreen-bento-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            height: auto !important;
            flex: none !important;
          }
          .gat-fullscreen-bento-item {
            min-height: auto !important;
            height: auto !important;
          }
          .gat-flowing-bento-card {
            height: auto !important;
            border-radius: 18px !important;
          }
          .gat-card-base {
            padding: 16px 18px !important;
            gap: 8px !important;
            height: auto !important;
            justify-content: flex-start !important;
            text-align: center !important;
            align-items: center !important;
          }
          .gat-card-top-row {
            margin-bottom: 6px !important;
            width: 100% !important;
            justify-content: space-between !important;
          }
          .gat-card-title {
            font-size: 1.18rem !important;
            margin: 0 0 4px 0 !important;
            text-align: center !important;
          }
          .gat-card-desc {
            font-size: 0.82rem !important;
            line-height: 1.4 !important;
            margin: 0 0 10px 0 !important;
            text-align: center !important;
          }
          .gat-card-footer {
            padding-top: 8px !important;
            margin-top: 2px !important;
            width: 100% !important;
            justify-content: space-between !important;
          }
          .header-subtitle-desktop {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
