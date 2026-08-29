import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export default function RoiCalculator({ onConsultRoi }) {
  const [cloudSpend, setCloudSpend] = useState(15000); // USD/month
  const [devTeamSize, setDevTeamSize] = useState(12); // devs
  const [downtimeHours, setDowntimeHours] = useState(4); // hours/month

  // Calculations
  const annualCloudSpend = cloudSpend * 12;
  const estimatedCloudSavings = Math.round(annualCloudSpend * 0.38); // 38% FinOps savings
  const engineeringHoursSavedAnnual = Math.round(devTeamSize * 15 * 12); // 15 hrs/dev/month saved via DevOps & CI/CD
  const engDollarSavings = Math.round(engineeringHoursSavedAnnual * 45); // $45/hr average blended cost
  const downtimeAnnualLoss = Math.round(downtimeHours * 12 * 4500); // $4,500/hr avg business cost of outage
  const downtimeSavings = Math.round(downtimeAnnualLoss * 0.85); // 85% prevented

  const totalAnnualImpact = estimatedCloudSavings + engDollarSavings + downtimeSavings;

  return (
    <section
      id="calculadora"
      className="section-padding"
      style={{ position: 'relative' }}
    >
      <div className="ambient-glow-orb orb-cyan" style={{ top: '30%', left: '5%', width: '450px', height: '450px' }} />
      <div className="ambient-glow-orb orb-blue" style={{ bottom: '10%', right: '5%', width: '500px', height: '500px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Calculadora de Impacto Financiero
          </div>
          <h2 className="section-title">
            Simula el <span className="text-gradient-brand">Retorno de Inversión (ROI)</span> de tu Empresa
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Descubre cuánto capital y tiempo productivo puede recuperar tu organización al modernizar su infraestructura y procesos con GAT Technology Consulting.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            padding: '40px 32px',
            border: '1px solid rgba(9, 168, 181, 0.3)',
            background: 'linear-gradient(150deg, rgba(18, 50, 74, 0.9) 0%, rgba(11, 30, 45, 0.95) 100%)',
            boxShadow: '0 25px 60px rgba(7, 18, 28, 0.8)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '48px',
            }}
            className="roi-calc-grid"
          >
            {/* Input Controls */}
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Calculator size={22} color="#09A8B5" />
                <span>Parámetros de tu Infraestructura Actual</span>
              </h3>

              {/* Slider 1: Cloud Spend */}
              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.9rem', color: '#C3D6E0', fontWeight: 600 }}>
                    Gasto Mensual Estimado en Cloud (AWS / GCP / Azure)
                  </label>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#09A8B5' }}>
                    ${cloudSpend.toLocaleString()} USD/mes
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={cloudSpend}
                  onChange={(e) => setCloudSpend(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#09A8B5',
                    height: '6px',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#6F8B9C', marginTop: '6px' }}>
                  <span>$2,000 USD</span>
                  <span>$50,000 USD</span>
                  <span>$100,000+ USD</span>
                </div>
              </div>

              {/* Slider 2: Dev Team Size */}
              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.9rem', color: '#C3D6E0', fontWeight: 600 }}>
                    Tamaño del Equipo Técnico e Ingeniería
                  </label>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#09A8B5' }}>
                    {devTeamSize} Ingenieros
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="80"
                  step="1"
                  value={devTeamSize}
                  onChange={(e) => setDevTeamSize(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#09A8B5',
                    height: '6px',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#6F8B9C', marginTop: '6px' }}>
                  <span>3 Devs</span>
                  <span>40 Devs</span>
                  <span>80+ Devs</span>
                </div>
              </div>

              {/* Slider 3: Downtime & Incidents */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.9rem', color: '#C3D6E0', fontWeight: 600 }}>
                    Horas de Fricción / Caídas / Mantenimiento Mensual
                  </label>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#09A8B5' }}>
                    {downtimeHours} Horas/mes
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={downtimeHours}
                  onChange={(e) => setDowntimeHours(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#09A8B5',
                    height: '6px',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#6F8B9C', marginTop: '6px' }}>
                  <span>0 hrs</span>
                  <span>10 hrs</span>
                  <span>20 hrs</span>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div
              style={{
                background: 'rgba(7, 18, 28, 0.75)',
                border: '1px solid rgba(9, 168, 181, 0.35)',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#09A8B5', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  <Sparkles size={16} />
                  <span>Valor Económico Anual Proyectado</span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: 900,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    marginBottom: '8px',
                    letterSpacing: '-0.03em',
                  }}
                >
                  <span className="text-gradient-brand">${totalAnnualImpact.toLocaleString()}</span>
                  <span style={{ fontSize: '1.2rem', color: '#A0B8C8', fontWeight: 500, marginLeft: '6px' }}>USD/año</span>
                </div>

                <p style={{ fontSize: '0.86rem', color: '#8CA5B5', marginBottom: '24px' }}>
                  Impacto estimado combinando optimización de infraestructura FinOps, automatización DevOps y prevención de incidentes.
                </p>

                {/* Breakdown List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid rgba(213, 232, 236, 0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#C3D6E0' }}>
                      <DollarSign size={16} color="#09A8B5" />
                      <span>Ahorro Directo Cloud FinOps (~38%)</span>
                    </div>
                    <span style={{ fontWeight: 700, color: '#FFFFFF' }}>${estimatedCloudSavings.toLocaleString()} USD</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid rgba(213, 232, 236, 0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#C3D6E0' }}>
                      <Clock size={16} color="#09A8B5" />
                      <span>Productividad Recuperada ({engineeringHoursSavedAnnual.toLocaleString()} hrs)</span>
                    </div>
                    <span style={{ fontWeight: 700, color: '#FFFFFF' }}>${engDollarSavings.toLocaleString()} USD</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#C3D6E0' }}>
                      <TrendingUp size={16} color="#09A8B5" />
                      <span>Pérdidas Evitadas por Caídas</span>
                    </div>
                    <span style={{ fontWeight: 700, color: '#FFFFFF' }}>${downtimeSavings.toLocaleString()} USD</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <button
                onClick={() => onConsultRoi && onConsultRoi({ cloudSpend, devTeamSize, totalAnnualImpact })}
                className="btn-primary"
                style={{ width: '100%', padding: '16px 20px', fontSize: '0.96rem' }}
              >
                <span>Solicitar Auditoría FinOps & Arquitectura</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .roi-calc-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
