"use client";

import * as React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./mac-book-neo-hero.css";

gsap.registerPlugin(ScrollTrigger);

const cx = (...c) => c.filter(Boolean).join(" ");
const drawCover = (ctx, img, width, height) => {
  const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
  const drawWidth = img.naturalWidth * scale;
  const drawHeight = img.naturalHeight * scale;

  ctx.drawImage(
    img,
    (width - drawWidth) * 0.5,
    (height - drawHeight) * 0.5,
    drawWidth,
    drawHeight
  );
};

export function FrameSequenceHero({
  frameCount = 941,
  framePath,
  eagerCount = 140,
  scrollDistance = 2600,
  brand,
  navLinks = [],
  ctaLabel,
  ctaHref = "#",
  title,
  subtitle,
  steps = [],
  className = "",
}) {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const triggerRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);

  const cacheRef = useRef(new Array(frameCount));
  const loadedRef = useRef(0);
  const currentFrameRef = useRef(-1);
  const rafIdRef = useRef(null);

  const [loadPct, setLoadPct] = useState(0);
  const [loaderDone, setLoaderDone] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [subHidden, setSubHidden] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [stepLocal, setStepLocal] = useState(0);

  // Render a specific frame to the high-performance HTML5 canvas
  const renderFrameToCanvas = useCallback(
    (frameIndex) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const img = cacheRef.current[frameIndex];
      if (img && img.complete && img.naturalWidth > 0) {
        currentFrameRef.current = frameIndex;

        const cw = canvas.width;
        const ch = canvas.height;
        drawCover(ctx, img, cw, ch);
      } else if (framePath) {
        // Fallback eager load on demand if not ready
        const fallbackImg = new Image();
        fallbackImg.decoding = "async";
        fallbackImg.src = framePath(frameIndex + 1);
        fallbackImg.onload = () => {
          cacheRef.current[frameIndex] = fallbackImg;
          if (currentFrameRef.current === frameIndex) {
            renderFrameToCanvas(frameIndex);
          }
        };
      }
    },
    [framePath]
  );

  // Initialize canvas resolution matching display dimensions & DPR
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    if (currentFrameRef.current >= 0) {
      renderFrameToCanvas(currentFrameRef.current);
    } else {
      renderFrameToCanvas(0);
    }
  }, [renderFrameToCanvas]);

  // Eager preloading in background with prioritised first batch
  useEffect(() => {
    if (!framePath) return;
    let isMounted = true;
    const eager = Math.min(eagerCount, frameCount);

    const loadOne = (i) => {
      if (cacheRef.current[i]) return;
      const img = new Image();
      img.decoding = "async";
      img.src = framePath(i + 1);
      const onSettle = () => {
        if (!isMounted) return;
        loadedRef.current += 1;
        const pct = Math.round((loadedRef.current / frameCount) * 100);
        setLoadPct(pct);

        if (i === 0 && currentFrameRef.current === -1) {
          renderFrameToCanvas(0);
        }

        if (loadedRef.current === eager) {
          setLoaderDone(true);
          // Load remaining frames with idle priority
          for (let j = eager; j < frameCount; j++) {
            if (!cacheRef.current[j]) loadOne(j);
          }
        }
      };
      img.onload = onSettle;
      img.onerror = onSettle;
      cacheRef.current[i] = img;
    };

    for (let i = 0; i < eager; i++) loadOne(i);

    return () => {
      isMounted = false;
    };
  }, [frameCount, eagerCount, framePath, renderFrameToCanvas]);

  // Resize listener
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Ultra-Smooth GSAP ScrollTrigger Scrubbing
  useEffect(() => {
    if (!stageRef.current) return;

    const getScrollDistance = () =>
      window.innerWidth < 768 ? Math.min(scrollDistance, 1900) : scrollDistance;

    // Smooth scrub parameter for fluid momentum
    const trigger = ScrollTrigger.create({
      trigger: stageRef.current,
      start: "top top",
      end: () => `+=${getScrollDistance()}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 0.65,
      fastScrollEnd: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const p = self.progress;
        const targetFrame = Math.max(
          0,
          Math.min(frameCount - 1, Math.round(p * (frameCount - 1)))
        );

        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = requestAnimationFrame(() => {
          renderFrameToCanvas(targetFrame);
        });

        setProgress(p);
        setNavScrolled(p > 0.02);
        setSubHidden(p > 0.06);

        let idx = 0;
        let local = 0;
        for (let i = 0; i < steps.length; i++) {
          const s = steps[i];
          if (p >= s.from && (p < s.to || (i === steps.length - 1 && p <= s.to))) {
            idx = i;
            local = (p - s.from) / Math.max(0.001, s.to - s.from);
            break;
          }
        }
        setActiveIdx(idx);
        setStepLocal(Math.max(0, Math.min(1, local)));
      },
    });

    triggerRef.current = trigger;
    ScrollTrigger.refresh();

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (trigger) trigger.kill();
    };
  }, [steps, frameCount, scrollDistance, renderFrameToCanvas]);

  // Jump to specific step on click/tap with smooth scroll
  const goToStep = (index) => {
    if (!steps[index] || !triggerRef.current) return;
    const targetP = (steps[index].from + steps[index].to) / 2;
    const scrollPos =
      triggerRef.current.start +
      targetP * (triggerRef.current.end - triggerRef.current.start);

    window.scrollTo({
      top: scrollPos,
      behavior: "smooth",
    });

    setActiveIdx(index);
    const targetFrame = Math.round(targetP * (frameCount - 1));
    renderFrameToCanvas(targetFrame);
  };

  // Touch swipe gestures on mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    const diffY = touchStartYRef.current - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.3) {
      if (diffX > 0 && activeIdx < steps.length - 1) {
        goToStep(activeIdx + 1);
      } else if (diffX < 0 && activeIdx > 0) {
        goToStep(activeIdx - 1);
      }
    }
  };

  return (
    <div
      ref={rootRef}
      className={cx("fsh-root", className)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Loader */}
      <div aria-hidden className={cx("fsh-loader", loaderDone && "fsh-loader-done")}>
        <div className="fsh-loader-text">
          {loadPct < 100 ? `Cargando · ${loadPct}%` : "Listo"}
        </div>
        <div className="fsh-loader-track">
          <span className="fsh-loader-fill" style={{ width: `${loadPct}%` }} />
        </div>
      </div>

      {/* Nav header if specified */}
      {(brand || navLinks.length > 0 || ctaLabel) && (
        <nav className={cx("fsh-nav", navScrolled && "fsh-nav-scrolled")}>
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
      )}

      {/* GSAP Pinned Stage */}
      <div ref={stageRef} className="fsh-stage">
        <div className="fsh-canvas-wrap">
          {/* High-Performance Hardware-Accelerated HTML5 Canvas */}
          <canvas
            ref={canvasRef}
            className="fsh-canvas"
            style={{ width: "100%", height: "100%", display: "block" }}
          />
          {/* Seamless Overlay */}
          <div className="fsh-canvas-overlay" />
        </div>

        {/* Copy Header */}
        <div className="fsh-copy">
          <h2 className="fsh-title">{title}</h2>
          {subtitle && (
            <p className={cx("fsh-sub", subHidden && "fsh-sub-hidden")}>{subtitle}</p>
          )}
        </div>

        {/* Floating Steps Cards (Glassmorphism UI) */}
        <div className="fsh-cards">
          {steps.map((s, i) => {
            const isActive = activeIdx === i;
            const isPrev = activeIdx >= 0 && i < activeIdx;
            return (
              <article
                key={i}
                style={{ ["--c"]: s.color }}
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
                            className="fsh-tick"
                            onClick={() => goToStep(j)}
                            title={`Ver ${stepItem.label}`}
                            aria-label={`Paso ${j + 1}: ${stepItem.label}`}
                          >
                            <span
                              style={{
                                transform: `scaleX(${done ? 1 : cur ? stepLocal : 0})`,
                                transition: done ? "none" : "transform 140ms ease-out",
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

        {/* Progress bar */}
        <div className="fsh-progress">
          <span className="fsh-progress-fill" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
    </div>
  );
}

export default FrameSequenceHero;
