import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useSeoMeta } from './hooks/useSeoMeta';
import StaggeredMenu from './components/StaggeredMenu';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import Services from './components/Services';
import Methodology from './components/Methodology';
import CaseStudies from './components/CaseStudies';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import FeaturedServices from './components/FeaturedServices';
import PrismGradient from './components/ui/PrismGradient';
import FloatingFAB from './components/FloatingFAB';
import { ShiftingDropDown } from './components/ui/shifting-dropdown';
import { getWhatsAppUrl } from './config/contact';

// Lazy load subpages for optimal performance without changing behavior
const ServiceDetailPage = lazy(() => import('./components/ServiceDetailPage'));
const AboutUsPage = lazy(() => import('./components/AboutUsPage'));
const AllServicesPage = lazy(() => import('./components/AllServicesPage'));

export default function App() {
  const { scrollTo } = useSmoothScroll();
  const [selectedService, setSelectedService] = useState('');
  const [prefilledRoi, setPrefilledRoi] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(
    typeof window !== 'undefined' ? window.location.hash : ''
  );

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
      useSeoMeta('nosotros');
    } else if (
      currentRoute === '#servicios-todos' ||
      currentRoute === '#servicios-page' ||
      currentRoute === '#catalogo-servicios' ||
      currentRoute === '#todos-los-servicios' ||
      currentRoute === '#soluciones' ||
      currentRoute === '#soluciones-todos'
    ) {
      useSeoMeta('servicios');
    } else if (currentRoute.startsWith('#servicio/')) {
      const slug = currentRoute.replace('#servicio/', '').split('?')[0];
      useSeoMeta(slug);
    } else {
      useSeoMeta('home');
    }
  }, [currentRoute]);

  const isSubpageRoute = (route) => {
    return (
      route === '#nosotros' ||
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
    if (isSubpageRoute(targetId)) {
      window.location.hash = targetId;
      setCurrentRoute(targetId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    scrollTo('#contacto');
  };

  const handleNavigateToServiceSubpage = (serviceSlug) => {
    const targetHash = `#servicio/${serviceSlug}`;
    window.location.hash = targetHash;
    setCurrentRoute(targetHash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Content router
  const renderCurrentRoute = () => {
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateContact={() => {
            window.location.hash = '#contacto';
            setCurrentRoute('#contacto');
            setTimeout(() => {
              scrollTo('#contacto');
            }, 100);
          }}
          onNavigateToServiceDetail={(slug) => {
            handleNavigateToServiceSubpage(slug);
          }}
          onSelectServiceForContact={(serviceTitle) => {
            setSelectedService(serviceTitle);
            window.location.hash = '#contacto';
            setCurrentRoute('#contacto');
            setTimeout(() => {
              scrollTo('#contacto');
            }, 100);
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateContact={() => {
            window.location.hash = '#contacto';
            setCurrentRoute('#contacto');
            setTimeout(() => {
              scrollTo('#contacto');
            }, 100);
          }}
          onSelectService={(serviceTitle) => {
            setSelectedService(serviceTitle);
            window.location.hash = '#contacto';
            setCurrentRoute('#contacto');
            setTimeout(() => {
              scrollTo('#contacto');
            }, 100);
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
            setTimeout(() => {
              scrollTo('#contacto');
            }, 100);
          }}
        />
      );
    }

    // Default Home Page View
    return (
      <>
        {/* Brand Loading Screen Preloader */}
        <LoadingScreen />

        {/* Main Content */}
        <main style={{ position: 'relative', zIndex: 1 }}>
          {/* Pinned Sticky Hero Section */}
          <Hero onNavigate={handleNavigate} />

          {/* Elevated Content Sheet Layer */}
          <div className="content-reveal-layer">
            <MetricsBar />
            {/* Seccion de Servicios Destacados con Frame Sequence Interactiva */}
            <FeaturedServices onSelectService={handleSelectService} />
            <Services
              onSelectService={handleSelectService}
              onNavigateToServiceSubpage={handleNavigateToServiceSubpage}
            />
            <Methodology onStartProject={handleSelectService} />

            {/* Calculadora de Impacto Financiero comentada a petición */}
            {/* <RoiCalculator onConsultRoi={handleConsultRoi} /> */}

            {/* Ecosistema Tecnológico & Estándares comentado a petición */}
            {/* <TechStack /> */}

            <CaseStudies onSelectCase={handleSelectService} />
            <ContactSection
              prefilledService={selectedService}
              prefilledData={prefilledRoi}
            />
          </div>
        </main>
      </>
    );
  };

  return (
    <div className="app-container">
      {/* Global Persistent Fullscreen WebGL Prism Gradient Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <PrismGradient
          colors={['#071521', '#09A8B5', '#087F9F']}
          speed={0.75}
          noise={{ opacity: 0.16, scale: 0.8 }}
          swirl={45}
          softness={42}
          shapeSize={48}
        />
      </div>


      {/* ──── DYNAMIC NAVBAR ROUTING ────
          • Dedicated Service Subpages (#servicio/:slug) => Uses ShiftingDropDown Navbar
          • Index, Metodología, Casos, Nosotros, Contacto, Soluciones => Uses StaggeredMenu
      */}
      {currentRoute.startsWith('#servicio/') ? (
        <ShiftingDropDown
          currentSlug={currentRoute.replace('#servicio/', '').split('?')[0]}
          onNavigateHome={() => {
            window.location.hash = '';
            setCurrentRoute('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateService={handleNavigateToServiceSubpage}
          onNavigateContact={() => handleNavigate('#contacto')}
          onNavigateCatalog={() => handleNavigate('#servicios-todos')}
          onNavigateAbout={() => handleNavigate('#nosotros')}
          onNavigateMethodology={() => handleNavigate('#metodologia')}
        />
      ) : (
        <StaggeredMenu
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
            { label: 'Metodología', ariaLabel: 'Nuestra metodología ágil', link: '#metodologia', onNavigate: handleNavigate },
            { label: 'Casos', ariaLabel: 'Casos de éxito', link: '#casos', onNavigate: handleNavigate },
            { label: 'Nosotros', ariaLabel: 'Sobre GAT Technology', link: '#nosotros', onNavigate: handleNavigate },
            { label: 'Contacto', ariaLabel: 'Contáctanos', link: '#contacto', onNavigate: handleNavigate },
          ]}
          socialItems={[
            { label: 'LinkedIn', link: 'https://linkedin.com' },
            { label: 'GitHub', link: 'https://github.com' },
            { label: 'WhatsApp', link: getWhatsAppUrl() },
          ]}
        />
      )}

      {/* Dynamic Page Content */}
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            {renderCurrentRoute()}
          </Suspense>
        </div>

        {/* ──── GLOBAL COMPONENTIZED FOOTER (PERSISTENT ACROSS HOME & ALL SUBPAGES) ──── */}
        <Footer onNavigate={handleNavigate} />
      </div>

      {/* Floating Action Button (Chatbot IA & WhatsApp) */}
      <FloatingFAB
        isHidden={isNavOpen}
        onNavigateContact={() => handleNavigate('#contacto')}
        onNavigateService={handleNavigateToServiceSubpage}
      />
    </div>
  );
}
