import React, { useState } from 'react';
import { ShieldCheck, Cpu, Database, Cloud, Terminal, Lock } from 'lucide-react';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('cloud');

  const categories = [
    { id: 'cloud', label: 'Cloud & Infraestructura', icon: Cloud },
    { id: 'ai', label: 'IA & Data Pipelines', icon: Cpu },
    { id: 'security', label: 'Seguridad & Cumplimiento', icon: Lock },
    { id: 'software', label: 'Lenguajes & Backend', icon: Terminal },
  ];

  const technologies = {
    cloud: [
      { name: 'Amazon Web Services (AWS)', tag: 'Certified Architecture', desc: 'EKS, Lambda, S3, RDS, CloudFront, GuardDuty' },
      { name: 'Google Cloud Platform (GCP)', tag: 'Premier Partner Ready', desc: 'GKE, BigQuery, Vertex AI, Cloud Run' },
      { name: 'Microsoft Azure', tag: 'Enterprise Cloud', desc: 'AKS, Azure OpenAI, Cosmos DB, Entra ID' },
      { name: 'Kubernetes & Docker', tag: 'Container Orchestration', desc: 'Helm, Istio Service Mesh, ArgoCD (GitOps)' },
      { name: 'Terraform & OpenTofu', tag: 'Infrastructure as Code', desc: 'Multi-cloud declarative provisioning' },
      { name: 'Datadog & Grafana', tag: 'Full Observability', desc: 'APM, distributed tracing, alerting 24/7' },
    ],
    ai: [
      { name: 'Modelos LLM / RAG Empresarial', tag: 'OpenAI / Claude / Llama', desc: 'Búsqueda semántica y agentes autónomos' },
      { name: 'PyTorch & TensorFlow', tag: 'Deep Learning', desc: 'Entrenamiento y fine-tuning de modelos' },
      { name: 'Apache Kafka & Flink', tag: 'Streaming en Tiempo Real', desc: 'Event-driven streaming a escala masiva' },
      { name: 'Snowflake & BigQuery', tag: 'Data Warehousing', desc: 'Modelado y analítica de datos de alto volumen' },
      { name: 'Pinecone & Qdrant / PgVector', tag: 'Vector Databases', desc: 'Embeddings y recuperación ultra rápida' },
      { name: 'dbt (Data Build Tool)', tag: 'Data Transformation', desc: 'Orquestación de pipelines y linaje de datos' },
    ],
    security: [
      { name: 'Zero-Trust Architecture', tag: 'Defensa en Profundidad', desc: 'Microsegmentación y autenticación continua' },
      { name: 'ISO 27001 & SOC 2 Type II', tag: 'Gobernanza & Auditoría', desc: 'Alineación de controles normativos' },
      { name: 'HashiCorp Vault', tag: 'Secrets Management', desc: 'Gestión centralizada de certificados y claves' },
      { name: 'WAF & DDoS Shield', tag: 'Protección Perimetral', desc: 'Cloudflare / AWS Shield Advanced' },
      { name: 'DevSecOps & SAST/DAST', tag: 'Seguridad en CI/CD', desc: 'Snyk, SonarQube, Trivy container scanning' },
      { name: 'PCI-DSS & GDPR Compliance', tag: 'Privacidad de Datos', desc: 'Anonimización y encriptación end-to-end' },
    ],
    software: [
      { name: 'TypeScript / React / Next.js', tag: 'Modern Frontend', desc: 'Interfaces reactivas de ultra alto rendimiento' },
      { name: 'Go (Golang)', tag: 'High-Concurrency Services', desc: 'Microservicios con latencias sub-milisegundo' },
      { name: 'Python (FastAPI / Django)', tag: 'AI & Data Services', desc: 'APIs asíncronas para integración de modelos' },
      { name: 'Node.js & NestJS', tag: 'Enterprise Backend', desc: 'Arquitecturas modulares basadas en DDD' },
      { name: 'PostgreSQL & Redis', tag: 'High Performance DB', desc: 'Clustering, sharding y caching distribuido' },
      { name: 'gRPC & GraphQL', tag: 'Modern Communication', desc: 'Protocolos binarios de baja sobrecarga' },
    ],
  };

  return (
    <section
      id="tech"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'transparent',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px auto' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Ecosistema Tecnológico & Estándares
          </div>
          <h2 className="section-title">
            Tecnologías Líderes de <span className="text-gradient-brand">Clase Mundial</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Trabajamos con el stack tecnológico más robusto, probado en la industria y avalado por las mejores prácticas globales.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '12px 22px',
                  borderRadius: '12px',
                  background: isActive ? 'rgba(9, 168, 181, 0.18)' : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? '1px solid #09A8B5' : '1px solid rgba(213, 232, 236, 0.12)',
                  color: isActive ? '#FFFFFF' : '#9FB5C4',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s ease',
                }}
              >
                <Icon size={18} color={isActive ? '#09A8B5' : '#8CA5B5'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {technologies[activeCategory].map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '24px',
                background: 'rgba(18, 50, 74, 0.45)',
                border: '1px solid rgba(213, 232, 236, 0.1)',
                borderRadius: '16px',
                transition: 'all 0.25s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <h4 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#FFFFFF' }}>{item.name}</h4>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: '#09A8B5',
                    background: 'rgba(9, 168, 181, 0.1)',
                    border: '1px solid rgba(9, 168, 181, 0.25)',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontWeight: 600,
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#8CA5B5', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
