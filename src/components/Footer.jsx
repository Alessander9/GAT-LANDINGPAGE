import React from 'react';
import { ShieldCheck, ArrowUp, Mail, Globe } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    if (onNavigate) {
      onNavigate('#hero');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        background: 'rgba(7, 21, 33, 0.65)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(9, 168, 181, 0.2)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
            marginBottom: '60px',
          }}
        >
          {/* Column 1: Brand & Identity */}
          <div style={{ maxWidth: '320px' }}>
            <img
              src="/assets/GAT_Logo_Fondo_Oscuro_Transparente_HD.png"
              alt="GAT Technology Consulting"
              style={{
                height: '46px',
                width: 'auto',
                marginBottom: '18px',
              }}
            />
            <div style={{ fontSize: '0.85rem', color: '#09A8B5', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Technology · Strategy · Innovation
            </div>
            <p style={{ fontSize: '0.88rem', color: '#8CA5B5', lineHeight: 1.6, marginBottom: '20px' }}>
              Consultoría tecnológica de nivel superior. Diseñamos arquitecturas resilientes y hojas de ruta estratégicas para líderes empresariales.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: '8px', background: 'rgba(9, 168, 181, 0.08)', border: '1px solid rgba(9, 168, 181, 0.2)', width: 'fit-content' }}>
              <span className="tech-badge-dot" />
              <span style={{ fontSize: '0.78rem', color: '#09A8B5', fontWeight: 600 }}>Sistemas 100% Operacionales</span>
            </div>
          </div>

          {/* Column 2: Servicios */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.02em' }}>
              Capacidades
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#servicios" onClick={(e) => { e.preventDefault(); onNavigate('#servicios'); }} style={{ fontSize: '0.88rem', color: '#8CA5B5', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#09A8B5'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CA5B5'}>
                Arquitectura Cloud & Kubernetes
              </a>
              <a href="#servicios" onClick={(e) => { e.preventDefault(); onNavigate('#servicios'); }} style={{ fontSize: '0.88rem', color: '#8CA5B5', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#09A8B5'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CA5B5'}>
                Inteligencia Artificial & Data Lake
              </a>
              <a href="#servicios" onClick={(e) => { e.preventDefault(); onNavigate('#servicios'); }} style={{ fontSize: '0.88rem', color: '#8CA5B5', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#09A8B5'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CA5B5'}>
                Ciberseguridad Zero-Trust
              </a>
              <a href="#servicios" onClick={(e) => { e.preventDefault(); onNavigate('#servicios'); }} style={{ fontSize: '0.88rem', color: '#8CA5B5', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#09A8B5'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CA5B5'}>
                Modernización de Sistemas Legados
              </a>
              <a href="#servicios" onClick={(e) => { e.preventDefault(); onNavigate('#servicios'); }} style={{ fontSize: '0.88rem', color: '#8CA5B5', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#09A8B5'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CA5B5'}>
                Dirección Tecnológica vCTO
              </a>
            </div>
          </div>

          {/* Column 3: Framework & Metodología */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.02em' }}>
              Navegación
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#nosotros" onClick={(e) => { e.preventDefault(); onNavigate('#nosotros'); }} style={{ fontSize: '0.88rem', color: '#8CA5B5', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#09A8B5'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CA5B5'}>
                Sobre Nosotros & Video Manifiesto
              </a>
              <a href="#metodologia" onClick={(e) => { e.preventDefault(); onNavigate('#metodologia'); }} style={{ fontSize: '0.88rem', color: '#8CA5B5', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#09A8B5'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CA5B5'}>
                El Método GAT (4 Fases)
              </a>
              <a href="#calculadora" onClick={(e) => { e.preventDefault(); onNavigate('#calculadora'); }} style={{ fontSize: '0.88rem', color: '#8CA5B5', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#09A8B5'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CA5B5'}>
                Calculadora de ROI Cloud
              </a>
              <a href="#casos" onClick={(e) => { e.preventDefault(); onNavigate('#casos'); }} style={{ fontSize: '0.88rem', color: '#8CA5B5', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#09A8B5'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CA5B5'}>
                Casos de Éxito & Resultados
              </a>
              <a href="#tech" onClick={(e) => { e.preventDefault(); onNavigate('#tech'); }} style={{ fontSize: '0.88rem', color: '#8CA5B5', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#09A8B5'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CA5B5'}>
                Ecosistema y Cumplimiento
              </a>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); onNavigate('#contacto'); }} style={{ fontSize: '0.88rem', color: '#8CA5B5', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#09A8B5'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CA5B5'}>
                Agendar Diagnóstico Gratuito
              </a>
            </div>
          </div>

          {/* Column 4: Contacto & Back to top */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.02em' }}>
              Oficinas & Alianzas
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#8CA5B5', lineHeight: 1.6, marginBottom: '14px' }}>
              Atención ejecutiva para proyectos en Norteamérica, Latinoamérica y Europa.
            </p>

            <a
              href="https://wa.me/51925229293?text=Hola%20GAT%20Technology%20Consulting%2C%20quisiera%20recibir%20asesor%C3%ADa%20y%20cotizar%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '12px',
                background: 'rgba(34, 197, 94, 0.12)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                color: '#22C55E',
                fontSize: '0.84rem',
                fontWeight: 700,
                marginBottom: '20px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(34, 197, 94, 0.22)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(34, 197, 94, 0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>WhatsApp: +51 925 229 293</span>
            </a>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
              {/* LinkedIn SVG */}
              <a
                href="#"
                aria-label="LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(213, 232, 236, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C3D6E0',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#09A8B5'; e.currentTarget.style.borderColor = '#09A8B5'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#C3D6E0'; e.currentTarget.style.borderColor = 'rgba(213, 232, 236, 0.15)'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* X / Twitter SVG */}
              <a
                href="#"
                aria-label="X Twitter"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(213, 232, 236, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C3D6E0',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#09A8B5'; e.currentTarget.style.borderColor = '#09A8B5'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#C3D6E0'; e.currentTarget.style.borderColor = 'rgba(213, 232, 236, 0.15)'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>

              {/* GitHub SVG */}
              <a
                href="#"
                aria-label="GitHub"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(213, 232, 236, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C3D6E0',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#09A8B5'; e.currentTarget.style.borderColor = '#09A8B5'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#C3D6E0'; e.currentTarget.style.borderColor = 'rgba(213, 232, 236, 0.15)'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'rgba(9, 168, 181, 0.1)',
                border: '1px solid rgba(9, 168, 181, 0.25)',
                color: '#09A8B5',
                fontSize: '0.82rem',
                fontWeight: 600,
              }}
            >
              <span>Volver arriba</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(213, 232, 236, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.82rem',
            color: '#6F8B9C',
          }}
        >
          <div>
            © {new Date().getFullYear()} GAT Technology Consulting. Todos los derechos reservados.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#6F8B9C' }}>Política de Privacidad</a>
            <a href="#" style={{ color: '#6F8B9C' }}>Términos de Servicio</a>
            <a href="#" style={{ color: '#6F8B9C' }}>Seguridad de la Información</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
