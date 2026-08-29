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
      label: "SLA de Resiliencia Cloud",
      desc: "Disponibilidad garantizada y tolerancia a fallos en producción",
      accent: "#09A8B5",
    },
    {
      icon: TrendingUp,
      targetValue: 45,
      prefix: "-",
      suffix: "%",
      decimals: 0,
      label: "Costos de Infraestructura",
      desc: "Optimización FinOps continua y reducción de deuda técnica",
      accent: "#2CD8E8",
    },
    {
      icon: Layers,
      targetValue: 120,
      prefix: "+",
      suffix: "",
      decimals: 0,
      label: "Proyectos Estratégicos",
      desc: "Desplegados con éxito en corporaciones multinacionales",
      accent: "#5C9DFF",
    },
    {
      icon: Award,
      targetValue: 10,
      prefix: "+",
      suffix: " Años",
      decimals: 0,
      label: "Liderazgo Tecnológico",
      desc: "Consultoría de arquitectura e innovación digital continua",
      accent: "#00E5FF",
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

          {/* Grid of Individual Frosted Metric Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "20px",
              position: "relative",
              zIndex: 2,
            }}
          >
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
                      marginBottom: "18px",
                      color: item.accent,
                      boxShadow: `0 0 16px ${item.accent}35, inset 0 1px 1px rgba(255, 255, 255, 0.4)`,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Animated Metric Number */}
                  <div
                    ref={(el) => (countersRef.current[idx] = el)}
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(2.1rem, 3.2vw, 2.75rem)",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      lineHeight: 1,
                      marginBottom: "10px",
                      letterSpacing: "-0.03em",
                      textShadow: "0 2px 14px rgba(0, 0, 0, 0.7), 0 0 20px rgba(9, 168, 181, 0.25)",
                    }}
                  >
                    {item.prefix}0{item.suffix}
                  </div>

                  {/* Title Label */}
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#E2F2F5",
                      marginBottom: "6px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.label}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.84rem",
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

        @media (max-width: 1024px) {
          .metrics-section-root {
            margin-top: clamp(70px, 10vh, 110px) !important;
            margin-bottom: clamp(60px, 9vh, 90px) !important;
            padding: 0 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
