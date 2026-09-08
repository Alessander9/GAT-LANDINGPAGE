"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
} from "lucide-react";
import { SERVICES_DATA } from "../data/servicesData";
import "./FeaturedServices.css";

// Extract all service items from data
const SLIDES = Object.values(SERVICES_DATA);
const SLIDE_DURATION = 10000; // 10 segundos por slide

export default function FeaturedServices({ onSelectService, onNavigateToServiceSubpage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0); // reinicia animación CSS de la barra
  const timerRef = useRef(null);
  const isHoveredRef = useRef(false);
  const videoRefs = useRef([]);
  const tabRefs = useRef([]);
  const tabsStripRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const currentSlide = SLIDES[currentIndex] || SLIDES[0];

  // Inicia el timer una sola vez al montar — siempre activo y automático
  const startTimer = (resetAnim = false) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (resetAnim) setAnimKey(k => k + 1);
    timerRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % SLIDES.length);
      setAnimKey(k => k + 1);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle active video playback
  useEffect(() => {
    videoRefs.current.forEach((videoEl, idx) => {
      if (!videoEl) return;
      if (idx === currentIndex) {
        videoEl.currentTime = 0;
        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        videoEl.pause();
      }
    });
  }, [currentIndex]);

  // Scroll horizontal del tab activo en móvil — sin afectar el scroll de la página
  useEffect(() => {
    const tab = tabRefs.current[currentIndex];
    const strip = tabsStripRef.current;
    if (!tab || !strip) return;
    const tabLeft = tab.offsetLeft;
    const tabWidth = tab.offsetWidth;
    const stripWidth = strip.offsetWidth;
    strip.scrollTo({ left: tabLeft - stripWidth / 2 + tabWidth / 2, behavior: 'smooth' });
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
    startTimer(true);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % SLIDES.length);
    startTimer(true);
  };

  const handleSelectTab = (index) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    startTimer(true); // reinicia el timer y la barra
  };

  // Touch Swipe Gesture Handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const handleExploreClick = () => {
    if (onNavigateToServiceSubpage && currentSlide.slug) {
      onNavigateToServiceSubpage(currentSlide.slug);
    } else {
      window.location.hash = `#servicio/${currentSlide.slug}`;
    }
  };

  const handleQuoteClick = () => {
    if (onSelectService) {
      onSelectService(currentSlide.title);
    } else {
      const el = document.getElementById("contacto");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const CurrentIcon = currentSlide.icon || Layers;

  return (
    <section
      id="servicios-destacados"
      className="split-carousel-section"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        "--split-accent": currentSlide.accent || "#2CD8E8",
        "--split-accent-glow": `${currentSlide.accent || "#09A8B5"}33`,
      }}
    >
      {/* Subtle Ambient Background Light */}
      <div className="split-carousel-glow" />

      <div className="split-carousel-container">
        {/* Section Header */}
        <div className="split-carousel-header">
          <div className="split-header-left">
            <div className="split-header-badge">
              <span className="split-header-dot" />
              <span>Soluciones Destacadas GAT</span>
            </div>
          </div>

          <div className="split-header-controls">
            <div className="split-counter">
              <span className="split-counter-curr">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>{" "}
              / {String(SLIDES.length).padStart(2, "0")}
            </div>
            <div className="split-nav-btns">
              <button
                type="button"
                className="split-nav-btn"
                onClick={handlePrev}
                aria-label="Anterior solución"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="split-nav-btn"
                onClick={handleNext}
                aria-label="Siguiente solución"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Split Grid: Left Text, Right Video */}
        <div className="split-main-grid">
          {/* Left Column: Text Information */}
          <div className="split-text-col" key={`text-col-${currentSlide.slug}`}>
            <div className="split-meta-row">
              <span className="split-category-tag">
                <CurrentIcon size={14} color={currentSlide.accent || "#2CD8E8"} />
                {currentSlide.badge || "Solución Digital"}
              </span>
              <span className="split-live-tag">
                <span className="split-live-indicator" />
                {currentSlide.videoBadge || "Demo en Vivo"}
              </span>
            </div>

            <h2 className="split-title">
              <span className="split-title-accent">{currentSlide.title}</span>
            </h2>

            {/* Mobile Video Insertion Point (shown between title and description on mobile) */}
            <div className="split-video-col mobile-only">
              <div className="split-video-frame">
                <div className="split-video-viewport">
                  <video
                    key={`mob-vid-${currentSlide.slug}`}
                    className="split-screen-video active"
                    src={currentSlide.heroVideo}
                    poster={currentSlide.heroImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>
            </div>

            <p className="split-tagline">{currentSlide.tagline}</p>

            {/* Metrics */}
            {currentSlide.metrics && currentSlide.metrics.length > 0 && (
              <div className="split-metrics-container">
                {currentSlide.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="split-metric-card">
                    <span className="split-metric-val">{metric.value}</span>
                    <span className="split-metric-lbl">{metric.label}</span>
                    {metric.sub && <span className="split-metric-sub">{metric.sub}</span>}
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="split-actions">
              <button
                type="button"
                className="split-btn-primary"
                onClick={handleExploreClick}
              >
                <span>Ver Solución Completa</span>
                <ArrowRight size={17} />
              </button>
              <button
                type="button"
                className="split-btn-secondary"
                onClick={handleQuoteClick}
              >
                <MessageSquare size={16} />
                <span>Cotizar Proyecto</span>
              </button>
            </div>
          </div>

          {/* Right Column: Desktop Dedicated Video Showcase Window */}
          <div className="split-video-col desktop-only">
            <div className="split-video-frame">
              <div className="split-video-viewport">
                <video
                  key={`desk-vid-${currentSlide.slug}`}
                  className="split-screen-video active"
                  src={currentSlide.heroVideo}
                  poster={currentSlide.heroImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tabs Strip (Swipeable Touch Rail) */}
        <div className="split-tabs-strip" ref={tabsStripRef}>
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.slug || idx}
                ref={(el) => (tabRefs.current[idx] = el)}
                type="button"
                className={`split-tab-pill ${isActive ? "active" : ""}`}
                onClick={() => handleSelectTab(idx)}
              >
                <span className="split-tab-idx">{String(idx + 1).padStart(2, "0")}</span>
                <span className="split-tab-text">{slide.navLabel || slide.badge}</span>
                {isActive && <div key={animKey} className="split-tab-progress" />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
