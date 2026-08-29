import React, { useState } from 'react';
import { Award, ArrowUpRight, TrendingUp, ShieldCheck, Zap, Building2 } from 'lucide-react';

export default function CaseStudies({ onSelectCase }) {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: 'fintech',
      client: 'Grupo Financiero & FinTech Regional',
      industry: 'Banca Digital & Pagos',
      title: 'Modernización de Core Transaccional a Kubernetes Multi-Cloud con Zero-Downtime',
      challenge: 'Un sistema monolítico heredado sufría de picos de inactividad durante promociones masivas, con costos de infraestructura inflados y ciclos de despliegue manuales de 3 semanas.',
      solution: 'GAT rediseñó la arquitectura hacia microservicios desacoplados sobre AWS EKS y GCP con GitOps automatizado, bases de datos particionadas y observabilidad distribuida 24/7.',
      metrics: [
        { label: 'Disponibilidad Post-Lanzamiento', value: '99.999%', sub: 'Cero caídas en Black Friday' },
        { label: 'Reducción de Latencia', value: '-54%', sub: 'De 320ms a 145ms de respuesta' },
        { label: 'Ahorro Anual FinOps', value: '$420,000 USD', sub: 'Optimización de recursos' },
        { label: 'Velocidad de Despliegue', value: '15 Minutos', sub: 'De 3 semanas a diario' },
      ],
    },
    {
      id: 'logistics',
      client: 'Operador Logístico & Retail Omnicanal',
      industry: 'Supply Chain & E-Commerce',
      title: 'Plataforma de IA Predictiva para Enrutamiento y Gestión de Inventarios en Tiempo Real',
      challenge: 'Falta de visibilidad de inventarios entre 45 centros de distribución con desabastecimientos recurrentes y sobrecostos por rutas logísticas ineficientes.',
      solution: 'Implementamos un Data Lake en Snowflake orquestado con Apache Kafka y modelos de machine learning adaptativos para predecir demanda y balancear rutas dinámicamente.',
      metrics: [
        { label: 'Precisión de Pronóstico', value: '96.8%', sub: '+31% frente a métodos previos' },
        { label: 'Reducción de Costos de Envío', value: '-22%', sub: 'Optimización de rutas con IA' },
        { label: 'Eventos Procesados / Día', value: '12.5M+', sub: 'Flujo en streaming continuo' },
        { label: 'Tiempo de Decisión', value: '< 2 Segundos', sub: 'Automatización completa' },
      ],
    },
    {
      id: 'healthtech',
      client: 'Consorcio Hospitalario & HealthTech',
      industry: 'Salud Digital & Telemedicina',
      title: 'Arquitectura Segura y Resiliente con Cumplimiento HIPAA y Certificación ISO 27001',
      challenge: 'Riesgos de seguridad en el intercambio de registros médicos electrónicos entre clínicas aliadas y tiempos de auditoría de meses para licitaciones públicas.',
      solution: 'Diseño e implementación de arquitectura Zero-Trust con cifrado en tránsito/reposo, gestión de identidades federadas y pipelines de auditoría automatizada en tiempo real.',
      metrics: [
        { label: 'Aprobación de Auditoría', value: '100%', sub: 'Certificación SOC2 & ISO 27001' },
        { label: 'Reducción Tiempo Auditoría', value: '-75%', sub: 'Reportes automáticos en 1 clic' },
        { label: 'Incidentes de Fuga', value: '0 Incidentes', sub: 'Monitoreo proactivo SIEM' },
        { label: 'Usuarios Médicos Activos', value: '45,000+', sub: 'Acceso seguro multi-sede' },
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

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Resultados Comprobados
          </div>
          <h2 className="section-title">
            Casos de Éxito: <span className="text-gradient-brand">Impacto Estratégico Medible</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Transformaciones tecnológicas reales que han generado ahorros millonarios, blindado la seguridad y acelerado la escalabilidad de nuestros clientes.
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
                background: activeCase === idx ? 'linear-gradient(135deg, #09A8B5, #087F9F)' : 'rgba(255, 255, 255, 0.05)',
                border: activeCase === idx ? '1px solid #09A8B5' : '1px solid rgba(213, 232, 236, 0.15)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: activeCase === idx ? '0 8px 24px rgba(9, 168, 181, 0.3)' : 'none',
              }}
            >
              <Building2 size={16} color={activeCase === idx ? '#FFFFFF' : '#09A8B5'} />
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid rgba(213, 232, 236, 0.12)' }}>
            <div>
              <div style={{ fontSize: '0.82rem', color: '#09A8B5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {cases[activeCase].client}
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 700, marginTop: '4px' }}>
                {cases[activeCase].title}
              </h3>
            </div>
            <div className="tech-badge" style={{ padding: '6px 16px' }}>
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
              <h4 style={{ fontSize: '1rem', color: '#EF4444', fontWeight: 700, marginBottom: '8px' }}>
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
                    background: 'rgba(7, 18, 28, 0.65)',
                    border: '1px solid rgba(9, 168, 181, 0.25)',
                    borderRadius: '14px',
                    padding: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: '#09A8B5',
                      lineHeight: 1.1,
                      marginBottom: '4px',
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
