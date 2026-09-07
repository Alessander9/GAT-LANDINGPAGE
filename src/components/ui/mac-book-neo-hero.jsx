"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./mac-book-neo-hero.css";

gsap.registerPlugin(ScrollTrigger);

const cx = (...c) => c.filter(Boolean).join(" ");

export function FrameSequenceHero({
  frameCount = 941,
  framePath,
  eagerCount = 100,
  brand,
  navLinks = [],
  ctaLabel,
  ctaHref = "#",
  title,
  subtitle,
  steps = [],
  className = "",
}) {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const canvasRef = useRef(null);

  const imagesRef = useRef([]);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const rafIdRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  const [loadPct, setLoadPct] = useState(0);
  const [loaderDone, setLoaderDone] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [stepLocal, setStepLocal] = useState(0);

  // Render a specific frame onto the canvas
  const renderFrame = (idx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[idx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // If current frame isn't ready, find nearest loaded frame
      let nearest = null;
      for (let offset = 1; offset < 30; offset++) {
        if (imagesRef.current[idx - offset]?.complete) {
          nearest = imagesRef.current[idx - offset];
          break;
        }
        if (imagesRef.current[idx + offset]?.complete) {
          nearest = imagesRef.current[idx + offset];
          break;
        }
      }
      if (!nearest) return;
      drawCover(ctx, canvas, nearest);
      return;
    }

    drawCover(ctx, canvas, img);
  };

  // Draw image to cover canvas while keeping aspect ratio
  const drawCover = (ctx, canvas, img) => {
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    ctx.clearRect(0, 0, cw, ch);

    const isMobile = window.innerWidth < 768;
    // On mobile, scale and shift laptop position up nicely
    const scale = Math.max(cw / iw, ch / ih) * (isMobile ? 0.88 : 1.0);
    const nw = iw * scale;
    const nh = ih * scale;
    const nx = (cw - nw) / 2;
    // On mobile, position higher up so bottom card doesn't cover laptop
    const ny = isMobile ? (ch - nh) / 2 - ch * 0.16 : (ch - nh) / 2;

    ctx.drawImage(img, nx, ny, nw, nh);
  };

  // Resize canvas according to device pixel ratio
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    renderFrame(Math.round(currentFrameRef.current));
  };

  // Image preloading
  useEffect(() => {
    if (!framePath) return;

    const isMobile = window.innerWidth < 768;
    const initialEager = isMobile ? Math.min(45, frameCount) : Math.min(eagerCount, frameCount);
    let loadedCount = 0;

    imagesRef.current = new Array(frameCount);

    const preloadImage = (index, onFinish) => {
      if (imagesRef.current[index]) return;
      const img = new Image();
      img.decoding = "async";
      img.src = framePath(index + 1);

      const handleLoad = () => {
        loadedCount++;
        const pct = Math.round((loadedCount / initialEager) * 100);
        setLoadPct(Math.min(100, pct));

        if (index === 0) {
          renderFrame(0);
        }

        if (loadedCount >= initialEager) {
          setLoaderDone(true);
          // Preload remaining frames with step intervals to save memory on mobile
          const stepSize = isMobile ? 2 : 1;
          for (let j = initialEager; j < frameCount; j += stepSize) {
            preloadImage(j);
          }
        }
        if (onFinish) onFinish();
      };

      img.onload = handleLoad;
      img.onerror = handleLoad;
      imagesRef.current[index] = img;
    };

    // Eagerly load initial batch
    for (let i = 0; i < initialEager; i++) {
      preloadImage(i);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [frameCount, eagerCount, framePath]);

  // GSAP ScrollTrigger setup for robust pinning and scrubbing
  useEffect(() => {
    if (!containerRef.current || !stageRef.current) return;

    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      // Mobile scroll distance: 160vh for snappy responsive feel. Desktop: 300vh.
      const scrollDistance = isMobile ? window.innerHeight * 1.6 : window.innerHeight * 3.0;

      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: stageRef.current,
        pinSpacing: true,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: isMobile ? true : 0.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          setProgress(p);

          const frameIdx = Math.max(0, Math.min(frameCount - 1, Math.round(p * (frameCount - 1))));
          currentFrameRef.current = frameIdx;
          renderFrame(frameIdx);

          // Compute active step based on progress
          let idx = 0;
          let local = 0;
          for (let i = 0; i < steps.length; i++) {
            const s = steps[i];
            if (p >= s.from && (p < s.to || i === steps.length - 1)) {
              idx = i;
              local = (p - s.from) / Math.max(0.001, s.to - s.from);
              break;
            }
          }
          setActiveIdx(idx);
          setStepLocal(Math.max(0, Math.min(1, local)));
        },
      });

      scrollTriggerRef.current = st;
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [frameCount, steps]);

  // Click on indicator dot to scroll directly to step
  const scrollToStep = (idx) => {
    const st = scrollTriggerRef.current;
    if (!st || !steps[idx]) return;
    const targetProgress = (steps[idx].from + steps[idx].to) / 2;
    const targetScrollY = st.start + targetProgress * (st.end - st.start);
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className={cx("fsh-root", className)}>
      {/* Loading Progress Bar */}
      <div aria-hidden className={cx("fsh-loader", loaderDone && "fsh-loader-done")}>
        <div className="fsh-loader-text">
          {loadPct < 100 ? `Loading 3D · ${loadPct}%` : "Ready"}
        </div>
        <div className="fsh-loader-track">
          <span className="fsh-loader-fill" style={{ width: `${loadPct}%` }} />
        </div>
      </div>

      {/* Navigation Top Brand Bar */}
      <nav className="fsh-nav">
        <div className="fsh-brand">{brand}</div>
        {navLinks.length > 0 && (
          <div className="fsh-nav-links">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        )}
        {ctaLabel && (
          <a href={ctaHref} className="fsh-cta">
            {ctaLabel}
          </a>
        )}
      </nav>

      {/* Pinned Stage Container */}
      <div ref={stageRef} className="fsh-stage">
        {/* Hardware accelerated HTML5 Canvas */}
        <div className="fsh-canvas-wrap">
          <canvas ref={canvasRef} className="fsh-canvas" />
        </div>

        {/* Section Header Copy */}
        <div className="fsh-copy">
          <h2 className="fsh-title">{title}</h2>
          {subtitle && (
            <p className={cx("fsh-sub", progress > 0.08 && "fsh-sub-hidden")}>{subtitle}</p>
          )}
        </div>

        {/* Floating Solution Cards */}
        <div className="fsh-cards">
          {steps.map((s, i) => {
            const isActive = activeIdx === i;
            const isPrev = activeIdx >= 0 && i < activeIdx;
            return (
              <article
                key={i}
                style={{ "--c": s.color }}
                className={cx(
                  "fsh-card",
                  isActive && "fsh-card-active",
                  isPrev && "fsh-card-prev"
                )}
              >
                <div className="fsh-card-inner">
                  <span aria-hidden className="fsh-card-glow" />
                  <div className="fsh-card-head">
                    <span className="fsh-card-num">
                      <strong>{s.num}</strong> / {s.total}
                    </span>
                    <span aria-hidden className="fsh-card-icon">
                      {s.icon ?? "✦"}
                    </span>
                  </div>
                  <h3 className="fsh-card-title">{s.title}</h3>
                  <p className="fsh-card-desc">{s.description}</p>
                  <div className="fsh-card-foot">
                    <div className="fsh-ticks">
                      {steps.map((stepItem, j) => {
                        const done = j < activeIdx;
                        const cur = j === activeIdx;
                        return (
                          <button
                            key={j}
                            type="button"
                            onClick={() => scrollToStep(j)}
                            className="fsh-tick"
                            title={`Ir a ${stepItem.label || stepItem.title}`}
                          >
                            <span
                              style={{
                                transform: `scaleX(${done ? 1 : cur ? stepLocal : 0})`,
                                transition: done ? "none" : "transform 140ms linear",
                              }}
                            />
                          </button>
                        );
                      })}
                    </div>
                    <span className="fsh-card-label">{s.label}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Scroll Progress Bar */}
        <div className="fsh-progress">
          <span className="fsh-progress-fill" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
    </div>
  );
}

export default FrameSequenceHero;
