import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, HoveredLink, ProductItem } from './ui/navbar-menu';
import {
  Globe,
  Layers,
  Smartphone,
  Apple,
  Shield,
  Brain,
  Bot,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  Menu as MenuIcon,
  X,
} from 'lucide-react';

export default function Navbar({ onNavigate, className = '' }) {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isInFeaturedSection, setIsInFeaturedSection] = useState(false);

  useEffect(() => {
    const checkFeaturedSection = () => {
      const section = document.getElementById('servicios-destacados');
      if (!section) {
        setIsInFeaturedSection(false);
        return;
      }
      const rect = section.getBoundingClientRect();
      // Section is active in viewport when its top has reached near top and bottom has not passed above
      const isInside = rect.top <= 60 && rect.bottom > 80;
      setIsInFeaturedSection(isInside);
    };

    window.addEventListener('scroll', checkFeaturedSection, { passive: true });
    window.addEventListener('resize', checkFeaturedSection);
    checkFeaturedSection();

    return () => {
      window.removeEventListener('scroll', checkFeaturedSection);
      window.removeEventListener('resize', checkFeaturedSection);
    };
  }, []);

  const handleNav = (targetId) => {
    setActive(null);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(targetId);
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: '16px',
          left: 0,
          right: 0,
          zIndex: 999,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 16px',
          pointerEvents: 'none',
          opacity: isInFeaturedSection ? 0 : 1,
          transform: isInFeaturedSection ? 'translateY(-110px)' : 'translateY(0)',
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className={className}
      >
        <div style={{ pointerEvents: isInFeaturedSection ? 'none' : 'auto', width: '100%', maxWidth: '1150px' }}>
          <Menu setActive={setActive}>
            {/* Logo Section */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#hero');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
              }}
            >
              <img
                src="/assets/GAT_Logo_Fondo_Oscuro_Transparente_HD.png"
                alt="GAT Technology Consulting"
                style={{
                  height: '36px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 8px rgba(9, 168, 181, 0.35))',
                }}
              />
            </a>

            {/* Desktop Nav Links / Dropdown Items */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              className="navbar-menu-items"
            >
              {/* Servicios Dropdown (7 Subpáginas Dedicadas) */}
              <MenuItem setActive={setActive} active={active} item="Servicios">
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 270px)',
                    gap: '10px',
                  }}
                >
                  <HoveredLink
                    href="#servicio/landing-page"
                    onClick={() => handleNav('#servicio/landing-page')}
                    icon={Globe}
                  >
                    Landing Page & Web
                  </HoveredLink>

                  <HoveredLink
                    href="#servicio/app-web"
                    onClick={() => handleNav('#servicio/app-web')}
                    icon={Layers}
                  >
                    App Web & SaaS
                  </HoveredLink>

                  <HoveredLink
                    href="#servicio/app-android"
                    onClick={() => handleNav('#servicio/app-android')}
                    icon={Smartphone}
                  >
                    App Android Nativa
                  </HoveredLink>

                  <HoveredLink
                    href="#servicio/app-ios"
                    onClick={() => handleNav('#servicio/app-ios')}
                    icon={Apple}
                  >
                    App iOS & Apple
                  </HoveredLink>

                  <HoveredLink
                    href="#servicio/ciberseguridad"
                    onClick={() => handleNav('#servicio/ciberseguridad')}
                    icon={Shield}
                  >
                    Ciberseguridad Zero Trust
                  </HoveredLink>

                  <HoveredLink
                    href="#servicio/automatizaciones-ia"
                    onClick={() => handleNav('#servicio/automatizaciones-ia')}
                    icon={Brain}
                  >
                    Automatizaciones con IA
                  </HoveredLink>

                  <HoveredLink
                    href="#servicio/asistente-ia"
                    onClick={() => handleNav('#servicio/asistente-ia')}
                    icon={Bot}
                  >
                    Asistente de IA & Chatbots
                  </HoveredLink>

                  <HoveredLink
                    href="#servicios"
                    onClick={() => handleNav('#servicios')}
                    icon={Compass}
                  >
                    Ver Todas las Capacidades
                  </HoveredLink>
                </div>
              </MenuItem>

              {/* Casos de Éxito Dropdown with Clickable Preview Cards */}
              <MenuItem setActive={setActive} active={active} item="Casos & Soluciones">
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 280px)',
                    gap: '14px',
                  }}
                >
                  <ProductItem
                    title="FinTech Multi-Cloud"
                    description="Migración a microservicios en Kubernetes con 99.999% SLA."
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80"
                    tag="99.999% SLA"
                    onClick={() => handleNav('#casos')}
                  />
                  <ProductItem
                    title="IA en Supply Chain"
                    description="Enrutamiento predictivo y balance de inventario en tiempo real."
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80"
                    tag="-22% Costos"
                    onClick={() => handleNav('#casos')}
                  />
                  <ProductItem
                    title="HealthTech Zero Trust"
                    description="Blindaje de datos de salud y auditoría automatizada ISO 27001."
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=80"
                    tag="SOC2 Ready"
                    onClick={() => handleNav('#casos')}
                  />
                  <ProductItem
                    title="Arquitectura de Datos"
                    description="Data Lakes escalables y analítica para líderes globales."
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80"
                    tag="Real-Time"
                    onClick={() => handleNav('#casos')}
                  />
                </div>
              </MenuItem>

              {/* Metodología & Proceso Dropdown */}
              <MenuItem setActive={setActive} active={active} item="Metodología">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    minWidth: '240px',
                  }}
                >
                  <HoveredLink
                    href="#metodologia"
                    onClick={() => handleNav('#metodologia')}
                    icon={Layers}
                  >
                    El Método GAT (4 Fases)
                  </HoveredLink>
                  <HoveredLink
                    href="#servicios-destacados"
                    onClick={() => handleNav('#servicios-destacados')}
                    icon={CheckCircle2}
                  >
                    Ruta de Desarrollo Ágil
                  </HoveredLink>
                  <HoveredLink
                    href="#contacto"
                    onClick={() => handleNav('#contacto')}
                    icon={Compass}
                  >
                    Sesión de Diagnóstico 360°
                  </HoveredLink>
                </div>
              </MenuItem>

              {/* Nosotros Direct Link */}
              <a
                href="#nosotros"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('#nosotros');
                }}
                style={{
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: '#C3D6E0',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#09A8B5';
                  e.currentTarget.style.background = 'rgba(9, 168, 181, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#C3D6E0';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Nosotros
              </a>
            </div>

            {/* Right Action CTA Button & Mobile Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => handleNav('#contacto')}
                className="btn-primary desktop-nav-cta"
                style={{
                  padding: '8px 16px',
                  fontSize: '0.82rem',
                  borderRadius: '9999px',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>Diagnóstico Gratis</span>
                <ArrowUpRight size={14} />
              </button>

              {/* Hamburger Button on Mobile */}
              <button
                className="mobile-hamburger-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir Menú"
                style={{
                  background: 'rgba(9, 168, 181, 0.15)',
                  border: '1px solid rgba(9, 168, 181, 0.4)',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  width: '38px',
                  height: '38px',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                {mobileMenuOpen ? <X size={20} color="#09A8B5" /> : <MenuIcon size={20} color="#09A8B5" />}
              </button>
            </div>
          </Menu>
        </div>
      </header>

      {/* ──── MOBILE FULLSCREEN GLASS DRAWER ──── */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            background: 'rgba(7, 21, 33, 0.96)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            padding: '80px 24px 32px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ fontSize: '0.75rem', color: '#8CA5B5', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
              Navegación Principal
            </div>

            {/* Servicios Accordion */}
            <div style={{ borderBottom: '1px solid rgba(213, 232, 236, 0.1)', paddingBottom: '12px' }}>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'none',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  padding: '8px 0',
                  cursor: 'pointer',
                }}
              >
                <span>Servicios & Especialidades</span>
                <span style={{ fontSize: '1rem', color: '#09A8B5' }}>{mobileServicesOpen ? '−' : '+'}</span>
              </button>

              {mobileServicesOpen && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', marginTop: '10px', paddingLeft: '8px' }}>
                  <a
                    href="#servicio/landing-page"
                    onClick={(e) => { e.preventDefault(); handleNav('#servicio/landing-page'); }}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D5E8EC', textDecoration: 'none', fontSize: '0.95rem', padding: '6px 0' }}
                  >
                    <Globe size={16} color="#09A8B5" />
                    <span>Landing Page & Web</span>
                  </a>
                  <a
                    href="#servicio/app-web"
                    onClick={(e) => { e.preventDefault(); handleNav('#servicio/app-web'); }}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D5E8EC', textDecoration: 'none', fontSize: '0.95rem', padding: '6px 0' }}
                  >
                    <Layers size={16} color="#2CD8E8" />
                    <span>App Web & SaaS</span>
                  </a>
                  <a
                    href="#servicio/app-android"
                    onClick={(e) => { e.preventDefault(); handleNav('#servicio/app-android'); }}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D5E8EC', textDecoration: 'none', fontSize: '0.95rem', padding: '6px 0' }}
                  >
                    <Smartphone size={16} color="#5C9DFF" />
                    <span>App Android</span>
                  </a>
                  <a
                    href="#servicio/app-ios"
                    onClick={(e) => { e.preventDefault(); handleNav('#servicio/app-ios'); }}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D5E8EC', textDecoration: 'none', fontSize: '0.95rem', padding: '6px 0' }}
                  >
                    <Apple size={16} color="#00E5FF" />
                    <span>App iOS & Apple</span>
                  </a>
                  <a
                    href="#servicio/ciberseguridad"
                    onClick={(e) => { e.preventDefault(); handleNav('#servicio/ciberseguridad'); }}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D5E8EC', textDecoration: 'none', fontSize: '0.95rem', padding: '6px 0' }}
                  >
                    <Shield size={16} color="#087F9F" />
                    <span>Ciberseguridad Zero Trust</span>
                  </a>
                  <a
                    href="#servicio/automatizaciones-ia"
                    onClick={(e) => { e.preventDefault(); handleNav('#servicio/automatizaciones-ia'); }}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D5E8EC', textDecoration: 'none', fontSize: '0.95rem', padding: '6px 0' }}
                  >
                    <Brain size={16} color="#00E5FF" />
                    <span>Automatizaciones con IA</span>
                  </a>
                  <a
                    href="#servicio/asistente-ia"
                    onClick={(e) => { e.preventDefault(); handleNav('#servicio/asistente-ia'); }}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D5E8EC', textDecoration: 'none', fontSize: '0.95rem', padding: '6px 0' }}
                  >
                    <Bot size={16} color="#09A8B5" />
                    <span>Asistente de IA & Chatbots</span>
                  </a>
                </div>
              )}
            </div>

            <a
              href="#servicios-destacados"
              onClick={(e) => { e.preventDefault(); handleNav('#servicios-destacados'); }}
              style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(213, 232, 236, 0.1)' }}
            >
              Servicios Destacados
            </a>

            <a
              href="#metodologia"
              onClick={(e) => { e.preventDefault(); handleNav('#metodologia'); }}
              style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(213, 232, 236, 0.1)' }}
            >
              Metodología Ágil
            </a>

            <a
              href="#casos"
              onClick={(e) => { e.preventDefault(); handleNav('#casos'); }}
              style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(213, 232, 236, 0.1)' }}
            >
              Casos de Éxito
            </a>

            <a
              href="#nosotros"
              onClick={(e) => { e.preventDefault(); handleNav('#nosotros'); }}
              style={{ color: '#09A8B5', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(213, 232, 236, 0.1)' }}
            >
              Sobre Nosotros
            </a>
          </div>

          <div style={{ marginTop: '24px' }}>
            <button
              onClick={() => handleNav('#contacto')}
              className="btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '1rem', borderRadius: '14px' }}
            >
              <span>Solicitar Diagnóstico Gratis</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .navbar-menu-items {
            display: none !important;
          }
          .desktop-nav-cta {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
