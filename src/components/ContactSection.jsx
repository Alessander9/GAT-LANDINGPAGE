import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Mail, Phone, MapPin, Building, ShieldCheck, Sparkles, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl, getEmailUrl } from '../config/contact';

// WhatsApp Custom Icon
function WhatsAppIcon({ size = 20, color = 'currentColor' }) {
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
    'Página Web / Landing Page que Venda',
    'Asistentes de IA & Chatbot WhatsApp',
    'Aplicación Móvil (Android / iPhone)',
    'Sistema o Plataforma Web a Medida',
    'Seguridad y Protección Digital',
    'Asesoría y Renovación Tecnológica',
  ];

  const companySizes = [
    'Emprendedor / Negocio en Crecimiento (1 - 10 personas)',
    'Pequeña / Mediana Empresa (10 - 50 personas)',
    'Empresa Consolidada (50+ personas)',
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
          colors: ['#09A8B5', '#8B5CF6', '#F59E0B', '#22C55E', '#FFFFFF'],
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
      <div className="ambient-glow-orb orb-ai" style={{ top: '40%', left: '30%', width: '300px', height: '300px' }} />
      <div className="ambient-glow-orb orb-amber" style={{ bottom: '30%', left: '10%', width: '200px', height: '200px' }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Hablemos de tu Proyecto
          </div>
          <h2 className="section-title">
            Solicita tu <span className="text-gradient-brand">Asesoría Gratuita</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Conversa con nuestro equipo. Analizaremos tu idea y te prepararemos una propuesta clara con plan de trabajo y presupuesto sin ningún compromiso.
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
          {/* Left Column: Direct Value, WhatsApp Card & Trust */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* WhatsApp Fast-Track High-Converting Card */}
            <div
              className="glass-card"
              style={{
                padding: '26px 24px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.12) 0%, rgba(7, 24, 38, 0.85) 100%)',
                border: '1px solid rgba(37, 211, 102, 0.35)',
                boxShadow: '0 12px 35px rgba(37, 211, 102, 0.12)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#25D366',
                  boxShadow: '0 0 10px #25D366, 0 0 20px #25D366',
                }} />
                <span style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#25D366',
                }}>
                  Atención Inmediata por WhatsApp
                </span>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '3px 8px',
                  borderRadius: '12px',
                  background: 'rgba(37, 211, 102, 0.15)',
                  color: '#4ADE80',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                }}>
                  Online • &lt; 15 min
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '8px', lineHeight: 1.3 }}>
                ¿Prefieres hablar directamente por WhatsApp?
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#B4CAD6', lineHeight: 1.55, marginBottom: '18px' }}>
                Escríbenos ahora mismo. Respondemos tus preguntas al instante y coordinamos tu asesoría gratuita sin formularios ni demoras.
              </p>

              <a
                href={getWhatsAppUrl('Hola GAT Technology Consulting, me gustaría solicitar una asesoría gratuita para mi proyecto.')}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  width: '100%',
                  padding: '14px 22px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.98rem',
                  textDecoration: 'none',
                  boxShadow: '0 6px 24px rgba(37, 211, 102, 0.4)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 211, 102, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(37, 211, 102, 0.4)';
                }}
              >
                <WhatsAppIcon size={22} color="#FFFFFF" />
                <span>Hablar por WhatsApp con un Asesor</span>
              </a>
            </div>

            {/* What you will receive list */}
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '18px' }}>
                ¿Qué recibirás en tu asesoría gratuita?
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(245, 158, 11, 0.12)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F59E0B',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '3px' }}>
                      1. Conversación Directa y Personalizada
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#9FB5C4', lineHeight: 1.45 }}>
                      Hablamos sobre tus metas, dudas y necesidades para recomendarte la solución exacta para tu negocio.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(9, 168, 181, 0.15)',
                      border: '1px solid rgba(9, 168, 181, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#09A8B5',
                      flexShrink: 0,
                    }}
                  >
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '3px' }}>
                      2. Privacidad y Confidencialidad Total
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#9FB5C4', lineHeight: 1.45 }}>
                      Toda la información y las ideas de tu negocio quedan protegidas bajo estricta reserva y confianza.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(139, 92, 246, 0.12)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#8B5CF6',
                      flexShrink: 0,
                    }}
                  >
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '3px' }}>
                      3. Plan de Trabajo y Presupuesto Claro
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#9FB5C4', lineHeight: 1.45 }}>
                      Recibirás una propuesta detallada con los pasos a seguir, plazos de entrega y costos transparentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact info pill / Actionable CTAs */}
            <div
              className="glass-card"
              style={{
                padding: '22px',
                background: 'rgba(7, 18, 28, 0.75)',
                border: '1px solid rgba(9, 168, 181, 0.28)',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.78rem', color: '#8CA5B5', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  Canales Oficiales Directos
                </span>
                <span style={{ fontSize: '0.72rem', color: '#09A8B5', background: 'rgba(9, 168, 181, 0.15)', padding: '2px 8px', borderRadius: '10px', border: '1px solid rgba(9, 168, 181, 0.3)' }}>
                  Clic para redirigir
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* WhatsApp Link CTA */}
                <a
                  href={getWhatsAppUrl('Hola GAT Consulting, deseo consultar sobre una asesoría tecnológica para mi proyecto.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    background: 'rgba(37, 211, 102, 0.08)',
                    border: '1px solid rgba(37, 211, 102, 0.25)',
                    textDecoration: 'none',
                    transition: 'all 0.22s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(37, 211, 102, 0.2)';
                    e.currentTarget.style.borderColor = '#25D366';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(37, 211, 102, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.25)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <WhatsAppIcon size={18} color="#25D366" />
                    <div>
                      <div style={{ color: '#25D366', fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
                        WhatsApp Oficial
                      </div>
                      <div style={{ color: '#FFFFFF', fontSize: '0.92rem', fontWeight: 700 }}>
                        +51 925 229 293
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#4ADE80', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px' }}>
                    Chatear <ArrowUpRight size={14} />
                  </span>
                </a>

                {/* Email Link CTA */}
                <a
                  href={getEmailUrl()}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    background: 'rgba(9, 168, 181, 0.08)',
                    border: '1px solid rgba(9, 168, 181, 0.25)',
                    textDecoration: 'none',
                    transition: 'all 0.22s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(9, 168, 181, 0.2)';
                    e.currentTarget.style.borderColor = '#09A8B5';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(9, 168, 181, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(9, 168, 181, 0.25)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Mail size={18} color="#09A8B5" />
                    <div>
                      <div style={{ color: '#09A8B5', fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
                        Email Corporativo
                      </div>
                      <div style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 600 }}>
                        contacto@gatconsulting.tech
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#2CD8E8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px' }}>
                    Escribir <ArrowUpRight size={14} />
                  </span>
                </a>

                {/* Phone Call Link CTA */}
                <a
                  href="tel:+51925229293"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textDecoration: 'none',
                    transition: 'all 0.22s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Phone size={18} color="#8CA5B5" />
                    <div>
                      <div style={{ color: '#8CA5B5', fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
                        Llamada Directa
                      </div>
                      <div style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 600 }}>
                        +51 925 229 293
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#B4CAD6', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px' }}>
                    Llamar <ArrowUpRight size={14} />
                  </span>
                </a>

                {/* Company name footer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6A8799', fontSize: '0.8rem', marginTop: '4px', paddingLeft: '4px' }}>
                  <Building size={14} color="#09A8B5" />
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
              <div style={{ textAlign: 'center', padding: '30px 15px' }}>
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'rgba(9, 168, 181, 0.15)',
                    border: '2px solid #09A8B5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                    color: '#09A8B5',
                  }}
                >
                  <CheckCircle2 size={34} />
                </div>
                <h3 style={{ fontSize: '1.7rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '10px' }}>
                  ¡Solicitud Recibida con Éxito!
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#B4CAD6', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 24px auto' }}>
                  Gracias <strong style={{ color: '#FFFFFF' }}>{formData.name || 'por tu interés'}</strong>. Un especialista de <strong style={{ color: '#09A8B5' }}>GAT Technology Consulting</strong> revisará tus requerimientos y te contactará a la brevedad.
                </p>

                {/* Immediate WhatsApp Follow-up */}
                <div
                  style={{
                    padding: '18px',
                    borderRadius: '12px',
                    background: 'rgba(37, 211, 102, 0.08)',
                    border: '1px solid rgba(37, 211, 102, 0.25)',
                    marginBottom: '24px',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontSize: '0.88rem', color: '#E2EEF5', fontWeight: 600, marginBottom: '12px' }}>
                    ⚡ ¿Deseas atención y respuesta ahora mismo?
                  </p>
                  <a
                    href={getWhatsAppUrl(`Hola GAT Consulting, acabo de enviar mi formulario para asesoría gratuita sobre ${service}. Mi nombre es ${formData.name || 'Cliente'}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px 22px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      textDecoration: 'none',
                      boxShadow: '0 4px 16px rgba(37, 211, 102, 0.35)',
                    }}
                  >
                    <WhatsAppIcon size={18} color="#FFFFFF" />
                    <span>Continuar por WhatsApp Inmediato</span>
                  </a>
                </div>

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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '16px' }}>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '16px' }}>
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
                      placeholder="+51 925 229 293"
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
                  style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '6px' }}
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

                {/* Explicit Alternative WhatsApp Action */}
                <div style={{ display: 'flex', alignItems: 'center', margin: '4px 0 0 0', gap: '12px' }}>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(213, 232, 236, 0.15)' }} />
                  <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#8CA5B5', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    O si prefieres atención inmediata
                  </span>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(213, 232, 236, 0.15)' }} />
                </div>

                <a
                  href={getWhatsAppUrl(`Hola GAT Consulting, deseo solicitar una asesoría gratuita sobre: ${service}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '13px 18px',
                    borderRadius: '10px',
                    background: 'rgba(37, 211, 102, 0.12)',
                    border: '1px solid rgba(37, 211, 102, 0.35)',
                    color: '#25D366',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(37, 211, 102, 0.22)';
                    e.currentTarget.style.borderColor = '#25D366';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(37, 211, 102, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.35)';
                  }}
                >
                  <WhatsAppIcon size={18} color="#25D366" />
                  <span>Enviar consulta directa por WhatsApp</span>
                </a>
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
