import { Pillar, CorporatePlan, TrainingCourse } from '../types';

export const STRATEGIC_PILLARS: Pillar[] = [
  {
    id: 'diagnostico',
    title: 'Ciencias del Diagnóstico',
    iconName: 'Microscope',
    purpose: 'Generar información clínica confiable que apoye decisiones de salud.',
    scope: 'Laboratorio clínico, pruebas diagnósticas, perfiles preventivos, procesamiento automatizado, validación de resultados y doble verificación de calidad analítica.',
    color: 'from-blue-600 to-cyan-500',
    details: [
      'Primera unidad operativa consolidada de NIVAL Sciences',
      'Controles de calidad analítica internos y externos permanentes',
      'Trazabilidad digital integral de cada muestra clínica',
      'Entrega digital segura de resultados y tiempos óptimos de respuesta'
    ]
  },
  {
    id: 'prevencion',
    title: 'Prevención y Calidad de Vida',
    iconName: 'ShieldCheck',
    purpose: 'Promover la detección oportuna de riesgos y el cuidado proactivo de la salud.',
    scope: 'Evaluaciones preventivas periódicas, jornadas de salud integrales, estratificación de factores de riesgo y educación continua para el autocuidado.',
    color: 'from-emerald-600 to-teal-500',
    details: [
      'Identificación temprana de riesgos metabólicos y cardiovasculares',
      'Planes preventivos adaptados por grupos etarios y perfiles de actividad',
      'Monitoreo longitudinal del bienestar individual y colectivo',
      'Estrategias de hábitos saludables fundamentadas en evidencia'
    ]
  },
  {
    id: 'asesoria',
    title: 'Asesoría a Personas y Empresas',
    iconName: 'Compass',
    purpose: 'Acompañar a personas naturales y empresas con orientación y soluciones especializadas.',
    scope: 'Orientación personalizada dentro de competencias profesionales, facilitando la comprensión de necesidades, rutas de atención y consultoría de salud laboral.',
    color: 'from-amber-500 to-orange-500',
    details: [
      'Orientación clara sobre resultados de laboratorio y siguientes pasos',
      'Acompañamiento a personas en la organización de sus acciones de cuidado',
      'Consultoría técnica para empresas en salud ocupacional y bienestar',
      'Diseño de rutas de atención y derivación médica responsable'
    ]
  },
  {
    id: 'empresas',
    title: 'Soluciones Corporativas B2B',
    iconName: 'Building2',
    purpose: 'Fortalecer el bienestar del talento humano y la productividad organizacional.',
    scope: 'Programas corporativos a la medida, asesoría en medicina preventiva laboral, jornadas in-company y planes de seguimiento epidemiológico.',
    color: 'from-indigo-600 to-blue-500',
    details: [
      'Jornadas de despistaje in-situ sin paralizar operaciones de la empresa',
      'Informes consolidados de salud ocupacional y factores de riesgo globales',
      'Planes de fidelización y bienestar para colaboradores y familiares',
      'Convenios corporativos con tarifas preferenciales y facturación ágil'
    ]
  },
  {
    id: 'formacion',
    title: 'Formación y Capacitación',
    iconName: 'GraduationCap',
    purpose: 'Desarrollar conocimientos y capacidades en profesionales, equipos y comunidades.',
    scope: 'Cursos especializados, talleres prácticos, seminarios de actualización científica, capacitación corporativa y proyección de un Campus Digital de Salud.',
    color: 'from-violet-600 to-purple-500',
    details: [
      'Actualización científica continua para profesionales de la salud',
      'Talleres de primeros auxilios, ergonomía y salud laboral para trabajadores',
      'Educación comunitaria en prevención de enfermedades crónicas',
      'Metodología pedagógica moderna basada en casos clínicos reales'
    ]
  },
  {
    id: 'tecnologia',
    title: 'Tecnología y Microaplicaciones',
    iconName: 'Cpu',
    purpose: 'Conectar servicios, personas, empresas y conocimiento mediante herramientas digitales.',
    scope: 'Portal institucional interactivo, microaplicaciones de autoevaluación preventiva, herramientas de gestión de citas y plataformas de seguimiento.',
    color: 'from-sky-600 to-blue-600',
    details: [
      'Microaplicaciones de orientación preventiva en tiempo real',
      'Acceso digital expedito y seguro a reportes de laboratorio',
      'Interoperabilidad con plataformas médicas y corporativas',
      'Optimización de tiempos mediante automatización de procesos'
    ]
  },
  {
    id: 'investigacion',
    title: 'Investigación, Innovación y Alianzas',
    iconName: 'FlaskConical',
    purpose: 'Mejorar procesos diagnósticos y articular alianzas para expandir el impacto del ecosistema.',
    scope: 'Investigación aplicada, validación de nuevas metodologías, convenios académicos e integración con profesionales e instituciones sanitarias.',
    color: 'from-rose-600 to-pink-500',
    details: [
      'Alianzas con centros de salud, clínicas e instituciones educativas',
      'Colaboración científica para la mejora constante de metodologías',
      'Evaluación de tecnologías emergentes en salud preventiva',
      'Compromiso irrestricto con normas de bioseguridad y bioética'
    ]
  }
];

export const CORPORATE_PLANS: CorporatePlan[] = [
  {
    id: 'jornadas-in-company',
    title: 'Jornadas de Salud In-Company',
    badge: 'Más Solicitado',
    description: 'Llevamos nuestro equipo de extracción profesional a las instalaciones de su organización, garantizando mínima interrupción operativa.',
    recommendedFor: 'Empresas de 20 a 500+ colaboradores que buscan evaluar la salud de su equipo sin traslados.',
    features: [
      'Toma de muestras in-situ con estrictos protocolos de bioseguridad',
      'Perfiles adaptados a los requerimientos de la empresa y sector',
      'Resultados individuales confidenciales para cada colaborador',
      'Informe epidemiológico global anonimizado para la dirección de RRHH'
    ]
  },
  {
    id: 'convenios-corporativos',
    title: 'Convenio Integral para Colaboradores',
    badge: 'Beneficio Continuo',
    description: 'Convenio institucional que brinda acceso preferencial a todos los servicios de laboratorio y prevención para el personal y sus familiares directos.',
    recommendedFor: 'Organizaciones que desean incorporar beneficios de salud de alto impacto en su paquete de compensaciones.',
    features: [
      'Tarifas corporativas preferenciales todo el año',
      'Atención prioritaria en sede o toma a domicilio',
      'Asesoría técnica para el área de Seguridad y Salud Laboral',
      'Línea de soporte y coordinación dedicada para la empresa'
    ]
  },
  {
    id: 'consultoria-ocupacional',
    title: 'Consultoría y Evaluación Ocupacional',
    badge: 'Cumplimiento Legal',
    description: 'Programas de exámenes pre-empleo, periódicos y post-vacacionales alineados con la normativa sanitaria y laboral vigente.',
    recommendedFor: 'Industrias, empresas de manufactura, servicios y corporaciones que requieren rigurosa conformidad legal.',
    features: [
      'Baterías de pruebas pre-empleo con emisión rápida en 24 horas',
      'Exámenes periódicos según matriz de riesgos específicos de cada puesto',
      'Doble verificación analítica para respaldo médico legal',
      'Certificados de aptitud y control documental estandarizado'
    ]
  }
];

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'bioanalisis-calidad',
    title: 'Aseguramiento de Calidad y Doble Verificación en el Laboratorio Clínico',
    targetAudience: 'Profesionales',
    modality: 'Híbrido',
    duration: '24 Horas Académicas',
    description: 'Programa teórico-práctico sobre control interno, trazabilidad analítica y reducción de errores preanalíticos y analíticos.',
    topics: ['Fase preanalítica crítica', 'Métricas Six Sigma en el laboratorio', 'Resolución de discrepancias', 'Protocolos de doble validación']
  },
  {
    id: 'salud-empresarial-prevencion',
    title: 'Gestión Preventiva de Enfermedades Crónicas en el Entorno Laboral',
    targetAudience: 'Empresas',
    modality: 'Presencial / In-Company',
    duration: '8 Horas',
    description: 'Capacitación orientada a comités de seguridad y RRHH para reducir el ausentismo laboral derivado de riesgos cardiometabólicos.',
    topics: ['Detección de factores de riesgo', 'Ergonomía y estrés oxidativo', 'Estrategias de pausas activas', 'Interpretación de indicadores de salud']
  },
  {
    id: 'educacion-autocuidado-comunitario',
    title: 'Taller de Autocuidado y Comprensión de Marcadores de Salud',
    targetAudience: 'Comunidad',
    modality: 'Online en Vivo',
    duration: '4 Horas',
    description: 'Espacio educativo para que personas y familias aprendan a leer sus exámenes de rutina y adopten decisiones preventivas a tiempo.',
    topics: ['Qué nos dice un perfil 20', 'Mitos sobre el colesterol y triglicéridos', 'Señales de resistencia a la insulina', 'Cómo prepararse para un examen']
  }
];

export const ROADMAP_STAGES = [
  {
    stage: 'Primera Etapa',
    period: '0 – 12 Meses',
    badge: 'En Ejecución Activa',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    title: 'Consolidación & Excelencia Operativa',
    description: 'Consolidación del laboratorio clínico de alta precisión, doble verificación analítica y lanzamiento de herramientas digitales.',
    milestones: [
      'Consolidación del laboratorio clínico con doble verificación analítica',
      'Portafolio inicial de asesoría para personas naturales y empresas',
      'Despliegue del portal web institucional y canales ágiles de contacto',
      'Lanzamiento de las primeras microaplicaciones interactivas',
      'Programas de perfiles preventivos y jornadas piloto'
    ]
  },
  {
    stage: 'Segunda Etapa',
    period: '12 – 24 Meses',
    badge: 'Proyección Estratégica',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    title: 'Expansión & Diversificación',
    description: 'Ampliación del portafolio diagnóstico, consolidación de la plataforma de formación continua y alianzas corporativas.',
    milestones: [
      'Ampliación del portafolio diagnóstico y preventivo especializado',
      'Alianzas con centros educativos, especialistas y empresas',
      'Plataforma de formación continua y campus digital de salud',
      'Programas corporativos integrales de prevención y bienestar',
      'Mayor cobertura territorial de jornadas de salud'
    ]
  },
  {
    stage: 'Tercera Etapa',
    period: '24 – 36 Meses',
    badge: 'Visión de Liderazgo',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    title: 'Integración & Posicionamiento Ecosistémico',
    description: 'Madurez del ecosistema digital completo, nuevas unidades de investigación y referencia en medicina preventiva.',
    milestones: [
      'Ecosistema digital unificado de servicios, asesoría y seguimiento',
      'Desarrollo de nuevas unidades de servicio e investigación aplicada',
      'Ampliación de la cobertura geográfica de forma sostenible',
      'Posicionamiento de NIVAL como referente en soluciones de salud preventiva'
    ]
  }
];

