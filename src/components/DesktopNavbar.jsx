import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/contact';
import './DesktopNavbar.css';

// WhatsApp Custom Icon
function WhatsAppIcon({ size = 19, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M17.472 14.382C17.112 14.202 15.344 13.332 15.014 13.212C14.684 13.092 14.444 13.032 14.204 13.392C13.964 13.752 13.274 14.562 13.064 14.802C12.854 15.042 12.644 15.072 12.284 14.892C11.924 14.712 10.764 14.332 9.38402 13.102C8.30402 12.142 7.57402 10.952 7.36402 10.592C7.15402 10.232 7.34402 10.038 7.52402 9.858C7.68602 9.696 7.88402 9.438 8.06402 9.228C8.24402 9.018 8.30402 8.868 8.42402 8.628C8.54402 8.388 8.48402 8.178 8.39402 7.998C8.30402 7.818 7.58402 6.048 7.28402 5.328C6.99202 4.628 6.69602 4.724 6.47402 4.714C6.26402 4.704 6.02402 4.702 5.78402 4.702C5.54402 4.702 5.15402 4.792 4.82402 5.152C4.49402 5.512 3.56402 6.382 3.56402 8.152C3.56402 9.922 4.85402 11.632 5.03402 11.872C5.21402 12.112 7.57402 15.752 11.194 17.312C12.054 17.684 12.726 17.906 13.25 18.072C14.114 18.346 14.9 18.306 15.522 18.214C16.216 18.11 17.658 17.34 17.958 16.498C18.258 15.656 18.258 14.936 18.168 14.786C18.078 14.636 17.838 14.562 17.472 14.382Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12C2 13.818 2.484 15.522 3.327 17.005L2.087 21.533C2.016 21.792 2.088 22.07 2.277 22.259C2.434 22.416 2.651 22.5 2.875 22.5C2.964 22.5 3.053 22.487 3.14 22.463L7.808 21.189C9.176 21.848 10.557 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM3.8 12C3.8 7.471 7.471 3.8 12 3.8C16.529 3.8 20.2 7.471 20.2 12C20.2 16.529 16.529 20.2 12 20.2C10.669 20.2 9.387 19.882 8.243 19.281L7.962 19.133L4.471 20.088L5.452 16.512L5.291 16.216C4.334 14.461 3.8 13.256 3.8 12Z"
        fill={color}
      />
    </svg>
  );
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Inicio', link: '#hero' },
  { id: 'soluciones', label: 'Soluciones', link: '#servicios-todos' },
  { id: 'nosotros', label: 'Nosotros', link: '#nosotros' },
  { id: 'contacto', label: 'Contacto', link: '#contacto' },
];

export default function DesktopNavbar({ onNavigate, currentRoute = '' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle Scroll Spy & Compact state
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 25);

      // Scroll Spy when on home/main page
      if (!currentRoute || currentRoute === '#hero' || currentRoute === '#contacto') {
        const sections = [
          { id: 'hero', offset: 0 },
          { id: 'contacto', el: document.getElementById('contacto') },
        ];

        const scrollPos = scrollY + 200;
        let current = 'hero';

        for (const sec of sections) {
          if (sec.el && sec.el.offsetTop <= scrollPos) {
            current = sec.id;
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  const getIsActive = (item) => {
    // If on subpages
    if (currentRoute === '#nosotros') return item.id === 'nosotros';
    if (
      currentRoute === '#servicios-todos' ||
      currentRoute === '#servicios-page' ||
      currentRoute === '#catalogo-servicios' ||
      currentRoute === '#todos-los-servicios' ||
      currentRoute === '#soluciones' ||
      currentRoute.startsWith('#servicio/')
    ) {
      return item.id === 'soluciones';
    }

    // Hash match
    if (currentRoute === item.link) return true;

    // Scroll spy fallback
    return activeSection === item.id;
  };

  const handleItemClick = (e, link) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(link);
    }
  };

  return (
    <header
      className={`gat-desktop-navbar ${isScrolled ? 'is-scrolled' : ''}`}
    >
      <div className="gat-nav-inner">
        {/* Left: Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleItemClick(e, '#hero')}
          className="gat-nav-logo"
          aria-label="GAT Technology Consulting - Inicio"
        >
          <img
            src="/assets/GAT_Logo_Fondo_Oscuro_Transparente_HD.webp"
            alt="GAT Technology Consulting"
            className="gat-nav-logo-img"
            width="38"
            height="38"
            style={{ aspectRatio: '1 / 1' }}
            decoding="async"
          />
        </a>

        {/* Center: Perfectly Centered Minimalist Floating Capsule */}
        <nav
          className="gat-nav-links"
          aria-label="Navegación Desktop"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = getIsActive(item);

            return (
              <a
                key={item.id}
                href={item.link}
                onClick={(e) => handleItemClick(e, item.link)}
                className={`gat-nav-item ${isActive ? 'is-active' : ''}`}
              >
                <span className="gat-nav-item-text">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (WhatsApp Icon + High-Converting CTA) */}
        <div className="gat-nav-actions">
          <a
            href={getWhatsAppUrl('Hola GAT Consulting, me gustaría consultar sobre una asesoría.')}
            target="_blank"
            rel="noopener noreferrer"
            className="gat-nav-whatsapp-btn"
            title="Chat directo por WhatsApp"
            aria-label="Hablar por WhatsApp"
          >
            <WhatsAppIcon size={19} color="#25D366" />
            <span className="gat-nav-whatsapp-pulse" />
          </a>

          <a
            href="#contacto"
            onClick={(e) => handleItemClick(e, '#contacto')}
            className="gat-nav-cta-btn"
          >
            <span>Solicitar Asesoría</span>
            <ArrowUpRight size={16} className="gat-nav-cta-icon" />
          </a>
        </div>
      </div>
    </header>
  );
}
