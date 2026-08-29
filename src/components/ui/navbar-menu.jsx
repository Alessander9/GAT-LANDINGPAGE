import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.45,
  damping: 12,
  stiffness: 110,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      style={{ position: "relative" }}
    >
      <motion.p
        transition={{ duration: 0.2 }}
        style={{
          cursor: "pointer",
          color: active === item ? "#09A8B5" : "#FFFFFF",
          fontSize: "0.92rem",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          transition: "color 0.2s ease, background 0.2s ease",
          padding: "6px 12px",
          borderRadius: "8px",
          background: active === item ? "rgba(9, 168, 181, 0.12)" : "transparent",
          margin: 0,
        }}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                paddingTop: "14px",
                zIndex: 1000,
                pointerEvents: "auto",
              }}
            >
              {/* Invisible hover bridge ensuring the cursor never leaves the active area */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-20px",
                  right: "-20px",
                  height: "20px",
                }}
              />
              <motion.div
                transition={transition}
                layoutId="active"
                style={{
                  backgroundColor: "rgba(11, 30, 45, 0.96)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  border: "1px solid rgba(9, 168, 181, 0.35)",
                  boxShadow: "0 25px 60px rgba(7, 18, 28, 0.9), 0 0 30px rgba(9, 168, 181, 0.25)",
                }}
              >
                <motion.div
                  layout
                  style={{
                    width: "max-content",
                    height: "100%",
                    padding: "1.25rem",
                  }}
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className = "",
  style = {},
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      style={{
        position: "relative",
        borderRadius: "9999px",
        border: "1px solid rgba(9, 168, 181, 0.25)",
        backgroundColor: "rgba(18, 50, 74, 0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 10px 30px rgba(7, 18, 28, 0.6), 0 0 20px rgba(9, 168, 181, 0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 16px 8px 24px",
        gap: "1.5rem",
        ...style,
      }}
      className={className}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href = "#casos",
  src,
  onClick,
  tag,
}) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onClick) onClick();
      }}
      style={{
        display: "flex",
        gap: "14px",
        alignItems: "center",
        textDecoration: "none",
        padding: "10px",
        borderRadius: "12px",
        transition: "all 0.2s ease",
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(213, 232, 236, 0.08)",
        cursor: "pointer",
        position: "relative",
        zIndex: 10,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(9, 168, 181, 0.14)";
        e.currentTarget.style.borderColor = "rgba(9, 168, 181, 0.4)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
        e.currentTarget.style.borderColor = "rgba(213, 232, 236, 0.08)";
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <img
        src={src}
        alt={title}
        style={{
          width: "130px",
          height: "75px",
          objectFit: "cover",
          borderRadius: "8px",
          flexShrink: 0,
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
          pointerEvents: "none",
        }}
      />
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
          <h4
            style={{
              fontSize: "0.92rem",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            {title}
          </h4>
          {tag && (
            <span
              style={{
                fontSize: "0.68rem",
                color: "#09A8B5",
                background: "rgba(9, 168, 181, 0.15)",
                padding: "2px 6px",
                borderRadius: "4px",
                fontWeight: 600,
              }}
            >
              {tag}
            </span>
          )}
        </div>
        <p
          style={{
            fontSize: "0.8rem",
            color: "#9FB5C4",
            maxWidth: "13rem",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, href = "#", onClick, icon: Icon, ...rest }) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onClick) onClick();
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: "#C3D6E0",
        fontSize: "0.88rem",
        fontWeight: 500,
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: "8px",
        transition: "all 0.2s ease",
        background: "transparent",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#09A8B5";
        e.currentTarget.style.background = "rgba(9, 168, 181, 0.12)";
        e.currentTarget.style.transform = "translateX(3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#C3D6E0";
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.transform = "translateX(0px)";
      }}
      {...rest}
    >
      {Icon && <Icon size={16} color="#09A8B5" />}
      <span>{children}</span>
    </a>
  );
};
