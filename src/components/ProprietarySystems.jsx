import React, { useState, useEffect, useRef } from 'react';
import {
  ShoppingCart,
  CalendarCheck,
  HeartPulse,
  GraduationCap,
  PlayCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Zap,
  Users,
  MessageSquare,
  Lock,
  Headphones,
  Laptop
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/contact';
import LazyVideo from './ui/LazyVideo';
import './ProprietarySystems.css';

const SYSTEMS_DATA = [
  {
    id: 'sisvet',
    tabLabel: '1. SisVet',
    icon: HeartPulse,
    tag: 'Clínicas & Hospitales Veterinarios',
    badge: '100% Desarrollo Propio GAT',
    title: 'SisVet — Sistema de Gestión Veterinaria',
    shortDesc: 'Plataforma integral para administrar clínicas y hospitales veterinarios. Centraliza consultas, diagnósticos, tratamientos, vacunas, servicios e historial clínico en un solo lugar.',
    video: 'https://res.cloudinary.com/akbhdsaa/video/upload/v1788854114/SISVET.mp4',
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.18)',
    benefits: [
      {
        icon: HeartPulse,
        title: 'Mascotas y fichas médicas',
        text: 'Gestiona clientes, mascotas, fichas clínicas, consultas, diagnósticos, tratamientos y órdenes de atención.'
      },
      {
        icon: Zap,
        title: 'Alertas de vacunación',
        text: 'Control inteligente de vacunas y desparasitaciones con recordatorios y notificaciones automáticas.'
      },
      {
        icon: ShoppingCart,
        title: 'Servicios, medicamentos y caja',
        text: 'Control de farmacia veterinaria, servicios de baño/peluquería, pagos y estados de las atenciones.'
      },
      {
        icon: ShieldCheck,
        title: 'Operación organizada 100%',
        text: 'Reportes clínicos y financieros para mantener toda la operación de la clínica bajo control.'
      }
    ],
    targetAudiences: ['Clínicas Veterinarias', 'Hospitales Veterinarios', 'Centros de Grooming & Spa', 'Pet Shops'],
    whatsappPrompt: 'Hola GAT Technology, me interesa solicitar una demostración de SisVet — Sistema de Gestión Veterinaria.'
  },
  {
    id: 'sistemaventas',
    tabLabel: '2. SistemaVentas',
    icon: ShoppingCart,
    tag: 'Ventas, Créditos & Cobranzas',
    badge: '100% Desarrollo Propio GAT',
    title: 'SistemaVentas — Ventas, Créditos y Cobranzas',
    shortDesc: 'Diseñado para controlar todo el proceso comercial y ventas en campo. Permite registrar clientes, productos, pedidos, entregas, stock, ventas a crédito y cobranzas desde un mismo sistema.',
    video: 'https://res.cloudinary.com/akbhdsaa/video/upload/v1788854113/SISTEMAVENTAS.mp4',
    accentColor: '#00F2FE',
    glowColor: 'rgba(0, 242, 254, 0.18)',
    benefits: [
      {
        icon: Zap,
        title: 'Pedidos, entregas y stock',
        text: 'Registra pedidos y entregas en campo con control estricto de inventario disponible en tiempo real.'
      },
      {
        icon: ShieldCheck,
        title: 'Ventas al contado y crédito',
        text: 'Gestiona ventas a crédito con seguimiento de cuentas por cobrar y fechas de vencimiento.'
      },
      {
        icon: CheckCircle2,
        title: 'Cobranzas multicanal',
        text: 'Registro de cobros mediante efectivo, Yape, Plin y transferencias bancarias con cuadre exacto.'
      },
      {
        icon: Smartphone,
        title: 'Mapas, caja y dashboards',
        text: 'Control de caja, rutas de operación en mapas, reportes y dashboards para supervisar dinero y ventas.'
      }
    ],
    targetAudiences: ['Distribuidoras y Mayoristas', 'Ventas en Campo / Ruta', 'Comercios y Tiendas', 'Empresas de Créditos'],
    whatsappPrompt: 'Hola GAT Technology, me gustaría ver una demostración de SistemaVentas — Ventas, Créditos y Cobranzas.'
  },
  {
    id: 'citassistema',
    tabLabel: '3. CitasSistema',
    icon: CalendarCheck,
    tag: 'Gestión de Citas para Clínicas',
    badge: '100% Desarrollo Propio GAT',
    title: 'CitasSistema — Gestión de Citas para Clínicas',
    shortDesc: 'Centraliza la gestión de citas, pacientes y operación clínica, conectando todo el recorrido del paciente desde la reserva online hasta la atención y seguimiento médico.',
    video: 'https://res.cloudinary.com/akbhdsaa/video/upload/v1788854112/CITAS_CLINICAS.mp4',
    accentColor: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.18)',
    benefits: [
      {
        icon: CalendarCheck,
        title: 'Reserva online 24/7',
        text: 'Los pacientes encuentran especialidades, médicos, horarios disponibles y reservan su cita al instante.'
      },
      {
        icon: Users,
        title: 'Agenda e historial clínico',
        text: 'Administra agenda médica, recepción, atención en consultorio e historial clínico digital de pacientes.'
      },
      {
        icon: ShieldCheck,
        title: 'Tratamientos, recetas y caja',
        text: 'Registro de recetas médicas, control de insumos, cobro de consultas y arqueo de caja diario.'
      },
      {
        icon: MessageSquare,
        title: 'Recordatorios automáticos',
        text: 'Notificaciones automáticas por WhatsApp y herramientas de seguimiento para doctores y pacientes.'
      }
    ],
    targetAudiences: ['Clínicas Médicas & Dentales', 'Consultorios Médicos', 'Centros Terapéuticos', 'Spas & Centros Estéticos'],
    whatsappPrompt: 'Hola GAT Technology, deseo una demo de CitasSistema — Gestión de Citas para Clínicas.'
  },
  {
    id: 'campus-virtual',
    tabLabel: '4. Campus Virtual',
    icon: PlayCircle,
    tag: 'Campus Virtual & Gestión Académica',
    badge: '100% Desarrollo Propio GAT',
    title: 'Campus Virtual — Plataforma de Cursos y Clases Online',
    shortDesc: 'Plataforma educativa para gestionar cursos, estudiantes, docentes y contenidos de aprendizaje. Publica clases en video, revisa tareas y emite certificados oficiales con código QR.',
    video: 'https://res.cloudinary.com/akbhdsaa/video/upload/v1788854112/PLATAFORMA_CLASES.mp4',
    accentColor: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.18)',
    benefits: [
      {
        icon: Lock,
        title: 'Clases en video y módulos',
        text: 'Publica lecciones en video protegido contra descargas, módulos estructurados y materiales en PDF.'
      },
      {
        icon: Laptop,
        title: 'Tareas y progreso del alumno',
        text: 'Los estudiantes resuelven tareas, rinden cuestionarios y visualizan su avance y calificaciones.'
      },
      {
        icon: Users,
        title: 'Revisión y retroalimentación',
        text: 'Los docentes revisan entregas, califican de forma ágil y brindan retroalimentación directa.'
      },
      {
        icon: CheckCircle2,
        title: 'Certificados con código QR',
        text: 'Genera diplomas y certificados oficiales con código QR de validación al completar el curso.'
      }
    ],
    targetAudiences: ['Institutos y Academias', 'Escuelas Online', 'Capacitación Corporativa', 'Docentes y Creadores'],
    whatsappPrompt: 'Hola GAT Technology, me interesa una demostración de Campus Virtual — Plataforma de Cursos y Clases Online.'
  },
  {
    id: 'cole-platform',
    tabLabel: '5. Cole Platform',
    icon: GraduationCap,
    tag: 'Gestión Integral de Colegios',
    badge: '100% Desarrollo Propio GAT',
    title: 'Cole Platform — Gestión Integral de Colegios',
    shortDesc: 'Plataforma integral para administrar la operación académica, administrativa y financiera de colegios, centralizando todo el ciclo escolar en una sola plataforma moderna.',
    video: 'https://res.cloudinary.com/akbhdsaa/video/upload/v1788854113/colegio.mp4',
    accentColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.18)',
    benefits: [
      {
        icon: GraduationCap,
        title: 'Alumnos, notas y asistencia',
        text: 'Gestión de matrículas, cursos, docentes, control de asistencia diaria y generación de libretas escolares.'
      },
      {
        icon: ShieldCheck,
        title: 'Pensiones y control financiero',
        text: 'Control de pensiones, registro de pagos, cobranzas, caja chica y reportes financieros del colegio.'
      },
      {
        icon: Users,
        title: 'Portales para padres y alumnos',
        text: 'Papás y estudiantes consultan notas, horarios, asistencias, comunicados y pagos desde el celular.'
      },
      {
        icon: Zap,
        title: 'Tienda escolar y documentos',
        text: 'Tienda escolar de uniformes/útiles, actividades, emisión de certificados y comunicados oficiales.'
      }
    ],
    targetAudiences: ['Colegios Privados', 'Consorcios Escolares', 'Instituciones Educativas', 'Academias Escolares'],
    whatsappPrompt: 'Hola GAT Technology, quiero solicitar una demostración de Cole Platform — Gestión Integral de Colegios.'
  }
];

const SLIDER_INTERVAL = 10000; // 10 segundos

export default function ProprietarySystems({ onSelectService }) {
  const [activeTab, setActiveTab] = useState(0);
  const [animKey, setAnimKey] = useState(0); // reinicia la animación CSS
  const activeSystem = SYSTEMS_DATA[activeTab] || SYSTEMS_DATA[0];

  const intervalRef = useRef(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTab(prev => (prev + 1) % SYSTEMS_DATA.length);
      setAnimKey(k => k + 1);
    }, SLIDER_INTERVAL);
  };

  // Inicia el slider al montar
  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTabClick = (idx) => {
    if (idx === activeTab) return;
    setActiveTab(idx);
    setAnimKey(k => k + 1); // reinicia barra de progreso
    startInterval();         // reinicia el timer
  };

  const handleDemoClick = (system) => {
    if (onSelectService) {
      onSelectService(system.title);
    } else {
      window.location.hash = '#contacto';
    }
  };

  return (
    <section className="gat-proprietary-section" id="sistemas-propios">
      <div className="gat-proprietary-container">
        
        {/* Header de la Sección */}
        <div className="gat-proprietary-header">
          <div className="gat-badge-pill">
            <Sparkles size={14} className="gat-badge-icon" />
            <span>SOFTWARE 100% PROPIO · LISTO PARA TU EMPRESA</span>
          </div>
          <h2 className="gat-proprietary-title">
            Sistemas Web Desarrollados por <span className="gat-gradient-text">GAT Technology</span>
          </h2>
          <p className="gat-proprietary-subtitle">
            Plataformas creadas desde cero por nuestros programadores. Listas para implementar en tu negocio de inmediato o personalizarlas a la medida de lo que necesitas, sin pagar comisiones a intermediarios extranjeros.
          </p>
        </div>

        {/* Selector de Pestañas Interactivas (Tabs) */}
        <div className="gat-systems-nav" role="tablist">
          {SYSTEMS_DATA.map((sys, idx) => {
            const Icon = sys.icon;
            const isActive = idx === activeTab;
            return (
              <button
                key={sys.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTabClick(idx)}
                className={`gat-sys-tab-btn ${isActive ? 'active' : ''}`}
                style={{
                  '--sys-accent': sys.accentColor,
                  '--sys-glow': sys.glowColor
                }}
              >
                <div className="gat-sys-tab-icon-wrap">
                  <Icon size={18} />
                </div>
                <span className="gat-sys-tab-text">{sys.tabLabel}</span>
                {isActive && <div className="gat-sys-tab-active-indicator" />}
              </button>
            );
          })}
        </div>

        {/* Barra de progreso del auto-slider — animación CSS pura */}
        <div className="gat-slider-progress-track">
          <div
            key={animKey}
            className="gat-slider-progress-bar gat-slider-progress-anim"
            style={{ background: activeSystem.accentColor }}
          />
        </div>

        {/* Tarjeta Principal del Sistema Activo (Visual Showcase) */}
        <div 
          className="gat-system-showcase-card"
          style={{
            '--card-accent': activeSystem.accentColor,
            '--card-glow': activeSystem.glowColor
          }}
        >
          {/* Columna Izquierda: Información y Beneficios */}
          <div className="gat-showcase-info">
            <div className="gat-showcase-tags">
              <span className="gat-system-badge-highlight">{activeSystem.badge}</span>
              <span className="gat-system-category-tag">{activeSystem.tag}</span>
            </div>

            <h3 className="gat-showcase-system-title">{activeSystem.title}</h3>
            <p className="gat-showcase-system-desc">{activeSystem.shortDesc}</p>

            {/* Grid de 4 Beneficios en Lenguaje Claro */}
            <div className="gat-benefits-grid">
              {activeSystem.benefits.map((benefit, bIdx) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div key={bIdx} className="gat-benefit-item">
                    <div className="gat-benefit-icon-box">
                      <BenefitIcon size={18} />
                    </div>
                    <div className="gat-benefit-text-wrap">
                      <h4 className="gat-benefit-item-title">{benefit.title}</h4>
                      <p className="gat-benefit-item-desc">{benefit.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Acciones Directas */}
            <div className="gat-showcase-actions">
              <a
                href={getWhatsAppUrl(activeSystem.whatsappPrompt)}
                target="_blank"
                rel="noopener noreferrer"
                className="gat-btn-whatsapp-demo"
              >
                <MessageSquare size={17} />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Visual de Video 100% Limpio */}
          <div className="gat-showcase-visual">
            <div className="gat-visual-mockup-frame">
              <div className="gat-mockup-top-bar">
                <div className="gat-mockup-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="gat-mockup-url-pill">
                  <span>gat-app.com/{activeSystem.id}</span>
                </div>
                <div className="gat-mockup-status-live">
                  <span className="live-pulse"></span>
                  <span>DEMO EN VIVO</span>
                </div>
              </div>

              {/* Contenedor de Video 100% Limpio sin nada encima */}
              <div className="gat-mockup-video-container">
                <LazyVideo
                  key={activeSystem.video}
                  src={activeSystem.video}
                  ariaLabel={`Demostración en video de ${activeSystem.title}`}
                  className="gat-system-showcase-video"
                />
              </div>
            </div>

            {/* Etiquetas de público ideal */}
            <div className="gat-target-audience-wrap">
              <span className="gat-target-label">Ideal para:</span>
              <div className="gat-target-pills">
                {activeSystem.targetAudiences.map((aud, aIdx) => (
                  <span key={aIdx} className="gat-target-pill">
                    {aud}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Confianza & Ventajas de Elegir un Software Propio GAT */}
        <div className="gat-proprietary-guarantees">
          <div className="gat-guarantee-card">
            <div className="gat-guarantee-icon">
              <Zap size={22} />
            </div>
            <div className="gat-guarantee-info">
              <h4>Implementación Rápida</h4>
              <p>Lo dejamos listo con tus datos y catálogo en pocos días.</p>
            </div>
          </div>

          <div className="gat-guarantee-card">
            <div className="gat-guarantee-icon">
              <ShieldCheck size={22} />
            </div>
            <div className="gat-guarantee-info">
              <h4>El Sistema es Tuyo</h4>
              <p>Sin letras chicas ni contratos forzosos. Tú tienes el control total.</p>
            </div>
          </div>

          <div className="gat-guarantee-card">
            <div className="gat-guarantee-icon">
              <Smartphone size={22} />
            </div>
            <div className="gat-guarantee-info">
              <h4>Desde Cualquier Dispositivo</h4>
              <p>Accede desde tu teléfono, la tablet de tu tienda o tu computadora.</p>
            </div>
          </div>

          <div className="gat-guarantee-card">
            <div className="gat-guarantee-icon">
              <Headphones size={22} />
            </div>
            <div className="gat-guarantee-info">
              <h4>Soporte Humano y Directo</h4>
              <p>Te atendemos directamente por WhatsApp personas reales en español.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
