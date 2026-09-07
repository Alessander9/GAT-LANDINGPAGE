import React, { useState } from 'react';
import { Award, ArrowUpRight, TrendingUp, ShieldCheck, Zap, Building2 } from 'lucide-react';

export default function CaseStudies({ onSelectCase }) {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: 'fintech',
      client: 'Empresa Financiera y de Pagos',
      industry: 'Servicios Financieros',
      title: 'Plataforma de Pagos Ultra Rápida con Cero Caídas en Días de Alta Demanda',
      challenge: 'El sistema anterior se caía en fechas festivas y promociones por exceso de visitas, perdiendo ventas y generando quejas de clientes.',
      solution: 'GAT modernizó la plataforma con servidores automáticos en la nube, logrando que atienda a miles de pagos simultáneos de forma instantánea y sin interrupciones.',
      accent: '#09A8B5',
      metrics: [
        { label: 'Disponibilidad de Pagos', value: '100%', sub: 'Cero caídas en días de alta venta', color: '#22C55E' },
        { label: 'Velocidad de Respuesta', value: '< 1 seg', sub: 'Pagos procesados al instante', color: '#F59E0B' },
        { label: 'Ahorro Operativo', value: '$420,000', sub: 'Reducción de costos de servidores', color: '#F59E0B' },
        { label: 'Nuevas Funciones', value: 'En Horas', sub: 'Actualizaciones rápidas sin pausas', color: '#09A8B5' },
      ],
    },
    {
      id: 'logistics',
      client: 'Cadena de Tiendas y Comercio Electrónico',
      industry: 'Ventas Online y Logística',
      title: 'Asistente con Inteligencia Artificial para Pedidos y Envíos en Tiempo Real',
      challenge: 'Tenían dificultades para controlar el stock entre almacenes y demoras en responder a los clientes por WhatsApp.',
      solution: 'Implementamos un sistema con IA que sincroniza el inventario en vivo y atiende consultas de compras automáticamente por WhatsApp las 24 horas.',
      accent: '#8B5CF6',
      metrics: [
        { label: 'Precisión de Inventario', value: '98%', sub: 'Control total de stock en vivo', color: '#8B5CF6' },
        { label: 'Ahorro en Envíos', value: '-22%', sub: 'Rutas de entrega más eficientes', color: '#8B5CF6' },
        { label: 'Consultas Atendidas', value: '10,000+', sub: 'Mensajes resueltos por día con IA', color: '#F59E0B' },
        { label: 'Tiempo de Respuesta', value: '< 2 seg', sub: 'Atención inmediata al cliente', color: '#8B5CF6' },
      ],
    },
    {
      id: 'healthtech',
      client: 'Clínica Médica y Servicios de Salud',
      industry: 'Salud y Citas Médicas',
      title: 'Sistema de Citas Médicas Online y Protección Total de Historias Clínicas',
      challenge: 'Las reservas de citas colapsaban las líneas telefónicas y se requería máxima seguridad para la información privada de los pacientes.',
      solution: 'Desarrollamos una plataforma web fácil de usar para agendar citas desde el celular, con blindaje de seguridad y copias de respaldo automáticas.',
      accent: '#087F9F',
      metrics: [
        { label: 'Seguridad y Privacidad', value: '100%', sub: 'Cumplimiento normativo estricto', color: '#22C55E' },
        { label: 'Citas por Internet', value: '+350%', sub: 'Pacientes reservando en línea', color: '#F59E0B' },
        { label: 'Incidentes de Seguridad', value: '0', sub: 'Protección activa 24/7', color: '#09A8B5' },
        { label: 'Pacientes Atendidos', value: '45,000+', sub: 'Uso diario rápido y sencillo', color: '#087F9F' },
      ],
    },
  ];

  return (
    <section
      id="casos"
      style={{
        position: 'relative',
        padding: 'clamp(40px, 6vh, 60px) 0 clamp(80px, 11vh, 130px) 0',
      }}
    >
      <div className="ambient-glow-orb orb-cyan" style={{ top: '10%', right: '10%', width: '400px', height: '400px' }} />
      <div className="ambient-glow-orb orb-ai" style={{ bottom: '20%', left: '5%', width: '300px', height: '300px' }} />
      <div className="ambient-glow-orb orb-amber" style={{ top: '50%', right: '30%', width: '250px', height: '250px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Resultados Reales
          </div>
          <h2 className="section-title">
            Casos de Éxito: <span className="text-gradient-brand">Empresas que Ya Están Creciendo con Nosotros</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Soluciones aplicadas en negocios reales que lograron aumentar sus ventas, automatizar su atención y ahorrar costos operativos.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div
          className="case-tabs-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            marginBottom: '40px',
          }}
        >
          {cases.map((c, idx) => (
            <button
              key={c.id}
              className="case-tab-btn"
              onClick={() => setActiveCase(idx)}
              style={{
                padding: '12px 24px',
                borderRadius: '12px',
                background: activeCase === idx
                  ? `linear-gradient(135deg, ${c.accent || '#09A8B5'}, ${c.accent === '#8B5CF6' ? '#7C3AED' : c.accent === '#087F9F' ? '#065F8A' : '#087F9F'})`
                  : 'rgba(255, 255, 255, 0.05)',
                border: activeCase === idx ? `1px solid ${c.accent || '#09A8B5'}` : '1px solid rgba(213, 232, 236, 0.15)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: activeCase === idx ? `0 8px 24px ${c.accent || '#09A8B5'}40` : 'none',
              }}
            >
              <Building2 size={16} color={activeCase === idx ? '#FFFFFF' : (c.accent || '#09A8B5')} />
              <span>{c.industry}</span>
            </button>
          ))}
        </div>

        {/* Case Card Main */}
        <div
          className="glass-card case-card-main"
          style={{
            padding: '40px',
            border: '1px solid rgba(9, 168, 181, 0.35)',
            background: 'linear-gradient(150deg, rgba(18, 50, 74, 0.85) 0%, rgba(11, 30, 45, 0.95) 100%)',
            boxShadow: '0 25px 60px rgba(7, 18, 28, 0.7)',
          }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', paddingBottom: '20px', borderBottom: `1px solid ${cases[activeCase].accent || '#09A8B5'}30` }}>
              <div>
                <div style={{ fontSize: '0.82rem', color: cases[activeCase].accent || '#09A8B5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {cases[activeCase].client}
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 700, marginTop: '4px' }}>
                  {cases[activeCase].title}
                </h3>
              </div>
              <div className="tech-badge" style={{ padding: '6px 16px', borderColor: `${cases[activeCase].accent || '#09A8B5'}50`, color: cases[activeCase].accent || '#09A8B5' }}>
                Caso Auditado
              </div>
            </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '36px',
              marginBottom: '36px',
            }}
            className="case-details-grid"
          >
            <div>
              <h4 style={{ fontSize: '1rem', color: '#F59E0B', fontWeight: 700, marginBottom: '8px' }}>
                El Desafío:
              </h4>
              <p style={{ fontSize: '0.94rem', color: '#B4CAD6', lineHeight: 1.6, marginBottom: '24px' }}>
                {cases[activeCase].challenge}
              </p>

              <h4 style={{ fontSize: '1rem', color: '#09A8B5', fontWeight: 700, marginBottom: '8px' }}>
                La Solución Estratégica GAT:
              </h4>
              <p style={{ fontSize: '0.94rem', color: '#D5E8EC', lineHeight: 1.6 }}>
                {cases[activeCase].solution}
              </p>
            </div>

            {/* Metrics 2x2 Grid */}
            <div
              className="case-metrics-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              {cases[activeCase].metrics.map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: `linear-gradient(135deg, rgba(7, 18, 28, 0.8) 0%, ${m.color}12 100%)`,
                    border: `1px solid ${m.color}35`,
                    borderRadius: '14px',
                    padding: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: `0 4px 16px ${m.color}18`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: m.color,
                      lineHeight: 1.1,
                      marginBottom: '4px',
                      textShadow: `0 0 20px ${m.color}50`,
                    }}
                  >
                    {m.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '2px' }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#8CA5B5' }}>
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={() => onSelectCase && onSelectCase(cases[activeCase].title)}
              className="btn-primary case-cta-btn"
              style={{ padding: '12px 24px', fontSize: '0.9rem' }}
            >
              <span>Quiero resultados similares para mi empresa</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .case-details-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }

        @media (max-width: 768px) {
          .case-tabs-container {
            justify-content: flex-start !important;
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            scrollbar-width: none !important;
            padding-bottom: 8px !important;
          }
          .case-tabs-container::-webkit-scrollbar {
            display: none !important;
          }
          .case-tab-btn {
            flex-shrink: 0 !important;
          }
          .case-card-main {
            padding: 22px 18px !important;
          }
          .case-cta-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 500px) {
          .case-metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
