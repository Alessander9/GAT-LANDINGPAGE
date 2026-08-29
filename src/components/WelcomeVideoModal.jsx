"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Volume2, VolumeX, Play, Pause, Maximize2, Sparkles, ArrowRight } from "lucide-react";

export default function WelcomeVideoModal({ videoUrl = "https://res.cloudinary.com/piun1mwb/video/upload/v1787976526/Comercial_gat_consulting.mp4" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Open modal on initial page load after brief delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsOpen(false);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video Comercial GAT Technology Consulting"
      className="gat-video-modal-backdrop"
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(7, 21, 33, 0.88)",
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "gat-modal-fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Ambient Radial Glow behind the Video */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(9, 168, 181, 0.35) 0%, rgba(8, 127, 159, 0.15) 50%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Video Modal Card Container */}
      <div
        className="gat-video-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "880px",
          background: "linear-gradient(145deg, rgba(18, 50, 74, 0.95) 0%, rgba(7, 21, 33, 0.98) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          borderTop: "1px solid rgba(255, 255, 255, 0.45)",
          borderRadius: "28px",
          boxShadow: "0 35px 80px rgba(0, 0, 0, 0.85), 0 0 40px rgba(9, 168, 181, 0.35)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          animation: "gat-modal-scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            padding: "16px 22px",
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(9, 168, 181, 0.1) 100%)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand Tag */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "#2CD8E8",
                boxShadow: "0 0 12px #2CD8E8",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "var(--font-heading, sans-serif)",
              }}
            >
              Comercial Oficial · GAT Technology Consulting
            </span>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Cerrar video comercial"
            className="gat-video-close-btn"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player Frame */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            background: "#000000",
            overflow: "hidden",
          }}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            playsInline
            controls
            muted={isMuted}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={handleClose}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />

          {/* Quick Sound Overlay Button (if muted on start) */}
          {isMuted && (
            <button
              type="button"
              onClick={toggleMute}
              style={{
                position: "absolute",
                bottom: "60px",
                left: "20px",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(7, 21, 33, 0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(9, 168, 181, 0.5)",
                borderRadius: "20px",
                padding: "8px 14px",
                color: "#2CD8E8",
                fontSize: "0.8rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.6)",
                transition: "all 0.2s ease",
              }}
            >
              <VolumeX size={16} />
              <span>Activar Sonido</span>
            </button>
          )}
        </div>

        {/* Bottom Action / Continue Bar */}
        <div
          style={{
            padding: "14px 22px",
            background: "rgba(7, 21, 33, 0.95)",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ fontSize: "0.82rem", color: "#8EABC0", display: "flex", alignItems: "center", gap: "6px" }}>
            <Sparkles size={14} color="#09A8B5" />
            <span>Descubre cómo transformamos empresas con tecnología de misión crítica.</span>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="gat-video-continue-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, #09A8B5 0%, #087F9F 100%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "14px",
              padding: "9px 20px",
              color: "#FFFFFF",
              fontSize: "0.84rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 6px 18px rgba(9, 168, 181, 0.4)",
              transition: "all 0.2s ease",
            }}
          >
            <span>Continuar al Sitio Web</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* ──── STYLES ──── */}
      <style>{`
        @keyframes gat-modal-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes gat-modal-scale-up {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .gat-video-close-btn:hover {
          background: rgba(255, 255, 255, 0.25) !important;
          transform: scale(1.08);
        }

        .gat-video-continue-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(9, 168, 181, 0.6) !important;
        }

        @media (max-width: 768px) {
          .gat-video-modal-backdrop {
            padding: 12px !important;
          }

          .gat-video-modal-card {
            border-radius: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
