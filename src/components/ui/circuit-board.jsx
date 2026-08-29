"use client";

import * as React from "react";
import { motion } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function CircuitBoard({
  nodes,
  connections,
  width = 560,
  height = 380,
  gridSize = 22,
  showGrid = true,
  gridColor = "rgba(9, 168, 181, 0.12)",
  traceColor = "rgba(8, 127, 159, 0.38)",
  pulseColor = "#09A8B5",
  nodeColor = "#09A8B5",
  pulseSpeed = 2.4,
  traceWidth = 2.2,
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
        return 32;
      case "lg":
        return 52;
      default:
        return 42;
    }
  }, []);

  const calculatePath = React.useCallback(
    (from, to) => {
      const fromSize = getNodeSize(from.size) / 2 + 4;
      const toSize = getNodeSize(to.size) / 2 + 4;

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
        return `M ${startX} ${startY} H ${midX} V ${endY} H ${endX}`;
      } else {
        startY = from.y + (dy > 0 ? fromSize : -fromSize);
        endY = to.y + (dy > 0 ? -toSize : toSize);
        const midY = from.y + dy / 2;
        return `M ${startX} ${startY} V ${midY} H ${endX} V ${endY}`;
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
      className={cn("relative w-full h-full select-none overflow-hidden", className)}
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
          maxWidth: `${width}px`,
          maxHeight: `${height}px`,
          overflow: "visible",
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="circuitGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {showGrid && (
            <pattern
              id="circuitGridDotPattern"
              width={gridSize}
              height={gridSize}
              patternUnits="userSpaceOnUse"
            >
              <circle cx={gridSize / 2} cy={gridSize / 2} r="1" fill={gridColor} />
            </pattern>
          )}
        </defs>

        {/* Grid Background */}
        {showGrid && (
          <rect width={width} height={height} fill="url(#circuitGridDotPattern)" />
        )}

        {/* Circuit Traces */}
        {connections.map((conn, i) => {
          const fromNode = nodeMap.get(conn.from);
          const toNode = nodeMap.get(conn.to);
          if (!fromNode || !toNode) return null;

          const path = calculatePath(fromNode, toNode);
          const pathLength = 550;
          const currentTraceColor = conn.color || traceColor;
          const currentPulseColor = conn.pulseColor || pulseColor;

          return (
            <g key={`conn-${i}`}>
              {/* Base Trace */}
              <motion.path
                d={path}
                fill="none"
                stroke={currentTraceColor}
                strokeWidth={traceWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: i * 0.08 }}
              />

              {/* Glowing Electricity Pulse */}
              {conn.animated !== false && (
                <motion.path
                  d={path}
                  fill="none"
                  stroke={currentPulseColor}
                  strokeWidth={traceWidth + 2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#circuitGlowFilter)"
                  strokeDasharray={`${pathLength * 0.14} ${pathLength * 0.86}`}
                  initial={{ strokeDashoffset: pathLength }}
                  animate={{ strokeDashoffset: -pathLength }}
                  transition={{
                    duration: pulseSpeed,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.25,
                  }}
                />
              )}

              {/* Bidirectional Pulse */}
              {conn.bidirectional && (
                <motion.path
                  d={path}
                  fill="none"
                  stroke={currentPulseColor}
                  strokeWidth={traceWidth + 2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#circuitGlowFilter)"
                  strokeDasharray={`${pathLength * 0.14} ${pathLength * 0.86}`}
                  initial={{ strokeDashoffset: -pathLength }}
                  animate={{ strokeDashoffset: pathLength }}
                  transition={{
                    duration: pulseSpeed,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.25 + pulseSpeed / 2,
                  }}
                />
              )}
            </g>
          );
        })}

        {/* Nodes inside SVG for 100% mathematical alignment */}
        {nodes.map((node) => {
          const size = getNodeSize(node.size);
          const statusColor = getStatusColor(node.status, node.color);

          return (
            <g key={node.id} style={{ cursor: "pointer" }}>
              {/* Node Icon Box */}
              <foreignObject
                x={node.x - size / 2}
                y={node.y - size / 2}
                width={size}
                height={size}
                style={{ overflow: "visible" }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "14px",
                    background: "linear-gradient(145deg, rgba(18, 50, 74, 0.94) 0%, rgba(7, 21, 33, 0.98) 100%)",
                    border: `1.5px solid ${statusColor}`,
                    boxShadow: `0 0 16px ${statusColor}40, inset 0 0 8px ${statusColor}20`,
                    color: statusColor,
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.12)";
                    e.currentTarget.style.boxShadow = `0 0 25px ${statusColor}80, inset 0 0 12px ${statusColor}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = `0 0 16px ${statusColor}40, inset 0 0 8px ${statusColor}20`;
                  }}
                >
                  {node.icon}
                </div>
              </foreignObject>

              {/* Node Label Below */}
              {node.label && (
                <foreignObject
                  x={node.x - 80}
                  y={node.y + size / 2 + 6}
                  width={160}
                  height={30}
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
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        color: "#FFFFFF",
                        background: "rgba(7, 21, 33, 0.88)",
                        padding: "2px 8px",
                        borderRadius: "10px",
                        border: `1px solid ${statusColor}45`,
                        whiteSpace: "nowrap",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
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
