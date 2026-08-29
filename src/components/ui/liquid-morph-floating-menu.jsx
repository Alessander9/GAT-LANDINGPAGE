import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

function MenuButton({
  label,
  onClick,
  isOpen,
  index,
}) {
  const [hovered, setHovered] = useState(false);
  const animatingRef = useRef(false);
  const pendingLeaveRef = useRef(false);
  const chars = label.split("");
  const lockDuration = 30 * chars.length + 300;

  const handleEnter = useCallback(() => {
    pendingLeaveRef.current = false;
    if (hovered) return;
    setHovered(true);
    animatingRef.current = true;
    setTimeout(() => {
      animatingRef.current = false;
      if (pendingLeaveRef.current) {
        pendingLeaveRef.current = false;
        setHovered(false);
      }
    }, lockDuration);
  }, [hovered, lockDuration]);

  const handleLeave = useCallback(() => {
    if (animatingRef.current) {
      pendingLeaveRef.current = true;
    } else {
      setHovered(false);
    }
  }, []);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "#FFFFFF",
        fontSize: "1.15rem",
        fontWeight: 700,
        textTransform: "uppercase",
        lineHeight: 1,
        overflow: "hidden",
        fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
        letterSpacing: "0.04em",
        height: "1.2em",
        padding: "0 10px",
      }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{
        duration: 0.4,
        delay: isOpen ? 0.35 + 0.06 * index : 0,
        ease,
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        {chars.map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              height: "1.2em",
            }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                transitionProperty: "transform",
                transitionDuration: hovered ? "700ms" : "0ms",
                transitionDelay: hovered ? `${25 * i}ms` : "0ms",
                transform: hovered ? "translateY(-50%)" : "translateY(0%)",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <span
                style={{
                  display: "block",
                  height: "1.2em",
                  lineHeight: "1.2em",
                  color: "#FFFFFF",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
              <span
                style={{
                  display: "block",
                  height: "1.2em",
                  lineHeight: "1.2em",
                  color: "#09A8B5",
                }}
                aria-hidden
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          </span>
        ))}
      </div>
    </motion.button>
  );
}

export default function FloatingMenu({ items, accentColor = "#09A8B5" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const defaultItems = [
    { label: "Inicio", target: "#hero" },
    { label: "Servicios", target: "#servicios" },
    { label: "Metodología", target: "#metodologia" },
    { label: "Calculadora ROI", target: "#calculadora" },
    { label: "Casos de Éxito", target: "#casos" },
    { label: "Contacto", target: "#contacto" },
  ];

  const menuItems = items ?? defaultItems;

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  const handleItemClick = (item) => {
    setIsOpen(false);
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <motion.div
      ref={containerRef}
      style={{
        position: "fixed",
        bottom: "32px",
        left: "50%",
        zIndex: 1000,
        x: "-50%",
        pointerEvents: "auto",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      <motion.div
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          letterSpacing: "-0.02em",
          cursor: isOpen ? "default" : "pointer",
          boxShadow: "0 16px 40px rgba(7, 18, 28, 0.7), 0 0 30px rgba(9, 168, 181, 0.25)",
        }}
        onClick={() => {
          if (!isOpen) setIsOpen(true);
        }}
        animate={{
          width: isOpen ? 300 : 160,
          height: isOpen ? 360 : 50,
          borderRadius: isOpen ? 28 : 50,
          scale: 1,
        }}
        whileHover={isOpen ? undefined : { scale: 1.05 }}
        transition={{
          duration: 0.7,
          ease,
          height: { duration: isOpen ? 0.7 : 0.15 },
          scale: { duration: 0.25, ease },
        }}
      >
        {/* Glowing Brand Background layer */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: "inherit",
          }}
          animate={{
            backgroundColor: isOpen ? "#087F9F" : "#09A8B5",
            borderColor: isOpen ? "#09A8B5" : "#2CD8E8",
          }}
          transition={{ duration: isOpen ? 0.1 : 0.3, ease }}
        />

        {/* Dark circle expanding from bottom */}
        <motion.div
          style={{
            position: "absolute",
            left: "50%",
            backgroundColor: "#0B1E2D",
            width: "220%",
            height: "220%",
            borderRadius: "50%",
            x: "-50%",
            border: "1px solid rgba(9, 168, 181, 0.3)",
          }}
          animate={{ bottom: isOpen ? "-20%" : "-220%" }}
          transition={{
            duration: 0.75,
            ease,
            delay: isOpen ? 0.08 : 0,
          }}
        />

        {/* Menu items */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: isOpen ? "auto" : "none",
            opacity: isOpen ? 1 : 0,
            flex: isOpen ? 1 : 0,
            overflow: "hidden",
            padding: "20px 0 10px 0",
          }}
        >
          {menuItems.map((item, idx) => (
            <MenuButton
              key={item.label}
              label={item.label}
              onClick={() => handleItemClick(item)}
              isOpen={isOpen}
              index={idx}
            />
          ))}
        </div>

        {/* Bottom bar: Menu + animated hamburger */}
        <motion.div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            flexShrink: 0,
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(!isOpen)}
          animate={{
            paddingLeft: isOpen ? 24 : 20,
            paddingRight: isOpen ? 24 : 20,
            paddingBottom: isOpen ? 20 : 0,
            height: 50,
          }}
          transition={{ duration: 0.7, ease }}
        >
          <motion.span
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "0.02em",
            }}
            animate={{ color: isOpen ? "#E2F2F5" : "#0B1E2D" }}
            transition={{ duration: 0.3, ease }}
          >
            {isOpen ? "Cerrar" : "Navegación"}
          </motion.span>

          <div
            style={{
              position: "relative",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.span
              style={{
                position: "absolute",
                display: "block",
                width: "18px",
                height: "2.5px",
                borderRadius: "9999px",
              }}
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -3.5,
                backgroundColor: isOpen ? "#09A8B5" : "#0B1E2D",
              }}
              transition={{ duration: 0.4, ease }}
            />
            <motion.span
              style={{
                position: "absolute",
                display: "block",
                width: "18px",
                height: "2.5px",
                borderRadius: "9999px",
              }}
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 3.5,
                backgroundColor: isOpen ? "#09A8B5" : "#0B1E2D",
              }}
              transition={{ duration: 0.4, ease }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
