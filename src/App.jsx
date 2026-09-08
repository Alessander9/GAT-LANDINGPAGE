import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { setPageSeo } from './hooks/useSeoMeta';
import StaggeredMenu from './components/StaggeredMenu';
import DesktopNavbar from './components/DesktopNavbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import LoadingScreen from './components/LoadingScreen';
import FloatingFAB from './components/FloatingFAB';
import { ShiftingDropDown } from './components/ui/shifting-dropdown';
import { getWhatsAppUrl } from './config/contact';

// Lazy load below-the-fold components and subpages for lightning-fast initial load
const FeaturedServices = lazy(() => import('./components/FeaturedServices'));
const Services = lazy(() => import('./components/Services'));
const ProprietarySystems = lazy(() => import('./components/ProprietarySystems'));
const Footer = lazy(() => import('./components/Footer'));
const ServiceDetailPage = lazy(() => import('./components/ServiceDetailPage'));
const AboutUsPage = lazy(() => import('./components/AboutUsPage'));
const AllServicesPage = lazy(() => import('./components/AllServicesPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));

export default function App() {
  const { scrollTo, scrollToTop } = useSmoothScroll();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState('');
  const [prefilledRoi, setPrefilledRoi] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  // Lock scroll while loading screen is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // SEO: actualiza title, description y canonical según la ruta activa
  useEffect(() => {
    if (currentRoute === '#nosotros') {
      setPageSeo('nosotros');
    } else if (
      currentRoute === '#contacto' ||
      currentRoute === '#contacto-page' ||
      currentRoute === '#contactanos'
    ) {
      setPageSeo('contacto');
    } else if (
      currentRoute === '#servicios-todos' ||
      currentRoute === '#servicios-page' ||
      currentRoute === '#catalogo-servicios' ||
      currentRoute === '#todos-los-servicios' ||
      currentRoute === '#soluciones' ||
      currentRoute === '#soluciones-todos'
    ) {
      setPageSeo('servicios');
    } else if (currentRoute.startsWith('#servicio/')) {
      const slug = currentRoute.replace('#servicio/', '').split('?')[0];
      setPageSeo(slug);
    } else {
      setPageSeo('home');
    }
  }, [currentRoute]);

  const isSubpageRoute = (route) => {
    return (
      route === '#nosotros' ||
      route === '#contacto' ||
      route === '#contacto-page' ||
      route === '#contactanos' ||
      route === '#servicios-todos' ||
      route === '#servicios-page' ||
      route === '#catalogo-servicios' ||
      route === '#todos-los-servicios' ||
      route === '#soluciones' ||
      route === '#soluciones-todos' ||
      route.startsWith('#servicio/')
    );
  };

  const handleNavigate = (targetId) => {
    if (targetId === '#metodologia') {
      window.location.hash = '#nosotros';
      setCurrentRoute('#nosotros');
      setTimeout(() => {
        const el = document.getElementById('metodologia');
        if (el) {
          scrollTo('#metodologia');
        } else {
          scrollToTop(true);
        }
      }, 150);
      return;
    }

    if (isSubpageRoute(targetId)) {
      window.location.hash = targetId;
      setCurrentRoute(targetId);
      scrollToTop(true); // Instant — subpage navigation
      return;
    }

    if (isSubpageRoute(currentRoute)) {
      window.location.hash = targetId;
      setCurrentRoute(targetId);
      setTimeout(() => {
        scrollTo(targetId);
      }, 100);
      return;
    }

    scrollTo(targetId);
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    window.location.hash = '#contacto';
    setCurrentRoute('#contacto');
    scrollToTop(true);
  };

  const handleNavigateToServiceSubpage = (serviceSlug) => {
    const targetHash = `#servicio/${serviceSlug}`;
    window.location.hash = targetHash;
    setCurrentRoute(targetHash);
    scrollToTop(true);
  };

  // Content router
  const renderCurrentRoute = () => {
    // Dedicated Contact Subpage Route
    if (
      currentRoute === '#contacto' ||
      currentRoute === '#contacto-page' ||
      currentRoute === '#contactanos'
    ) {
      return (
        <ContactPage
          prefilledService={selectedService}
          prefilledData={prefilledRoi}
          onNavigateHome={() => {
            window.location.hash = '';
            setCurrentRoute('');
            scrollToTop(true);
          }}
        />
      );
    }

    // Dedicated All Services Catalog Subpage Route
    if (
      currentRoute === '#servicios-todos' ||
      currentRoute === '#servicios-page' ||
      currentRoute === '#catalogo-servicios' ||
      currentRoute === '#todos-los-servicios' ||
      currentRoute === '#soluciones' ||
      currentRoute === '#soluciones-todos'
    ) {
      return (
        <AllServicesPage
          onNavigateHome={() => {
            window.location.hash = '';
            setCurrentRoute('');
            scrollToTop(true);
          }}
          onNavigateContact={() => {
            window.location.hash = '#contacto';
            setCurrentRoute('#contacto');
            scrollToTop(true);
          }}
          onNavigateToServiceDetail={(slug) => {
            handleNavigateToServiceSubpage(slug);
          }}
          onSelectServiceForContact={(serviceTitle) => {
            setSelectedService(serviceTitle);
            window.location.hash = '#contacto';
            setCurrentRoute('#contacto');
            scrollToTop(true);
          }}
        />
      );
    }

    // Dedicated About Us Subpage Route
    if (currentRoute === '#nosotros') {
      return (
        <AboutUsPage
          onNavigateHome={() => {
            window.location.hash = '';
            setCurrentRoute('');
            scrollToTop(true);
          }}
          onNavigateContact={() => {
            window.location.hash = '#contacto';
            setCurrentRoute('#contacto');
            scrollToTop(true);
          }}
          onSelectService={(serviceTitle) => {
            setSelectedService(serviceTitle);
            window.location.hash = '#contacto';
            setCurrentRoute('#contacto');
            scrollToTop(true);
          }}
        />
      );
    }

    // Dedicated Service Subpage Route
    if (currentRoute.startsWith('#servicio/')) {
      const serviceSlug = currentRoute.replace('#servicio/', '').split('?')[0] || 'landing-page';
      return (
        <ServiceDetailPage
          serviceSlug={serviceSlug}
          onNavigateHome={() => {
            window.location.hash = '#servicios';
            setCurrentRoute('#servicios');
            setTimeout(() => {
              scrollTo('#servicios');
            }, 100);
          }}
          onSelectServiceForContact={(serviceTitle) => {
            setSelectedService(serviceTitle);
            window.location.hash = '#contacto';
            setCurrentRoute('#contacto');
            scrollToTop(true);
          }}
        />
      );
    }

    // Default Home Page View (Form removed and moved to #contacto subpage)
    return (
      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Pinned Sticky Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* Elevated Content Sheet Layer */}
        <div className="content-reveal-layer">
          <MetricsBar />
          {/* Seccion de Servicios Destacados con Video Carousel Automatico */}
          <FeaturedServices
            onSelectService={handleSelectService}
            onNavigateToServiceSubpage={handleNavigateToServiceSubpage}
          />
          <Services
            onSelectService={handleSelectService}
            onNavigateToServiceSubpage={handleNavigateToServiceSubpage}
          />

          {/* Sección de Sistemas Propios 100% GAT en Lenguaje Sencillo */}
          <ProprietarySystems onSelectService={handleSelectService} />

          {/* Calculadora de Impacto Financiero comentada a petición */}
          {/* <RoiCalculator onConsultRoi={handleConsultRoi} /> */}

          {/* Ecosistema Tecnológico & Estándares comentado a petición */}
          {/* <TechStack /> */}
        </div>
      </main>
    );
  };

  return (
    <div className="app-container">
      {/* Brand Loading Screen Preloader — isolated at the highest level */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      {/* Global Persistent Fullscreen Ambient Background */}
      <div className="global-ambient-bg">
        <div className="global-ambient-orb global-ambient-orb-1" />
        <div className="global-ambient-orb global-ambient-orb-2" />
        <div className="global-ambient-orb global-ambient-orb-3" />
        <div className="global-ambient-grid" />
      </div>

      {/* ──── DYNAMIC NAVBAR ROUTING ────
          • Dedicated Service Subpages (#servicio/:slug) => Uses ShiftingDropDown Navbar
          • Index, Metodología, Casos, Nosotros, Contacto, Soluciones => Uses StaggeredMenu
      */}
      {!isLoading && (
        currentRoute.startsWith('#servicio/') ? (
          <ShiftingDropDown
            currentSlug={currentRoute.replace('#servicio/', '').split('?')[0]}
            onNavigateHome={() => {
              window.location.hash = '';
              setCurrentRoute('');
              scrollToTop(true);
            }}
            onNavigateService={handleNavigateToServiceSubpage}
            onNavigateContact={() => handleNavigate('#contacto')}
            onNavigateCatalog={() => handleNavigate('#servicios-todos')}
            onNavigateAbout={() => handleNavigate('#nosotros')}
            onNavigateMethodology={() => handleNavigate('#metodologia')}
          />
        ) : (
          <>
            {/* Desktop Classic Minimalist Navbar (Active on screens >= 1024px) */}
            <DesktopNavbar
              onNavigate={handleNavigate}
              currentRoute={currentRoute}
            />

            {/* Mobile Staggered Menu (Unchanged, Active on screens < 1024px) */}
            <StaggeredMenu
              className="gat-mobile-only"
              position="right"
              colors={['#087F9F', '#0C1E2E', '#09A8B5']}
              accentColor="#09A8B5"
              menuButtonColor="#FFFFFF"
              openMenuButtonColor="#FFFFFF"
              displayItemNumbering={true}
              displaySocials={true}
              logoUrl="/assets/GAT_Logo_Fondo_Oscuro_Transparente_HD.png"
              onMenuOpen={() => setIsNavOpen(true)}
              onMenuClose={() => setIsNavOpen(false)}
              onCtaClick={() => handleNavigate('#contacto')}
              items={[
                { label: 'Inicio', ariaLabel: 'Ir al inicio', link: '#hero', onNavigate: handleNavigate },
                { label: 'Soluciones', ariaLabel: 'Ver todas las soluciones', link: '#servicios-todos', onNavigate: handleNavigate },
                { label: 'Nosotros', ariaLabel: 'Nosotros - GAT Technology', link: '#nosotros', onNavigate: handleNavigate },
                { label: 'Contacto', ariaLabel: 'Contáctanos', link: '#contacto', onNavigate: handleNavigate },
              ]}
              socialItems={[
                { label: 'WhatsApp', link: getWhatsAppUrl() },
              ]}
            />
          </>
        )
      )}

      {/* Dynamic Page Content */}
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            {renderCurrentRoute()}
          </Suspense>
        </div>

        {/* ──── GLOBAL COMPONENTIZED FOOTER (PERSISTENT ACROSS HOME & ALL SUBPAGES) ──── */}
        <Suspense fallback={null}>
          <Footer onNavigate={handleNavigate} />
        </Suspense>
      </div>

      {/* Floating Action Button (Chatbot IA & WhatsApp) */}
      {!isLoading && (
        <FloatingFAB
          isHidden={isNavOpen}
          onNavigateContact={() => handleNavigate('#contacto')}
          onNavigateService={handleNavigateToServiceSubpage}
        />
      )}
    </div>
  );
}
