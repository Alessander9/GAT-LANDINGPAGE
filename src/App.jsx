import React, { useState, useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useSeoMeta } from './hooks/useSeoMeta';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import Services from './components/Services';
import Methodology from './components/Methodology';
// import RoiCalculator from './components/RoiCalculator';
// import TechStack from './components/TechStack';
import CaseStudies from './components/CaseStudies';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import FeaturedServices from './components/FeaturedServices';
import ServiceDetailPage from './components/ServiceDetailPage';
import AboutUsPage from './components/AboutUsPage';
import PrismGradient from './components/ui/PrismGradient';
import FloatingFAB from './components/FloatingFAB';

export default function App() {
  const { scrollTo } = useSmoothScroll();
  const [selectedService, setSelectedService] = useState('');
  const [prefilledRoi, setPrefilledRoi] = useState(null);
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
    } else if (currentRoute.startsWith('#servicio/')) {
      const slug = currentRoute.replace('#servicio/', '').split('?')[0];
      useSeoMeta(slug);
    } else {
      useSeoMeta('home');
    }
  }, [currentRoute]);

  const handleNavigate = (targetId) => {
    if (targetId.startsWith('#servicio/') || targetId === '#nosotros') {
      window.location.hash = targetId;
      setCurrentRoute(targetId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentRoute.startsWith('#servicio/') || currentRoute === '#nosotros') {
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

        {/* Modern Floating Navbar with Aceternity Menu Dropdowns */}
        <Navbar onNavigate={handleNavigate} />

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
            {/* Branded Footer */}
            <Footer onNavigate={handleNavigate} />
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

      {/* Interactive Fluid Cursor */}
      <CustomCursor />

      {/* Dynamic Page Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {renderCurrentRoute()}
      </div>

      {/* Floating Action Button (Chatbot IA & WhatsApp) */}
      <FloatingFAB
        onNavigateContact={() => handleNavigate('#contacto')}
        onNavigateService={handleNavigateToServiceSubpage}
      />
    </div>
  );
}
