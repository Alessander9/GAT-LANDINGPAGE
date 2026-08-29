import {
  Globe,
  Layers,
  Smartphone,
  Apple,
  Shield,
  Brain,
  Bot,
  Zap,
  Code2,
  Lock,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Database,
  BarChart3,
  Server,
  Cloud,
  Terminal,
  MessageSquare,
  Network,
  KeyRound,
  FileCheck,
} from "lucide-react";

export const SERVICES_DATA = {
  "landing-page": {
    slug: "landing-page",
    navLabel: "Landing Page",
    title: "Páginas Web Corporativas & Landing Pages de Alta Conversión",
    tagline: "Ultra alto rendimiento, diseño UI/UX exclusivo a medida y optimización CRO para convertir visitas en clientes.",
    badge: "Conversión & SEO de Élite",
    accent: "#09A8B5",
    gradient: "linear-gradient(135deg, #09A8B5 0%, #087F9F 100%)",
    icon: Globe,
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Velocidad de Carga", value: "< 0.8s", sub: "Core Web Vitals 99+" },
      { label: "Incremento en Conversión", value: "+340%", sub: "Arquitectura CRO enfocada" },
      { label: "Indexación SEO", value: "100%", sub: "Estructura semántica técnica" },
      { label: "Disponibilidad SLA", value: "99.99%", sub: "Edge CDN Global" },
    ],
    overview:
      "Diseñamos y desarrollamos sitios web corporativos y landing pages que combinan estética visual premium con ingeniería de software moderna. Cada página es programada a medida (sin plantillas lentas de WordPress), garantizando tiempos de carga instantáneos, seguridad impenetrable y una experiencia de usuario que posiciona tu marca por encima de la competencia.",
    pillars: [
      {
        icon: Zap,
        title: "Velocidad Extrema & Core Web Vitals",
        description: "Optimizada con Next.js/Vite y servida desde redes CDN Edge para una experiencia instantánea que maximiza el ranking en Google.",
      },
      {
        icon: Sparkles,
        title: "Diseño UI/UX de Grado Internacional",
        description: "Micro-interacciones fluidas, animaciones GSAP y estética moderna acorde a los estándares de las mejores firmas tecnológicas globales.",
      },
      {
        icon: BarChart3,
        title: "Ingeniería de Conversión (CRO)",
        description: "Arquitectura pensada en la psicología de compra: jerarquía visual clara, pruebas A/B y llamadas a la acción estratégicamente posicionadas.",
      },
      {
        icon: Shield,
        title: "SEO Técnico & Seguridad Blindada",
        description: "Marcado JSON-LD enriquecido, certificados SSL/TLS modernos, protección DDoS Cloudflare y tiempos de respuesta bajo 100ms.",
      },
    ],
    process: [
      { step: "01", title: "Estrategia & Wireframing", desc: "Definición de propuesta de valor, estructura de contenido y flujo del usuario." },
      { step: "02", title: "Diseño UI/UX en Alta Fidelidad", desc: "Prototipado interactivo a medida alineado a tu identidad visual corporativa." },
      { step: "03", title: "Desarrollo Frontend & Animaciones", desc: "Programación limpia en React/Next.js con animaciones fluidas y accesibilidad." },
      { step: "04", title: "Testing, SEO & Despliegue Global", desc: "Auditoría de rendimiento Lighthouse 100/100 y publicación en CDN mundial." },
    ],
    useCases: [
      { client: "Empresas Corporativas", result: "Posicionamiento de marca institucional con credibilidad internacional y captación B2B." },
      { client: "Campañas de Marketing Digital", result: "Landing pages hiper-optimizadas para Google Ads y Meta Ads con tasas récord de conversión." },
      { client: "Startups & Lanzamientos de Productos", result: "Showcases interactivos con demostraciones de producto y captura de leads calificados." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Cloudflare", "Vercel Edge", "Google Analytics 4"],
    faqs: [
      { q: "¿Cuánto tiempo toma el desarrollo de una Landing Page?", a: "El desarrollo de una landing page corporativa de alto impacto suele completarse entre 7 a 14 días hábiles, incluyendo diseño, desarrollo y pruebas de rendimiento." },
      { q: "¿Tendré acceso y propiedad completa del código?", a: "Sí, el 100% del código fuente, activos gráficos y accesos de despliegue son transferidos a tu empresa al finalizar el proyecto." },
      { q: "¿Se incluye la optimización para teléfonos móviles?", a: "Absolutamente. Diseñamos con filosofía Mobile-First, garantizando que el 100% de la funcionalidad y belleza visual se adapte a cualquier pantalla de smartphone o tablet." },
    ],
  },

  "app-web": {
    slug: "app-web",
    navLabel: "App Web",
    title: "Aplicativos Web a Medida, Plataformas SaaS & Dashboards",
    tagline: "Software empresarial escalable en la nube, portales transaccionales y paneles de control en tiempo real.",
    badge: "Arquitectura Cloud & SaaS",
    accent: "#2CD8E8",
    gradient: "linear-gradient(135deg, #2CD8E8 0%, #09A8B5 100%)",
    icon: Layers,
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Escalabilidad Concurrente", value: "500k+", sub: "Usuarios simultáneos" },
      { label: "Tiempo de Respuesta API", value: "< 45ms", sub: "Microservicios optimizados" },
      { label: "Reducción de Costos Cloud", value: "-35%", sub: "Arquitectura Serverless" },
      { label: "Uptime Garantizado", value: "99.99%", sub: "Multi-Region Cloud" },
    ],
    overview:
      "Desarrollamos aplicaciones web de misión crítica, soluciones SaaS para monetización recurrente y portales de gestión operativa interna. Nuestra arquitectura modular desacoplada permite a tu plataforma crecer de cientos a millones de usuarios sin rediseños traumáticos ni caídas de servicio.",
    pillars: [
      {
        icon: Database,
        title: "Bases de Datos & Arquitectura Escalable",
        description: "Modelado optimizado en PostgreSQL, MongoDB y Redis con particionamiento y réplicas de lectura para alta concurrencia.",
      },
      {
        icon: Lock,
        title: "Autenticación & Control de Roles (RBAC)",
        description: "Gestión de sesiones segura con JWT/OAuth2, multi-tenancy para SaaS, SSO corporativo y auditoría de accesos.",
      },
      {
        icon: BarChart3,
        title: "Dashboards en Tiempo Real",
        description: "Visualización de datos analíticos mediante WebSockets y pipelines de eventos para toma de decisiones ejecutivas en vivo.",
      },
      {
        icon: Server,
        title: "APIs RESTful & GraphQL Modulares",
        description: "Interconexión fluida con pasarelas de pago (Stripe, Mercado Pago), ERPs (SAP, Oracle) y servicios de terceros.",
      },
    ],
    process: [
      { step: "01", title: "Arquitectura de Datos & Requerimientos", desc: "Diseño del modelo entidad-relación, flujos de negocio y matriz de permisos." },
      { step: "02", title: "Diseño UX de Paneles & Prototipo", desc: "Creación de la interfaz de usuario para dashboards y pantallas administrativas." },
      { step: "03", title: "Desarrollo Full-Stack & APIs", desc: "Construcción backend y frontend con CI/CD y pruebas unitarias automatizadas." },
      { step: "04", title: "Despliegue Multi-Cloud & Monitoreo", desc: "Puesta en producción en AWS/GCP con observabilidad y alertas en tiempo real." },
    ],
    useCases: [
      { client: "Plataformas SaaS B2B / B2C", result: "Sistemas de suscripción con cobro recurrente automatizado y gestión multi-empresa." },
      { client: "Portales de Clientes & Proveedores", result: "Autoservicio para cotizaciones, seguimiento de pedidos y gestión documental." },
      { client: "Sistemas ERP & CRM a Medida", result: "Digitalización total de operaciones eliminando hojas de cálculo desorganizadas." },
    ],
    techStack: ["Node.js", "Python / FastAPI", "React / Next.js", "PostgreSQL", "Redis", "Docker", "AWS / Google Cloud", "Stripe API"],
    faqs: [
      { q: "¿Puedo integrar mi ERP o CRM existente con el aplicativo web?", a: "Sí, desarrollamos conectores API dedicados para integrar la nueva aplicación web con sistemas como SAP, Salesforce, HubSpot, QuickBooks y bases de datos heredadas." },
      { q: "¿Cómo garantizan la seguridad de los datos de mi negocio?", a: "Implementamos cifrado en tránsito (TLS 1.3), cifrado en reposo (AES-256), autenticación multifactor (MFA), prevención contra ataques OWASP Top 10 y copias de seguridad automatizadas." },
    ],
  },

  "app-android": {
    slug: "app-android",
    navLabel: "App Android",
    title: "Desarrollo de Aplicaciones Móviles Android de Alto Desempeño",
    tagline: "Apps nativas e híbridas diseñadas para máxima fluidez, integración con hardware y publicación exitosa en Google Play.",
    badge: "Mobile Engineering",
    accent: "#5C9DFF",
    gradient: "linear-gradient(135deg, #5C9DFF 0%, #09A8B5 100%)",
    icon: Smartphone,
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Tasa de Crashes", value: "< 0.01%", sub: "Estabilidad de grado bancario" },
      { label: "Tiempo de Inicio (Cold Start)", value: "< 1.1s", sub: "Arranque ultrarrápido" },
      { label: "Optimización de Batería", value: "Nivel A+", sub: "Gestión eficiente de tareas" },
      { label: "Dispositivos Soportados", value: "99.4%", sub: "Android 8.0 hasta Android 15" },
    ],
    overview:
      "Creamos aplicaciones móviles Android potentes, intuitivas y robustas. Desde aplicaciones de delivery y comercio electrónico hasta herramientas corporativas para personal en campo con sincronización offline, garantizamos experiencias móviles que deleitan a los usuarios y maximizan las calificaciones en la tienda.",
    pillars: [
      {
        icon: Cpu,
        title: "Ingeniería Nativa (Kotlin & Jetpack Compose)",
        description: "Interfaces reactivas modernas con arquitectura MVVM/Clean Architecture para rendimiento óptimo y fácil mantenimiento.",
      },
      {
        icon: Cloud,
        title: "Modo Offline & Sincronización en Segundo Plano",
        description: "Almacenamiento local con Room/SQLite y sincronización automática bidireccional en cuanto el dispositivo recupera conexión.",
      },
      {
        icon: Network,
        title: "Notificaciones Push & Engagement",
        description: "Integración con Firebase Cloud Messaging (FCM) para campañas segmentadas y alertas transaccionales instantáneas.",
      },
      {
        icon: Shield,
        title: "Integración con Hardware & Sensores",
        description: "Acceso optimizado a GPS de alta precisión, cámaras con escaneo OCR/códigos QR, Bluetooth BLE, biométricos y NFC.",
      },
    ],
    process: [
      { step: "01", title: "Diseño UX Mobile & Prototipado", desc: "Lineamientos de diseño Material Design 3 adaptados a ergonomía táctil." },
      { step: "02", title: "Desarrollo de Arquitectura & Lógica", desc: "Programación de módulos, consumo de APIs y almacenamiento local protegido." },
      { step: "03", title: "Pruebas en Dispositivos Reales", desc: "Testing automatizado en múltiples resoluciones y versiones de Android." },
      { step: "04", title: "Publicación & Aprobación en Google Play", desc: "Gestión completa de políticas de Google Play Console y despliegue oficial." },
    ],
    useCases: [
      { client: "Apps de Comercio & Delivery", result: "Seguimiento en tiempo real con mapas interactivos y pasarelas de pago móvil." },
      { client: "Operaciones de Campo & Logística", result: "Registro de auditorías, firmas digitales y control de stock sin conexión a internet." },
      { client: "FinTech & Billeteras Digitales", result: "Autenticación biométrica con huella/rostro y transferencias en segundos." },
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Flutter", "Firebase FCM", "Room DB", "Retrofit", "Google Maps SDK", "Play Console"],
    faqs: [
      { q: "¿Se encargan de todo el proceso de publicación en Google Play Store?", a: "Sí, preparamos todos los requisitos técnicos, certificados de firma, políticas de privacidad y gestionamos el proceso de revisión de Google Play hasta la publicación exitosa." },
      { q: "¿La app funcionará si el usuario no tiene internet?", a: "Podemos configurar una arquitectura Offline-First que almacena los datos localmente y los sincroniza automáticamente cuando se restablece la conexión." },
    ],
  },

  "app-ios": {
    slug: "app-ios",
    navLabel: "App iOS",
    title: "Desarrollo de Aplicaciones Nativas iOS (iPhone, iPad & Apple Ecosystem)",
    tagline: "Experiencias de usuario premium con SwiftUI, animaciones hápticas y cumplimiento estricto del App Store.",
    badge: "Apple Ecosystem",
    accent: "#00E5FF",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #087F9F 100%)",
    icon: Apple,
    heroImage: "https://images.unsplash.com/photo-1510519138171-c70d76b640a4?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Aprobación App Store", value: "100%", sub: "Cumplimiento de Apple Guidelines" },
      { label: "Soporte Apple Silicon", value: "Nativo", sub: "Máxima eficiencia energética" },
      { label: "Integración Apple Pay", value: "1 Clic", sub: "Fricción de checkout mínima" },
      { label: "Seguridad Keychain", value: "Hardware", sub: "Secure Enclave" },
    ],
    overview:
      "Creamos aplicaciones para iOS que aprovechan toda la potencia del hardware de Apple. Con código optimizado en SwiftUI y UIKit, entregamos aplicaciones elegantes, fluidas y seguras que cumplen rigurosamente con los estrictos estándares de diseño y privacidad de la App Store de Apple.",
    pillars: [
      {
        icon: Sparkles,
        title: "Desarrollo en SwiftUI & Human Interface Guidelines",
        description: "Interfaces visuales deslumbrantes con soporte para Dynamic Island, widgets, modo oscuro y respuesta háptica nativa.",
      },
      {
        icon: Lock,
        title: "Seguridad de Hardware & Face ID / Touch ID",
        description: "Almacenamiento de credenciales criptográficas en el Secure Enclave y autenticación biométrica de última generación.",
      },
      {
        icon: Zap,
        title: "Apple Pay & Compras Integradas (In-App Purchases)",
        description: "Monetización fluida mediante suscripciones StoreKit 2 y pagos seguros con Touch ID / Face ID en un solo toque.",
      },
      {
        icon: Network,
        title: "Sincronización con iCloud & Ecosistema Apple",
        description: "Continuidad transparente entre iPhone, iPad, Apple Watch y Mac mediante CloudKit y CoreData.",
      },
    ],
    process: [
      { step: "01", title: "Diseño iOS Human Interface", desc: "Diseño centrado en la elegancia visual y patrones ergonómicos de iOS." },
      { step: "02", title: "Desarrollo Nativo en Swift / SwiftUI", desc: "Programación estructurada con alto rendimiento y bajo consumo de memoria." },
      { step: "03", title: "Pruebas Beta en TestFlight", desc: "Distribución a usuarios de prueba para validación y feedback en tiempo real." },
      { step: "04", title: "Lanzamiento Oficial en App Store", desc: "Preparación de metadata, screenshots ASO y aprobación directa por Apple." },
    ],
    useCases: [
      { client: "Apps Premium & Estilo de Vida", result: "Experiencias de usuario impecables para marcas de lujo y servicios de alta gama." },
      { client: "FinTech & Pagos Móviles", result: "Integración completa con Apple Wallet, Face ID y microtransacciones instantáneas." },
      { client: "Salud & Wellness con Apple HealthKit", result: "Monitoreo biométrico y análisis de actividad física en tiempo real." },
    ],
    techStack: ["Swift", "SwiftUI", "Flutter", "Combine", "CoreData", "StoreKit 2", "TestFlight", "App Store Connect"],
    faqs: [
      { q: "¿Cómo garantizan que la app sea aprobada por Apple?", a: "Nuestro equipo tiene amplia experiencia con las Apple App Store Review Guidelines. Diseñamos y validamos cada aspecto de seguridad, privacidad y UX antes de la sumisión oficial." },
      { q: "¿Pueden desarrollar una app para iOS y Android con una sola base de código?", a: "Sí, podemos desarrollar tu aplicación utilizando Flutter, lo que permite compartir hasta el 90% del código manteniendo rendimiento nativo en ambas plataformas." },
    ],
  },

  "ciberseguridad": {
    slug: "ciberseguridad",
    navLabel: "Ciberseguridad",
    title: "Ciberseguridad Zero Trust, Auditorías & Blindaje Digital",
    tagline: "Protección integral contra amenazas avanzadas, pruebas de penetración (pentesting) y cumplimiento normativo ISO 27001 / SOC 2.",
    badge: "Seguridad Zero Trust",
    accent: "#087F9F",
    gradient: "linear-gradient(135deg, #087F9F 0%, #071521 100%)",
    icon: Shield,
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Incidentes de Fuga", value: "0", sub: "Monitoreo continuo SIEM" },
      { label: "Cumplimiento Normativo", value: "100%", sub: "ISO 27001 / SOC 2 / HIPAA" },
      { label: "Mitigación DDoS", value: "Sub-segundo", sub: "Protección perimetral Cloud" },
      { label: "Vulnerabilidades Detectadas", value: "Priorizadas", sub: "Informe ejecutivo y técnico" },
    ],
    overview:
      "Protegemos los activos digitales más valiosos de tu organización frente a ciberataques, fugas de información y accesos no autorizados. Aplicamos la arquitectura Zero Trust ('nunca confíes, siempre verifica'), auditorías de código estático/dinámico y planes de respuesta a incidentes para blindar tu negocio.",
    pillars: [
      {
        icon: KeyRound,
        title: "Arquitectura Zero Trust & Identidades",
        description: "Micro-segmentación de redes, políticas de mínimo privilegio y autenticación multifactor adaptativa.",
      },
      {
        icon: Terminal,
        title: "Pentesting Ético & Análisis de Vulnerabilidades",
        description: "Simulación de ataques reales sobre aplicaciones web, APIs e infraestructura cloud para detectar fallas antes que los atacantes.",
      },
      {
        icon: FileCheck,
        title: "Cumplimiento Normativo & Auditoría",
        description: "Alineación de sistemas para certificaciones ISO/IEC 27001, SOC 2 Type II, HIPAA, PCI-DSS y leyes de protección de datos.",
      },
      {
        icon: Lock,
        title: "Hardening de Infraestructura & Cloud Security",
        description: "Configuración blindada de entornos AWS, GCP y Azure con encriptación de datos de grado bancario (AES-256).",
      },
    ],
    process: [
      { step: "01", title: "Auditoría Inicial & Threat Modeling", desc: "Identificación de superficie de ataque, activos críticos y vectores de riesgo." },
      { step: "02", title: "Pruebas de Penetración (Pentest)", desc: "Ejecución de pruebas manuales y automatizadas siguiendo estándares OWASP." },
      { step: "03", title: "Remediación & Hardening", desc: "Corrección de vulnerabilidades, blindaje de servidores y configuración de firewalls." },
      { step: "04", title: "Monitoreo Continuo & Capacitación", desc: "Implementación de alertas SIEM 24/7 y formación al equipo contra phishing." },
    ],
    useCases: [
      { client: "FinTechs & Entidades Financieras", result: "Blindaje de transacciones y cumplimiento estricto para licencias bancarias." },
      { client: "HealthTech & Clínicas Médicas", result: "Protección de expedientes médicos y cumplimiento de privacidad HIPAA/GDPR." },
      { client: "Empresas en Proceso de Auditoría", result: "Preparación integral para obtener certificaciones ISO 27001 y SOC 2 en tiempo récord." },
    ],
    techStack: ["OWASP ZAP", "Burp Suite", "Cloudflare Zero Trust", "AWS GuardDuty", "HashiCorp Vault", "Wazuh SIEM", "Terraform", "SonarQube"],
    faqs: [
      { q: "¿Qué incluye un informe de Pentesting?", a: "Entregamos un informe ejecutivo para la gerencia (resumen de riesgos y prioridad de impacto) y un informe técnico detallado para los desarrolladores con pruebas de concepto y código de solución paso a paso." },
      { q: "¿Las pruebas de seguridad pueden causar caídas en mi sistema?", a: "No. Coordinamos ventanas controladas y ajustamos la intensidad de las pruebas para garantizar que tu operación comercial continúe con normalidad durante todo el proceso." },
    ],
  },

  "automatizaciones-ia": {
    slug: "automatizaciones-ia",
    navLabel: "Automatizaciones IA",
    title: "Automatizaciones con Inteligencia Artificial & Agentes Autónomos",
    tagline: "Reingeniería digital de flujos de trabajo con modelos generativos (LLMs/RAG) conectados a tus bases de datos.",
    badge: "Inteligencia Artificial Aplicada",
    accent: "#00E5FF",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #09A8B5 100%)",
    icon: Brain,
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Reducción de Tiempo Manual", value: "-75%", sub: "En tareas operativas repetitivas" },
      { label: "Disponibilidad de Agentes", value: "24/7/365", sub: "Sin retrasos ni fatiga" },
      { label: "Precisión en Extracción", value: "98.7%", sub: "Modelos RAG calibrados" },
      { label: "ROI Promedio", value: "3.8x", sub: "En los primeros 6 meses" },
    ],
    overview:
      "Transformamos procesos manuales y costosos en pipelines autónomos e inteligentes. Conectamos modelos de lenguaje avanzados (OpenAI, Claude, Llama 3) a las fuentes de datos de tu empresa mediante arquitectura RAG (Retrieval-Augmented Generation), permitiendo a tu equipo automatizar análisis de documentos, generación de reportes y toma de decisiones operativas.",
    pillars: [
      {
        icon: Brain,
        title: "Agentes Autónomos de Tareas Complejas",
        description: "Agentes de IA capaces de ejecutar flujos de múltiples pasos: consultar bases de datos, enviar correos, generar cotizaciones y actualizar ERPs.",
      },
      {
        icon: Database,
        title: "Arquitectura RAG sobre Datos Privados",
        description: "Búsqueda semántica en bases vectoriales (Pinecone, ChromaDB) para consultar contratos, manuales y políticas sin alucinaciones.",
      },
      {
        icon: Zap,
        title: "Procesamiento Inteligente de Documentos (IDP)",
        description: "Extracción automática y estructuración de datos de facturas, PDFs, expedientes legales e imágenes complejas.",
      },
      {
        icon: Network,
        title: "Integración con Herramientas Existentes",
        description: "Conexión nativa con WhatsApp Business, Slack, Microsoft 365, Google Workspace, Zapier y Make.",
      },
    ],
    process: [
      { step: "01", title: "Mapeo de Procesos & Cuellos de Botella", desc: "Identificación de tareas repetitivas de alto costo humano para automatizar." },
      { step: "02", title: "Arquitectura RAG & Conexión de Datos", desc: "Indexación vectorial de los documentos y bases de conocimiento internas." },
      { step: "03", title: "Desarrollo de Agentes & Prompt Engineering", desc: "Calibración fina de modelos para respuestas exactas, seguras y sin alucinaciones." },
      { step: "04", title: "Integración en Producción & Métricas", desc: "Despliegue con monitoreo de tokens, latencia y precisión continua." },
    ],
    useCases: [
      { client: "Estudios Jurídicos & LegalTech", result: "Análisis automático de 500+ páginas de contratos en segundos con resumen de cláusulas de riesgo." },
      { client: "Operaciones Financieras & Seguros", result: "Aprobación y validación automática de pólizas y reclamos con verificación documental." },
      { client: "Equipos de Ventas & Soporte B2B", result: "Generación automática de propuestas técnicas personalizadas basadas en el historial del cliente." },
    ],
    techStack: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "LangChain / LlamaIndex", "Pinecone", "Python", "FastAPI", "PostgreSQL pgvector", "Docker"],
    faqs: [
      { q: "¿Nuestros datos confidenciales se utilizan para entrenar los modelos públicos?", a: "No. Utilizamos APIs empresariales con acuerdos de cero retención de datos (Zero Data Retention) y entornos privados en la nube donde tu información nunca se comparte ni se usa para entrenar modelos públicos." },
      { q: "¿Cómo controlan que la inteligencia artificial no 'invente' información (alucinaciones)?", a: "Implementamos arquitectura RAG estricta con citación obligatoria de fuentes. Si el modelo no encuentra la respuesta en tus documentos verificados, informa con precisión en lugar de suponer." },
    ],
  },

  "asistente-ia": {
    slug: "asistente-ia",
    navLabel: "Asistente IA",
    title: "Asistentes de IA Corporativos & Chatbots Cognitivos 24/7",
    tagline: "Atención al cliente omnicanal instantánea, calificación de leads y soporte interno con lenguaje natural humano.",
    badge: "Chatbots Cognitivos 24/7",
    accent: "#09A8B5",
    gradient: "linear-gradient(135deg, #09A8B5 0%, #00E5FF 100%)",
    icon: Bot,
    heroImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
    metrics: [
      { label: "Tiempo de Respuesta", value: "< 1.5s", sub: "Atención inmediata 24/7" },
      { label: "Resolución en Primer Contacto", value: "88%", sub: "Sin intervención humana" },
      { label: "Capacidad de Concurrencia", value: "Ilimitada", sub: "Miles de chats en simultáneo" },
      { label: "Canales Soportados", value: "Omnicanal", sub: "WhatsApp, Web, Instagram, Telegram" },
    ],
    overview:
      "Diseñamos e implementamos asistentes virtuales conversacionales que entienden el contexto de tu negocio y responden con tono humano, profesional y preciso. Olvídate de los chatbots rígidos de opciones numéricas: nuestros asistentes comprenden texto libre, audios de voz y guían a los clientes hasta el cierre de la venta.",
    pillars: [
      {
        icon: MessageSquare,
        title: "Omnicanalidad Fluida (WhatsApp & Web)",
        description: "Integración oficial con WhatsApp Cloud API, chat embebido en tu sitio web, Instagram Direct y canales corporativos.",
      },
      {
        icon: Brain,
        title: "Comprensión Contextual & Tono de Marca",
        description: "Adaptado al lenguaje y manual de marca de tu empresa, reconociendo modismos, intenciones de compra y urgencias.",
      },
      {
        icon: Zap,
        title: "Calificación de Leads & Cierre de Citas",
        description: "Captura de datos de contacto, validación de presupuesto y agendamiento automático en Google Calendar o Calendly.",
      },
      {
        icon: Network,
        title: "Transferencia Híbrida a Agentes Humanos",
        description: "Enrutamiento inteligente con historial completo hacia el equipo comercial o de soporte cuando el caso requiere atención personalizada.",
      },
    ],
    process: [
      { step: "01", title: "Definición de Personalidad & Casos de Uso", desc: "Definición del tono comunicativo, respuestas modelo y reglas de negocio." },
      { step: "02", title: "Entrenamiento de Base de Conocimiento", desc: "Carga de catálogos, preguntas frecuentes, políticas de envío y precios." },
      { step: "03", title: "Integración con WhatsApp & CRM", desc: "Conexión con tu número de WhatsApp oficial y sincronización con HubSpot/Salesforce." },
      { step: "04", title: "Lanzamiento, Pruebas & Optimización", desc: "Monitoreo en vivo de conversaciones y refinamiento semanal del prompt." },
    ],
    useCases: [
      { client: "E-Commerce & Retail", result: "Recomendación de productos, consultas de estado de envío y resolución de dudas 24/7." },
      { client: "Clínicas & Servicios Médicos", result: "Agendamiento y confirmación automática de citas por WhatsApp sin esperas telefónicas." },
      { client: "Inmobiliarias & Concesionarios", result: "Calificación previa de prospectos y envío de fichas técnicas personalizadas en segundos." },
    ],
    techStack: ["WhatsApp Cloud API", "OpenAI GPT-4o mini", "Node.js", "Redis Session Store", "HubSpot CRM API", "Google Calendar API", "Twilio", "WebSockets"],
    faqs: [
      { q: "¿El asistente puede atender mensajes de audio por WhatsApp?", a: "Sí, integramos modelos de transcripción de voz (Whisper) que convierten los mensajes de audio de tus clientes a texto al instante para responder adecuadamente." },
      { q: "¿Qué sucede si el asistente no sabe responder una consulta muy específica?", a: "El asistente está programado para transferir la conversación de inmediato a un agente humano de tu equipo con una notificación en tiempo real y el resumen del chat." },
    ],
  },
};
