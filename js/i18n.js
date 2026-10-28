/* ═══════════════════════════════════════════════════════════
   I18N.JS — Traducciones completas: Español · English · Português
   Para agregar un idioma: copia el bloque 'es' y traduce.
═══════════════════════════════════════════════════════════ */

const LANG_STRINGS = {

  /* ──────────────────── ESPAÑOL ──────────────────── */
  es: {
    nav: {
      home: 'Inicio', about: 'Sobre mí', projects: 'Proyectos',
      skills: 'Habilidades', testimonials: 'Testimonios',
      contact: 'Contacto', cv: 'Descargar CV'
    },
    hero: {
      badge: 'Disponible para proyectos freelance',
      title1: 'Transformo datos en',
      title2: 'decisiones inteligentes',
      subtitle: 'Ingeniera de sistemas especializada en <strong>Power BI</strong>, <strong>Python</strong> y automatización de procesos. Diseño dashboards ejecutivos y pipelines ETL que convierten datos complejos en insights accionables.',
      cta1: 'Ver proyectos →', cta2: 'Hablemos',
      stat1: 'Proyectos completados', stat2: 'Clientes satisfechos', stat3: 'Años de experiencia',
      card1: 'Dashboard ventas', card2: 'Automatización',
    },
    about: {
      tag: '// sobre_mi.py', title: 'Sobre mí',
      lead: 'Soy ingeniera de sistemas con pasión por convertir datos crudos en información valiosa para la toma de decisiones empresariales.',
      body1: 'Me especializo en diseñar soluciones end-to-end: desde la extracción y limpieza de datos con Python hasta la visualización final en dashboards de Power BI que ejecutivos y equipos operativos realmente usan. Combino lógica de negocio con técnica para construir reportes que impactan resultados.',
      body2: 'He trabajado con empresas de retail, logística y servicios financieros, automatizando procesos que antes consumían horas de trabajo manual y construyendo modelos de datos robustos sobre los que las organizaciones toman decisiones con confianza.',
      toolsTitle: 'Stack tecnológico',
    },
    projects: {
      tag: '// proyectos.json', title: 'Proyectos destacados',
      desc: 'Soluciones reales que generaron impacto medible en organizaciones',
      filterAll: 'Todos', filterPowerBI: 'Power BI', filterPython: 'Python',
      filterAuto: 'Automatización', filterETL: 'ETL / Data Cleaning', filterBI: 'Business Intelligence',
      btnDetails: 'Ver detalles', btnDashboard: '▶ Ver dashboard',
      labelProblem: 'Problema de negocio', labelETL: 'Proceso ETL / Metodología',
      labelKPIs: 'KPIs principales', labelTools: 'Herramientas', labelResult: 'Resultado logrado',
      btnFullscreen: 'Abrir en pantalla completa ↗', btnClose: 'Cerrar',
    },
    skills:       { tag: '// skills.json',      title: 'Habilidades' },
    testimonials: { tag: '// testimonios.md',   title: 'Lo que dicen mis clientes' },
    contact: {
      tag: '// contacto.form', title: 'Trabajemos juntos',
      desc: '¿Tienes un proyecto de datos? Cuéntame qué necesitas',
      emailTitle: 'Email', linkedinTitle: 'LinkedIn',
      responseTitle: 'Respuesta', responseText: 'Generalmente en menos de 24h',
      availability: 'Disponible para proyectos desde Junio 2025',
      nameLabel: 'Nombre *',     namePh: 'Tu nombre',
      companyLabel: 'Empresa',   companyPh: 'Tu empresa',
      emailLabel: 'Email *',     emailPh: 'tu@email.com',
      serviceLabel: 'Servicio que necesitas',
      msgLabel: 'Mensaje *',
      msgPh: 'Cuéntame sobre tu proyecto, los datos que manejas y qué resultado esperas...',
      send: 'Enviar mensaje →', sending: 'Enviando...',
      success: '✓ Mensaje enviado. Te respondo pronto.',
      services: [
        { value: '', label: 'Selecciona...' },
        { value: 'powerbi', label: 'Dashboard Power BI' },
        { value: 'python', label: 'Análisis con Python' },
        { value: 'etl', label: 'Pipeline ETL' },
        { value: 'automatizacion', label: 'Automatización de reportes' },
        { value: 'modelado', label: 'Modelado de datos' },
        { value: 'otro', label: 'Otro' },
      ],
    },
    footer: { copy: '© 2025 · Diseñado y desarrollado con datos y código' },
  },

  /* ──────────────────── ENGLISH ──────────────────── */
  en: {
    nav: {
      home: 'Home', about: 'About', projects: 'Projects',
      skills: 'Skills', testimonials: 'Testimonials',
      contact: 'Contact', cv: 'Download CV'
    },
    hero: {
      badge: 'Available for freelance projects',
      title1: 'I transform data into',
      title2: 'intelligent decisions',
      subtitle: 'Systems engineer specialized in <strong>Power BI</strong>, <strong>Python</strong>, and process automation. I design executive dashboards and ETL pipelines that turn complex data into actionable insights.',
      cta1: 'View projects →', cta2: "Let's talk",
      stat1: 'Completed projects', stat2: 'Satisfied clients', stat3: 'Years of experience',
      card1: 'Sales dashboard', card2: 'Automation',
    },
    about: {
      tag: '// about_me.py', title: 'About me',
      lead: 'I am a systems engineer passionate about turning raw data into valuable information for business decision-making.',
      body1: 'I specialize in designing end-to-end solutions: from data extraction and cleansing with Python to the final visualization in Power BI dashboards that executives and operational teams actually use. I combine business logic with technical skills to build reports that impact results.',
      body2: 'I have worked with retail, logistics, and financial services companies, automating processes that previously consumed hours of manual work and building robust data models on which organizations make confident decisions.',
      toolsTitle: 'Tech stack',
    },
    projects: {
      tag: '// projects.json', title: 'Featured projects',
      desc: 'Real solutions that generated measurable impact in organizations',
      filterAll: 'All', filterPowerBI: 'Power BI', filterPython: 'Python',
      filterAuto: 'Automation', filterETL: 'ETL / Data Cleaning', filterBI: 'Business Intelligence',
      btnDetails: 'View details', btnDashboard: '▶ View dashboard',
      labelProblem: 'Business problem', labelETL: 'ETL Process / Methodology',
      labelKPIs: 'Key KPIs', labelTools: 'Tools', labelResult: 'Result achieved',
      btnFullscreen: 'Open fullscreen ↗', btnClose: 'Close',
    },
    skills:       { tag: '// skills.json',      title: 'Skills' },
    testimonials: { tag: '// testimonials.md',  title: 'What my clients say' },
    contact: {
      tag: '// contact.form', title: "Let's work together",
      desc: 'Do you have a data project? Tell me what you need',
      emailTitle: 'Email', linkedinTitle: 'LinkedIn',
      responseTitle: 'Response time', responseText: 'Usually within 24 hours',
      availability: 'Available for projects from June 2025',
      nameLabel: 'Name *',       namePh: 'Your name',
      companyLabel: 'Company',   companyPh: 'Your company',
      emailLabel: 'Email *',     emailPh: 'you@email.com',
      serviceLabel: 'Service you need',
      msgLabel: 'Message *',
      msgPh: 'Tell me about your project, the data you handle, and what result you expect...',
      send: 'Send message →', sending: 'Sending...',
      success: '✓ Message sent. I will reply soon.',
      services: [
        { value: '', label: 'Select...' },
        { value: 'powerbi', label: 'Power BI Dashboard' },
        { value: 'python', label: 'Python Analysis' },
        { value: 'etl', label: 'ETL Pipeline' },
        { value: 'automatizacion', label: 'Report Automation' },
        { value: 'modelado', label: 'Data Modeling' },
        { value: 'otro', label: 'Other' },
      ],
    },
    footer: { copy: '© 2025 · Designed and built with data and code' },
  },

  /* ──────────────────── PORTUGUÊS ──────────────────── */
  pt: {
    nav: {
      home: 'Início', about: 'Sobre mim', projects: 'Projetos',
      skills: 'Habilidades', testimonials: 'Depoimentos',
      contact: 'Contato', cv: 'Baixar CV'
    },
    hero: {
      badge: 'Disponível para projetos freelance',
      title1: 'Transformo dados em',
      title2: 'decisões inteligentes',
      subtitle: 'Engenheira de sistemas especializada em <strong>Power BI</strong>, <strong>Python</strong> e automação de processos. Projeto dashboards executivos e pipelines ETL que transformam dados complexos em insights acionáveis.',
      cta1: 'Ver projetos →', cta2: 'Vamos conversar',
      stat1: 'Projetos concluídos', stat2: 'Clientes satisfeitos', stat3: 'Anos de experiência',
      card1: 'Dashboard de vendas', card2: 'Automação',
    },
    about: {
      tag: '// sobre_mim.py', title: 'Sobre mim',
      lead: 'Sou engenheira de sistemas apaixonada por transformar dados brutos em informações valiosas para a tomada de decisões empresariais.',
      body1: 'Especializo-me em projetar soluções end-to-end: desde a extração e limpeza de dados com Python até a visualização final em dashboards do Power BI que executivos e equipes operacionais realmente utilizam. Combino lógica de negócios com técnica para construir relatórios que geram impacto nos resultados.',
      body2: 'Trabalhei com empresas de varejo, logística e serviços financeiros, automatizando processos que antes consumiam horas de trabalho manual e construindo modelos de dados robustos sobre os quais as organizações tomam decisões com confiança.',
      toolsTitle: 'Stack tecnológico',
    },
    projects: {
      tag: '// projetos.json', title: 'Projetos em destaque',
      desc: 'Soluções reais que geraram impacto mensurável em organizações',
      filterAll: 'Todos', filterPowerBI: 'Power BI', filterPython: 'Python',
      filterAuto: 'Automação', filterETL: 'ETL / Limpeza de Dados', filterBI: 'Business Intelligence',
      btnDetails: 'Ver detalhes', btnDashboard: '▶ Ver dashboard',
      labelProblem: 'Problema de negócio', labelETL: 'Processo ETL / Metodologia',
      labelKPIs: 'KPIs principais', labelTools: 'Ferramentas', labelResult: 'Resultado obtido',
      btnFullscreen: 'Abrir em tela cheia ↗', btnClose: 'Fechar',
    },
    skills:       { tag: '// habilidades.json', title: 'Habilidades' },
    testimonials: { tag: '// depoimentos.md',   title: 'O que meus clientes dizem' },
    contact: {
      tag: '// contato.form', title: 'Vamos trabalhar juntos',
      desc: 'Você tem um projeto de dados? Me conte o que precisa',
      emailTitle: 'E-mail', linkedinTitle: 'LinkedIn',
      responseTitle: 'Resposta', responseText: 'Geralmente em menos de 24h',
      availability: 'Disponível para projetos a partir de junho de 2025',
      nameLabel: 'Nome *',       namePh: 'Seu nome',
      companyLabel: 'Empresa',   companyPh: 'Sua empresa',
      emailLabel: 'E-mail *',    emailPh: 'voce@email.com',
      serviceLabel: 'Serviço que precisa',
      msgLabel: 'Mensagem *',
      msgPh: 'Conte-me sobre seu projeto, os dados que você lida e qual resultado espera...',
      send: 'Enviar mensagem →', sending: 'Enviando...',
      success: '✓ Mensagem enviada. Responderei em breve.',
      services: [
        { value: '', label: 'Selecionar...' },
        { value: 'powerbi', label: 'Dashboard Power BI' },
        { value: 'python', label: 'Análise com Python' },
        { value: 'etl', label: 'Pipeline ETL' },
        { value: 'automatizacion', label: 'Automação de relatórios' },
        { value: 'modelado', label: 'Modelagem de dados' },
        { value: 'outro', label: 'Outro' },
      ],
    },
    footer: { copy: '© 2025 · Desenvolvido com dados e código' },
  },
};

/* ═══════════════════════════════════════════════════════════
   TRADUCCIONES DE PROYECTOS — EN y PT
   (ES está en data.js como base)
═══════════════════════════════════════════════════════════ */
const PROJECTS_I18N = {
  en: [
    {
      id: 1, title: "Executive Sales & Profitability Dashboard",
      problem: "Management received sales reports in Excel with a 3-day delay. There was no real-time visibility into margins by product line or region.",
      etl: "Extraction from SQL Server + SAP CSV files. Transformation with Power Query: null cleanup, category standardization, and a star schema with a fact table and 4 dimensions.",
      result: "The executive team reduced analysis time from 3 days to 15 minutes. Two product lines with negative margins were identified and discontinued, saving $45K annually.",
      demoLabel: "Open in Power BI",
    },
    {
      id: 2, title: "Automated ETL Pipeline — Logistics Data",
      problem: "A logistics company received 200+ daily Excel files from carriers with inconsistent formats. The manual consolidation process took 4 hours daily.",
      etl: "Python (Pandas) to read all .xlsx files from a folder, normalize columns, detect duplicates, validate date ranges, and unify into a SQLite database. Automated via Windows Task Scheduler.",
      result: "The process was reduced from 4 hours to 8 minutes with automatic execution at 7am. The operations team recovered 80 hours of work per month.",
      demoLabel: "View code on GitHub",
    },
    {
      id: 3, title: "Report Automation with Power Automate",
      problem: "The HR area generated 12 weekly Excel reports manually and sent them by email one by one. The process was error-prone and consumed half a workday.",
      etl: "Power Automate flow that extracts data from SharePoint Lists, processes it with Power Query in Excel Online, and sends personalized emails to each area manager with their report attached.",
      result: "Full automation of the process. Reports are generated and sent every Monday at 8am without human intervention. The analyst recovered 16 hours per month.",
      demoLabel: "View flow",
    },
    {
      id: 4, title: "Inventory Turnover Analysis with Python",
      problem: "A retail chain had no visibility into which products turned over slowly and generated locked capital. Replenishment decisions were made based on the buyer's intuition.",
      etl: "Loading transactional data from MySQL with SQLAlchemy. Analysis with Pandas: days-of-inventory calculation, ABC-XYZ classification, detection of products without movement in 90+ days. Export to Excel with conditional formatting.",
      result: "87 SKUs with more than 180 days without turnover were identified. Management made liquidation decisions that freed $120K in working capital in the first quarter.",
      demoLabel: "View notebook",
    },
    {
      id: 5, title: "Financial KPI Dashboard — Business Intelligence",
      problem: "The CFO needed to consolidate data from 3 different systems (ERP, CRM, and a treasury spreadsheet) to have a single view of the company's financial situation.",
      etl: "Data modeling in Power BI with a constellation schema. DAX measures for EBITDA, ROI, projected cash flow, and variance vs. budget. Row-level security so each manager sees only their area.",
      result: "The CFO reduced the monthly close from 5 days to 1 day. The dashboard was adopted by the entire board for weekly reviews.",
      demoLabel: "View demo",
    },
    {
      id: 6, title: "Customer Database Cleansing & Normalization",
      problem: "A CRM database with 50,000 customer records had duplicates, incorrectly formatted phones, invalid emails, and mixed-case names. It prevented effective marketing campaigns.",
      etl: "Python script with Pandas and regex for: phonetic deduplication, email validation, ID normalization, name standardization with titlecase, and phone cleanup to E.164 format.",
      result: "The email campaign delivery rate went from 71% to 96%. 11,500 duplicate records that inflated CRM metrics were removed.",
      demoLabel: "View code",
    },
    {
      id: 7, title: "Operational Incident Report — Beverage Plant",
      problem: "A beverage plant with two production lines logged its stoppages in spreadsheets with no consolidated analysis. It was not possible to see which equipment and causes concentrated failures or to compare performance between lines.",
      etl: "Failure log (date, line, affected equipment and category) loaded from Excel with Power Query. DAX calendar table for monthly and quarterly analysis. DAX measures for failure counts, share by equipment, monthly average, line comparison and dynamic titles based on the active filters.",
      kpis: ["126 stoppages", "13 equipment", "2 lines", "5 categories"],
      result: "3-page dashboard (menu, failure analysis and trends) with button navigation and filters by year, quarter, line and category. It pinpoints critical equipment and the peak stoppage season in seconds to prioritize maintenance. Demo case built with fictitious data.",
      demoLabel: "Open in Power BI",
    },
  ],
  pt: [
    {
      id: 1, title: "Dashboard Executivo de Vendas e Rentabilidade",
      problem: "A gerência recebia relatórios de vendas em Excel com 3 dias de atraso. Não havia visibilidade em tempo real sobre margens por linha de produto ou região.",
      etl: "Extração do SQL Server + arquivos CSV do SAP. Transformação com Power Query: limpeza de nulos, padronização de categorias e modelo estrela com tabela de fatos e 4 dimensões.",
      result: "A equipe executiva reduziu o tempo de análise de 3 dias para 15 minutos. Duas linhas de produtos com margens negativas foram descontinuadas, economizando $45K anuais.",
      demoLabel: "Abrir no Power BI",
    },
    {
      id: 2, title: "Pipeline ETL Automatizado — Dados de Logística",
      problem: "Uma empresa de logística recebia mais de 200 arquivos Excel diários de transportadoras com formatos inconsistentes. O processo manual de consolidação levava 4 horas diárias.",
      etl: "Python (Pandas) para ler todos os .xlsx de uma pasta, normalizar colunas, detectar duplicatas, validar datas e unificar em SQLite. Execução automática via Windows Task Scheduler.",
      result: "O processo foi reduzido de 4 horas para 8 minutos com execução automática às 7h. A equipe recuperou 80 horas mensais de trabalho.",
      demoLabel: "Ver código no GitHub",
    },
    {
      id: 3, title: "Automação de Relatórios com Power Automate",
      problem: "A área de RH gerava 12 relatórios semanais manualmente em Excel e os enviava por e-mail um a um. O processo era propenso a erros e consumia meio dia de trabalho.",
      etl: "Fluxo no Power Automate que extrai dados do SharePoint Lists, processa com Power Query no Excel Online e envia e-mails personalizados a cada gerente de área com o relatório em anexo.",
      result: "Automação total do processo. Os relatórios são gerados toda segunda-feira às 8h sem intervenção humana. O analista recuperou 16 horas mensais.",
      demoLabel: "Ver fluxo",
    },
    {
      id: 4, title: "Análise de Giro de Estoque com Python",
      problem: "Uma rede de varejo não tinha visibilidade sobre quais produtos giravam lentamente e geravam capital imobilizado. As decisões de reposição eram tomadas pela intuição do comprador.",
      etl: "Carregamento de dados do MySQL com SQLAlchemy. Análise com Pandas: cálculo de dias de estoque, classificação ABC-XYZ, detecção de produtos sem movimentação em 90+ dias. Exportação para Excel com formatação condicional.",
      result: "Foram identificados 87 SKUs com mais de 180 dias sem giro. A direção tomou decisões de liquidação que liberaram $120K em capital de giro no primeiro trimestre.",
      demoLabel: "Ver notebook",
    },
    {
      id: 5, title: "Dashboard de KPIs Financeiros — Business Intelligence",
      problem: "O CFO precisava consolidar dados de 3 sistemas diferentes (ERP, CRM e planilha de tesouraria) para ter uma visão única da situação financeira da empresa.",
      etl: "Modelagem de dados no Power BI com esquema de constelação. Medidas DAX para EBITDA, ROI, fluxo de caixa projetado e variação vs. orçamento. Segurança por funções para cada gerente.",
      result: "O CFO reduziu o fechamento mensal de 5 dias para 1 dia. O dashboard foi adotado por toda a diretoria para revisões semanais.",
      demoLabel: "Ver demo",
    },
    {
      id: 6, title: "Limpeza e Normalização de Base de Dados de Clientes",
      problem: "Um CRM com 50.000 registros tinha duplicatas, telefones com formato incorreto, e-mails inválidos e nomes em caixa mista. Impedia campanhas de marketing eficazes.",
      etl: "Script Python com Pandas e regex para: deduplicação fonética, validação de e-mails, normalização de CPF, padronização de nomes e limpeza de telefones no formato E.164.",
      result: "A taxa de entrega de campanhas passou de 71% para 96%. Foram removidos 11.500 registros duplicados que inflavam métricas do CRM.",
      demoLabel: "Ver código",
    },
    {
      id: 7, title: "Relatório de Incidências Operacionais — Fábrica de Bebidas",
      problem: "Uma fábrica de bebidas com duas linhas de produção registrava suas paradas em planilhas sem análise consolidada. Não era possível identificar quais equipamentos e causas concentravam as falhas nem comparar o desempenho entre as linhas.",
      etl: "Registro de falhas (data, linha, equipamento afetado e categoria) carregado do Excel com Power Query. Tabela calendário em DAX para análise mensal e trimestral. Medidas DAX para contagem de falhas, participação por equipamento, média mensal, comparativo entre linhas e títulos dinâmicos conforme os filtros.",
      kpis: ["126 paradas", "13 equipamentos", "2 linhas", "5 categorias"],
      result: "Dashboard de 3 páginas (menu, análise de falhas e tendência) com navegação por botões e filtros por ano, trimestre, linha e categoria. Permite localizar em segundos os equipamentos críticos e a época com mais paradas para priorizar a manutenção. Caso demonstrativo construído com dados fictícios.",
      demoLabel: "Abrir no Power BI",
    },
  ],
};

/* ═══════════════════════════════════════════════════════════
   TRADUCCIONES DE HABILIDADES
═══════════════════════════════════════════════════════════ */
const SKILLS_I18N = {
  en: {
    bars: [
      { name: "Power BI",       label: "Advanced"             },
      { name: "DAX",            label: "Advanced"             },
      { name: "Power Query",    label: "Advanced"             },
      { name: "Python",         label: "Advanced"             },
      { name: "Pandas",         label: "Advanced"             },
      { name: "SQL",            label: "Advanced"             },
      { name: "Power Automate", label: "Intermediate-Advanced"},
      { name: "Excel Advanced", label: "Advanced"             },
    ],
    badges: [
      { category: "Visualization"  },
      { category: "Analysis & ETL" },
      { category: "Databases"      },
      { category: "Advanced"       },
      { category: "Automation"     },
      { category: "Data wrangling" },
      { category: "BI Modeling"    },
      { category: "Transformation" },
      { category: "Collaboration"  },
      { category: "Cloud"          },
    ],
  },
  pt: {
    bars: [
      { name: "Power BI",       label: "Avançado"               },
      { name: "DAX",            label: "Avançado"               },
      { name: "Power Query",    label: "Avançado"               },
      { name: "Python",         label: "Avançado"               },
      { name: "Pandas",         label: "Avançado"               },
      { name: "SQL",            label: "Avançado"               },
      { name: "Power Automate", label: "Intermediário-Avançado" },
      { name: "Excel Avançado", label: "Avançado"               },
    ],
    badges: [
      { category: "Visualização"    },
      { category: "Análise & ETL"   },
      { category: "Bancos de dados" },
      { category: "Avançado"        },
      { category: "Automação"       },
      { category: "Data wrangling"  },
      { category: "Modelagem BI"    },
      { category: "Transformação"   },
      { category: "Colaboração"     },
      { category: "Cloud"           },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════
   TRADUCCIONES DE TESTIMONIOS
═══════════════════════════════════════════════════════════ */
const TESTIMONIALS_I18N = {
  en: [
    {
      text: "She completely transformed the way we report. The dashboard built for us saves days of work every month, and management finally has real-time information to make decisions.",
      stars: 5, name: "Carlos Mendoza", role: "Sales Manager · Retail Company", initials: "CM"
    },
    {
      text: "The Python script developed for our ETL process reduced errors by 98%. Excellent technical skills and very good communication throughout the project.",
      stars: 5, name: "Ana Rodríguez", role: "Operations Director · Logistics S.A.", initials: "AR"
    },
    {
      text: "Very professional. She understood our needs from the beginning and delivered a financial dashboard the CFO uses daily. Highly recommended.",
      stars: 5, name: "Jorge Salinas", role: "CTO · Fintech Startup", initials: "JS"
    }
  ],
  pt: [
    {
      text: "Transformou completamente a forma como reportamos. O dashboard criado para nós economiza dias de trabalho todo mês e a gerência finalmente tem informações em tempo real.",
      stars: 5, name: "Carlos Mendoza", role: "Gerente Comercial · Empresa de Varejo", initials: "CM"
    },
    {
      text: "O script Python desenvolvido para o nosso processo ETL reduziu os erros em 98%. Excelente domínio técnico e muito boa comunicação durante todo o projeto.",
      stars: 5, name: "Ana Rodríguez", role: "Diretora de Operações · Logística S.A.", initials: "AR"
    },
    {
      text: "Muito profissional. Entendeu nossas necessidades desde o início e entregou um dashboard financeiro que o CFO usa diariamente. Altamente recomendada.",
      stars: 5, name: "Jorge Salinas", role: "CTO · Fintech Startup", initials: "JS"
    }
  ],
};
