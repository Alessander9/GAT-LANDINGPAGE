import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Mail, Phone, MapPin, Building, ShieldCheck, Sparkles, Clock } from 'lucide-react';

export default function ContactSection({ prefilledService, prefilledData }) {
  const [service, setService] = useState('Arquitectura Cloud & DevOps');
  const [companySize, setCompanySize] = useState('Enterprise (200+ colaboradores)');
  const [budget, setBudget] = useState('$10k - $30k USD');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
  }, [prefilledService]);

  const serviceOptions = [
    'Arquitectura Cloud & DevOps',
    'Inteligencia Artificial & Data',
    'Ciberseguridad & Zero Trust',
    'Transformación & Modernización',
    'Ingeniería de Software a Medida',
    'Consultoría Estratégica & vCTO',
  ];

  const companySizes = [
    'Scale-up (20 - 50 colab.)',
    'Mid-Market (50 - 200 colab.)',
    'Enterprise (200+ colaboradores)',
  ];

  const budgetRanges = [
    '< $10k USD',
    '$10k - $30k USD',
    '$30k - $80k USD',
    '$80k+ USD',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger high-end celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#09A8B5', '#087F9F', '#FFFFFF', '#E2F2F5'],
        });
      } catch (err) {
        // fallback if confetti not loaded
      }
    }, 1000);
  };

  return (
    <section
      id="contacto"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'transparent',
      }}
    >
      <div className="ambient-glow-orb orb-cyan" style={{ top: '15%', left: '-5%', width: '500px', height: '500px' }} />
      <div className="ambient-glow-orb orb-blue" style={{ bottom: '15%', right: '-5%', width: '500px', height: '500px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Inicia Tu Transformación
          </div>
          <h2 className="section-title">
            Agenda tu Sesión de <span className="text-gradient-brand">Diagnóstico Estratégico</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Nuestros arquitectos senior analizarán tus desafíos técnicos y prepararán una propuesta con hoja de ruta y estimación de ROI sin costo inicial.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
          }}
          className="contact-layout-grid"
        >
          {/* Left Column: Direct Value & Trust */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '20px' }}>
                ¿Qué sucederá en tu sesión de diagnóstico?
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'rgba(9, 168, 181, 0.15)',
                      border: '1px solid rgba(9, 168, 181, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#09A8B5',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '4px' }}>
                      1. Sesión Ejecutiva de 45 Minutos
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#9FB5C4' }}>
                      Reunión directa con un Principal Cloud Architect y Lead Strategist, sin intermediarios comerciales.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'rgba(9, 168, 181, 0.15)',
                      border: '1px solid rgba(9, 168, 181, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#09A8B5',
                      flexShrink: 0,
                    }}
                  >
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '4px' }}>
                      2. Acuerdo de Confidencialidad (NDA)
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#9FB5C4' }}>
                      Toda tu información arquitectónica y de negocio queda formalmente blindada bajo estricta reserva.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'rgba(9, 168, 181, 0.15)',
                      border: '1px solid rgba(9, 168, 181, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#09A8B5',
                      flexShrink: 0,
                    }}
                  >
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '4px' }}>
                      3. Hoja de Ruta & Estimación de ROI
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: '#9FB5C4' }}>
                      Recibirás un documento preliminar con arquitectura recomendada, cronograma de sprints y ahorros proyectados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact info pill */}
            <div
              className="glass-card"
              style={{
                padding: '24px',
                background: 'rgba(7, 18, 28, 0.6)',
                border: '1px solid rgba(9, 168, 181, 0.2)',
                borderRadius: '16px',
              }}
            >
              <div style={{ fontSize: '0.82rem', color: '#8CA5B5', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Contacto Directo Corporativo
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.92rem' }}>
                  <Mail size={16} color="#09A8B5" />
                  <span>contacto@gatconsulting.tech</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', fontSize: '0.92rem' }}>
                  <Building size={16} color="#09A8B5" />
                  <span>GAT Technology Consulting LLC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success State */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              border: '1px solid rgba(9, 168, 181, 0.35)',
              background: 'linear-gradient(155deg, rgba(18, 50, 74, 0.9) 0%, rgba(11, 30, 45, 0.98) 100%)',
              boxShadow: '0 25px 60px rgba(7, 18, 28, 0.8)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(9, 168, 181, 0.15)',
                    border: '2px solid #09A8B5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px auto',
                    color: '#09A8B5',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '12px' }}>
                  ¡Solicitud Recibida con Éxito!
                </h3>
                <p style={{ fontSize: '1rem', color: '#B4CAD6', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 30px auto' }}>
                  Gracias <strong style={{ color: '#FFFFFF' }}>{formData.name || 'por tu interés'}</strong>. Un Principal Partner de <strong style={{ color: '#09A8B5' }}>GAT Technology Consulting</strong> se pondrá en contacto en menos de 2 horas hábiles.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
                  }}
                  className="btn-secondary"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Service Selection Pills */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#C3D6E0', marginBottom: '10px' }}>
                    Área o Servicio Principal de Interés:
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {serviceOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setService(opt)}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '10px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          background: service === opt ? 'rgba(9, 168, 181, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                          border: service === opt ? '1px solid #09A8B5' : '1px solid rgba(213, 232, 236, 0.12)',
                          color: service === opt ? '#FFFFFF' : '#9FB5C4',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid Inputs: Name & Email */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#C3D6E0', marginBottom: '8px' }}>
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Roberto Méndez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(7, 18, 28, 0.7)',
                        border: '1px solid rgba(213, 232, 236, 0.18)',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#09A8B5')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(213, 232, 236, 0.18)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#C3D6E0', marginBottom: '8px' }}>
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="roberto@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(7, 18, 28, 0.7)',
                        border: '1px solid rgba(213, 232, 236, 0.18)',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#09A8B5')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(213, 232, 236, 0.18)')}
                    />
                  </div>
                </div>

                {/* Grid Inputs: Company & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#C3D6E0', marginBottom: '8px' }}>
                      Empresa / Organización *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre de la empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(7, 18, 28, 0.7)',
                        border: '1px solid rgba(213, 232, 236, 0.18)',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#09A8B5')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(213, 232, 236, 0.18)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#C3D6E0', marginBottom: '8px' }}>
                      Teléfono / WhatsApp Directo
                    </label>
                    <input
                      type="tel"
                      placeholder="+52 55 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(7, 18, 28, 0.7)',
                        border: '1px solid rgba(213, 232, 236, 0.18)',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#09A8B5')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(213, 232, 236, 0.18)')}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#C3D6E0', marginBottom: '8px' }}>
                    Describe brevemente el reto o proyecto
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos sobre tu stack actual, objetivos o desafíos técnicos prioritarios..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(7, 18, 28, 0.7)',
                      border: '1px solid rgba(213, 232, 236, 0.18)',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#09A8B5')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(213, 232, 236, 0.18)')}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '10px' }}
                >
                  {loading ? (
                    <span>Procesando solicitud segura...</span>
                  ) : (
                    <>
                      <span>Solicitar Diagnóstico y Hoja de Ruta</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-layout-grid {
            grid-template-columns: 1fr 1.25fr !important;
          }
        }
      `}</style>
    </section>
  );
}
