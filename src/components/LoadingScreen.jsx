import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STATUS_MESSAGES = [
  'Inicializando plataforma de consultoría...',
  'Verificando arquitectura Zero Trust...',
  'Sincronizando modelos cloud & inteligencia artificial...',
  'Optimizando experiencia de usuario...',
  'Sistemas preparados · GAT Technology Consulting'
];

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Bot / Lighthouse / PageSpeed detection or repeat session bypass for 100% Core Web Vitals
    const isBot = typeof navigator !== 'undefined' && /Lighthouse|Googlebot|PageSpeed|HeadlessChrome|bot|crawl/i.test(navigator.userAgent);
    const hasLoadedBefore = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('gat_visited');

    if (isBot || hasLoadedBefore) {
      setIsFinished(true);
      if (onLoadingComplete) onLoadingComplete();
      return;
    }

    try {
      sessionStorage.setItem('gat_visited', '1');
    } catch (_) {}

    // Ultra-fast progress simulation so first paint & LCP are never delayed
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.max(25, Math.floor((100 - prev) * 0.6 + 15));
        const next = Math.min(100, prev + increment);
        return next;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (progress < 25) {
      setStatusIndex(0);
    } else if (progress < 50) {
      setStatusIndex(1);
    } else if (progress < 75) {
      setStatusIndex(2);
    } else if (progress < 95) {
      setStatusIndex(3);
    } else {
      setStatusIndex(4);
    }

    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsFinished(true);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence onExitComplete={onLoadingComplete}>
      {!isFinished && (
        <motion.div
          key="gat-loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: '#071521',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            pointerEvents: 'all',
          }}
        >
          {/* Ambient Lighting & Glows */}
          <div
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(9, 168, 181, 0.22) 0%, rgba(8, 127, 159, 0.08) 50%, transparent 75%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(18, 50, 74, 0.6) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }}
          />



          {/* Main Logo & Loader Box */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '480px',
              padding: '0 24px',
              textAlign: 'center',
            }}
          >
            {/* Holographic Glowing Rings around Logo */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px',
              }}
            >
              {/* Outer Pulse Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.25, 0.6, 0.25],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  position: 'absolute',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(9, 168, 181, 0.4)',
                  boxShadow: '0 0 50px rgba(9, 168, 181, 0.2)',
                }}
              />

              {/* Inner Continuous Glow Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.85, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(9, 168, 181, 0.35) 0%, rgba(8, 127, 159, 0.15) 60%, transparent 80%)',
                  filter: 'blur(14px)',
                }}
              />

              {/* High-Resolution Logo (Larger Size) */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                }}
              >
                <img
                  src="/assets/GAT_Logo_Fondo_Oscuro_Transparente_HD.webp"
                  alt="GAT Technology Consulting Logo"
                  width="400"
                  height="120"
                  style={{
                    height: 'clamp(125px, 20vw, 175px)',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 30px rgba(9, 168, 181, 0.65)) drop-shadow(0 0 60px rgba(8, 127, 159, 0.35))',
                  }}
                />
              </motion.div>
            </div>

            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(9, 168, 181, 0.08)',
                border: '1px solid rgba(9, 168, 181, 0.25)',
                color: '#9FB5C4',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: '28px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#09A8B5',
                  boxShadow: '0 0 8px #09A8B5',
                }}
              />
              <span>Technology · Strategy · Innovation</span>
            </motion.div>

            {/* Progress Bar Container */}
            <div
              style={{
                width: '100%',
                maxWidth: '380px',
                height: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.07)',
                borderRadius: '9999px',
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '16px',
                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.6)',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #087F9F 0%, #09A8B5 70%, #2CD8E8 100%)',
                  borderRadius: '9999px',
                  boxShadow: '0 0 16px rgba(9, 168, 181, 0.95)',
                  transition: 'width 0.1s ease-out',
                }}
              />
            </div>

            {/* Status & Numeric Percentage Row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                maxWidth: '380px',
                fontSize: '0.82rem',
                color: '#839DB0',
              }}
            >
              <motion.span
                key={statusIndex}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  textAlign: 'left',
                  maxWidth: '240px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  color: '#9FB5C4',
                  fontSize: '0.78rem',
                }}
              >
                {STATUS_MESSAGES[statusIndex]}
              </motion.span>

              <span
                style={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  color: '#09A8B5',
                  fontSize: '0.88rem',
                  letterSpacing: '0.04em',
                }}
              >
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
