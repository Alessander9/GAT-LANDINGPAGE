import React from 'react';
import { ArrowLeft, Home, RefreshCw, AlertTriangle, ShieldAlert, Terminal, Compass } from 'lucide-react';
import ScrollExpand from './ui/ScrollExpand';
import PrismGradient from './ui/PrismGradient';

export default function ErrorPage({ onGoHome, errorCode = '404', errorMessage = 'Ruta no encontrada en el clúster' }) {
  const handleHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div
      className="gat-error-page-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#071521',
        color: '#FFFFFF',
        overflowX: 'hidden',
      }}
    >
      <ScrollExpand
        useWindowScroll
        title={
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div
              className="tech-badge"
              style={{
                borderColor: 'rgba(239, 68, 68, 0.4)',
                background: 'rgba(239, 68, 68, 0.1)',
                color: '#F87171',
              }}
            >
              <span
                className="tech-badge-dot"
                style={{ background: '#EF4444', boxShadow: '0 0 8px #EF4444' }}
              />
              <span>INCIDENTE DE RED · CÓDIGO {errorCode}</span>
            </div>
            <div style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>
              Recurso No Encontrado
            </div>
            <p style={{ color: '#A0B8C8', fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)', maxWidth: '520px' }}>
              El nodo al que intentas acceder no responde o ha sido migrado dentro de la arquitectura.
            </p>
          </div>
        }
        scrollHint="Desliza para diagnosticar el incidente"
        startWidth={48}
        startHeight={62}
        startRadius={28}
        endRadius={0}
        mediaZoom={1.2}
        scrollDistance={1.3}
        holdDistance={0.25}
        smoothing={0.12}
        overlayScrim={0.65}
        customMedia={
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Custom Prism Shader with Red & Tech Cyan Glitch Accent */}
            <PrismGradient
              colors={['#071521', '#09A8B5', '#12324A']}
              speed={0.6}
              noise={{ opacity: 0.22, scale: 0.9 }}
              swirl={55}
              softness={40}
              shapeSize={50}
            />

            {/* Error Ambient Backlight */}
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '25%',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(9, 168, 181, 0.08) 50%, transparent 70%)',
                filter: 'blur(50px)',
                pointerEvents: 'none',
              }}
            />
          </div>
        }
      >
        {/* Overlay Content after expansion */}
        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '80px 24px 60px 24px',
            boxSizing: 'border-box',
          }}
        >
          {/* Logo Brand Header */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
            <img
              src="/assets/GAT_Logo_Fondo_Oscuro_Transparente_HD.png"
              alt="GAT Technology Consulting"
              style={{
                height: '52px',
                width: 'auto',
                filter: 'drop-shadow(0 0 20px rgba(9, 168, 181, 0.5))',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '36px',
              alignItems: 'center',
            }}
            className="error-grid"
          >
            {/* Left: Error Details & Diagnostics */}
            <div style={{ textAlign: 'left', maxWidth: '580px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#F87171',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '18px',
                }}
              >
                <AlertTriangle size={15} color="#EF4444" />
                <span>ESTADO: 404 NOT_FOUND</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
                  lineHeight: 1.12,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '18px',
                  letterSpacing: '-0.03em',
                }}
              >
                La ruta solicitada no forma parte de la <span className="text-gradient-brand">Topología Actual</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.08rem)',
                  color: '#B4CAD6',
                  lineHeight: 1.65,
                  marginBottom: '32px',
                }}
              >
                {errorMessage}. Hemos registrado el evento en nuestros logs de auditoría Zero Trust. Puedes regresar al centro de mando principal o explorar nuestras soluciones cloud.
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '14px',
                  alignItems: 'center',
                }}
              >
                <button
                  onClick={handleHome}
                  className="btn-primary"
                  style={{
                    padding: '14px 28px',
                    fontSize: '0.95rem',
                    gap: '10px',
                  }}
                >
                  <Home size={18} />
                  <span>Volver a la Plataforma Principal</span>
                </button>

                <button
                  onClick={() => window.location.reload()}
                  className="btn-secondary"
                  style={{
                    padding: '14px 24px',
                    fontSize: '0.95rem',
                    gap: '8px',
                  }}
                >
                  <RefreshCw size={17} />
                  <span>Reintentar Conexión</span>
                </button>
              </div>
            </div>

            {/* Right: Technical Telemetry Incident Box */}
            <div style={{ position: 'relative' }}>
              <div
                className="glass-card"
                style={{
                  padding: '24px 28px',
                  border: '1px solid rgba(9, 168, 181, 0.3)',
                  background: 'linear-gradient(145deg, rgba(18, 50, 74, 0.9) 0%, rgba(11, 30, 45, 0.98) 100%)',
                  boxShadow: '0 20px 50px rgba(7, 18, 28, 0.8), 0 0 30px rgba(239, 68, 68, 0.15)',
                  textAlign: 'left',
                }}
              >
                {/* Console Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '14px',
                    borderBottom: '1px solid rgba(213, 232, 236, 0.12)',
                    marginBottom: '18px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Terminal size={16} color="#09A8B5" />
                    <span style={{ fontSize: '0.78rem', color: '#9FB5C4', fontFamily: 'monospace' }}>
                      gat-sys-diagnostics.log
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      color: '#EF4444',
                      background: 'rgba(239, 68, 68, 0.12)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontWeight: 600,
                    }}
                  >
                    FAILED_ROUTE
                  </div>
                </div>

                {/* Simulated Stack Trace & Diagnostics */}
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    lineHeight: 1.6,
                    color: '#9FB5C4',
                    background: 'rgba(7, 18, 28, 0.7)',
                    padding: '16px',
                    borderRadius: '10px',
                    border: '1px solid rgba(213, 232, 236, 0.08)',
                    marginBottom: '20px',
                  }}
                >
                  <div style={{ color: '#10B981' }}>&gt; Checking cluster DNS routing... OK</div>
                  <div style={{ color: '#10B981' }}>&gt; Zero-Trust Firewall validation... PASSED</div>
                  <div style={{ color: '#EF4444' }}>&gt; Target URI route: [NULL_POINTER_EXCEPTION]</div>
                  <div style={{ color: '#F59E0B' }}>&gt; Fallback mesh route: Active to "/" (Home)</div>
                </div>

                {/* Health Metrics Summary */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(9, 168, 181, 0.18)',
                      borderRadius: '10px',
                      padding: '12px 14px',
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', color: '#8BA5B5', marginBottom: '4px' }}>Cluster Core</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#10B981' }}>100% Online</div>
                  </div>

                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(9, 168, 181, 0.18)',
                      borderRadius: '10px',
                      padding: '12px 14px',
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', color: '#8BA5B5', marginBottom: '4px' }}>Seguridad</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#09A8B5' }}>Zero-Trust Armed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollExpand>

      <style>{`
        @media (min-width: 992px) {
          .error-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </div>
  );
}
