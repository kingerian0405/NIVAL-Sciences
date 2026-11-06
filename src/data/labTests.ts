import { LabTest } from '../types';

export const LAB_TESTS: LabTest[] = [
  {
    id: 'perfil-20-integral',
    name: 'Perfil 20 Integral NIVAL',
    category: 'preventivo',
    categoryLabel: 'Perfiles Preventivos',
    description: 'Batería diagnóstica completa para valoración general del estado metabólico, hematológico, hepático y renal.',
    sampleType: 'Sangre venosa y Orina simple',
    fastingHours: 12,
    turnaroundTime: '24 horas',
    isPopular: true,
    preparationInstructions: [
      'Ayuno estricto de 10 a 12 horas (puede beber pequeños sorbos de agua natural).',
      'Evitar cenas copiosas, ricas en grasas o alcohol 48 horas previas.',
      'Recolectar la primera orina de la mañana en envase estéril (chorro medio).',
      'No realizar actividad física extenuante el día anterior.'
    ],
    recommendedFor: 'Chequeo anual preventivo en adultos, control general de salud e ingreso laboral.'
  },
  {
    id: 'hematologia-completa',
    name: 'Hematología Completa con Plaquetas',
    category: 'rutina',
    categoryLabel: 'Rutina y Diagnóstico',
    description: 'Recuento celular completo de glóbulos rojos, glóbulos blancos, fórmula leucocitaria diferencial y plaquetas.',
    sampleType: 'Sangre total con EDTA',
    fastingHours: 8,
    turnaroundTime: '4 a 6 horas',
    isPopular: true,
    preparationInstructions: [
      'Ayuno mínimo de 4 a 8 horas.',
      'Informar al personal si toma anticoagulantes o fármacos inmunosupresores.'
    ],
    recommendedFor: 'Detección de anemias, procesos infecciosos, trastornos de coagulación y monitoreo general.'
  },
  {
    id: 'glicemia-insulina-homa',
    name: 'Glicemia Basal + Insulina + Índice HOMA-IR',
    category: 'metabolico',
    categoryLabel: 'Metabolismo y Diabetes',
    description: 'Evaluación de los niveles de glucosa sérica e índice de resistencia a la insulina para prevención precoz de diabetes.',
    sampleType: 'Suero sanguíneo',
    fastingHours: 12,
    turnaroundTime: '24 horas',
    isPopular: true,
    preparationInstructions: [
      'Ayuno de 10 a 12 horas.',
      'No suspender medicación habitual a menos que su médico tratante lo indique.',
      'Permanecer en reposo relativo durante los 15 minutos previos a la extracción.'
    ],
    recommendedFor: 'Detección temprana de resistencia a la insulina, sobrepeso, síndrome metabólico y prediabetes.'
  },
  {
    id: 'perfil-lipidico-avanzado',
    name: 'Perfil Lipídico Avanzado (Colesterol total, HDL, LDL, VLDL, Triglicéridos)',
    category: 'cardiovascular',
    categoryLabel: 'Salud Cardiovascular',
    description: 'Cuantificación de las fracciones lipídicas para estratificación de riesgo aterogénico y cardiovascular.',
    sampleType: 'Suero sanguíneo',
    fastingHours: 12,
    turnaroundTime: '12 a 24 horas',
    isPopular: true,
    preparationInstructions: [
      'Ayuno riguroso de 12 horas.',
      'No consumir bebidas alcohólicas durante las 72 horas previas a la prueba.',
      'Mantener dieta habitual los días previos sin cambios drásticos.'
    ],
    recommendedFor: 'Evaluación del riesgo cardiovascular, control de dislipidemias e hipertensión arterial.'
  },
  {
    id: 'perfil-tiroideo-completo',
    name: 'Perfil Tiroideo Integral (TSH ultrasensible, T3 Libre, T4 Libre)',
    category: 'hormonal',
    categoryLabel: 'Hormonal y Endocrino',
    description: 'Monitoreo de la función tiroidea para detectar hipotiroidismo, hipertiroidismo o disfunciones subclínicas.',
    sampleType: 'Suero sanguíneo',
    fastingHours: 8,
    turnaroundTime: '24 horas',
    preparationInstructions: [
      'Ayuno de 8 horas.',
      'Si toma hormona tiroidea (Levotiroxina), tomar la muestra en la mañana ANTES de ingerir la pastilla (a menos que el médico indique lo contrario).',
      'Suspender suplementos con Biotina (vitamina B7) 48 horas antes, ya que puede interferir en los inmunoensayos.'
    ],
    recommendedFor: 'Fatiga crónica, cambios inexplicables de peso, alteraciones del estado de ánimo y controles metabólicos.'
  },
  {
    id: 'perfil-salud-mujer',
    name: 'Perfil Preventivo Integral Mujer NIVAL',
    category: 'preventivo',
    categoryLabel: 'Perfiles Preventivos',
    description: 'Chequeo especializado enfocado en bienestar metabólico, hormonal, salud ósea y marcadores clave femeninos.',
    sampleType: 'Sangre venosa y Orina',
    fastingHours: 12,
    turnaroundTime: '24 a 48 horas',
    isPopular: true,
    preparationInstructions: [
      'Ayuno de 10 a 12 horas.',
      'Primera orina de la mañana.',
      'Si incluye perfil hormonal ginecológico, coordinar la toma con el día específico del ciclo menstrual indicado por su especialista.'
    ],
    recommendedFor: 'Mujeres mayores de 25 años para evaluación ginecológica y metabólica anual.'
  },
  {
    id: 'perfil-salud-hombre',
    name: 'Perfil Preventivo Integral Hombre NIVAL',
    category: 'preventivo',
    categoryLabel: 'Perfiles Preventivos',
    description: 'Evaluación integral cardiovascular, metabólica, hepática y antígeno prostático (PSA Total y Libre).',
    sampleType: 'Suero sanguíneo y Orina',
    fastingHours: 12,
    turnaroundTime: '24 a 48 horas',
    isPopular: true,
    preparationInstructions: [
      'Ayuno de 10 a 12 horas.',
      'Para antígeno prostático (PSA): abstinencia sexual de 48 a 72 horas previas.',
      'No montar en bicicleta ni moto 48 horas antes de la toma de muestra.'
    ],
    recommendedFor: 'Hombres mayores de 40 años para vigilancia urológica y prevención integral.'
  },
  {
    id: 'perfil-funcion-hepatica',
    name: 'Perfil Hepático (TGO, TGP, Fosfatasa Alcalina, GGT, Bilirrubinas)',
    category: 'metabolico',
    categoryLabel: 'Metabolismo y Órganos',
    description: 'Análisis de enzimas y pigmentos hepáticos para evaluar el parénquima y vías biliares.',
    sampleType: 'Suero sanguíneo',
    fastingHours: 8,
    turnaroundTime: '12 a 24 horas',
    preparationInstructions: [
      'Ayuno de 8 a 10 horas.',
      'Evitar medicamentos hepatotóxicos no prescritos en días previos.',
      'Abstenerse de ingerir alcohol durante 48 horas antes del estudio.'
    ],
    recommendedFor: 'Sospecha de hígado graso, consumo crónico de medicamentos o chequeo digestivo.'
  },
  {
    id: 'perfil-renal-electrolitos',
    name: 'Perfil Renal & Electrólitos (Urea, Creatinina, Ácido Úrico, Na, K, Cl)',
    category: 'metabolico',
    categoryLabel: 'Metabolismo y Órganos',
    description: 'Evaluación del filtrado glomerular, equilibrio hidroelectrolítico y excreción nitrogenada.',
    sampleType: 'Suero sanguíneo y Orina',
    fastingHours: 8,
    turnaroundTime: '12 a 24 horas',
    preparationInstructions: [
      'Ayuno de 8 horas.',
      'Mantener hidratación normal con agua corriente el día previo.',
      'Evitar consumo excesivo de carnes rojas la noche previa.'
    ],
    recommendedFor: 'Pacientes hipertensos, diabéticos, deportistas de alta exigencia y chequeos de rutina.'
  },
  {
    id: 'perfil-salud-ocupacional',
    name: 'Batería Ocupacional & Pre-empleo Corporativa',
    category: 'ocupacional',
    categoryLabel: 'Empresas y Ocupacional',
    description: 'Panel normativo para admisiones laborales, evaluaciones periódicas y control preventivo de empresas.',
    sampleType: 'Sangre y Orina',
    fastingHours: 10,
    turnaroundTime: '24 horas',
    preparationInstructions: [
      'Ayuno de 8 a 10 horas.',
      'Traer documento de identidad y orden corporativa.',
      'Primera orina del día.'
    ],
    recommendedFor: 'Empresas, recursos humanos y directores de seguridad laboral que requieren cumplimiento de normativas.'
  },
  {
    id: 'vitamina-d-ferritina',
    name: 'Marcadores de Vitalidad: Vitamina D3 + Ferritina Sérica',
    category: 'preventivo',
    categoryLabel: 'Perfiles Preventivos',
    description: 'Cuantificación de reservas de hierro e inmunidad/salud ósea a través de la 25-hidroxivitamina D.',
    sampleType: 'Suero sanguíneo',
    fastingHours: 8,
    turnaroundTime: '24 horas',
    preparationInstructions: [
      'Ayuno de 8 horas.',
      'Evitar suplementos de vitamina D el mismo día del examen antes de la punción.'
    ],
    recommendedFor: 'Personas con poca exposición solar, cansancio inexplicable, debilidad muscular o fragilidad ósea.'
  },
  {
    id: 'inmunologia-serologia',
    name: 'Panel Serológico e Inmunológico (VIH, VDRL, Hepatitis B y C)',
    category: 'inmunologia',
    categoryLabel: 'Inmunología y Serología',
    description: 'Detección analítica de anticuerpos y antígenos para descarte de enfermedades infecciosas y preoperatorios.',
    sampleType: 'Suero sanguíneo',
    fastingHours: 4,
    turnaroundTime: 'Mismo día (6 horas)',
    preparationInstructions: [
      'Ayuno liviano de 4 horas.',
      'Proceso confidencial bajo estrictos estándares éticos de privacidad de datos.'
    ],
    recommendedFor: 'Requisitos preoperatorios, trámites consulares, controles prenupciales y medicina preventiva.'
  }
];

