import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function HeaderBar({ onNavigate }) {
  return (
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: '24px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('#hero');
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <img
            src="/assets/GAT_Logo_Fondo_Oscuro_Transparente_HD.png"
            alt="GAT Technology Consulting"
            width="140"
            height="42"
            decoding="async"
            style={{
              height: '42px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 10px rgba(9, 168, 181, 0.35))',
            }}
          />
        </a>

        {/* Right action button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(9, 168, 181, 0.08)',
              border: '1px solid rgba(9, 168, 181, 0.2)',
              fontSize: '0.8rem',
              color: '#09A8B5',
              fontWeight: 600,
            }}
            className="top-status-badge"
          >
            <span className="tech-badge-dot" />
            <span>Advisory C-Level</span>
          </div>

          <button
            onClick={() => onNavigate('#contacto')}
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '0.88rem' }}
          >
            <span>Diagnóstico Gratis</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .top-status-badge {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
