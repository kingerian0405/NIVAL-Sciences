export interface QuizQuestion {
  id: string;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description?: string;
    value: string;
    iconName?: string;
  }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'targetGroup',
    question: '¿Para quién deseas consultar la orientación preventiva?',
    subtitle: 'Elige el perfil para personalizar las sugerencias diagnósticas y de cuidado.',
    options: [
      { label: 'Para mí (Adulto)', description: 'Chequeo personal preventivo o de control', value: 'personal' },
      { label: 'Para una Mujer Adulta / Familiar', description: 'Enfoque ginecológico y metabólico integral', value: 'mujer' },
      { label: 'Para un Hombre Adulto / Familiar', description: 'Enfoque cardiovascular, metabólico y prostático', value: 'hombre' },
      { label: 'Para mi Empresa o Equipo', description: 'Jornadas de salud y salud ocupacional', value: 'empresa' }
    ]
  },
  {
    id: 'ageRange',
    question: '¿En qué rango de edad se encuentra?',
    subtitle: 'Los requerimientos biológicos y analíticos varían en cada etapa de la vida.',
    options: [
      { label: '18 a 34 años', description: 'Etapa ideal para fijar valores de base y descartar riesgos asintomáticos', value: 'joven' },
      { label: '35 a 49 años', description: 'Vigilancia cardiovascular, resistencia a la insulina y perfil lipídico', value: 'adulto' },
      { label: '50 años en adelante', description: 'Monitoreo metabólico profundo, cardiovascular, hormonal y renal', value: 'senior' }
    ]
  },
  {
    id: 'mainGoal',
    question: '¿Cuál es tu principal objetivo de bienestar en este momento?',
    subtitle: 'Nos ayuda a priorizar los marcadores biológicos más relevantes.',
    options: [
      { label: 'Chequeo General Preventivo', description: 'Quiero conocer mi estado de salud general aunque no tenga síntomas', value: 'general' },
      { label: 'Control de Energía, Cansancio y Ánimo', description: 'He sentido fatiga constante, falta de energía o cambios de peso', value: 'energia' },
      { label: 'Salud Cardiovascular y Peso', description: 'Me interesa revisar colesterol, triglicéridos, glucosa y presión arterial', value: 'cardio' },
      { label: 'Requisito Laboral o Corporativo', description: 'Necesito una constancia o batería ocupacional para mi trabajo', value: 'laboral' }
    ]
  },
  {
    id: 'lastCheckup',
    question: '¿Cuándo fue tu último chequeo o análisis de laboratorio?',
    subtitle: 'La periodicidad es clave para la detección oportuna de desviaciones subclínicas.',
    options: [
      { label: 'Hace más de 1 año (o nunca me he realizado uno)', description: 'Es altamente prioritario actualizar tus parámetros basales', value: 'urgente' },
      { label: 'En los últimos 6 a 12 meses', description: 'Momento oportuno para seguimiento y comparación evolutiva', value: 'seguimiento' },
      { label: 'Hace menos de 6 meses', description: 'Revisión puntual de valores específicos o recomendaciones médicas', value: 'reciente' }
    ]
  }
];

export interface RecommendationResult {
  title: string;
  highlightBadge: string;
  summary: string;
  suggestedTests: {
    name: string;
    why: string;
    fasting: string;
  }[];
  habitsAdvice: string[];
}

export function calculateQuizRecommendation(answers: Record<string, string>): RecommendationResult {
  const { targetGroup, ageRange, mainGoal } = answers;

  if (targetGroup === 'empresa' || mainGoal === 'laboral') {
    return {
      title: 'Plan Integral Ocupacional & Diagnóstico Preventivo B2B',
      highlightBadge: 'Enfoque Corporativo y Laboral',
      summary: 'Para empresas y colaboradores, recomendamos una batería de ingreso o control periódico que verifique aptitud física y detecte riesgos cardiovasculares tempranos.',
      suggestedTests: [
        { name: 'Batería Ocupacional & Pre-empleo Corporativa', why: 'Cumplimiento normativo y evaluación de aptitud laboral general.', fasting: '8 a 10 horas' },
        { name: 'Hematología Completa + Glicemia', why: 'Descarte de anemias, procesos infecciosos y prediabetes.', fasting: '8 horas' },
        { name: 'Perfil Lipídico Básico', why: 'Detección de factores de riesgo aterogénico por sedentarismo laboral.', fasting: '12 horas' }
      ],
      habitsAdvice: [
        'Organizar jornadas in-situ para evitar traslados y pérdida de horas laborales.',
        'Fomentar programas de pausas activas e hidratación durante la jornada.',
        'Implementar evaluaciones periódicas anuales preventivas para el personal.'
      ]
    };
  }

  if (mainGoal === 'energia') {
    return {
      title: 'Perfil de Vitalidad, Tiroides & Marcadores Metabólicos',
      highlightBadge: 'Enfoque de Energía y Metabolismo',
      summary: 'La fatiga crónica y los cambios inexplicables de energía suelen relacionarse con deficiencias de micronutrientes, disfunción tiroidea subclínica o resistencia a la insulina.',
      suggestedTests: [
        { name: 'Perfil Tiroideo Integral (TSH, T3L, T4L)', why: 'Monitorea el metabolismo central y descarta hipotiroidismo subclínico.', fasting: '8 horas' },
        { name: 'Marcadores de Vitalidad: Vitamina D3 + Ferritina Sérica', why: 'Evalúa reservas de hierro intracelular e inmunidad funcional.', fasting: '8 horas' },
        { name: 'Hematología Completa con Plaquetas', why: 'Descarte inmediato de anemia ferropénica o megaloblástica.', fasting: '4 a 8 horas' }
      ],
      habitsAdvice: [
        'Asegurar un descanso nocturno continuo de 7 a 8 horas en oscuridad completa.',
        'Exposición matutina moderada a la luz solar natural para regular el ritmo circadiano.',
        'Llevar estos resultados a una consulta médica para una orientación terapéutica personalizada.'
      ]
    };
  }

  if (targetGroup === 'mujer' || (mainGoal === 'general' && ageRange === 'senior')) {
    return {
      title: 'Perfil Preventivo Integral Mujer NIVAL + Control Metabólico',
      highlightBadge: 'Prevención Proactiva Especializada',
      summary: 'Diseñado para evaluar el equilibrio cardiovascular, óseo, hepático y hormonal, permitiendo anticiparse a cambios en el metabolismo con total precisión.',
      suggestedTests: [
        { name: 'Perfil Preventivo Integral Mujer NIVAL', why: 'Monitoreo gineco-metabólico completo y marcadores de bienestar.', fasting: '12 horas' },
        { name: 'Glicemia Basal + Insulina + HOMA-IR', why: 'Detección temprana de resistencia a la insulina previa a la diabetes.', fasting: '12 horas' },
        { name: 'Perfil Lipídico Avanzado', why: 'Protección endotelial y prevención cardiovascular personalizada.', fasting: '12 horas' }
      ],
      habitsAdvice: [
        'Mantener una ingesta adecuada de proteínas y entrenamiento de fuerza para proteger la masa muscular y ósea.',
        'Realizar este panel de control con frecuencia anual sistemática.',
        'Solicitar nuestra doble verificación de resultados para máxima tranquilidad clínica.'
      ]
    };
  }

  if (targetGroup === 'hombre' && (ageRange === 'adulto' || ageRange === 'senior')) {
    return {
      title: 'Perfil Preventivo Integral Hombre NIVAL + Urológico',
      highlightBadge: 'Salud Integral Masculina',
      summary: 'Prioriza la salud cardiovascular, el perfil metabólico y la vigilancia preventiva prostática (PSA) con máxima confiabilidad analítica.',
      suggestedTests: [
        { name: 'Perfil Preventivo Integral Hombre NIVAL', why: 'Incluye PSA total, perfil lipídico, función hepática y renal en un solo estudio.', fasting: '12 horas' },
        { name: 'Glicemia Basal + Insulina + HOMA-IR', why: 'Evalúa riesgo de hígado graso y sobrecarga glucémica.', fasting: '12 horas' },
        { name: 'Perfil Renal & Electrólitos', why: 'Monitoreo de filtración glomerular y control de ácido úrico.', fasting: '8 horas' }
      ],
      habitsAdvice: [
        'Recordar las 48 horas de abstinencia sexual y evitar ciclismo previo a la toma de PSA.',
        'Monitorear la tensión arterial periódicamente.',
        'Consultar con un especialista urológico o internista para seguimiento integral.'
      ]
    };
  }

  // Default general preventative:
  return {
    title: 'Perfil 20 Integral NIVAL de Prevención Oportuna',
    highlightBadge: 'Chequeo Esencial 360°',
    summary: 'La mejor herramienta diagnóstica para conocer el punto de partida biológico del organismo. Evalúa de forma transversal sangre, riñones, hígado y balance glicémico.',
    suggestedTests: [
      { name: 'Perfil 20 Integral NIVAL', why: 'La batería más completa para una radiografía química y celular del organismo.', fasting: '12 horas' },
      { name: 'Perfil Lipídico Avanzado', why: 'Estratificación de riesgo vascular y salud arterial temprana.', fasting: '12 horas' },
      { name: 'Examen General de Orina', why: 'Marcadores de función renal y descarte de afecciones asintomáticas.', fasting: 'Primera orina' }
    ],
    habitsAdvice: [
      'Beber al menos 2 litros de agua natural al día.',
      'Adoptar el hábito de realizar este control al menos una vez por año de forma preventiva.',
      'Aprovechar el servicio de toma de muestra a domicilio o en nuestra sede.'
    ]
  };
}

