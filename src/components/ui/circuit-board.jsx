"use client";

import * as React from "react";
import { motion } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function CircuitBoard({
  nodes,
  connections,
  width = 740,
  height = 420,
  gridSize = 24,
  showGrid = true,
  gridColor = "rgba(9, 168, 181, 0.14)",
  traceColor = "rgba(8, 127, 159, 0.38)",
  pulseColor = "#09A8B5",
  nodeColor = "#09A8B5",
  className,
  style,
  ...props
}) {
  const nodeMap = React.useMemo(() => {
    return new Map(nodes.map((node) => [node.id, node]));
  }, [nodes]);

  const getNodeSize = React.useCallback((size) => {
    switch (size) {
      case "sm":
        return 36;
      case "lg":
        return 56;
      default:
        return 46;
    }
  }, []);

  const calculatePathDetails = React.useCallback(
    (from, to) => {
      const fromSize = getNodeSize(from.size) / 2 + 5;
      const toSize = getNodeSize(to.size) / 2 + 5;

      const dx = to.x - from.x;
      const dy = to.y - from.y;

      let startX = from.x;
      let startY = from.y;
      let endX = to.x;
      let endY = to.y;

      if (Math.abs(dx) > Math.abs(dy)) {
        startX = from.x + (dx > 0 ? fromSize : -fromSize);
        endX = to.x + (dx > 0 ? -toSize : toSize);
        const midX = from.x + dx / 2;
        return {
          d: `M ${startX} ${startY} H ${midX} V ${endY} H ${endX}`,
          corner1: { x: midX, y: startY },
          corner2: { x: midX, y: endY },
        };
      } else {
        startY = from.y + (dy > 0 ? fromSize : -fromSize);
        endY = to.y + (dy > 0 ? -toSize : toSize);
        const midY = from.y + dy / 2;
        return {
          d: `M ${startX} ${startY} V ${midY} H ${endX} V ${endY}`,
          corner1: { x: startX, y: midY },
          corner2: { x: endX, y: midY },
        };
      }
    },
    [getNodeSize]
  );

  const getStatusColor = (status, customColor) => {
    if (customColor) return customColor;
    switch (status) {
      case "active":
        return "#09A8B5";
      case "processing":
        return "#2CD8E8";
      case "error":
        return "#FF5C5C";
      default:
        return nodeColor;
    }
  };

  return (
    <div
      className={cn("relative w-full h-full select-none", className)}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      {...props}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          display: "block",
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Fast GPU-accelerated filter for neon aura */}
          <filter id="circuitFastGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
          </filter>

          {showGrid && (
            <pattern
              id="circuitGridDotPattern"
              width={gridSize}
              height={gridSize}
              patternUnits="userSpaceOnUse"
            >
              <circle cx={gridSize / 2} cy={gridSize / 2} r="1.2" fill={gridColor} />
            </pattern>
          )}
        </defs>

        {/* Grid Background */}
        {showGrid && (
          <rect width={width} height={height} fill="url(#circuitGridDotPattern)" />
        )}

        {/* Ambient Corner Cyber Crosshairs */}
        <g opacity="0.35" stroke="rgba(9, 168, 181, 0.6)" strokeWidth="1">
          <path d="M 20 30 L 20 20 L 30 20" fill="none" />
          <path d={`M ${width - 20} 30 L ${width - 20} 20 L ${width - 30} 20`} fill="none" />
          <path d={`M 20 ${height - 30} L 20 ${height - 20} L 30 ${height - 20}`} fill="none" />
          <path d={`M ${width - 20} ${height - 30} L ${width - 20} ${height - 20} L ${width - 30} ${height - 20}`} fill="none" />
        </g>

        {/* Circuit Traces & Continuous Ultra-Fluid Laser Flow */}
        {connections.map((conn, i) => {
          const fromNode = nodeMap.get(conn.from);
          const toNode = nodeMap.get(conn.to);
          if (!fromNode || !toNode) return null;

          const { d: path, corner1, corner2 } = calculatePathDetails(fromNode, toNode);
          const currentTraceColor = conn.color || traceColor;
          const currentPulseColor = conn.pulseColor || pulseColor;
          
          // Pure CSS linear continuous speed (2.4s)
          const speed = "2.4s";

          return (
            <g key={`conn-${i}`}>
              {/* 1. Base Dark Circuit Wire */}
              <path
                d={path}
                fill="none"
                stroke={currentTraceColor}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.6}
              />

              {/* 2. Micro Circuit Junction Nodes at Corners */}
              {corner1 && (
                <circle
                  cx={corner1.x}
                  cy={corner1.y}
                  r={2.5}
                  fill={currentPulseColor}
                  opacity={0.65}
                />
              )}
              {corner2 && (
                <circle
                  cx={corner2.x}
                  cy={corner2.y}
                  r={2.5}
                  fill={currentPulseColor}
                  opacity={0.65}
                />
              )}

              {/* 3. Outer Neon Glow Laser Stream (100% GPU Native CSS) */}
              {conn.animated !== false && (
                <path
                  d={path}
                  fill="none"
                  stroke={currentPulseColor}
                  strokeWidth={4.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#circuitFastGlow)"
                  strokeDasharray="75 185"
                  className="circuit-laser-aura"
                  style={{
                    animationDuration: speed,
                    filter: `drop-shadow(0 0 5px ${currentPulseColor})`,
                  }}
                />
              )}

              {/* 4. White-Hot Incandescent Laser Core (100% GPU Native CSS) */}
              {conn.animated !== false && (
                <path
                  d={path}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="26 234"
                  className="circuit-laser-core"
                  style={{
                    animationDuration: speed,
                    filter: `drop-shadow(0 0 3px #FFFFFF)`,
                  }}
                />
              )}
            </g>
          );
        })}

        {/* Nodes with Smooth Ambient Breath & Radiant Glow */}
        {nodes.map((node, idx) => {
          const size = getNodeSize(node.size);
          const statusColor = getStatusColor(node.status, node.color);
          const breathDelay = `${(idx * 0.4).toFixed(2)}s`;

          return (
            <g key={node.id} style={{ cursor: "pointer" }}>
              {/* Subtle Pulsing Halo Ring */}
              <circle
                cx={node.x}
                cy={node.y}
                r={size / 2 + 5}
                fill="none"
                stroke={statusColor}
                strokeWidth={1}
                className="circuit-halo-ring"
                style={{
                  transformOrigin: `${node.x}px ${node.y}px`,
                  animationDelay: breathDelay,
                }}
              />

              {/* Node Icon Box with Native CSS Breathing Glow */}
              <foreignObject
                x={node.x - size / 2}
                y={node.y - size / 2}
                width={size}
                height={size}
                style={{ overflow: "visible" }}
              >
                <div
                  className="circuit-node-box"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, rgba(18, 50, 74, 0.96) 0%, rgba(7, 21, 33, 0.99) 100%)",
                    border: `1.8px solid ${statusColor}`,
                    color: statusColor,
                    boxShadow: `0 0 20px ${statusColor}55, inset 0 0 10px ${statusColor}30, 0 8px 24px rgba(0,0,0,0.5)`,
                    animationDelay: breathDelay,
                    transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15)";
                    e.currentTarget.style.boxShadow = `0 0 35px ${statusColor}, inset 0 0 16px ${statusColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = `0 0 20px ${statusColor}55, inset 0 0 10px ${statusColor}30, 0 8px 24px rgba(0,0,0,0.5)`;
                  }}
                >
                  {node.icon}
                </div>
              </foreignObject>

              {/* Node Label Below */}
              {node.label && (
                <foreignObject
                  x={node.x - 90}
                  y={node.y + size / 2 + 7}
                  width={180}
                  height={34}
                  style={{ overflow: "visible", pointerEvents: "none" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        color: statusColor,
                        background: `linear-gradient(135deg, rgba(7, 21, 33, 0.95) 0%, ${statusColor}24 100%)`,
                        padding: "3px 10px",
                        borderRadius: "12px",
                        border: `1px solid ${statusColor}90`,
                        whiteSpace: "nowrap",
                        boxShadow: `0 4px 14px rgba(0,0,0,0.7), 0 0 12px ${statusColor}40`,
                        textShadow: `0 0 8px ${statusColor}80`,
                      }}
                    >
                      {node.label}
                    </span>
                  </div>
                </foreignObject>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default CircuitBoard;
