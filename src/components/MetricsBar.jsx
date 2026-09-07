"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Shield, Layers, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MetricsBar() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  const metrics = [
    {
      icon: Shield,
      targetValue: 99.9,
      prefix: "",
      suffix: "%",
      decimals: 1,
      label: "Disponibilidad Garantizada",
      desc: "Tus páginas y sistemas siempre activos sin interrupciones",
      accent: "#09A8B5",
    },
    {
      icon: TrendingUp,
      targetValue: 45,
      prefix: "-",
      suffix: "%",
      decimals: 0,
      label: "Ahorro de Tiempo y Costos",
      desc: "Procesos automatizados para que tu equipo sea más productivo",
      accent: "#2CD8E8",
    },
    {
      icon: Layers,
      targetValue: 120,
      prefix: "+",
      suffix: "",
      decimals: 0,
      label: "Proyectos Entregados",
      desc: "Soluciones digitales funcionando con clientes satisfechos",
      accent: "#F59E0B",
    },
    {
      icon: Award,
      targetValue: 10,
      prefix: "+",
      suffix: " Años",
      decimals: 0,
      label: "Experiencia Profesional",
      desc: "Equipo especializado guiándote en cada paso de tu proyecto",
      accent: "#8B5CF6",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      countersRef.current.forEach((el, index) => {
        if (!el) return;
        const metric = metrics[index];
        const obj = { val: 0 };

        gsap.to(obj, {
          val: metric.targetValue,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (el) {
              const formatted =
                metric.decimals > 0
                  ? obj.val.toFixed(metric.decimals)
                  : Math.floor(obj.val).toString();
              el.innerText = `${metric.prefix}${formatted}${metric.suffix}`;
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="metricas"
      ref={sectionRef}
      className="metrics-section-root"
    >
      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Main Frosted Glassmorphism Bar */}
        <div
          style={{
            position: "relative",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(9, 168, 181, 0.05) 40%, rgba(18, 50, 74, 0.35) 100%)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            borderTop: "1px solid rgba(255, 255, 255, 0.38)",
            borderRadius: "32px",
            padding: "36px 32px",
            boxShadow:
              "0 30px 70px -15px rgba(0, 0, 0, 0.55), 0 0 35px rgba(9, 168, 181, 0.18), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)",
            overflow: "hidden",
          }}
        >
          {/* Subtle Ambient Light Reflections inside Glass */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              left: "15%",
              width: "280px",
              height: "140px",
              background: "radial-gradient(ellipse, rgba(9, 168, 181, 0.22) 0%, transparent 70%)",
              filter: "blur(25px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-60px",
              right: "20%",
              width: "280px",
              height: "140px",
              background: "radial-gradient(ellipse, rgba(44, 216, 232, 0.18) 0%, transparent 70%)",
              filter: "blur(25px)",
              pointerEvents: "none",
            }}
          />

          {/* Grid of Individual Frosted Metric Cards (2x2 on Mobile, 4x1 on Desktop) */}
          <div className="metrics-grid-container" style={{ position: "relative", zIndex: 2 }}>
            {metrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="metric-glass-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "24px 22px",
                    borderRadius: "22px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                    e.currentTarget.style.borderColor = "rgba(9, 168, 181, 0.4)";
                    e.currentTarget.style.boxShadow = `0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${item.accent}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Glass Icon Badge */}
                  <div
                    className="metric-icon-box"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "14px",
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(9, 168, 181, 0.18) 100%)",
                      border: `1px solid ${item.accent}66`,
                      backdropFilter: "blur(8px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                      color: item.accent,
                      boxShadow: `0 0 16px ${item.accent}35, inset 0 1px 1px rgba(255, 255, 255, 0.4)`,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Animated Metric Number */}
                  <div
                    ref={(el) => (countersRef.current[idx] = el)}
                    className="metric-number-display"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.6rem, 2.6vw, 2.6rem)",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      lineHeight: 1.1,
                      marginBottom: "6px",
                      letterSpacing: "-0.03em",
                      whiteSpace: "nowrap",
                      textShadow: "0 2px 14px rgba(0, 0, 0, 0.7), 0 0 20px rgba(9, 168, 181, 0.25)",
                    }}
                  >
                    {item.prefix}0{item.suffix}
                  </div>

                  {/* Title Label */}
                  <div
                    className="metric-title-label"
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#E2F2F5",
                      marginBottom: "6px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.label}
                  </div>

                  {/* Description */}
                  <p
                    className="metric-desc-text"
                    style={{
                      fontSize: "0.82rem",
                      color: "#B4CAD6",
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .metrics-section-root {
          position: relative;
          z-index: 20;
          margin-top: -30px;
          margin-bottom: clamp(60px, 9vh, 100px);
          padding: 0 24px;
        }

        .metrics-grid-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .metrics-section-root {
            margin-top: 24px !important;
            margin-bottom: 50px !important;
            padding: 0 16px !important;
          }
          .metrics-grid-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
        }

        @media (max-width: 640px) {
          .metrics-section-root {
            padding: 0 12px !important;
          }
          .metrics-section-root > .container > div {
            padding: 20px 14px !important;
            border-radius: 22px !important;
          }
          .metrics-grid-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .metric-glass-card {
            padding: 16px 12px !important;
            border-radius: 16px !important;
          }
          .metric-icon-box {
            width: 36px !important;
            height: 36px !important;
            border-radius: 10px !important;
            margin-bottom: 10px !important;
          }
          .metric-number-display {
            font-size: 1.45rem !important;
            white-space: nowrap !important;
            margin-bottom: 4px !important;
            line-height: 1.1 !important;
          }
          .metric-title-label {
            font-size: 0.82rem !important;
            line-height: 1.25 !important;
            margin-bottom: 4px !important;
          }
          .metric-desc-text {
            font-size: 0.72rem !important;
            line-height: 1.35 !important;
            color: #9FB5C4 !important;
          }
        }

        @media (max-width: 380px) {
          .metric-number-display {
            font-size: 1.3rem !important;
          }
          .metric-title-label {
            font-size: 0.76rem !important;
          }
          .metric-desc-text {
            font-size: 0.68rem !important;
          }
        }
      `}</style>
    </section>
  );
}
