/**
 * useSeoMeta – Hook para actualizar dinámicamente el título y meta description
 * de cada "subpágina" de la SPA (hash routing).
 *
 * Google ejecuta JavaScript en SPAs modernas, por lo que actualizar estas
 * etiquetas vía JS mejora el posicionamiento de cada subpágina de servicio.
 *
 * Para cambiar el dominio base a uno propio, actualiza SITE_URL:
 *   Actual:  https://gat-consulting.vercel.app
 *   Futuro:  https://gatconsulting.pe
 */

// ──────────────────────────────────────────────
// CONFIGURACIÓN CENTRAL DE DOMINIO
export const SITE_URL = 'https://gatconsulting.tech';
// ──────────────────────────────────────────────

const PAGE_META = {
  home: {
    title: 'Consultoría Tecnológica en Lima, Perú | GAT Consulting',
    description:
      'GAT Consulting: consultoría tecnológica, desarrollo web, aplicaciones móviles, inteligencia artificial, chatbots, automatización y ciberseguridad para empresas en Lima y Perú. Diagnóstico gratuito.',
    canonical: `${SITE_URL}/`,
  },
  nosotros: {
    title: 'Nosotros – Quiénes Somos | GAT Consulting Lima',
    description:
      'Conoce al equipo de GAT Consulting, consultoría tecnológica en Lima, Perú. Nuestra misión, visión y valores que impulsan la transformación digital de empresas peruanas.',
    canonical: `${SITE_URL}/#nosotros`,
  },
  servicios: {
    title: 'Catálogo de Servicios Tecnológicos & Software | GAT Consulting Lima',
    description:
      'Catálogo completo de servicios: desarrollo web, aplicaciones móviles iOS y Android, agentes de inteligencia artificial, chatbots, ciberseguridad y cloud computing en Lima, Perú.',
    canonical: `${SITE_URL}/#servicios-todos`,
  },
  contacto: {
    title: 'Contacto & Asesoría Gratuita | GAT Consulting Lima',
    description:
      'Contáctanos para una asesoría tecnológica y diagnóstico gratuito para tu empresa en Lima y Perú. Cotiza tu proyecto web, app móvil o solución con IA.',
    canonical: `${SITE_URL}/#contacto`,
  },
  services: {
    'landing-page': {
      title: 'Páginas Web Corporativas y Landing Pages en Lima | GAT Consulting',
      description:
        'Desarrollo de páginas web corporativas y landing pages de alta conversión en Lima, Perú. SEO técnico, diseño UI/UX premium y Core Web Vitals 99+. Cotiza tu proyecto.',
      canonical: `${SITE_URL}/#servicio/landing-page`,
    },
    'app-web': {
      title: 'Desarrollo de Aplicaciones Web y SaaS en Lima | GAT Consulting',
      description:
        'Desarrollamos aplicativos web a medida, plataformas SaaS y dashboards en tiempo real para empresas en Lima y Perú. Arquitectura cloud escalable. Contáctanos.',
      canonical: `${SITE_URL}/#servicio/app-web`,
    },
    'app-android': {
      title: 'Desarrollo de Aplicaciones Android en Lima, Perú | GAT Consulting',
      description:
        'Creamos aplicaciones Android nativas e híbridas de alto desempeño para empresas en Lima. Google Play Store, UI nativa con Kotlin y Flutter. Solicita cotización.',
      canonical: `${SITE_URL}/#servicio/app-android`,
    },
    'app-ios': {
      title: 'Desarrollo de Aplicaciones iOS para iPhone en Lima | GAT Consulting',
      description:
        'Desarrollo de apps nativas para iOS con SwiftUI para empresas en Lima, Perú. Publicación garantizada en App Store de Apple. Solicita tu diagnóstico gratuito.',
      canonical: `${SITE_URL}/#servicio/app-ios`,
    },
    ciberseguridad: {
      title: 'Ciberseguridad para Empresas en Lima, Perú | GAT Consulting',
      description:
        'Servicios de ciberseguridad, pentesting ético, arquitectura Zero Trust y cumplimiento ISO 27001 para empresas en Lima y Perú. Protege tu negocio hoy.',
      canonical: `${SITE_URL}/#servicio/ciberseguridad`,
    },
    'automatizaciones-ia': {
      title: 'Automatización con Inteligencia Artificial para Empresas en Lima | GAT Consulting',
      description:
        'Automatización de procesos empresariales con IA (LLMs, RAG, agentes autónomos) para empresas en Lima y Perú. Reduce costos operativos hasta un 75%. Contáctanos.',
      canonical: `${SITE_URL}/#servicio/automatizaciones-ia`,
    },
    'asistente-ia': {
      title: 'Chatbots con IA y Asistentes Virtuales para Empresas | GAT Consulting Lima',
      description:
        'Chatbots cognitivos con IA para WhatsApp, web e Instagram. Atención al cliente 24/7 y calificación de leads para negocios en Lima y Perú. Solicita demo gratuita.',
      canonical: `${SITE_URL}/#servicio/asistente-ia`,
    },
    asistente: {
      title: 'Chatbots con IA y Asistentes Virtuales para Empresas | GAT Consulting Lima',
      description:
        'Chatbots cognitivos con IA para WhatsApp, web e Instagram. Atención al cliente 24/7 y calificación de leads para negocios en Lima y Perú. Solicita demo gratuita.',
      canonical: `${SITE_URL}/#servicio/asistente-ia`,
    },
  },
};

/**
 * Actualiza <title>, meta description y canonical del documento.
 * @param {'home'|'nosotros'|string} page - 'home', 'nosotros', o slug del servicio.
 */
export function setPageSeo(page) {
  const setDocumentMeta = (meta) => {
    if (!meta) return;

    // Title
    document.title = meta.title;

    // Meta description
    let descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.setAttribute('href', meta.canonical);

    // Open Graph
    const setOg = (prop, val) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (el) el.setAttribute('content', val);
    };
    setOg('og:title', meta.title);
    setOg('og:description', meta.description);
    setOg('og:url', meta.canonical);

    // Twitter
    const setTw = (name, val) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (el) el.setAttribute('content', val);
    };
    setTw('twitter:title', meta.title);
    setTw('twitter:description', meta.description);
  };

  if (page === 'home') {
    setDocumentMeta(PAGE_META.home);
  } else if (page === 'nosotros') {
    setDocumentMeta(PAGE_META.nosotros);
  } else if (PAGE_META.services[page]) {
    setDocumentMeta(PAGE_META.services[page]);
  }
}

// Alias for backward compat
export const useSeoMeta = setPageSeo;
export default setPageSeo;
