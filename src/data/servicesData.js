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
    title: "Página Web & Landing Page para Vender Más",
    tagline: "Diseñamos una página web moderna que convierte a los visitantes de tu negocio en clientes reales y ventas.",
    badge: "Ventas & Presencia Web",
    accent: "#09A8B5",
    gradient: "linear-gradient(135deg, #09A8B5 0%, #087F9F 100%)",
    icon: Globe,
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=480&q=60&fm=webp",
    heroVideo: "https://res.cloudinary.com/piun1mwb/video/upload/v1788051397/landing_page.mp4",
    videoBadge: "Página Web de Alta Velocidad · En Vivo",
    metrics: [
      { label: "Más Clientes", value: "+300%", sub: "Tasa de conversión de visitas" },
      { label: "Carga en Celulares", value: "< 1 seg", sub: "Sin hacer esperar al cliente" },
    ],
    overview:
      "Tu página web es la carta de presentación de tu empresa. Creamos sitios web atractivos, rápidos y fáciles de usar desde cualquier teléfono o computadora, diseñados especialmente para captar la atención de tus clientes y convencerlos de comprarte o contactarte.",
    pillars: [
      {
        icon: TrendingUp,
        title: "Aparece primero en Google y búsquedas locales",
        description: "Optimizamos tu página para que las personas que buscan tus productos o servicios te encuentren fácilmente.",
      },
      {
        icon: Zap,
        title: "Abre al instante en celulares y computadoras",
        description: "Tu página cargará en menos de un segundo, evitando que los clientes se cansen y se vayan a la competencia.",
      },
      {
        icon: Sparkles,
        title: "Diseño elegante que transmite confianza",
        description: "Una imagen corporativa profesional que hace que tu negocio luzca confiable y de primer nivel.",
      },
      {
        icon: MessageSquare,
        title: "Botón directo a WhatsApp y llamadas",
        description: "Facilitamos que tus clientes te escriban o llamen con un solo toque desde su celular.",
      },
    ],
    process: [
      { step: "01", title: "Entendemos tu Negocio", desc: "Conversamos contigo para definir qué vendes y quién es tu cliente ideal." },
      { step: "02", title: "Diseño Visual Personalizado", desc: "Te mostramos cómo lucirá tu página antes de construirla para que des tu visto bueno." },
      { step: "03", title: "Construcción y Adaptación Móvil", desc: "Programamos la web cuidando que se vea perfecta en cualquier pantalla." },
      { step: "04", title: "Lanzamiento y Conexión a Google", desc: "Publicamos tu página en internet y la conectamos a tus redes y WhatsApp." },
    ],
    useCases: [
      { client: "Empresas y Negocios de Servicios", result: "Consigue más clientes que piden presupuestos todos los días." },
      { client: "Campañas de Publicidad en Redes", result: "Aprovecha al máximo el dinero invertido en anuncios recibiendo más mensajes." },
      { client: "Profesionales y Marcas Personales", result: "Posiciónate como el referente número uno de tu rubro." },
    ],
    techStack: ["Diseño Móvil", "WhatsApp Directo", "Google SEO", "Carga Rápida", "Seguridad Web", "Dominio Propio"],
    faqs: [
      { q: "¿En cuánto tiempo estará lista mi página web?", a: "Tu página estará terminada y funcionando en internet entre 7 y 14 días hábiles." },
      { q: "¿La página funcionará bien en celulares?", a: "Sí, el 100% de nuestras páginas se adaptan automáticamente a cualquier modelo de smartphone y tablet." },
      { q: "¿Seré dueño de mi página y dominio?", a: "Sí, todos los derechos, archivos y accesos pertenecen totalmente a tu empresa." },
    ],
  },

  "app-web": {
    slug: "app-web",
    navLabel: "Sistema Web",
    title: "Sistema Web & Plataforma a Medida para tu Empresa",
    tagline: "Organiza tu negocio, controla inventarios, ventas y pedidos desde cualquier computadora o celular sin complicaciones.",
    badge: "Control & Gestión de Negocios",
    accent: "#2CD8E8",
    gradient: "linear-gradient(135deg, #2CD8E8 0%, #09A8B5 100%)",
    icon: Layers,
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=480&q=60&fm=webp",
    heroVideo: "https://res.cloudinary.com/piun1mwb/video/upload/v1788051881/Developer_building_web_applicati__202608281943.mp4",
    videoBadge: "Sistema Empresarial en la Nube · En Vivo",
    metrics: [
      { label: "Ahorro de Tiempo", value: "-40%", sub: "Menos trámites y papeleos" },
      { label: "Acceso Remoto", value: "24/7", sub: "Desde cualquier lugar del mundo" },
    ],
    overview:
      "Si manejas tu negocio con hojas de cálculo desordenadas o cuadernos, un sistema web a medida es la solución. Creamos plataformas fáciles de usar donde puedes ver en tiempo real tus ventas, stock, clientes, cobros y el rendimiento de tus trabajadores.",
    pillars: [
      {
        icon: Database,
        title: "Toda la información de tu negocio en un solo lugar",
        description: "Olvídate de buscar papeles o archivos perdidos; consulta tus ventas, inventarios y clientes al instante.",
      },
      {
        icon: Lock,
        title: "Permisos y accesos seguros para cada empleado",
        description: "Tú decides qué puede ver cada usuario: los vendedores ven pedidos y tú tienes el control financiero total.",
      },
      {
        icon: BarChart3,
        title: "Gráficas de ventas y ganancias al instante",
        description: "Visualiza cuánto ganas cada día, qué productos se venden más y toma decisiones con datos claros.",
      },
      {
        icon: Cloud,
        title: "Funciona en internet sin instalar programas pesados",
        description: "Ingresa con tu usuario y contraseña desde tu laptop, tablet o teléfono en cualquier momento.",
      },
    ],
    process: [
      { step: "01", title: "Mapeo de tus Procesos", desc: "Entendemos cómo vendes, compras y operas para diseñar el sistema exacto que necesitas." },
      { step: "02", title: "Diseño Simple e Intuitivo", desc: "Creamos pantallas claras para que tú y tu equipo aprendan a usarlo en minutos." },
      { step: "03", title: "Desarrollo y Pruebas", desc: "Programamos las funciones y validamos que tus cálculos y reportes sean 100% exactos." },
      { step: "04", title: "Capacitación y Puesta en Marcha", desc: "Te enseñamos a usarlo paso a paso y te brindamos soporte continuo." },
    ],
    useCases: [
      { client: "Empresas Comerciales y Tiendas", result: "Control total de inventario, facturación y cuentas por cobrar." },
      { client: "Negocios de Servicios", result: "Agenda citas, seguimiento de pedidos de clientes y gestión de cobros." },
      { client: "Portales de Clientes", result: "Permite a tus clientes consultar el estado de sus pedidos y descargar facturas." },
    ],
    techStack: ["Panel en Vivo", "Inventarios", "Facturación", "Multi-Usuario", "Reportes PDF", "Seguridad Total"],
    faqs: [
      { q: "¿Es difícil de usar para personas que no saben de tecnología?", a: "No, diseñamos las pantallas de forma muy intuitiva y sencilla, y capacitamos a todo tu personal para que lo dominen rápidamente." },
      { q: "¿Mis datos estarán seguros?", a: "Sí, tu información está protegida con contraseñas seguras y copias de respaldo automáticas todos los días." },
    ],
  },

  "app-android": {
    slug: "app-android",
    navLabel: "App Android",
    title: "Aplicación Móvil para Teléfonos Android",
    tagline: "Lleva tu negocio al bolsillo de tus clientes con una app rápida, fácil de usar y publicada en Google Play.",
    badge: "Apps para Celulares",
    accent: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    icon: Smartphone,
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=480&q=60&fm=webp",
    heroVideo: "https://res.cloudinary.com/piun1mwb/video/upload/v1788051987/Building_Android_mobile_applicat__202608281944.mp4",
    videoBadge: "App Android en Google Play · En Vivo",
    metrics: [
      { label: "Clientes Fieles", value: "+85%", sub: "Tus clientes te compran más seguido" },
      { label: "Publicación Oficial", value: "100%", sub: "Aprobada en Google Play Store" },
    ],
    overview:
      "La mayoría de las personas usan teléfonos Android. Creamos aplicaciones móviles atractivas y fáciles de usar que permiten a tus clientes pedir productos, solicitar servicios, recibir promociones y pagar desde su celular en segundos.",
    pillars: [
      {
        icon: Sparkles,
        title: "Fácil y agradable de usar para cualquier cliente",
        description: "Diseño claro donde comprar, registrarse o pedir un servicio toma solo un par de toques.",
      },
      {
        icon: Zap,
        title: "Envía promociones y avisos directos a la pantalla",
        description: "Comunícate con tus usuarios con notificaciones instantáneas sobre descuentos, novedades y pedidos.",
      },
      {
        icon: Cloud,
        title: "Funciona incluso con conexión lenta a internet",
        description: "Optimizada para responder al instante sin trabarse ni consumir toda la batería del celular.",
      },
      {
        icon: CheckCircle2,
        title: "Publicada oficialmente en Google Play Store",
        description: "Nos encargamos de todo el trámite para que tus clientes puedan descargarla de forma segura y confiable.",
      },
    ],
    process: [
      { step: "01", title: "Idea y Funcionalidades", desc: "Definimos qué quieres que tus clientes puedan hacer desde la app móvil." },
      { step: "02", title: "Diseño de Pantallas", desc: "Creamos la apariencia visual de la app para que sea súper atractiva y cómoda." },
      { step: "03", title: "Programación y Conexión", desc: "Desarrollamos la app y la conectamos con tus productos, pagos y base de datos." },
      { step: "04", title: "Publicación en Google Play", desc: "Gestionamos la aprobación oficial en la tienda de aplicaciones de Google." },
    ],
    useCases: [
      { client: "Apps de Delivery y Pedidos", result: "Tus clientes eligen productos, pagan en línea y ven el estado de su pedido." },
      { client: "Club de Fidelización y Descuentos", result: "Acumula puntos, cupones y fideliza a tus clientes para que regresen." },
      { client: "Personal en Campo o Técnicos", result: "Tus trabajadores registran visitas, fotos y firmas de clientes en el celular." },
    ],
    techStack: ["Google Play", "Notificaciones Push", "Pagos con Tarjeta", "GPS / Mapas", "Cámara / QR", "Modo Offline"],
    faqs: [
      { q: "¿Ustedes se encargan de subir la app a Google Play?", a: "Sí, nosotros realizamos todo el proceso técnico y legal de publicación hasta que tu app esté disponible para descarga." },
      { q: "¿Se puede cobrar con tarjeta o Yape/Plin dentro de la app?", a: "Sí, integramos pasarelas de pago para que tus clientes paguen con tarjetas o billeteras digitales con total seguridad." },
    ],
  },

  "app-ios": {
    slug: "app-ios",
    navLabel: "App iPhone",
    title: "Aplicación Móvil para iPhone & iPad (Apple)",
    tagline: "Brinda una experiencia de lujo y exclusividad a clientes de Apple, publicada directamente en la App Store.",
    badge: "Apps para iPhone",
    accent: "#00E5FF",
    gradient: "linear-gradient(135deg, #00E5FF 0%, #087F9F 100%)",
    icon: Apple,
    heroImage: "https://images.unsplash.com/photo-1510519138171-c70d76b640a4?auto=format&fit=crop&w=480&q=60&fm=webp",
    heroVideo: "https://res.cloudinary.com/piun1mwb/video/upload/v1788052027/Creating_iOS_mobile_applications__202608282036.mp4",
    videoBadge: "App iOS en App Store · En Vivo",
    metrics: [
      { label: "Aprobación Apple", value: "100%", sub: "Garantía total en App Store" },
      { label: "Compra en 1 Clic", value: "Apple Pay", sub: "Máxima facilidad de pago" },
    ],
    overview:
      "Los usuarios de iPhone representan uno de los segmentos de clientes con mayor poder adquisitivo. Diseñamos aplicaciones nativas con la elegancia, fluidez y seguridad que los usuarios de Apple esperan.",
    pillars: [
      {
        icon: Sparkles,
        title: "Diseño elegante con el estándar de Apple",
        description: "Pantallas fluidas, efectos visuales de alta gama y máxima ergonomía en cada interacción.",
      },
      {
        icon: Lock,
        title: "Seguridad y acceso con Face ID / Huella",
        description: "Tus clientes inician sesión y confirman sus compras de forma rápida y 100% segura con su rostro.",
      },
      {
        icon: Zap,
        title: "Pagos fáciles e instantáneos",
        description: "Integración con tarjetas de crédito, débito y sistemas de cobro en un solo toque.",
      },
      {
        icon: CheckCircle2,
        title: "Publicación oficial en Apple App Store",
        description: "Cumplimos con todas las estrictas normas de Apple para que tu app sea aprobada sin problemas.",
      },
    ],
    process: [
      { step: "01", title: "Diseño de Experiencia Apple", desc: "Planificamos cada pantalla respetando los lineamientos de diseño de iOS." },
      { step: "02", title: "Programación Nativa", desc: "Escribimos código limpio y optimizado para que la app vuele en cualquier iPhone." },
      { step: "03", title: "Pruebas en Dispositivos Reales", desc: "Probamos en varios modelos de iPhone para asegurar perfección absoluta." },
      { step: "04", title: "Lanzamiento en App Store", desc: "Gestionamos la revisión y publicación oficial ante el equipo de Apple." },
    ],
    useCases: [
      { client: "Marcas Premium y Retail", result: "Ofrece a tus clientes más exclusivos una forma cómoda de comprarte." },
      { client: "Servicios de Salud, Belleza y Citas", result: "Tus clientes reservan y pagan citas desde su iPhone con recordatorios." },
      { client: "Empresas Financieras y Bienes Raíces", result: "Experiencias de alto valor que transmiten solidez y estatus." },
    ],
    techStack: ["Apple App Store", "Face ID Seguro", "Apple Pay", "Notificaciones VIP", "Diseño iOS", "Batería Eficiente"],
    faqs: [
      { q: "¿Cuánto tarda Apple en aprobar una app?", a: "Generalmente entre 24 a 48 horas una vez que enviamos la versión final a revisión oficial." },
      { q: "¿La app funcionará en iPad también?", a: "Sí, podemos optimizar la aplicación para que se adapte perfectamente tanto a pantallas de iPhone como de iPad." },
    ],
  },

  "automatizaciones-ia": {
    slug: "automatizaciones-ia",
    navLabel: "Automatización IA",
    title: "Automatizaciones con Inteligencia Artificial",
    tagline: "Conecta tus programas y automatiza tareas repetitivas para que tu equipo ahorre horas y tu negocio opere solo.",
    badge: "Ahorro de Tiempo & IA",
    accent: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    icon: Brain,
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=280&q=30&fm=webp",
    heroVideo: "https://res.cloudinary.com/piun1mwb/video/upload/v1788051624/AI_business_automation_commercia__202608282006.mp4",
    videoBadge: "Automatización & Procesos IA · En Vivo",
    metrics: [
      { label: "Ahorro de Tiempo", value: "-75%", sub: "Menos horas en tareas repetitivas" },
      { label: "Operación Continua", value: "24/7/365", sub: "Sin errores ni cansancio" },
    ],
    overview:
      "¿Tu equipo pasa horas copiando datos de Excel a otro programa, enviando correos uno por uno o registrando facturas a mano? Conectamos tus herramientas para que la Inteligencia Artificial haga ese trabajo en segundos sin errores humanos.",
    pillars: [
      {
        icon: Zap,
        title: "Elimina tareas aburridas y repetitivas",
        description: "Automatiza el envío de correos, generación de presupuestos, creación de facturas y avisos a clientes.",
      },
      {
        icon: Database,
        title: "Conecta todos tus programas entre sí",
        description: "Hacemos que WhatsApp, tu correo, tu Excel, tu página web y tu sistema contable se sincronicen solos.",
      },
      {
        icon: CheckCircle2,
        title: "Cero errores en cálculos y registros",
        description: "La IA procesa documentos y llena datos con 100% de precisión, evitando costosos descuidos humanos.",
      },
      {
        icon: TrendingUp,
        title: "Haz más trabajo sin contratar más personal",
        description: "Tu negocio puede atender el triple de pedidos manteniendo el mismo equipo de trabajo.",
      },
    ],
    process: [
      { step: "01", title: "Identificamos Cuellos de Botella", desc: "Revisamos qué tareas repetitivas le quitan más tiempo a tu equipo en el día a día." },
      { step: "02", title: "Diseñamos el Flujo Automático", desc: "Te mostramos cómo la información viajará sola de un programa a otro sin intervención humana." },
      { step: "03", title: "Conectamos tus Herramientas", desc: "Configuramos los robots e IA para que procesen tus datos y documentos automáticamente." },
      { step: "04", title: "Pruebas y Operación 24/7", desc: "Validamos que todo funcione perfecto y lo dejamos operando las 24 horas del día." },
    ],
    useCases: [
      { client: "Envío Automático de Presupuestos", result: "El cliente pide información y en 5 segundos recibe su cotización personalizada." },
      { client: "Registro Automático de Facturas", result: "La IA lee las fotos o PDFs de tus compras y las guarda en tu sistema sin digitar." },
      { client: "Avisos de Cobro y Vencimiento", result: "Recuerda a tus clientes sus pagos pendientes por WhatsApp automáticamente." },
    ],
    techStack: ["Robots de Software", "Lectura de Documentos", "Conexión WhatsApp", "Sincronización Excel", "Alertas en Tiempo Real"],
    faqs: [
      { q: "¿Necesito cambiar mis programas actuales?", a: "No, en la mayoría de los casos conectamos los programas que ya usas actualmente (Gmail, WhatsApp, Excel, ERP, etc.)." },
      { q: "¿Es seguro automatizar con IA?", a: "Sí, tus datos permanecen privados y protegidos bajo los más estrictos estándares de seguridad y confidencialidad." },
    ],
  },

  "asistente-ia": {
    slug: "asistente-ia",
    navLabel: "Bot WhatsApp IA",
    title: "Asistente Virtual & Chatbot IA para WhatsApp",
    tagline: "Atiende, cotiza y vende por WhatsApp las 24 horas del día sin hacer esperar a ningún cliente.",
    badge: "Ventas 24/7 por WhatsApp",
    accent: "#10B981",
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    icon: Bot,
    heroImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=480&q=60&fm=webp",
    heroVideo: "https://res.cloudinary.com/piun1mwb/video/upload/v1787990201/Zapia.mp4",
    videoBadge: "Asistente Inteligente en Vivo · Demo",
    metrics: [
      { label: "Atención al Cliente", value: "24/7", sub: "Nunca dejes a un cliente en visto" },
      { label: "Respuesta Inmediata", value: "3 seg", sub: "Atención al instante día y noche" },
    ],
    overview:
      "Tus clientes escriben por WhatsApp a cualquier hora: de noche, feriados o fines de semana. Creamos un asistente virtual con Inteligencia Artificial que responde con educación y precisión, brinda precios, muestra catálogos, agenda citas y transfiere a un asesor humano cuando es necesario.",
    pillars: [
      {
        icon: Zap,
        title: "Respuestas instantáneas y naturales",
        description: "Habla como un experto de tu empresa, resolviendo dudas frecuentes en segundos sin sonar como un robot frío.",
      },
      {
        icon: BarChart3,
        title: "Cotiza productos y muestra tu catálogo",
        description: "Envía fotos, precios, características y enlaces de pago a los clientes interesados en tus productos.",
      },
      {
        icon: CheckCircle2,
        title: "Agenda citas y reservas automáticamente",
        description: "Consulta los horarios disponibles y reserva la cita del cliente confirmándola por WhatsApp.",
      },
      {
        icon: MessageSquare,
        title: "Traspaso fluido a tu equipo humano",
        description: "Cuando un cliente necesita atención especial, el bot avisa a tu asesor y le entrega todo el historial de la conversación.",
      },
    ],
    process: [
      { step: "01", title: "Entrenamos a tu Asistente", desc: "Le enseñamos tus preguntas frecuentes, precios, catálogo, horarios y políticas." },
      { step: "02", title: "Conexión a tu WhatsApp", desc: "Lo vinculamos de forma oficial a tu número de WhatsApp Business sin riesgos de bloqueo." },
      { step: "03", title: "Pruebas de Conversación", desc: "Simulamos preguntas reales de clientes para afinar sus respuestas y tono de voz." },
      { step: "04", title: "Puesta en Marcha 24/7", desc: "Tu asistente comienza a atender a tus clientes de inmediato día y noche." },
    ],
    useCases: [
      { client: "Clínicas y Consultorios", result: "Responde dudas sobre tratamientos y agenda citas médicas sin saturar la recepción." },
      { client: "Tiendas y E-commerce", result: "Informa sobre disponibilidad de productos, precios y métodos de envío al instante." },
      { client: "Inmobiliarias y Concesionarias", result: "Califica a los clientes interesados y envía a los más calificados a tus vendedores." },
    ],
    techStack: ["WhatsApp Business", "Inteligencia Artificial", "Catálogo Interactivo", "Agenda de Citas", "Traspaso a Humanos"],
    faqs: [
      { q: "¿Puedo seguir respondiendo yo mismo por WhatsApp?", a: "Sí, tú o tu equipo pueden intervenir en cualquier momento en la conversación cuando lo deseen." },
      { q: "¿Qué pasa si un cliente hace una pregunta que el bot no sabe?", a: "El bot le responderá amablemente que consultará con un especialista y notificará de inmediato a tu equipo humano." },
    ],
  },

  "ciberseguridad": {
    slug: "ciberseguridad",
    navLabel: "Ciberseguridad",
    title: "Seguridad Digital & Protección contra Hackeos",
    tagline: "Protege el dinero, contraseñas e información confidencial de tu empresa contra virus, estafas y ataques informáticos.",
    badge: "Blindaje & Protección Digital",
    accent: "#EC4899",
    gradient: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)",
    icon: Shield,
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=480&q=60&fm=webp",
    heroVideo: "https://res.cloudinary.com/piun1mwb/video/upload/v1787990632/Cybersecurity_system_blocking_cy__202608282025.mp4",
    videoBadge: "Escudo Digital Anti-Ataques · En Vivo",
    metrics: [
      { label: "Protección Total", value: "99.9%", sub: "Monitoreo continuo de amenazas" },
      { label: "Copias Seguras", value: "Diarias", sub: "Nunca pierdas tus datos" },
    ],
    overview:
      "Un ataque informático o un virus puede paralizar las ventas de tu empresa o robar la base de datos de tus clientes. Auditamos y blindamos tus páginas web, servidores y correos electrónicos para que operes con total tranquilidad.",
    pillars: [
      {
        icon: Lock,
        title: "Protección de cuentas bancarias y correos",
        description: "Evitamos que suplanten tu identidad o roben las claves de acceso a los servicios de tu empresa.",
      },
      {
        icon: Shield,
        title: "Blindaje de páginas web y servidores",
        description: "Bloqueamos ataques de hackers para que tu página web y sistemas nunca sean alterados ni dados de baja.",
      },
      {
        icon: Database,
        title: "Copias de seguridad automáticas diarias",
        description: "Si tu computadora o servidor sufre un daño, recuperamos toda tu información en cuestión de minutos.",
      },
      {
        icon: CheckCircle2,
        title: "Auditoría y diagnóstico de vulnerabilidades",
        description: "Revisamos tus sistemas para encontrar y parchar fallas de seguridad antes de que un atacante las descubra.",
      },
    ],
    process: [
      { step: "01", title: "Diagnóstico de Seguridad", desc: "Revisamos tus páginas, servidores y correos en busca de vulnerabilidades." },
      { step: "02", title: "Plan de Blindaje", desc: "Te explicamos en lenguaje claro qué riesgos existen y cómo los vamos a solucionar." },
      { step: "03", title: "Instalación de Protecciones", desc: "Activamos escudos de seguridad, contraseñas fuertes y respaldos automáticos." },
      { step: "04", title: "Monitoreo y Prevención", desc: "Vigilamos tus sistemas continuamente para bloquear amenazas antes de que causen daño." },
    ],
    useCases: [
      { client: "Empresas con Datos de Clientes", result: "Cumplimiento de leyes de protección de datos personales sin riesgo de multas." },
      { client: "Tiendas y Pagos en Línea", result: "Transacciones 100% protegidas contra fraudes con tarjetas y robo de credenciales." },
      { client: "Empresas de Comercio y Servicios", result: "Cero días de inactividad por caídas causadas por virus o ataques informáticos." },
    ],
    techStack: ["Antivirus Corporativo", "Copias de Respaldo", "Certificados SSL", "Protección Anti-Hackers", "Recuperación de Datos"],
    faqs: [
      { q: "¿Mi negocio es demasiado pequeño para sufrir un ataque?", a: "Los atacantes usan robots automáticos que atacan a miles de negocios al azar. Protegerte a tiempo evita pérdidas económicas graves." },
      { q: "¿Qué pasa si ya sufrí un ataque o perdí acceso?", a: "Te ayudamos a recuperar el control de tus páginas y restaurar tus datos de forma urgente." },
    ],
  },

  "cloud-devops": {
    slug: "cloud-devops",
    navLabel: "Servidores Cloud",
    title: "Servidores en la Nube & Soporte Técnico Continuo",
    tagline: "Alojamos tus páginas y sistemas en los mejores servidores del mundo para que nunca se caigan y funcionen a máxima velocidad.",
    badge: "Rendimiento & Soporte 24/7",
    accent: "#38BDF8",
    gradient: "linear-gradient(135deg, #38BDF8 0%, #0284C7 100%)",
    icon: Cloud,
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=480&q=60&fm=webp",
    metrics: [
      { label: "Disponibilidad", value: "99.99%", sub: "Tus sistemas nunca se caen" },
      { label: "Ahorro en Servidores", value: "-35%", sub: "Paga solo lo que consumes" },
    ],
    overview:
      "Tus sistemas y páginas web necesitan un lugar rápido, seguro y confiable donde funcionar. Te ayudamos a migrar tus herramientas a la nube (AWS, Google Cloud) para que nunca se saturen, pagues menos y tengas soporte técnico profesional ante cualquier eventualidad.",
    pillars: [
      {
        icon: Cloud,
        title: "Tus sistemas nunca se caen ni se saturan",
        description: "Si miles de personas entran a tu página al mismo tiempo, el servidor se adapta automáticamente sin colapsar.",
      },
      {
        icon: TrendingUp,
        title: "Ahorra dinero pagando solo lo necesario",
        description: "Optimizamos tus recursos para que no pagues costos excesivos en servidores innecesarios.",
      },
      {
        icon: Zap,
        title: "Velocidad máxima de apertura en todo el mundo",
        description: "Tus páginas abrirán en menos de un segundo gracias a servidores distribuidos globalmente.",
      },
      {
        icon: CheckCircle2,
        title: "Soporte técnico y mantenimiento dedicado",
        description: "Un equipo de ingenieros monitorea tus sistemas para que tú te dediques 100% a las ventas de tu negocio.",
      },
    ],
    process: [
      { step: "01", title: "Evaluación de Servidores", desc: "Revisamos dónde están alojados tus sistemas y cuánto estás pagando actualmente." },
      { step: "02", title: "Plan de Migración sin Caídas", desc: "Diseñamos el traslado para que tu negocio siga funcionando normalmente durante el proceso." },
      { step: "03", title: "Configuración en la Nube", desc: "Alojamos tus páginas en servidores de alta velocidad de Amazon o Google." },
      { step: "04", title: "Monitoreo y Mantenimiento", desc: "Cuidamos tus servidores 24/7 para garantizar velocidad y disponibilidad total." },
    ],
    useCases: [
      { client: "Páginas Web y Tiendas con Alto Tráfico", result: "Velocidad ultra rápida durante campañas de ofertas sin caídas de servidor." },
      { client: "Empresas con Servidores Locales Lentos", result: "Migración a la nube para acceder a sus sistemas desde cualquier lugar." },
      { client: "Startups y Empresas en Crecimiento", result: "Infraestructura que escala automáticamente a medida que ganan más clientes." },
    ],
    techStack: ["Amazon Web Services", "Google Cloud", "Copias Automáticas", "Aceleración Web", "Soporte Técnico 24/7"],
    faqs: [
      { q: "¿Se apagará mi página durante la migración?", a: "No, realizamos la migración de forma transparente para que tus clientes no noten ninguna interrupción en el servicio." },
      { q: "¿Qué incluye el soporte técnico mensual?", a: "Monitoreo constante, resolución de incidencias, actualizaciones de seguridad y copias de respaldo continuas." },
    ],
  },
};
