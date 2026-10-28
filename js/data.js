/* ═══════════════════════════════════════════════════════════
   DATA.JS — Toda la data del portafolio en un solo lugar.
   Edita aquí para actualizar proyectos, habilidades y testimonios
   sin tocar el HTML.
═══════════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    id: 1,
    title: "Dashboard Ejecutivo de Ventas & Rentabilidad",
    category: "powerbi",
    categoryLabel: "Power BI",
    emoji: "📊",
    image: "",           // Pon la ruta: "assets/images/proyecto1.png"
    problem: "La gerencia recibía reportes de ventas en Excel con 3 días de retraso. No había visibilidad en tiempo real sobre márgenes por línea de producto ni por región.",
    etl: "Extracción desde SQL Server + archivos CSV de SAP. Transformación con Power Query: limpieza de nulos, estandarización de categorías y modelo estrella con tabla de hechos y 4 dimensiones.",
    tools: ["Power BI", "DAX", "Power Query", "SQL Server"],
    kpis: ["+32% eficiencia", "-3 días delay", "15 KPIs", "98% datos limpios"],
    result: "El equipo directivo redujo el tiempo de análisis de 3 días a 15 minutos. Se detectaron 2 líneas de producto con margen negativo que se descontinuaron, ahorrando $45K anuales.",
    // ─── Power BI embed ───────────────────────────────────────
    // Pasos para obtener embedUrl:
    // 1. Sube el .pbix a app.powerbi.com (cuenta gratuita)
    // 2. Abre el reporte → Archivo → Publicar en la web
    // 3. Crea código de inserción → copia la URL del iframe
    // 4. Pégala aquí:
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiZDU4M2EyZmUtOTE1NS00YjdmLWFiODgtZDAyNmQyYTA1YzJlIiwidCI6ImZkNjljZTFiLTIwYzYtNDJlYy1iNTRlLTZkMWIzODcwYWM2ZSIsImMiOjR9",
    demoUrl: "Tableros/Dashboard - DT.pbix",
    demoLabel: "Abrir en Power BI",
    featured: true
  },
  {
    id: 2,
    title: "Pipeline ETL Automatizado — Datos de Logística",
    category: "etl",
    categoryLabel: "ETL / Data Cleaning",
    emoji: "🔄",
    image: "",
    problem: "Una empresa de logística recibía 200+ archivos Excel diarios de transportistas con formatos inconsistentes. El proceso manual de consolidación tardaba 4 horas diarias.",
    etl: "Python (Pandas) para leer todos los .xlsx de una carpeta, normalizar columnas, detectar duplicados, validar rangos de fechas y unificar en una base de datos SQLite. Ejecución automática vía Windows Task Scheduler.",
    tools: ["Python", "Pandas", "SQLite", "openpyxl", "Task Scheduler"],
    kpis: ["4h → 8min", "200+ archivos/día", "99.2% precisión", "0 intervención manual"],
    result: "El proceso se redujo de 4 horas a 8 minutos con ejecución automática a las 7am. El equipo de operaciones recuperó 80 horas mensuales de trabajo.",
    embedUrl: "",
    demoUrl: "",
    demoLabel: "Ver código en GitHub",
    featured: true
  },
  {
    id: 3,
    title: "Automatización de Reportes con Power Automate",
    category: "automatizacion",
    categoryLabel: "Automatización",
    emoji: "⚡",
    image: "",
    problem: "El área de RRHH generaba 12 reportes semanales manualmente en Excel y los enviaba por correo uno por uno. Proceso propenso a errores y que consumía medio día de trabajo.",
    etl: "Flujo en Power Automate que extrae datos desde SharePoint Lists, los procesa con Power Query en Excel Online y envía correos personalizados a cada gerente de área con su reporte adjunto.",
    tools: ["Power Automate", "SharePoint", "Excel Online", "Power Query", "Outlook"],
    kpis: ["12 reportes/semana", "4h → 0min manual", "100% puntualidad", "0 errores envío"],
    result: "Total automatización del proceso. Los reportes se generan y envían cada lunes a las 8am sin intervención humana. El analista recuperó 16 horas mensuales.",
    embedUrl: "",
    demoUrl: "",
    demoLabel: "Ver flujo",
    featured: false
  },
  {
    id: 4,
    title: "Análisis de Rotación de Inventario con Python",
    category: "python",
    categoryLabel: "Python",
    emoji: "🐍",
    image: "",
    problem: "Una cadena retail no tenía visibilidad sobre qué productos rotaban lento y generaban capital inmovilizado. La decisión de reposición se hacía por intuición del comprador.",
    etl: "Carga de datos transaccionales desde MySQL con SQLAlchemy. Análisis con Pandas: cálculo de días de inventario, clasificación ABC-XYZ, detección de productos sin movimiento en 90+ días. Exportación a Excel con formato condicional.",
    tools: ["Python", "Pandas", "SQLAlchemy", "Matplotlib", "openpyxl", "MySQL"],
    kpis: ["$120K capital liberado", "340 SKUs analizados", "Modelo ABC-XYZ", "-18% sobre stock"],
    result: "Se identificaron 87 SKUs con más de 180 días sin rotación. La dirección tomó decisiones de liquidación que liberaron $120K en capital de trabajo en el primer trimestre.",
    embedUrl: "",
    demoUrl: "",
    demoLabel: "Ver notebook",
    featured: true
  },
  {
    id: 5,
    title: "Dashboard KPIs Financieros — Business Intelligence",
    category: "bi",
    categoryLabel: "Business Intelligence",
    emoji: "💹",
    image: "",
    problem: "El CFO requería consolidar datos de 3 sistemas distintos (ERP, CRM y hoja de cálculo de tesorería) para tener una vista única de la situación financiera de la empresa.",
    etl: "Modelado de datos en Power BI con esquema de constelación. Medidas DAX para EBITDA, ROI, flujo de caja proyectado y variación vs. presupuesto. Seguridad por roles para que cada gerente vea solo su área.",
    tools: ["Power BI", "DAX", "Power Query", "Excel", "SQL Server"],
    kpis: ["3 sistemas integrados", "RLS por roles", "Actualización diaria", "12 métricas financieras"],
    result: "El CFO redujo el tiempo de cierre mensual de 5 días a 1 día. El dashboard fue adoptado por toda la junta directiva para revisiones semanales.",
    embedUrl: "",
    demoUrl: "",
    demoLabel: "Ver demo",
    featured: false
  },
  {
    id: 6,
    title: "Limpieza y Normalización de Base de Datos Clientes",
    category: "etl",
    categoryLabel: "ETL / Data Cleaning",
    emoji: "🧹",
    image: "",
    problem: "Una base de datos CRM con 50,000 registros de clientes tenía duplicados, teléfonos con formato incorrecto, emails inválidos y nombres en mayúsculas/minúsculas mezclados. Impedía campañas de marketing efectivas.",
    etl: "Script Python con Pandas y regex para: deduplicación por similitud fonética, validación de emails con librería validate-email, normalización de RUT/DNI, estandarización de nombres con titlecase y limpieza de teléfonos a formato E.164.",
    tools: ["Python", "Pandas", "Regex", "Fuzzy matching", "validate-email"],
    kpis: ["50K registros", "-23% duplicados", "98% emails válidos", "100% formato uniforme"],
    result: "La tasa de entrega de campañas email pasó de 71% a 96%. Se eliminaron 11,500 registros duplicados que inflaban métricas de CRM y distorsionaban análisis de clientes.",
    embedUrl: "",
    demoUrl: "",
    demoLabel: "Ver código",
    featured: false
  },
  {
    id: 7,
    title: "Reporte de Incidencias Operativas — Planta de Bebidas",
    category: "powerbi",
    categoryLabel: "Power BI",
    emoji: "🏭",
    image: "",           // Pon la ruta de una captura: "assets/images/incidencias.png"
    problem: "Una planta de bebidas con dos líneas de producción registraba sus paradas en hojas de cálculo sin un análisis consolidado. No era posible identificar qué equipos y causas concentraban las fallas ni comparar el desempeño entre líneas.",
    etl: "Base de registros de fallas (fecha, línea, equipo afectado y categoría) cargada desde Excel con Power Query. Tabla calendario en DAX para análisis por mes y trimestre. Medidas DAX para conteo de fallas, % de participación por equipo, promedio mensual, comparativo entre líneas y títulos dinámicos según los filtros aplicados.",
    tools: ["Power BI", "DAX", "Power Query", "Excel"],
    kpis: ["126 paradas", "13 equipos", "2 líneas", "5 categorías"],
    result: "Tablero de 3 páginas (menú, análisis de fallas y tendencia) con navegación por botones y filtros por año, trimestre, línea y categoría. Permite ubicar en segundos los equipos críticos y la temporada con más paradas para priorizar el mantenimiento. Caso demostrativo construido con datos ficticios.",
    embedUrl: "",        // Pega aquí la URL de "Publicar en la web" cuando lo subas a Power BI Service
    demoUrl: "Tableros/Reporte incidencias.pbix",
    demoLabel: "Abrir en Power BI",
    featured: true
  }
];

/* ─────────────────────────────────────────────────────────
   HABILIDADES
   level: 0-100 (barra de progreso)
   dots: 1-5  (indicador visual en badge)
───────────────────────────────────────────────────────── */
const SKILLS_BARS = [
  { name: "Power BI",       level: 92, label: "Avanzado"      },
  { name: "DAX",            level: 88, label: "Avanzado"      },
  { name: "Power Query",    level: 87, label: "Avanzado"      },
  { name: "Python",         level: 82, label: "Avanzado"      },
  { name: "Pandas",         level: 80, label: "Avanzado"      },
  { name: "SQL",            level: 85, label: "Avanzado"      },
  { name: "Power Automate", level: 78, label: "Intermedio-Avanzado" },
  { name: "Excel Avanzado", level: 90, label: "Avanzado"      },
];

const SKILLS_BADGES = [
  { icon: "📊", name: "Power BI",       category: "Visualización",    dots: 5 },
  { icon: "🐍", name: "Python",         category: "Análisis & ETL",   dots: 4 },
  { icon: "🗄️", name: "SQL",            category: "Bases de datos",   dots: 5 },
  { icon: "📗", name: "Excel",          category: "Avanzado",         dots: 5 },
  { icon: "⚡", name: "Power Automate", category: "Automatización",   dots: 4 },
  { icon: "🐼", name: "Pandas",         category: "Data wrangling",   dots: 4 },
  { icon: "🔷", name: "DAX",            category: "Modelado BI",      dots: 5 },
  { icon: "🔁", name: "Power Query",    category: "Transformación",   dots: 5 },
  { icon: "🌐", name: "SharePoint",     category: "Colaboración",     dots: 3 },
  { icon: "☁️", name: "Azure",          category: "Cloud",            dots: 3 },
];

/* ─────────────────────────────────────────────────────────
   TESTIMONIOS
───────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    text: "Transformó completamente nuestra forma de reportar. El dashboard que construyó nos ahorra días de trabajo cada mes y la gerencia finalmente tiene información en tiempo real para tomar decisiones.",
    stars: 5,
    name: "Carlos Mendoza",
    role: "Gerente Comercial · Empresa Retail",
    initials: "CM"
  },
  {
    text: "El script de Python que desarrolló para nuestro proceso ETL redujo errores en un 98%. Excelente manejo técnico y muy buena comunicación durante todo el proyecto.",
    stars: 5,
    name: "Ana Rodríguez",
    role: "Directora de Operaciones · Logística S.A.",
    initials: "AR"
  },
  {
    text: "Muy profesional. Entendió nuestras necesidades desde el inicio y entregó un dashboard financiero que el CFO usa diariamente. Recomendada sin dudas.",
    stars: 5,
    name: "Jorge Salinas",
    role: "CTO · Fintech Startup",
    initials: "JS"
  }
];
