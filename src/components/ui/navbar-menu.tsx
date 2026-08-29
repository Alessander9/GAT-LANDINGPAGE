"use client";
import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
} as const;

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:text-[#09A8B5] transition-colors font-medium text-[0.95rem]"
        style={{
          color: active === item ? "#09A8B5" : "#FFFFFF",
          padding: "6px 12px",
          borderRadius: "8px",
          background: active === item ? "rgba(9, 168, 181, 0.1)" : "transparent",
        }}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1rem)] left-1/2 transform -translate-x-1/2 pt-2 z-50">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-[#12324A]/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#09A8B5]/30 shadow-2xl"
                style={{
                  boxShadow: "0 25px 60px rgba(7, 18, 28, 0.85), 0 0 30px rgba(9, 168, 181, 0.2)",
                }}
              >
                <motion.div layout className="w-max h-full p-5">
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
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={`relative rounded-full border border-[#09A8B5]/25 bg-[#12324A]/85 backdrop-blur-xl shadow-2xl flex items-center justify-between px-6 py-2 gap-6 ${className}`}
      style={style}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href = "#",
  src,
  onClick,
  tag,
}: {
  title: string;
  description: string;
  href?: string;
  src: string;
  onClick?: () => void;
  tag?: string;
}) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="flex items-center gap-3.5 p-2.5 rounded-xl transition-all duration-200 bg-white/[0.03] border border-white/10 hover:bg-[#09A8B5]/15 hover:border-[#09A8B5]/40"
    >
      <img
        src={src}
        alt={title}
        className="w-[130px] h-[75px] object-cover rounded-lg shrink-0 shadow-lg"
      />
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-sm font-bold text-white">{title}</h4>
          {tag && (
            <span className="text-[0.68rem] text-[#09A8B5] bg-[#09A8B5]/15 px-1.5 py-0.5 rounded font-semibold">
              {tag}
            </span>
          )}
        </div>
        <p className="text-[#9FB5C4] text-xs max-w-[13rem] leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  href = "#",
  onClick,
  icon: Icon,
  ...rest
}: any) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="flex items-center gap-2.5 text-[#C3D6E0] hover:text-[#09A8B5] text-sm font-medium p-2 rounded-lg transition-all duration-200 hover:bg-[#09A8B5]/10 hover:translate-x-1"
      {...rest}
    >
      {Icon && <Icon size={16} color="#09A8B5" />}
      <span>{children}</span>
    </a>
  );
};
