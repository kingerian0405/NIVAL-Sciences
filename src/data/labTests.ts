import { LabTest } from '../types';

export const LAB_TESTS: LabTest[] = [
  {
    "id": "hematologia-completa",
    "name": "Hematología Completa",
    "abbreviation": "HC / CBC",
    "category": "hematologia",
    "categoryLabel": "Hematología",
    "description": "Evaluación integral de glóbulos rojos, glóbulos blancos y plaquetas para detectar anemia, infecciones y otros trastornos sanguíneos.",
    "price": "$4,60",
    "sampleType": "Sangre total con anticoagulante EDTA (tubo lila)",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas continuas (se puede beber pequeños sorbos de agua natural).",
      "Evitar cenas copiosas o con alto contenido graso la noche previa.",
      "Informar si toma anticoagulantes o fármacos inmunosupresores."
    ],
    "recommendedFor": "Chequeo preventivo de rutina, detección de anemias, procesos infecciosos virales o bacterianos y monitoreo celular.",
    "isPopular": true
  },
  {
    "id": "contaje-de-plaquetas-manuales",
    "name": "Contaje de Plaquetas Manuales",
    "abbreviation": "PLQ",
    "category": "hematologia",
    "categoryLabel": "Hematología",
    "description": "Recuento cuantitativo directo en lámina para verificar la cantidad de plaquetas y descartar falsa trombocitopenia.",
    "price": "$5,75",
    "sampleType": "Sangre total con anticoagulante EDTA (tubo lila)",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno mínimo de 4 horas.",
      "No frotar ni aplicar presión excesiva tras la punción venosa.",
      "Notificar si toma anticoagulantes, antiagregantes (aspirina) o si presenta hematomas espontáneos."
    ],
    "recommendedFor": "Confirmación cuantitativa de plaquetas en cámara y descarte de seudotrombocitopenia inducida por EDTA.",
    "isPopular": false
  },
  {
    "id": "velocidad-de-sedimentacion-globular",
    "name": "Velocidad de Sedimentación Globular",
    "abbreviation": "VSG / ESG",
    "category": "hematologia",
    "categoryLabel": "Hematología",
    "description": "Prueba que mide la rapidez con la que los eritrocitos se sedimentan; indicador general de inflamación o infección.",
    "price": "$3,45",
    "sampleType": "Sangre total con anticoagulante EDTA (tubo lila)",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (3 a 4 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Permanecer en reposo durante 15 minutos en la sala de espera antes de la extracción.",
      "Informar si cursa procesos infecciosos o dolores articulares."
    ],
    "recommendedFor": "Marcador general inespecífico de inflamación sistémica, infecciones, polimialgia y artritis.",
    "isPopular": false
  },
  {
    "id": "frotis-de-sangre-periferica",
    "name": "Frotis de Sangre Periférica",
    "abbreviation": "FSP",
    "category": "hematologia",
    "categoryLabel": "Hematología",
    "description": "Análisis microscópico de la morfología de las células sanguíneas para evaluar anomalías estructurales.",
    "price": "$5,00",
    "sampleType": "Sangre total con anticoagulante EDTA (tubo lila)",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 4 a 8 horas.",
      "Indicar si ha recibido transfusiones sanguíneas en los últimos 3 meses."
    ],
    "recommendedFor": "Evaluación morfológica celular detallada de eritrocitos, leucocitos y plaquetas para descarte de anemias y leucemias.",
    "isPopular": false
  },
  {
    "id": "grupo-y-factor-rh",
    "name": "Grupo y Factor Rh",
    "abbreviation": "G&Rh",
    "category": "hematologia",
    "categoryLabel": "Hematología",
    "description": "Determina el grupo sanguíneo (A, B, AB, O) y la presencia del antígeno Rh (positivo/negativo).",
    "price": "$5,50",
    "sampleType": "Sangre total con anticoagulante EDTA (tubo lila)",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (2 a 4 horas)",
    "preparationInstructions": [
      "No requiere ayuno previo.",
      "Presentar documento de identidad para emisión de tarjeta o carnet oficial de tipificación sanguínea."
    ],
    "recommendedFor": "Requisito preoperatorio, control prenatal, transfusión sanguínea segura y donación.",
    "isPopular": true
  },
  {
    "id": "coombs-directo",
    "name": "Coombs Directo",
    "abbreviation": "CD",
    "category": "hematologia",
    "categoryLabel": "Hematología",
    "description": "Detecta anticuerpos unidos a la superficie de los glóbulos rojos, útil en anemias hemolíticas autoinmunes.",
    "price": "$6,00",
    "sampleType": "Sangre total con anticoagulante EDTA (tubo lila)",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si la madre es Rh negativo en recién nacidos, o medicación en curso (alfa-metildopa, cefalosporinas)."
    ],
    "recommendedFor": "Diagnóstico de anemias hemolíticas autoinmunes, enfermedad hemolítica del recién nacido y reacciones transfusionales.",
    "isPopular": false
  },
  {
    "id": "hematologia-especial",
    "name": "Hematología Especial",
    "abbreviation": "HE",
    "category": "hematologia",
    "categoryLabel": "Hematología",
    "description": "Estudio hematológico avanzado con parámetros extendidos para casos clínicos complejos.",
    "price": "$6,90",
    "sampleType": "Sangre total con anticoagulante EDTA (tubo lila)",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas continuas (se puede beber pequeños sorbos de agua natural).",
      "Evitar cenas copiosas o con alto contenido graso la noche previa.",
      "Informar si toma anticoagulantes o fármacos inmunosupresores."
    ],
    "recommendedFor": "Chequeo preventivo de rutina, detección de anemias, procesos infecciosos virales o bacterianos y monitoreo celular.",
    "isPopular": false
  },
  {
    "id": "reticulocitos-hematologia",
    "name": "Reticulocitos + Hematología",
    "abbreviation": "RET",
    "category": "hematologia",
    "categoryLabel": "Hematología",
    "description": "Conteo de glóbulos rojos jóvenes junto con la hematología completa para evaluar la producción medular.",
    "price": "$6,33",
    "sampleType": "Sangre total con anticoagulante EDTA (tubo lila)",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Indicar si recibe tratamiento con hierro, ácido fólico, vitamina B12 o eritropoyetina."
    ],
    "recommendedFor": "Evaluación de la actividad regenerativa eritropoyética de la médula ósea ante anemias.",
    "isPopular": false
  },
  {
    "id": "drepanocitos",
    "name": "Drepanocitos",
    "abbreviation": "Test Falciforme",
    "category": "hematologia",
    "categoryLabel": "Hematología",
    "description": "Prueba de inducción para detectar la presencia de hemoglobina S y células falciformes (anemia drepanocítica).",
    "price": "$4,03",
    "sampleType": "Sangre total con anticoagulante EDTA (tubo lila)",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "No requiere ayuno estricto (mínimo 2 horas).",
      "Indicar antecedentes personales o familiares de anemia falciforme o drepanocitosis."
    ],
    "recommendedFor": "Detección rápida de hematíes falciformes (presencia de Hemoglobina S) en sospecha de drepanocitosis.",
    "isPopular": false
  },
  {
    "id": "tiempo-de-protrombina",
    "name": "Tiempo de Protrombina",
    "abbreviation": "TP / PT",
    "category": "coagulacion",
    "categoryLabel": "Coagulación",
    "description": "Mide el tiempo de coagulación de la vía extrínseca; evalúa el tratamiento con anticoagulantes orales y la función hepática.",
    "price": "$4,80",
    "sampleType": "Plasma citratado al 3.2% (tubo celeste)",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Si toma anticoagulantes orales (Warfarina), notificar la dosis diaria exacta y hora de la última toma.",
      "Punción venosa atraumática obligatoria."
    ],
    "recommendedFor": "Evaluación de la vía extrínseca de coagulación, monitoreo de INR en anticoagulación oral y valoración prequirúrgica.",
    "isPopular": true
  },
  {
    "id": "tiempo-parcial-de-tromboplastina",
    "name": "Tiempo Parcial de Tromboplastina",
    "abbreviation": "TPT / aPTT",
    "category": "coagulacion",
    "categoryLabel": "Coagulación",
    "description": "Evalúa la vía intrínseca de la coagulación y el efecto de la heparina no fraccionada.",
    "price": "$4,80",
    "sampleType": "Plasma citratado al 3.2% (tubo celeste)",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si se encuentra bajo tratamiento con heparina.",
      "Informar antecedentes de sangrado prolongado tras cortes o cirugías menores."
    ],
    "recommendedFor": "Evaluación de la vía intrínseca de coagulación, detección de deficiencias de factores y perfil preoperatorio.",
    "isPopular": true
  },
  {
    "id": "fibrinogeno",
    "name": "Fibrinógeno",
    "abbreviation": "FIB",
    "category": "coagulacion",
    "categoryLabel": "Coagulación",
    "description": "Proteína esencial en la formación de coágulos; sus niveles se alteran en inflamación o trastornos de coagulación.",
    "price": "$7,50",
    "sampleType": "Plasma citratado al 3.2% (tubo celeste)",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Evitar fumar antes de la prueba.",
      "Notificar procesos inflamatorios agudos o antecedentes trombóticos."
    ],
    "recommendedFor": "Diagnóstico de hipofibrinogenemia, riesgo trombótico, coagulación intravascular diseminada (CID) y reactante agudo.",
    "isPopular": false
  },
  {
    "id": "dimero-d",
    "name": "Dímero D",
    "abbreviation": "DD",
    "category": "coagulacion",
    "categoryLabel": "Coagulación",
    "description": "Producto de degradación de la fibrina; utilizado para descartar trombosis venosa profunda o tromboembolismo pulmonar.",
    "price": "$13,80",
    "sampleType": "Plasma citratado al 3.2% (tubo celeste)",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 4 horas (en situaciones de urgencia médica no requiere ayuno).",
      "Indicar sospecha clínica de trombosis o tromboembolismo."
    ],
    "recommendedFor": "Descarte de alta sensibilidad para trombosis venosa profunda (TVP), tromboembolismo pulmonar (TEP) y coagulopatías.",
    "isPopular": true
  },
  {
    "id": "curva-de-tolerancia-a-la-glucosa-3-puntos",
    "name": "Curva de Tolerancia a la Glucosa (3 Puntos)",
    "abbreviation": "CTG 3P / OGTT",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Mide la respuesta del cuerpo al azúcar en 3 momentos tras una carga oral para diagnosticar diabetes o resistencia a la insulina.",
    "price": "$17,25",
    "sampleType": "Suero sanguíneo en serie (basal, 60 min y 120 min post-carga oral de glucosa 75g)",
    "fastingHours": 10,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno estricto de 10 a 12 horas.",
      "Mantener dieta habitual rica en carbohidratos durante los 3 días previos sin restricciones.",
      "Disponer de al menos 2 horas y media en las instalaciones del laboratorio en reposo absoluto sin comer, fumar ni caminar."
    ],
    "recommendedFor": "Diagnóstico formal de diabetes mellitus, intolerancia a carbohidratos y diabetes gestacional.",
    "isPopular": true
  },
  {
    "id": "glicemia-en-ayunas",
    "name": "Glicemia en Ayunas",
    "abbreviation": "GLI",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Medición de los niveles de glucosa en sangre basal para control y despistaje de diabetes.",
    "price": "$3,00",
    "sampleType": "Suero sanguíneo o plasma con fluoruro",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 a 10 horas (no exceder las 12 horas de ayuno).",
      "Cena previa ligera sin exceso de azúcares ni carbohidratos refinados.",
      "Solo se permite beber pequeños sorbos de agua natural."
    ],
    "recommendedFor": "Despistaje preventivo y control de diabetes, prediabetes y monitoreo glucémico rutinario.",
    "isPopular": true
  },
  {
    "id": "glicemia-post-prandial",
    "name": "Glicemia Post-Prandial",
    "abbreviation": "GPP",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Nivel de glucosa en sangre 2 horas después de ingerir alimentos para evaluar la respuesta insulínica.",
    "price": "$3,00",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "La extracción se realiza exactamente a las 2 horas contadas a partir del primer bocado de la comida prescrita.",
      "No ingerir alimentos adicionales, café ni fumar durante las 2 horas de intervalo."
    ],
    "recommendedFor": "Evaluación de la respuesta insulínica fisiológica tras la ingesta de alimentos.",
    "isPopular": false
  },
  {
    "id": "glicemia-post-carga-glicolab",
    "name": "Glicemia Post-Carga Glicolab",
    "abbreviation": "GPC",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Prueba de glucosa medida tras la toma de una solución estandarizada de glucosa (Glicolab).",
    "price": "$13,00",
    "sampleType": "Suero sanguíneo post-carga estandarizada",
    "fastingHours": 10,
    "turnaroundTime": "Mismo día (6 horas)",
    "preparationInstructions": [
      "Ayuno de 10 horas.",
      "Se ingiere en el laboratorio la solución líquida glucosada calibrada (Glicolab).",
      "Permanecer sentado en reposo durante 2 horas continuas."
    ],
    "recommendedFor": "Prueba calibrada para evaluar la capacidad de depuración de glucosa plasmática.",
    "isPopular": false
  },
  {
    "id": "urea",
    "name": "Urea",
    "abbreviation": "URE",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Evalúa la cantidad de nitrógeno ureico en sangre; indicador fundamental de la función renal.",
    "price": "$3,00",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar ejercicio físico intenso o consumo desmedido de carnes rojas las 24 horas previas."
    ],
    "recommendedFor": "Evaluación de la función de filtración renal, balance nitrogenado y descarte de hiperuricemia/gota.",
    "isPopular": false
  },
  {
    "id": "creatinina",
    "name": "Creatinina",
    "abbreviation": "CRE",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Subproducto del metabolismo muscular filtrado por los riñones; parámetro clave para la función renal.",
    "price": "$3,00",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar ejercicio físico intenso o consumo desmedido de carnes rojas las 24 horas previas."
    ],
    "recommendedFor": "Evaluación de la función de filtración renal, balance nitrogenado y descarte de hiperuricemia/gota.",
    "isPopular": true
  },
  {
    "id": "colesterol-total",
    "name": "Colesterol Total",
    "abbreviation": "COL",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Mide el total de colesterol en sangre para evaluar riesgo cardiovascular general.",
    "price": "$4,00",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 12,
    "turnaroundTime": "Mismo día (6 horas)",
    "preparationInstructions": [
      "Ayuno riguroso de 12 horas continuas.",
      "Abstenerse por completo de consumir bebidas alcohólicas durante las 72 horas previas.",
      "Cena liviana sin grasas saturadas, frituras ni postres la noche previa."
    ],
    "recommendedFor": "Evaluación del riesgo cardiovascular, dislipidemias, niveles de HDL/LDL y aterosclerosis.",
    "isPopular": false
  },
  {
    "id": "trigliceridos",
    "name": "Triglicéridos",
    "abbreviation": "TRIG",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Mide los niveles de grasas en sangre relacionadas con el almacenamiento de energía y riesgo arterial.",
    "price": "$4,00",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 12,
    "turnaroundTime": "Mismo día (6 horas)",
    "preparationInstructions": [
      "Ayuno riguroso de 12 horas continuas.",
      "Abstenerse por completo de consumir bebidas alcohólicas durante las 72 horas previas.",
      "Cena liviana sin grasas saturadas, frituras ni postres la noche previa."
    ],
    "recommendedFor": "Evaluación del riesgo cardiovascular, dislipidemias, niveles de HDL/LDL y aterosclerosis.",
    "isPopular": false
  },
  {
    "id": "perfil-lipidico",
    "name": "Perfil Lipídico",
    "abbreviation": "PL",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Conjunto de pruebas (Colesterol Total, HDL, LDL, VLDL y Triglicéridos) para evaluación cardiovascular exhaustiva.",
    "price": "$12,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 12,
    "turnaroundTime": "Mismo día (6 horas)",
    "preparationInstructions": [
      "Ayuno riguroso de 12 horas continuas.",
      "Abstenerse por completo de consumir bebidas alcohólicas durante las 72 horas previas.",
      "Cena liviana sin grasas saturadas, frituras ni postres la noche previa."
    ],
    "recommendedFor": "Evaluación del riesgo cardiovascular, dislipidemias, niveles de HDL/LDL y aterosclerosis.",
    "isPopular": true
  },
  {
    "id": "acido-urico",
    "name": "Ácido Úrico",
    "abbreviation": "AU",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Mide el nivel de ácido úrico; su elevación produce gota o cálculos renales.",
    "price": "$3,80",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar ejercicio físico intenso o consumo desmedido de carnes rojas las 24 horas previas."
    ],
    "recommendedFor": "Evaluación de la función de filtración renal, balance nitrogenado y descarte de hiperuricemia/gota.",
    "isPopular": false
  },
  {
    "id": "tgo-ast",
    "name": "TGO (AST)",
    "abbreviation": "TGO / AST",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Enzima hepática y cardíaca; aumenta en lesión celular del hígado o músculo.",
    "price": "$4,00",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar consumo de bebidas alcohólicas al menos 48 horas antes.",
      "Informar si consume medicamentos hepatotóxicos o suplementos deportivos."
    ],
    "recommendedFor": "Evaluación de la función hepática, daño hepatocelular, colestasis biliar y esteatosis hepática.",
    "isPopular": false
  },
  {
    "id": "tgp-alt",
    "name": "TGP (ALT)",
    "abbreviation": "TGP / ALT",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Enzima específica del hígado; indicador sensible de daño o inflamación hepática.",
    "price": "$4,00",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar consumo de bebidas alcohólicas al menos 48 horas antes.",
      "Informar si consume medicamentos hepatotóxicos o suplementos deportivos."
    ],
    "recommendedFor": "Evaluación de la función hepática, daño hepatocelular, colestasis biliar y esteatosis hepática.",
    "isPopular": false
  },
  {
    "id": "calcio-serico",
    "name": "Calcio Sérico",
    "abbreviation": "Ca",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Mide el calcio total circulante, esencial para la salud ósea, función muscular y nerviosa.",
    "price": "$5,75",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar suplementos minerales no habituales las 24 horas previas."
    ],
    "recommendedFor": "Evaluación bioquímica de calcio sérico para control clínico y metabólico.",
    "isPopular": false
  },
  {
    "id": "calcio-ionico",
    "name": "Calcio Iónico",
    "abbreviation": "Ca++",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Mide la fracción libre y metabólicamente activa del calcio en sangre.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar suplementos minerales no habituales las 24 horas previas."
    ],
    "recommendedFor": "Evaluación bioquímica de calcio iónico para control clínico y metabólico.",
    "isPopular": false
  },
  {
    "id": "fosfatasas-alcalinas",
    "name": "Fosfatasas Alcalinas",
    "abbreviation": "FA / ALP",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Enzima presente en hígado y huesos; se eleva en trastornos de las vías biliares o crecimiento óseo.",
    "price": "$5,75",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar consumo de bebidas alcohólicas al menos 48 horas antes.",
      "Informar si consume medicamentos hepatotóxicos o suplementos deportivos."
    ],
    "recommendedFor": "Evaluación de la función hepática, daño hepatocelular, colestasis biliar y esteatosis hepática.",
    "isPopular": false
  },
  {
    "id": "bilirrubina-total-y-fraccionada",
    "name": "Bilirrubina Total y Fraccionada",
    "abbreviation": "BT/BD/BI",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Evalúa el pigmento biliar para diagnosticar ictericia, enfermedades hepáticas o hemólisis.",
    "price": "$6,90",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar consumo de bebidas alcohólicas al menos 48 horas antes.",
      "Informar si consume medicamentos hepatotóxicos o suplementos deportivos."
    ],
    "recommendedFor": "Evaluación de la función hepática, daño hepatocelular, colestasis biliar y esteatosis hepática.",
    "isPopular": false
  },
  {
    "id": "proteinas-totales-y-fraccionadas",
    "name": "Proteínas Totales y Fraccionadas",
    "abbreviation": "PT/Alb/Glob",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Mide albúmina y globulinas para evaluar el estado nutricional y función hepático-renal.",
    "price": "$6,90",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar suplementos minerales no habituales las 24 horas previas."
    ],
    "recommendedFor": "Evaluación bioquímica de proteínas totales y fraccionadas para control clínico y metabólico.",
    "isPopular": false
  },
  {
    "id": "amilasa",
    "name": "Amilasa",
    "abbreviation": "AMI",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Enzima digestiva pancreática; se eleva rápidamente en cuadros de pancreatitis aguda.",
    "price": "$8,05",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas (en casos de dolor abdominal agudo se procesa de emergencia sin ayuno)."
    ],
    "recommendedFor": "Diagnóstico específico de pancreatitis aguda y trastornos pancreatobiliares.",
    "isPopular": false
  },
  {
    "id": "electrolitos-sericos-na-k-cl",
    "name": "Electrolitos Séricos (Na-K-Cl)",
    "abbreviation": "ELE / Na-K-Cl",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Mide los niveles de sodio, potasio y cloro para evaluar el equilibrio de fluidos y ácido-base.",
    "price": "$14,80",
    "sampleType": "Suero sanguíneo libre de hemólisis",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Muestra tomada sin traumatismo venoso para evitar liberación espuria de potasio intracelular."
    ],
    "recommendedFor": "Evaluación del equilibrio hidroelectrolítico y ácido-base, monitoreo renal y uso de diuréticos.",
    "isPopular": true
  },
  {
    "id": "hb-glicosilada",
    "name": "Hb Glicosilada",
    "abbreviation": "HbA1c",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Refleja el promedio del control de glucosa en sangre durante los últimos 2 a 3 meses.",
    "price": "$14,00",
    "sampleType": "Sangre total con EDTA (tubo lila)",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "No requiere ayuno estricto (puede realizarse en cualquier momento del día).",
      "Notificar si presenta hemoglobinopatías o si ha recibido transfusiones recientes."
    ],
    "recommendedFor": "Control glucémico retrospectivo de los últimos 2 a 3 meses en pacientes con diabetes y screening de prediabetes.",
    "isPopular": true
  },
  {
    "id": "ldh-lactato-deshidrogenasa",
    "name": "LDH (Lactato Deshidrogenasa)",
    "abbreviation": "LDH",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Enzima celular liberada ante daño tisular generalizado o hemólisis.",
    "price": "$5,75",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar suplementos minerales no habituales las 24 horas previas."
    ],
    "recommendedFor": "Evaluación bioquímica de ldh (lactato deshidrogenasa) para control clínico y metabólico.",
    "isPopular": false
  },
  {
    "id": "lipasa",
    "name": "Lipasa",
    "abbreviation": "LIP",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Enzima específica del páncreas; alta sensibilidad para detectar pancreatitis.",
    "price": "$13,80",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas (en casos de dolor abdominal agudo se procesa de emergencia sin ayuno)."
    ],
    "recommendedFor": "Diagnóstico específico de pancreatitis aguda y trastornos pancreatobiliares.",
    "isPopular": false
  },
  {
    "id": "ggt-gamma-glutamil-transpeptidasa",
    "name": "GGT (Gamma Glutamil Transpeptidasa)",
    "abbreviation": "GGT",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Enzima hepática sensible al consumo de alcohol y obstrucción de las vías biliares.",
    "price": "$6,33",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar consumo de bebidas alcohólicas al menos 48 horas antes.",
      "Informar si consume medicamentos hepatotóxicos o suplementos deportivos."
    ],
    "recommendedFor": "Evaluación de la función hepática, daño hepatocelular, colestasis biliar y esteatosis hepática.",
    "isPopular": false
  },
  {
    "id": "hierro-serico",
    "name": "Hierro Sérico",
    "abbreviation": "Fe",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Mide la concentración de hierro disponible en el torrente sanguíneo.",
    "price": "$10,35",
    "sampleType": "Suero sanguíneo (toma matutina)",
    "fastingHours": 10,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno de 10 a 12 horas en horas tempranas de la mañana (variación circadiana del hierro).",
      "Suspender suplementos de hierro por vía oral 48 horas previas con aprobación de su médico tratante."
    ],
    "recommendedFor": "Estudio integral de reservas corporales de hierro, anemias ferropénicas y hemocromatosis.",
    "isPopular": false
  },
  {
    "id": "ferritina",
    "name": "Ferritina",
    "abbreviation": "FERR",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Refleja las reservas depósitos totales de hierro almacenados en el organismo.",
    "price": "$12,65",
    "sampleType": "Suero sanguíneo (toma matutina)",
    "fastingHours": 10,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno de 10 a 12 horas en horas tempranas de la mañana (variación circadiana del hierro).",
      "Suspender suplementos de hierro por vía oral 48 horas previas con aprobación de su médico tratante."
    ],
    "recommendedFor": "Estudio integral de reservas corporales de hierro, anemias ferropénicas y hemocromatosis.",
    "isPopular": true
  },
  {
    "id": "transferrina",
    "name": "Transferrina",
    "abbreviation": "TRF",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Proteína encargada del transporte del hierro en la sangre.",
    "price": "$13,80",
    "sampleType": "Suero sanguíneo (toma matutina)",
    "fastingHours": 10,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno de 10 a 12 horas en horas tempranas de la mañana (variación circadiana del hierro).",
      "Suspender suplementos de hierro por vía oral 48 horas previas con aprobación de su médico tratante."
    ],
    "recommendedFor": "Estudio integral de reservas corporales de hierro, anemias ferropénicas y hemocromatosis.",
    "isPopular": false
  },
  {
    "id": "magnesio",
    "name": "Magnesio",
    "abbreviation": "Mg",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Electrolito vital para la función muscular, nerviosa y ritmo cardíaco.",
    "price": "$4,60",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar suplementos minerales no habituales las 24 horas previas."
    ],
    "recommendedFor": "Evaluación bioquímica de magnesio para control clínico y metabólico.",
    "isPopular": false
  },
  {
    "id": "perfil-ferrocinetico",
    "name": "Perfil Ferrocinético",
    "abbreviation": "PFK",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Estudio integral del hierro (Fe, Ferritina, Transferrina, % de Saturación) para caracterizar anemias.",
    "price": "$36,80",
    "sampleType": "Suero sanguíneo (toma matutina)",
    "fastingHours": 10,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno de 10 a 12 horas en horas tempranas de la mañana (variación circadiana del hierro).",
      "Suspender suplementos de hierro por vía oral 48 horas previas con aprobación de su médico tratante."
    ],
    "recommendedFor": "Estudio integral de reservas corporales de hierro, anemias ferropénicas y hemocromatosis.",
    "isPopular": true
  },
  {
    "id": "fosforo",
    "name": "Fósforo",
    "abbreviation": "P",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Mineral clave que trabaja en conjunto con el calcio para la salud ósea y energética.",
    "price": "$5,00",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar suplementos minerales no habituales las 24 horas previas."
    ],
    "recommendedFor": "Evaluación bioquímica de fósforo para control clínico y metabólico.",
    "isPopular": false
  },
  {
    "id": "ck-mb",
    "name": "CK-MB",
    "abbreviation": "CK-MB",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Isoenzima de la creatina quinasa específica del músculo cardíaco; marcadora de daño miocárdico.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo o plasma heparinizado",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (2 a 4 horas / prioritario)",
    "preparationInstructions": [
      "No requiere ayuno en sospecha de síndrome coronario agudo o urgencia cardiológica.",
      "Procesamiento analítico prioritario con reporte inmediato."
    ],
    "recommendedFor": "Biomarcador primordial para el diagnóstico de infarto agudo de miocardio y necrosis miocárdica.",
    "isPopular": false
  },
  {
    "id": "ck-nac",
    "name": "CK-NAC",
    "abbreviation": "CK-TOTAL",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Enzima total de creatina quinasa; detecta lesión o inflamación muscular severa.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Evitar suplementos minerales no habituales las 24 horas previas."
    ],
    "recommendedFor": "Evaluación bioquímica de ck-nac para control clínico y metabólico.",
    "isPopular": false
  },
  {
    "id": "troponina-nt-probnp",
    "name": "Troponina NT-proBNP",
    "abbreviation": "NT-proBNP",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Marcador de sobrecarga ventricular y distensión cardíaca; clave en insuficiencia cardíaca.",
    "price": "$34,50",
    "sampleType": "Suero sanguíneo o plasma heparinizado",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (2 a 4 horas / prioritario)",
    "preparationInstructions": [
      "No requiere ayuno en sospecha de síndrome coronario agudo o urgencia cardiológica.",
      "Procesamiento analítico prioritario con reporte inmediato."
    ],
    "recommendedFor": "Biomarcador primordial para el diagnóstico de infarto agudo de miocardio y necrosis miocárdica.",
    "isPopular": false
  },
  {
    "id": "troponina-i",
    "name": "Troponina I",
    "abbreviation": "cTnI",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Biomarcador específico y sensible para el diagnóstico de infarto agudo de miocardio.",
    "price": "$23,00",
    "sampleType": "Suero sanguíneo o plasma heparinizado",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (2 a 4 horas / prioritario)",
    "preparationInstructions": [
      "No requiere ayuno en sospecha de síndrome coronario agudo o urgencia cardiológica.",
      "Procesamiento analítico prioritario con reporte inmediato."
    ],
    "recommendedFor": "Biomarcador primordial para el diagnóstico de infarto agudo de miocardio y necrosis miocárdica.",
    "isPopular": true
  },
  {
    "id": "colinesterasa",
    "name": "Colinesterasa",
    "abbreviation": "CHE",
    "category": "quimica",
    "categoryLabel": "Química Sanguínea",
    "description": "Enzima que evalúa la función de síntesis hepática y la intoxicación por plaguicidas organofosforados.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Indicar posible exposición laboral o doméstica a insecticidas organofosforados o carbamatos."
    ],
    "recommendedFor": "Vigilancia de salud ocupacional ante intoxicación por plaguicidas y síntesis hepática.",
    "isPopular": false
  },
  {
    "id": "curva-de-tolerancia-a-la-insulina-3-puntos",
    "name": "Curva de Tolerancia a la Insulina (3 Puntos)",
    "abbreviation": "CTI 3P",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Mide la secreción dinámica de insulina en 3 momentos ante estímulo de glucosa.",
    "price": "$34,50",
    "sampleType": "Suero sanguíneo seriado (basal, 60 min y 120 min post-estímulo)",
    "fastingHours": 10,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 10 a 12 horas.",
      "Requiere permanecer en reposo sentado en el laboratorio durante 2 horas.",
      "No fumar ni tomar café en las horas previas."
    ],
    "recommendedFor": "Evaluación de hiperinsulinemia reactiva, resistencia severa a la insulina y síndrome metabólico.",
    "isPopular": false
  },
  {
    "id": "insulina-basal",
    "name": "Insulina Basal",
    "abbreviation": "INS-B",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Mide los niveles de insulina en ayunas para evaluar hiperinsulinismo o resistencia a la insulina.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 10,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno estricto de 10 a 12 horas en la mañana.",
      "Cena previa sin exceso de azúcares ni harinas."
    ],
    "recommendedFor": "Cálculo del índice HOMA-IR y evaluación de la secreción pancreática endocrina.",
    "isPopular": true
  },
  {
    "id": "insulina-post-prandial",
    "name": "Insulina Post-Prandial",
    "abbreviation": "INS-PP",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Mide la liberación de insulina después de comer.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 0,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Toma de muestra a las 2 horas exactas de haber iniciado la ingesta prescrita.",
      "Cena previa sin exceso de azúcares ni harinas."
    ],
    "recommendedFor": "Cálculo del índice HOMA-IR y evaluación de la secreción pancreática endocrina.",
    "isPopular": false
  },
  {
    "id": "insulina-post-carga-glicolab",
    "name": "Insulina Post-Carga Glicolab",
    "abbreviation": "INS-PC",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Mide los niveles de insulina tras una carga estandarizada de glucosa.",
    "price": "$17,25",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 0,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Toma de muestra a las 2 horas exactas de haber iniciado la ingesta prescrita.",
      "Cena previa sin exceso de azúcares ni harinas."
    ],
    "recommendedFor": "Cálculo del índice HOMA-IR y evaluación de la secreción pancreática endocrina.",
    "isPopular": false
  },
  {
    "id": "t4-libre",
    "name": "T4 Libre",
    "abbreviation": "FT4",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Hormona tiroidea libre no unida a proteínas; mide directamente la función tiroidea activa.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas, preferiblemente en horario matutino (7:00 AM - 9:30 AM).",
      "Si toma Levotiroxina (Eutirox), realizar la extracción ANTES de tomar la pastilla matutina.",
      "Suspender suplementos con Biotina (vitamina B7) 48 horas antes para evitar interferencias analíticas."
    ],
    "recommendedFor": "Diagnóstico, monitoreo y titulación terapéutica de trastornos tiroideos (hipotiroidismo e hipertiroidismo).",
    "isPopular": true
  },
  {
    "id": "t3-libre",
    "name": "T3 Libre",
    "abbreviation": "FT3",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Forma metabólicamente activa de la hormona triyodotironina.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas, preferiblemente en horario matutino (7:00 AM - 9:30 AM).",
      "Si toma Levotiroxina (Eutirox), realizar la extracción ANTES de tomar la pastilla matutina.",
      "Suspender suplementos con Biotina (vitamina B7) 48 horas antes para evitar interferencias analíticas."
    ],
    "recommendedFor": "Diagnóstico, monitoreo y titulación terapéutica de trastornos tiroideos (hipotiroidismo e hipertiroidismo).",
    "isPopular": false
  },
  {
    "id": "tsh",
    "name": "TSH",
    "abbreviation": "TSH",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Hormona estimulante de la tiroides; prueba principal para evaluar hipo o hipertiroidismo.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas, preferiblemente en horario matutino (7:00 AM - 9:30 AM).",
      "Si toma Levotiroxina (Eutirox), realizar la extracción ANTES de tomar la pastilla matutina.",
      "Suspender suplementos con Biotina (vitamina B7) 48 horas antes para evitar interferencias analíticas."
    ],
    "recommendedFor": "Diagnóstico, monitoreo y titulación terapéutica de trastornos tiroideos (hipotiroidismo e hipertiroidismo).",
    "isPopular": true
  },
  {
    "id": "t3-total",
    "name": "T3 Total",
    "abbreviation": "T3",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Medición total de la hormona triyodotironina (unida y libre).",
    "price": "$13,80",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas, preferiblemente en horario matutino (7:00 AM - 9:30 AM).",
      "Si toma Levotiroxina (Eutirox), realizar la extracción ANTES de tomar la pastilla matutina.",
      "Suspender suplementos con Biotina (vitamina B7) 48 horas antes para evitar interferencias analíticas."
    ],
    "recommendedFor": "Diagnóstico, monitoreo y titulación terapéutica de trastornos tiroideos (hipotiroidismo e hipertiroidismo).",
    "isPopular": false
  },
  {
    "id": "t4-total",
    "name": "T4 Total",
    "abbreviation": "T4",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Medición total de la hormona tiroxina en sangre.",
    "price": "$13,80",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas, preferiblemente en horario matutino (7:00 AM - 9:30 AM).",
      "Si toma Levotiroxina (Eutirox), realizar la extracción ANTES de tomar la pastilla matutina.",
      "Suspender suplementos con Biotina (vitamina B7) 48 horas antes para evitar interferencias analíticas."
    ],
    "recommendedFor": "Diagnóstico, monitoreo y titulación terapéutica de trastornos tiroideos (hipotiroidismo e hipertiroidismo).",
    "isPopular": false
  },
  {
    "id": "fsh",
    "name": "FSH",
    "abbreviation": "FSH",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Hormona folículo estimulante; evalúa función ovárica/testicular y fertilidad.",
    "price": "$13,80",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "En mujeres, coordinar el día de la toma con su ginecólogo según la fase del ciclo menstrual (ej. día 3-5 para FSH/LH, día 21 para Progesterona).",
      "Indicar si utiliza anticonceptivos hormonales o terapia de reemplazo."
    ],
    "recommendedFor": "Evaluación de fertilidad, función ovárica, reserva folicular, perimenopausia y alteraciones del ciclo.",
    "isPopular": false
  },
  {
    "id": "cortisol-8am-4pm",
    "name": "Cortisol 8AM / 4PM",
    "abbreviation": "CORT",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Mide los niveles de la hormona del estrés en horas clave para evaluar ritmo circadiano y glándula suprarrenal.",
    "price": "$14,95",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Para Cortisol 8 AM: toma rigurosa a las 8:00 AM tras una noche de descanso reparador.",
      "Para Cortisol 4 PM: acudir puntualmente a las 4:00 PM.",
      "Evitar situaciones de estrés, ejercicio o cafeína 2 horas previas a la extracción."
    ],
    "recommendedFor": "Evaluación de la función suprarrenal, ritmo circadiano, síndrome de Cushing e hipocortisolismo.",
    "isPopular": false
  },
  {
    "id": "progesterona",
    "name": "Progesterona",
    "abbreviation": "PROG",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Hormona sexual clave para la preparación endometrial y seguimiento del ciclo menstrual/embarazo.",
    "price": "$14,95",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "En mujeres, coordinar el día de la toma con su ginecólogo según la fase del ciclo menstrual (ej. día 3-5 para FSH/LH, día 21 para Progesterona).",
      "Indicar si utiliza anticonceptivos hormonales o terapia de reemplazo."
    ],
    "recommendedFor": "Evaluación de fertilidad, función ovárica, reserva folicular, perimenopausia y alteraciones del ciclo.",
    "isPopular": false
  },
  {
    "id": "prolactina",
    "name": "Prolactina",
    "abbreviation": "PRL",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Hormona que estimula la producción de leche; su aumento altera la fertilidad y ciclo menstrual.",
    "price": "$14,95",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Estar despierto y levantado al menos 2 horas antes de la toma de muestra.",
      "Permanecer en reposo sentado 20 a 30 minutos en el laboratorio antes de la venopunción.",
      "Abstenerse de relaciones sexuales y manipulación mamaria la noche anterior."
    ],
    "recommendedFor": "Estudio de galactorrea, amenorrea, infertilidad femenina/masculina y adenomas hipofisarios.",
    "isPopular": false
  },
  {
    "id": "pool-de-prolactina",
    "name": "Pool de Prolactina",
    "abbreviation": "Pool-PRL",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Medición seriada en varias tomas de sangre para descartar elevaciones falsas por estrés de punción.",
    "price": "$44,85",
    "sampleType": "Suero sanguíneo seriado en 3 tomas con catéter venoso periférico",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Se coloca un catéter venoso periférico con solución salina para evitar el dolor de punciones repetidas.",
      "Reposo de 30 minutos en camilla en ambiente tranquilo durante la toma de las 3 muestras."
    ],
    "recommendedFor": "Diferenciación entre hiperprolactinemia verdadera patológica y elevación transitoria por estrés de punción.",
    "isPopular": false
  },
  {
    "id": "lh",
    "name": "LH",
    "abbreviation": "LH",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Hormona luteinizante; desencadena la ovulación y estimula la producción de testosterona.",
    "price": "$14,95",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "En mujeres, coordinar el día de la toma con su ginecólogo según la fase del ciclo menstrual (ej. día 3-5 para FSH/LH, día 21 para Progesterona).",
      "Indicar si utiliza anticonceptivos hormonales o terapia de reemplazo."
    ],
    "recommendedFor": "Evaluación de fertilidad, función ovárica, reserva folicular, perimenopausia y alteraciones del ciclo.",
    "isPopular": false
  },
  {
    "id": "estradiol",
    "name": "Estradiol",
    "abbreviation": "E2",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Principal hormona estrogénica; evalúa la función ovárica y el desarrollo folicular.",
    "price": "$14,95",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "En mujeres, coordinar el día de la toma con su ginecólogo según la fase del ciclo menstrual (ej. día 3-5 para FSH/LH, día 21 para Progesterona).",
      "Indicar si utiliza anticonceptivos hormonales o terapia de reemplazo."
    ],
    "recommendedFor": "Evaluación de fertilidad, función ovárica, reserva folicular, perimenopausia y alteraciones del ciclo.",
    "isPopular": false
  },
  {
    "id": "testosterona-total",
    "name": "Testosterona Total",
    "abbreviation": "TESTO",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Mide el nivel total de la principal hormona androgénica masculina.",
    "price": "$15,00",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Extracción estrictamente entre 7:00 AM y 9:00 AM para capturar la concentración máxima diurna.",
      "Evitar actividad física extenuante el día anterior."
    ],
    "recommendedFor": "Diagnóstico de hipogonadismo masculino, disfunción eréctil, hirsutismo y trastornos androgénicos.",
    "isPopular": false
  },
  {
    "id": "anti-ccp",
    "name": "Anti-CCP",
    "abbreviation": "Anti-CCP",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Anticuerpos contra péptidos citrulinados; altamente específico para artritis reumatoide.",
    "price": "$18,40",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 a 48 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Indicar si recibe medicación biológica o inmunosupresora."
    ],
    "recommendedFor": "Detección precoz y altamente específica de artritis reumatoide y pronóstico articular erosivo.",
    "isPopular": false
  },
  {
    "id": "anti-tpo",
    "name": "Anti-TPO",
    "abbreviation": "aTPO",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Anticuerpos contra peroxidasa tiroidea; diagnostica tiroiditis autoinmune (Hashimoto).",
    "price": "$16,10",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas, preferiblemente en horario matutino (7:00 AM - 9:30 AM).",
      "Si toma Levotiroxina (Eutirox), realizar la extracción ANTES de tomar la pastilla matutina.",
      "Suspender suplementos con Biotina (vitamina B7) 48 horas antes para evitar interferencias analíticas."
    ],
    "recommendedFor": "Diagnóstico, monitoreo y titulación terapéutica de trastornos tiroideos (hipotiroidismo e hipertiroidismo).",
    "isPopular": false
  },
  {
    "id": "anti-tg",
    "name": "Anti-TG",
    "abbreviation": "aTG",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Anticuerpos contra tiroglobulina; marcador de autoinmunidad tiroidea.",
    "price": "$16,10",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas, preferiblemente en horario matutino (7:00 AM - 9:30 AM).",
      "Si toma Levotiroxina (Eutirox), realizar la extracción ANTES de tomar la pastilla matutina.",
      "Suspender suplementos con Biotina (vitamina B7) 48 horas antes para evitar interferencias analíticas."
    ],
    "recommendedFor": "Diagnóstico, monitoreo y titulación terapéutica de trastornos tiroideos (hipotiroidismo e hipertiroidismo).",
    "isPopular": false
  },
  {
    "id": "ca-125",
    "name": "CA-125",
    "abbreviation": "CA-125",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Marcador tumoral utilizado principalmente en el seguimiento del cáncer de ovario.",
    "price": "$14,95",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 a 48 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Indicar al personal antecedentes clínicos relevantes o consumo de tabaco."
    ],
    "recommendedFor": "Monitoreo terapéutico y vigilancia de recidivas para marcadores asociados a CA-125.",
    "isPopular": false
  },
  {
    "id": "cea",
    "name": "CEA",
    "abbreviation": "CEA",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Antígeno carcinoembrionario; marcador tumoral gastrointestinal y colorrectal.",
    "price": "$14,95",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 a 48 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Indicar al personal antecedentes clínicos relevantes o consumo de tabaco."
    ],
    "recommendedFor": "Monitoreo terapéutico y vigilancia de recidivas para marcadores asociados a CEA.",
    "isPopular": false
  },
  {
    "id": "ca-15-3",
    "name": "CA 15-3",
    "abbreviation": "CA 15-3",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Marcador tumoral orientado al seguimiento del cáncer de mama.",
    "price": "$14,95",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas en horas de la mañana."
    ],
    "recommendedFor": "Evaluación endocrinológica especializada de CA 15-3.",
    "isPopular": false
  },
  {
    "id": "ca-19-9",
    "name": "CA 19-9",
    "abbreviation": "CA 19-9",
    "category": "hormonas",
    "categoryLabel": "Hormonas",
    "description": "Marcador tumoral utilizado principalmente en neoplasias pancreáticas y biliares.",
    "price": "$14,95",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas en horas de la mañana."
    ],
    "recommendedFor": "Evaluación endocrinológica especializada de CA 19-9.",
    "isPopular": false
  },
  {
    "id": "sangre-oculta-igg-igm",
    "name": "Sangre Oculta IgG/IgM",
    "abbreviation": "SOH",
    "category": "heces",
    "categoryLabel": "Heces",
    "description": "Detecta trazas de sangre no visibles en heces para despistaje de sangrado digestivo.",
    "price": "$5,75",
    "sampleType": "Muestra de heces fresca recolectada en recipiente estéril hermético",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (4 horas)",
    "preparationInstructions": [
      "Método inmunocromatográfico de alta especificidad: no requiere restricciones dietéticas de carnes rojas.",
      "No recolectar durante el periodo menstrual ni en presencia de sangrado hemorroidal activo.",
      "No emplear laxantes ni supositorios antes de la recolección."
    ],
    "recommendedFor": "Despistaje preventivo anual de pólipos intestinales, cáncer colorrectal y sangrados digestivos ocultos.",
    "isPopular": true
  },
  {
    "id": "helicobacter-pylori-en-heces",
    "name": "Helicobacter Pylori en Heces",
    "abbreviation": "HP-Heces",
    "category": "heces",
    "categoryLabel": "Heces",
    "description": "Detección de antígenos fecales de la bacteria causante de gastritis y úlceras.",
    "price": "$5,75",
    "sampleType": "Muestra de heces fresca recolectada en recipiente estéril hermético",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (4 horas)",
    "preparationInstructions": [
      "No haber tomado antibióticos ni protectores gástricos (Omeprazol, Lansoprazol) durante 14 días previos.",
      "Recolectar muestra fecal reciente sin contacto con orina."
    ],
    "recommendedFor": "Diagnóstico directo no invasivo de infección gástrica activa por Helicobacter pylori y confirmación de erradicación.",
    "isPopular": false
  },
  {
    "id": "examen-general-de-heces",
    "name": "Examen General de Heces",
    "abbreviation": "EGH / Copro",
    "category": "heces",
    "categoryLabel": "Heces",
    "description": "Análisis macroscópico y microscópico para detectar parásitos, digestión y flora fecal.",
    "price": "$4,00",
    "sampleType": "Muestra de heces fresca recolectada en recipiente estéril hermético",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (4 horas)",
    "preparationInstructions": [
      "Recolectar una muestra del tamaño de una nuez en frasco plástico estéril limpio.",
      "Entregar al laboratorio en un tiempo máximo de 2 horas tras la deposición.",
      "No mezclar con orina ni agua del inodoro."
    ],
    "recommendedFor": "Evaluación parasitológica, digestibilidad alimentaria, pH y características microscópicas de las heces.",
    "isPopular": true
  },
  {
    "id": "leucograma-fecal",
    "name": "Leucograma Fecal",
    "abbreviation": "LF",
    "category": "heces",
    "categoryLabel": "Heces",
    "description": "Identificación de glóbulos blancos en heces para diferenciar diarrea infecciosa/inflamatoria.",
    "price": "$5,75",
    "sampleType": "Muestra de heces fresca recolectada en recipiente estéril hermético",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (4 horas)",
    "preparationInstructions": [
      "Entregar en el laboratorio dentro de la primera hora posterior a la evacuación.",
      "Seleccionar porciones con moco fecal si se aprecian a simple vista."
    ],
    "recommendedFor": "Diferenciación entre gastroenteritis invasiva bacteriana y procesos diarreicos virales o funcionales.",
    "isPopular": false
  },
  {
    "id": "psa-total",
    "name": "PSA Total",
    "abbreviation": "PSA-T",
    "category": "marcadores",
    "categoryLabel": "Marcadores Tumorales",
    "description": "Antígeno prostático específico total; despistaje y control de afecciones prostáticas.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Abstinencia sexual y eyaculatoria de 48 a 72 horas previas a la prueba.",
      "No montar bicicleta, motocicleta ni montar a caballo durante las 48 horas anteriores.",
      "Esperar al menos 7 días tras tacto rectal, biopsia prostática o sondaje urológico."
    ],
    "recommendedFor": "Despistaje oportuno y seguimiento de hiperplasia prostática benigna y cáncer de próstata en varones mayores de 40 años.",
    "isPopular": true
  },
  {
    "id": "psa-libre",
    "name": "PSA Libre",
    "abbreviation": "PSA-L",
    "category": "marcadores",
    "categoryLabel": "Marcadores Tumorales",
    "description": "Fracción libre del PSA; su relación con el PSA Total ayuda a diferenciar hiperplasia benigna de cáncer.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Abstinencia sexual y eyaculatoria de 48 a 72 horas previas a la prueba.",
      "No montar bicicleta, motocicleta ni montar a caballo durante las 48 horas anteriores.",
      "Esperar al menos 7 días tras tacto rectal, biopsia prostática o sondaje urológico."
    ],
    "recommendedFor": "Despistaje oportuno y seguimiento de hiperplasia prostática benigna y cáncer de próstata en varones mayores de 40 años.",
    "isPopular": false
  },
  {
    "id": "cea-marcadores",
    "name": "CEA",
    "abbreviation": "CEA",
    "category": "marcadores",
    "categoryLabel": "Marcadores Tumorales",
    "description": "Antígeno carcinoembrionario para monitoreo de neoplasias digestivas y otros carcinomas.",
    "price": "$14,95",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 a 48 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Indicar antecedentes oncológicos o hábito de fumar."
    ],
    "recommendedFor": "Seguimiento y control evolutivo de respuesta al tratamiento en neoplasias epiteliales.",
    "isPopular": false
  },
  {
    "id": "alfa-fetoproteinas",
    "name": "Alfa-Fetoproteínas",
    "abbreviation": "AFP",
    "category": "marcadores",
    "categoryLabel": "Marcadores Tumorales",
    "description": "Marcador tumoral para cáncer hepático primario y tumores de células germinales.",
    "price": "$14,95",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 a 48 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Informar en caso de embarazo para correlación cronológica."
    ],
    "recommendedFor": "Marcador tumoral para hepatocarcinoma celular primario y tumores de células germinales.",
    "isPopular": false
  },
  {
    "id": "hepatitis-c",
    "name": "Hepatitis C",
    "abbreviation": "VHC / Anti-HCV",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Detección de anticuerpos contra el virus de la hepatitis C.",
    "price": "$6,90",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si se encuentra en periodo de gestación o posee esquemas de vacunación recientes."
    ],
    "recommendedFor": "Detección y seguimiento serológico de anticuerpos para Hepatitis C en control preventivo o gestacional.",
    "isPopular": false
  },
  {
    "id": "antigeno-de-superficie-hepatitis-b",
    "name": "Antígeno de Superficie Hepatitis B",
    "abbreviation": "HBsAg",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Marcador serológico principal de infección activa por el virus de la hepatitis B.",
    "price": "$6,90",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si se encuentra en periodo de gestación o posee esquemas de vacunación recientes."
    ],
    "recommendedFor": "Detección y seguimiento serológico de anticuerpos para Antígeno de Superficie Hepatitis B en control preventivo o gestacional.",
    "isPopular": false
  },
  {
    "id": "hepatitis-b-anticore",
    "name": "Hepatitis B Anticore",
    "abbreviation": "Anti-HBc",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Anticuerpos contra el núcleo del virus B; indica contacto previo o infección en curso.",
    "price": "$6,90",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si se encuentra en periodo de gestación o posee esquemas de vacunación recientes."
    ],
    "recommendedFor": "Detección y seguimiento serológico de anticuerpos para Hepatitis B Anticore en control preventivo o gestacional.",
    "isPopular": false
  },
  {
    "id": "hepatitis-a",
    "name": "Hepatitis A",
    "abbreviation": "VHA / Anti-HAV",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Detección de anticuerpos contra la hepatitis A.",
    "price": "$6,90",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si se encuentra en periodo de gestación o posee esquemas de vacunación recientes."
    ],
    "recommendedFor": "Detección y seguimiento serológico de anticuerpos para Hepatitis A en control preventivo o gestacional.",
    "isPopular": false
  },
  {
    "id": "covid-19-igg-e-igm-cualitativo",
    "name": "COVID-19 IgG e IgM Cualitativo",
    "abbreviation": "COVID IgG/IgM",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Detecta la respuesta inmune rápida e histórica frente al SARS-CoV-2 en sangre.",
    "price": "$23,00",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (2 a 4 horas)",
    "preparationInstructions": [
      "Ayuno ligero de 2 horas.",
      "Uso de mascarilla al acudir a la toma de muestra si presenta síntomas respiratorios."
    ],
    "recommendedFor": "Detección rápida de antígeno viral o anticuerpos para diagnóstico oportuno de infección por SARS-CoV-2.",
    "isPopular": false
  },
  {
    "id": "deteccion-de-ag-para-sars-cov-2",
    "name": "Detección de Ag para SARS-CoV-2",
    "abbreviation": "Ag COVID-19",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Prueba rápida de antígeno para diagnóstico activo de COVID-19.",
    "price": "$23,00",
    "sampleType": "Hisopado nasofaríngeo",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (2 a 4 horas)",
    "preparationInstructions": [
      "No aplicar sprays, gotas ni pomadas nasales 4 horas antes del hisopado.",
      "Uso de mascarilla al acudir a la toma de muestra si presenta síntomas respiratorios."
    ],
    "recommendedFor": "Detección rápida de antígeno viral o anticuerpos para diagnóstico oportuno de infección por SARS-CoV-2.",
    "isPopular": false
  },
  {
    "id": "hiv-4ta-generacion",
    "name": "HIV 4ta Generación",
    "abbreviation": "VIH 4G",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Prueba de alta sensibilidad que detecta anticuerpos e inmunógeno p24 simultáneamente.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno ligero de 4 horas.",
      "Muestra procesada bajo rigurosos protocolos de confidencialidad y ética médica."
    ],
    "recommendedFor": "Descarte y detección oportuna de anticuerpos y antígeno p24 para VIH en preoperatorios y chequeos preventivos.",
    "isPopular": true
  },
  {
    "id": "prueba-treponemica",
    "name": "Prueba Treponémica",
    "abbreviation": "FTA-ABS / TPHA",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Confirma la presencia de anticuerpos específicos contra Treponema pallidum (Sífilis).",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno ligero de 4 horas.",
      "Indicar tratamientos previos con antibióticos o diagnósticos sifilíticos pasados."
    ],
    "recommendedFor": "Despistaje serológico y confirmación diagnóstica de sífilis en control prenatal, prenupcial y chequeo general.",
    "isPopular": false
  },
  {
    "id": "toxoplasmosis-igg",
    "name": "Toxoplasmosis IgG",
    "abbreviation": "Toxo IgG",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Mide anticuerpos crónicos o inmunidad pasada contra Toxoplasma gondii.",
    "price": "$8,05",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si se encuentra en periodo de gestación o posee esquemas de vacunación recientes."
    ],
    "recommendedFor": "Detección y seguimiento serológico de anticuerpos para Toxoplasmosis IgG en control preventivo o gestacional.",
    "isPopular": false
  },
  {
    "id": "toxoplasmosis-igm",
    "name": "Toxoplasmosis IgM",
    "abbreviation": "Toxo IgM",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Indica infección reciente o activa por Toxoplasma gondii.",
    "price": "$8,05",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (6 a 12 horas)",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si se encuentra en periodo de gestación o posee esquemas de vacunación recientes."
    ],
    "recommendedFor": "Detección y seguimiento serológico de anticuerpos para Toxoplasmosis IgM en control preventivo o gestacional.",
    "isPopular": false
  },
  {
    "id": "virus-epstein-barr-igg",
    "name": "Virus Epstein Barr IgG",
    "abbreviation": "VEB IgG",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Anticuerpos tardíos que confirman exposición previa al virus de la mononucleosis.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si se encuentra en periodo de gestación o posee esquemas de vacunación recientes."
    ],
    "recommendedFor": "Detección y seguimiento serológico de anticuerpos para Virus Epstein Barr IgG en control preventivo o gestacional.",
    "isPopular": false
  },
  {
    "id": "virus-epstein-barr-igm",
    "name": "Virus Epstein Barr IgM",
    "abbreviation": "VEB IgM",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Indica fase aguda o reciente de mononucleosis infecciosa.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si se encuentra en periodo de gestación o posee esquemas de vacunación recientes."
    ],
    "recommendedFor": "Detección y seguimiento serológico de anticuerpos para Virus Epstein Barr IgM en control preventivo o gestacional.",
    "isPopular": false
  },
  {
    "id": "citomegalovirus-igg",
    "name": "Citomegalovirus IgG",
    "abbreviation": "CMV IgG",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Evalúa inmunidad adquirida frente al citomegalovirus.",
    "price": "$8,05",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si se encuentra en periodo de gestación o posee esquemas de vacunación recientes."
    ],
    "recommendedFor": "Detección y seguimiento serológico de anticuerpos para Citomegalovirus IgG en control preventivo o gestacional.",
    "isPopular": false
  },
  {
    "id": "citomegalovirus-igm",
    "name": "Citomegalovirus IgM",
    "abbreviation": "CMV IgM",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Marcador de primoinfección o reactivación reciente de CMV.",
    "price": "$8,05",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si se encuentra en periodo de gestación o posee esquemas de vacunación recientes."
    ],
    "recommendedFor": "Detección y seguimiento serológico de anticuerpos para Citomegalovirus IgM en control preventivo o gestacional.",
    "isPopular": false
  },
  {
    "id": "hiv",
    "name": "HIV",
    "abbreviation": "VIH",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Prueba serológica estándar de despistaje para el virus de inmunodeficiencia humana.",
    "price": "$4,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno ligero de 4 horas.",
      "Muestra procesada bajo rigurosos protocolos de confidencialidad y ética médica."
    ],
    "recommendedFor": "Descarte y detección oportuna de anticuerpos y antígeno p24 para VIH en preoperatorios y chequeos preventivos.",
    "isPopular": false
  },
  {
    "id": "creatinina-de-fondo-de-saco",
    "name": "Creatinina de Fondo de Saco",
    "abbreviation": "Cre-FS",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Medición de creatinina en líquido peritoneal/fondo de saco.",
    "price": "$6,67",
    "sampleType": "Líquido biológico aspirado de fondo de saco (peritoneal o ginecológico)",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Muestra obtenida por médico especialista en área quirúrgica o ginecológica.",
      "Transportar de inmediato en tubo estéril al laboratorio."
    ],
    "recommendedFor": "Descarte de fístula urinaria o lesión de vías urinarias en cirugía ginecológica y pélvica.",
    "isPopular": false
  },
  {
    "id": "serologia-para-dengue-igg-igm",
    "name": "Serología para Dengue IgG/IgM",
    "abbreviation": "Dengue IgG/IgM",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Detección de anticuerpos contra el virus del dengue para evaluar respuesta inmune.",
    "price": "$9,20",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 2,
    "turnaroundTime": "Mismo día (3 a 4 horas)",
    "preparationInstructions": [
      "Ayuno ligero de 2 horas.",
      "Indicar el número exacto de días transcurridos desde el inicio de la fiebre (NS1 ideal en días 1-5, IgM/IgG tras día 5)."
    ],
    "recommendedFor": "Diagnóstico etiológico rápido de dengue y diferenciación entre infección aguda reciente o exposición pasada.",
    "isPopular": false
  },
  {
    "id": "dengue-ns1-ag",
    "name": "Dengue NS1 Ag",
    "abbreviation": "NS1 Dengue",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Detección directa del antígeno viral en los primeros días de fiebre por dengue.",
    "price": "$13,80",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 2,
    "turnaroundTime": "Mismo día (3 a 4 horas)",
    "preparationInstructions": [
      "Ayuno ligero de 2 horas.",
      "Indicar el número exacto de días transcurridos desde el inicio de la fiebre (NS1 ideal en días 1-5, IgM/IgG tras día 5)."
    ],
    "recommendedFor": "Diagnóstico etiológico rápido de dengue y diferenciación entre infección aguda reciente o exposición pasada.",
    "isPopular": false
  },
  {
    "id": "chagas",
    "name": "Chagas",
    "abbreviation": "Anti-Chagas",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Prueba serológica para descartar la enfermedad de Chagas (Trypanosoma cruzi).",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 4 horas.",
      "Indicar si se encuentra en periodo de gestación o posee esquemas de vacunación recientes."
    ],
    "recommendedFor": "Detección y seguimiento serológico de anticuerpos para Chagas en control preventivo o gestacional.",
    "isPopular": false
  },
  {
    "id": "vdrl",
    "name": "VDRL",
    "abbreviation": "VDRL",
    "category": "serologia",
    "categoryLabel": "Serología",
    "description": "Prueba no treponémica para el despistaje serológico de sífilis.",
    "price": "$3,90",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 4,
    "turnaroundTime": "Mismo día (3 a 4 horas)",
    "preparationInstructions": [
      "Ayuno ligero de 4 horas.",
      "Indicar tratamientos previos con antibióticos o diagnósticos sifilíticos pasados."
    ],
    "recommendedFor": "Despistaje serológico y confirmación diagnóstica de sífilis en control prenatal, prenupcial y chequeo general.",
    "isPopular": true
  },
  {
    "id": "helicobacter-pylori-igg-igm",
    "name": "Helicobacter Pylori IgG/IgM",
    "abbreviation": "HP IgG/IgM",
    "category": "inmunologia",
    "categoryLabel": "Inmunología",
    "description": "Detecta la presencia de anticuerpos en sangre contra Helicobacter pylori.",
    "price": "$10,93",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 6,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 6 a 8 horas."
    ],
    "recommendedFor": "Determinación inmunoanalítica especializada para Helicobacter Pylori IgG/IgM.",
    "isPopular": false
  },
  {
    "id": "proteina-c-reactiva-cualitativa",
    "name": "Proteína C Reactiva Cualitativa",
    "abbreviation": "PCR Cual",
    "category": "inmunologia",
    "categoryLabel": "Inmunología",
    "description": "Reactante de fase aguda para determinar la presencia/ausencia de inflamación.",
    "price": "$5,75",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 6,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 6 a 8 horas."
    ],
    "recommendedFor": "Determinación inmunoanalítica especializada para Proteína C Reactiva Cualitativa.",
    "isPopular": false
  },
  {
    "id": "pcr-ultrasensible",
    "name": "PCR Ultrasensible",
    "abbreviation": "PCR-us",
    "category": "inmunologia",
    "categoryLabel": "Inmunología",
    "description": "Medición de PCR a muy bajas concentraciones para evaluación de riesgo cardiovascular.",
    "price": "$14,95",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "No realizar la prueba si cursa con gripe, infección dental o traumatismo reciente (elevan la PCR inespecíficamente)."
    ],
    "recommendedFor": "Estratificación de riesgo cardiovascular subclínico y aterosclerosis en conjunto con el perfil lipídico.",
    "isPopular": true
  },
  {
    "id": "pcr-cuantitativa",
    "name": "PCR Cuantitativa",
    "abbreviation": "PCR Cuant",
    "category": "inmunologia",
    "categoryLabel": "Inmunología",
    "description": "Cuantifica el nivel exacto de inflamación sistémica o infección bacteriana.",
    "price": "$13,80",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 6,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 6 a 8 horas."
    ],
    "recommendedFor": "Determinación inmunoanalítica especializada para PCR Cuantitativa.",
    "isPopular": false
  },
  {
    "id": "procalcitonina",
    "name": "Procalcitonina",
    "abbreviation": "PCT",
    "category": "inmunologia",
    "categoryLabel": "Inmunología",
    "description": "Biomarcador específico de infecciones bacterianas graves y sepsis.",
    "price": "$25,30",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (3 a 4 horas / prioritario)",
    "preparationInstructions": [
      "No requiere ayuno estricto en situaciones de sospecha de sepsis o infección invasiva.",
      "Procesamiento prioritario."
    ],
    "recommendedFor": "Diferenciación entre infecciones bacterianas graves y virales; monitoreo de respuesta a antibióticos.",
    "isPopular": false
  },
  {
    "id": "factor-reumatoideo",
    "name": "Factor Reumatoideo",
    "abbreviation": "FR / RA Test",
    "category": "inmunologia",
    "categoryLabel": "Inmunología",
    "description": "Anticuerpo autoautoinmune utilizado en el diagnóstico de artritis reumatoide.",
    "price": "$6,90",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 6,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "Ayuno de 6 a 8 horas."
    ],
    "recommendedFor": "Determinación inmunoanalítica especializada para Factor Reumatoideo.",
    "isPopular": false
  },
  {
    "id": "bhcg-cualitativa",
    "name": "BHCG Cualitativa",
    "abbreviation": "hCG Cual",
    "category": "inmunologia",
    "categoryLabel": "Inmunología",
    "description": "Prueba rápida en sangre para confirmación de embarazo (Positivo/Negativo).",
    "price": "$6,50",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (2 horas)",
    "preparationInstructions": [
      "No requiere ayuno estricto (puede realizarse a cualquier hora del día).",
      "Indicar la fecha de la última menstruación (FUM) o semanas estimadas de amenorrea."
    ],
    "recommendedFor": "Confirmación precoz y cuantificación exacta del embarazo, sospecha de gestación ectópica o monitoreo gestacional.",
    "isPopular": true
  },
  {
    "id": "bhcg-cuantitativa",
    "name": "BHCG Cuantitativa",
    "abbreviation": "hCG Cuant",
    "category": "inmunologia",
    "categoryLabel": "Inmunología",
    "description": "Cuantifica los niveles exactos de la hormona del embarazo para evaluar progresión.",
    "price": "$17,25",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (4 a 6 horas)",
    "preparationInstructions": [
      "No requiere ayuno estricto (puede realizarse a cualquier hora del día).",
      "Indicar la fecha de la última menstruación (FUM) o semanas estimadas de amenorrea."
    ],
    "recommendedFor": "Confirmación precoz y cuantificación exacta del embarazo, sospecha de gestación ectópica o monitoreo gestacional.",
    "isPopular": true
  },
  {
    "id": "il-6-interleuquina",
    "name": "IL-6 Interleuquina",
    "abbreviation": "IL-6",
    "category": "inmunologia",
    "categoryLabel": "Inmunología",
    "description": "Citocina proinflamatoria; evalúa respuesta inmune severa en procesos infecciosos.",
    "price": "$13,80",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Notificar cuadros alérgicos agudos o tratamientos con antihistamínicos."
    ],
    "recommendedFor": "Evaluación de respuesta hiperinflamatoria o estados de hipersensibilidad alérgica y atopia.",
    "isPopular": false
  },
  {
    "id": "ige",
    "name": "IgE",
    "abbreviation": "IgE Total",
    "category": "inmunologia",
    "categoryLabel": "Inmunología",
    "description": "Inmunoglobulina asociada a respuestas alérgicas e infecciones parasitarias.",
    "price": "$17,25",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Notificar cuadros alérgicos agudos o tratamientos con antihistamínicos."
    ],
    "recommendedFor": "Evaluación de respuesta hiperinflamatoria o estados de hipersensibilidad alérgica y atopia.",
    "isPopular": false
  },
  {
    "id": "ana-anticuerpos-antinucleares",
    "name": "ANA (Anticuerpos Antinucleares)",
    "abbreviation": "ANA / AAN",
    "category": "inmunologia",
    "categoryLabel": "Inmunología",
    "description": "Prueba fundamental de screening para enfermedades autoinmunes como el Lupus.",
    "price": "$23,00",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 a 48 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "Informar tratamientos con corticosteroides, inmunomoduladores o fármacos biológicos."
    ],
    "recommendedFor": "Tamizaje de máxima relevancia diagnóstica para enfermedades del tejido conectivo y lupus eritematoso sistémico.",
    "isPopular": true
  },
  {
    "id": "examen-general-de-orina",
    "name": "Examen General de Orina",
    "abbreviation": "EGO",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Evaluación físico-química y microscópica para detectar infecciones y patologías renales.",
    "price": "$4,00",
    "sampleType": "Primera orina de la mañana (chorro medio) en recipiente estéril",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (3 a 4 horas)",
    "preparationInstructions": [
      "Realizar aseo genital exhaustivo con agua y jabón neutro, secar con toalla limpia.",
      "Descartar el primer chorro inicial en el inodoro y recolectar el chorro medio directamente en el frasco estéril.",
      "Cerrar herméticamente y entregar en el laboratorio antes de transcurridas 2 horas."
    ],
    "recommendedFor": "Diagnóstico de infecciones del tracto urinario, hematuria, proteinuria y evaluación renal general.",
    "isPopular": true
  },
  {
    "id": "depuracion-de-creatinina",
    "name": "Depuración de Creatinina",
    "abbreviation": "Clearance Cre",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Compara la creatinina en orina de 24 horas y sangre para calcular la tasa de filtración glomerular.",
    "price": "$9,20",
    "sampleType": "Orina de 24 horas + Muestra de sangre matutina en ayunas",
    "fastingHours": 8,
    "turnaroundTime": "24 horas tras entrega del botellón",
    "preparationInstructions": [
      "Al despertar en la mañana (ej. 7:00 AM), orinar en el inodoro y descartar esa primera micción.",
      "A partir de ese momento, recolectar absolutamente TODA la orina emitida durante el día y la noche en el botellón.",
      "A la mañana siguiente (7:00 AM), orinar por última vez dentro del botellón completando las 24 horas exactas.",
      "Mantener el contenedor cerrado en un lugar fresco o refrigerado hasta su entrega en el laboratorio."
    ],
    "recommendedFor": "Cuantificación exacta de excreción renal diaria y cálculo de depuración glomerular.",
    "isPopular": false
  },
  {
    "id": "creatinina-en-orina-de-24-horas",
    "name": "Creatinina en Orina de 24 Horas",
    "abbreviation": "Cre-24h",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Cuantificación de la eliminación de creatinina en recolección de un día entero.",
    "price": "$4,60",
    "sampleType": "Orina completa de 24 horas recolectada en botellón limpio",
    "fastingHours": 0,
    "turnaroundTime": "24 horas tras entrega del botellón",
    "preparationInstructions": [
      "Al despertar en la mañana (ej. 7:00 AM), orinar en el inodoro y descartar esa primera micción.",
      "A partir de ese momento, recolectar absolutamente TODA la orina emitida durante el día y la noche en el botellón.",
      "A la mañana siguiente (7:00 AM), orinar por última vez dentro del botellón completando las 24 horas exactas.",
      "Mantener el contenedor cerrado en un lugar fresco o refrigerado hasta su entrega en el laboratorio."
    ],
    "recommendedFor": "Cuantificación exacta de excreción renal diaria y cálculo de depuración glomerular.",
    "isPopular": false
  },
  {
    "id": "creatinina-en-orina-parcial",
    "name": "Creatinina en Orina Parcial",
    "abbreviation": "Cre-Orina",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Determinación puntual de creatinina en una muestra única de orina.",
    "price": "$4,60",
    "sampleType": "Primera orina de la mañana (chorro medio) en recipiente estéril",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (3 a 4 horas)",
    "preparationInstructions": [
      "Realizar aseo genital exhaustivo con agua y jabón neutro, secar con toalla limpia.",
      "Descartar el primer chorro inicial en el inodoro y recolectar el chorro medio directamente en el frasco estéril.",
      "Cerrar herméticamente y entregar en el laboratorio antes de transcurridas 2 horas."
    ],
    "recommendedFor": "Diagnóstico de infecciones del tracto urinario, hematuria, proteinuria y evaluación renal general.",
    "isPopular": false
  },
  {
    "id": "relacion-acido-urico-creatinina",
    "name": "Relación Ácido Úrico - Creatinina",
    "abbreviation": "Rel AU/Cre",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Índice excretor para valorar la eliminación renal de ácido úrico.",
    "price": "$8,05",
    "sampleType": "Primera orina de la mañana (chorro medio)",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (6 horas)",
    "preparationInstructions": [
      "Aseo genital previo.",
      "Recolectar la primera orina de la mañana (chorro intermedio) en frasco estéril.",
      "Evitar ejercicio físico intenso el día previo a la toma de muestra."
    ],
    "recommendedFor": "Detección precoz de nefropatía incipiente en pacientes con diabetes e hipertensión arterial.",
    "isPopular": false
  },
  {
    "id": "relacion-calcio-creatinina",
    "name": "Relación Calcio - Creatinina",
    "abbreviation": "Rel Ca/Cre",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Útil para evaluar la excreción de calcio y riesgo de nefrolitiasis en muestras aisladas.",
    "price": "$8,05",
    "sampleType": "Primera orina de la mañana (chorro medio)",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (6 horas)",
    "preparationInstructions": [
      "Aseo genital previo.",
      "Recolectar la primera orina de la mañana (chorro intermedio) en frasco estéril.",
      "Evitar ejercicio físico intenso el día previo a la toma de muestra."
    ],
    "recommendedFor": "Detección precoz de nefropatía incipiente en pacientes con diabetes e hipertensión arterial.",
    "isPopular": false
  },
  {
    "id": "relacion-fosforo-creatinina",
    "name": "Relación Fósforo - Creatinina",
    "abbreviation": "Rel P/Cre",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Evalúa el manejo renal del fósforo corregido por la concentración urinaria.",
    "price": "$10,35",
    "sampleType": "Primera orina de la mañana (chorro medio)",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (6 horas)",
    "preparationInstructions": [
      "Aseo genital previo.",
      "Recolectar la primera orina de la mañana (chorro intermedio) en frasco estéril.",
      "Evitar ejercicio físico intenso el día previo a la toma de muestra."
    ],
    "recommendedFor": "Detección precoz de nefropatía incipiente en pacientes con diabetes e hipertensión arterial.",
    "isPopular": false
  },
  {
    "id": "relacion-magnesio-creatinina",
    "name": "Relación Magnesio - Creatinina",
    "abbreviation": "Rel Mg/Cre",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Valora la pérdida renal de magnesio en relación con la creatinina.",
    "price": "$8,05",
    "sampleType": "Primera orina de la mañana (chorro medio)",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (6 horas)",
    "preparationInstructions": [
      "Aseo genital previo.",
      "Recolectar la primera orina de la mañana (chorro intermedio) en frasco estéril.",
      "Evitar ejercicio físico intenso el día previo a la toma de muestra."
    ],
    "recommendedFor": "Detección precoz de nefropatía incipiente en pacientes con diabetes e hipertensión arterial.",
    "isPopular": false
  },
  {
    "id": "relacion-proteinas-creatinina",
    "name": "Relación Proteínas - Creatinina",
    "abbreviation": "RPC / IPC",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Estimación rápida de proteinuria de 24 horas a partir de una muestra aislada.",
    "price": "$8,05",
    "sampleType": "Primera orina de la mañana (chorro medio)",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (6 horas)",
    "preparationInstructions": [
      "Aseo genital previo.",
      "Recolectar la primera orina de la mañana (chorro intermedio) en frasco estéril.",
      "Evitar ejercicio físico intenso el día previo a la toma de muestra."
    ],
    "recommendedFor": "Detección precoz de nefropatía incipiente en pacientes con diabetes e hipertensión arterial.",
    "isPopular": false
  },
  {
    "id": "electrolitos-urinarios",
    "name": "Electrolitos Urinarios",
    "abbreviation": "ELE-U",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Medición de sodio, potasio y cloro en orina para estudio de desequilibrios hidroelectrolíticos.",
    "price": "$12,00",
    "sampleType": "Primera orina de la mañana (chorro medio) en recipiente estéril",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (3 a 4 horas)",
    "preparationInstructions": [
      "Realizar aseo genital exhaustivo con agua y jabón neutro, secar con toalla limpia.",
      "Descartar el primer chorro inicial en el inodoro y recolectar el chorro medio directamente en el frasco estéril.",
      "Cerrar herméticamente y entregar en el laboratorio antes de transcurridas 2 horas."
    ],
    "recommendedFor": "Diagnóstico de infecciones del tracto urinario, hematuria, proteinuria y evaluación renal general.",
    "isPopular": false
  },
  {
    "id": "proteinuria-de-24-horas",
    "name": "Proteinuria de 24 Horas",
    "abbreviation": "Prot-24h",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Cuantificación total de proteínas excretadas en orina durante 24 horas.",
    "price": "$8,05",
    "sampleType": "Orina completa de 24 horas recolectada en botellón limpio",
    "fastingHours": 0,
    "turnaroundTime": "24 horas tras entrega del botellón",
    "preparationInstructions": [
      "Al despertar en la mañana (ej. 7:00 AM), orinar en el inodoro y descartar esa primera micción.",
      "A partir de ese momento, recolectar absolutamente TODA la orina emitida durante el día y la noche en el botellón.",
      "A la mañana siguiente (7:00 AM), orinar por última vez dentro del botellón completando las 24 horas exactas.",
      "Mantener el contenedor cerrado en un lugar fresco o refrigerado hasta su entrega en el laboratorio."
    ],
    "recommendedFor": "Cuantificación exacta de excreción renal diaria y cálculo de depuración glomerular.",
    "isPopular": false
  },
  {
    "id": "microalbuminuria-orina-parcial",
    "name": "Microalbuminuria - Orina Parcial",
    "abbreviation": "µAlb",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Detección precoz de daño renal incipiente en pacientes diabéticos o hipertensos.",
    "price": "$14,95",
    "sampleType": "Primera orina de la mañana (chorro medio)",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (6 horas)",
    "preparationInstructions": [
      "Aseo genital previo.",
      "Recolectar la primera orina de la mañana (chorro intermedio) en frasco estéril.",
      "Evitar ejercicio físico intenso el día previo a la toma de muestra."
    ],
    "recommendedFor": "Detección precoz de nefropatía incipiente en pacientes con diabetes e hipertensión arterial.",
    "isPopular": true
  },
  {
    "id": "calcio-de-24-horas",
    "name": "Calcio de 24 Horas",
    "abbreviation": "Ca-24h",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Medición de la excreción total diaria de calcio en orina.",
    "price": "$10,35",
    "sampleType": "Orina completa de 24 horas recolectada en botellón limpio",
    "fastingHours": 0,
    "turnaroundTime": "24 horas tras entrega del botellón",
    "preparationInstructions": [
      "Al despertar en la mañana (ej. 7:00 AM), orinar en el inodoro y descartar esa primera micción.",
      "A partir de ese momento, recolectar absolutamente TODA la orina emitida durante el día y la noche en el botellón.",
      "A la mañana siguiente (7:00 AM), orinar por última vez dentro del botellón completando las 24 horas exactas.",
      "Mantener el contenedor cerrado en un lugar fresco o refrigerado hasta su entrega en el laboratorio."
    ],
    "recommendedFor": "Cuantificación exacta de excreción renal diaria y cálculo de depuración glomerular.",
    "isPopular": false
  },
  {
    "id": "calcio-en-orina-de-segunda-miccion",
    "name": "Calcio en Orina de Segunda Micción",
    "abbreviation": "Ca-2da Mic",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Evaluación del calcio urinario en muestra controlada de la mañana.",
    "price": "$10,35",
    "sampleType": "Segunda orina de la mañana (micción controlada)",
    "fastingHours": 2,
    "turnaroundTime": "Mismo día (6 horas)",
    "preparationInstructions": [
      "Descartar la primera orina de la mañana al levantarse.",
      "Beber 1 a 2 vasos de agua natural.",
      "Recolectar la segunda micción producida aproximadamente 2 horas después en un frasco estéril."
    ],
    "recommendedFor": "Evaluación controlada de excreción mineral matutina y riesgo de formación de cálculos renales.",
    "isPopular": false
  },
  {
    "id": "acido-urico-de-24-horas",
    "name": "Ácido Úrico de 24 Horas",
    "abbreviation": "AU-24h",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Medición de la eliminación total diaria de ácido úrico por vía renal.",
    "price": "$8,05",
    "sampleType": "Orina completa de 24 horas recolectada en botellón limpio",
    "fastingHours": 0,
    "turnaroundTime": "24 horas tras entrega del botellón",
    "preparationInstructions": [
      "Al despertar en la mañana (ej. 7:00 AM), orinar en el inodoro y descartar esa primera micción.",
      "A partir de ese momento, recolectar absolutamente TODA la orina emitida durante el día y la noche en el botellón.",
      "A la mañana siguiente (7:00 AM), orinar por última vez dentro del botellón completando las 24 horas exactas.",
      "Mantener el contenedor cerrado en un lugar fresco o refrigerado hasta su entrega en el laboratorio."
    ],
    "recommendedFor": "Cuantificación exacta de excreción renal diaria y cálculo de depuración glomerular.",
    "isPopular": false
  },
  {
    "id": "acido-urico-en-orina-parcial",
    "name": "Ácido Úrico en Orina Parcial",
    "abbreviation": "AU-Orina",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Determinación de ácido úrico en muestra única de orina.",
    "price": "$8,05",
    "sampleType": "Primera orina de la mañana (chorro medio) en recipiente estéril",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (3 a 4 horas)",
    "preparationInstructions": [
      "Realizar aseo genital exhaustivo con agua y jabón neutro, secar con toalla limpia.",
      "Descartar el primer chorro inicial en el inodoro y recolectar el chorro medio directamente en el frasco estéril.",
      "Cerrar herméticamente y entregar en el laboratorio antes de transcurridas 2 horas."
    ],
    "recommendedFor": "Diagnóstico de infecciones del tracto urinario, hematuria, proteinuria y evaluación renal general.",
    "isPopular": false
  },
  {
    "id": "cocaina-en-orina",
    "name": "Cocaína en Orina",
    "abbreviation": "COC",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Prueba toxicológica para detección de metabolitos de cocaína en orina.",
    "price": "$6,90",
    "sampleType": "Muestra espontánea de orina fresca bajo cadena de custodia",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (2 horas)",
    "preparationInstructions": [
      "No requiere ayuno.",
      "Toma de muestra bajo protocolo técnico y normativo de control toxicológico ocupacional o judicial."
    ],
    "recommendedFor": "Detección rápida de metabolitos de drogas de abuso para salud laboral, ingresos y peritajes.",
    "isPopular": false
  },
  {
    "id": "marihuana-en-orina",
    "name": "Marihuana en Orina",
    "abbreviation": "THC",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Prueba toxicológica para detección de metabolitos de cannabis (THC).",
    "price": "$6,90",
    "sampleType": "Muestra espontánea de orina fresca bajo cadena de custodia",
    "fastingHours": 0,
    "turnaroundTime": "Mismo día (2 horas)",
    "preparationInstructions": [
      "No requiere ayuno.",
      "Toma de muestra bajo protocolo técnico y normativo de control toxicológico ocupacional o judicial."
    ],
    "recommendedFor": "Detección rápida de metabolitos de drogas de abuso para salud laboral, ingresos y peritajes.",
    "isPopular": false
  },
  {
    "id": "fosforo-en-orina-de-segunda-miccion",
    "name": "Fósforo en Orina de Segunda Micción",
    "abbreviation": "P-2da Mic",
    "category": "orina",
    "categoryLabel": "Orina",
    "description": "Evaluación de la excreción de fósforo en muestra controlada matutina.",
    "price": "$4,60",
    "sampleType": "Segunda orina de la mañana (micción controlada)",
    "fastingHours": 2,
    "turnaroundTime": "Mismo día (6 horas)",
    "preparationInstructions": [
      "Descartar la primera orina de la mañana al levantarse.",
      "Beber 1 a 2 vasos de agua natural.",
      "Recolectar la segunda micción producida aproximadamente 2 horas después en un frasco estéril."
    ],
    "recommendedFor": "Evaluación controlada de excreción mineral matutina y riesgo de formación de cálculos renales.",
    "isPopular": false
  },
  {
    "id": "panel-de-patogenos-respiratorios",
    "name": "Panel de Patógenos Respiratorios",
    "abbreviation": "PPR",
    "category": "especiales",
    "categoryLabel": "Especiales",
    "description": "Detección múltiple por biología molecular/inmunoensayo de virus y bacterias respiratorias.",
    "price": "$34,50",
    "sampleType": "Hisopado nasofaríngeo estéril en medio de transporte viral",
    "fastingHours": 0,
    "turnaroundTime": "24 a 48 horas",
    "preparationInstructions": [
      "No colocar soluciones nasales, antibióticos tópicos ni descongestionantes 4 horas antes de la toma.",
      "Muestra tomada por personal especializado con equipo de bioseguridad completo."
    ],
    "recommendedFor": "Identificación simultánea de múltiples patógenos virales y bacterianos causantes de infección respiratoria aguda.",
    "isPopular": true
  },
  {
    "id": "vitamina-b12",
    "name": "Vitamina B12",
    "abbreviation": "B12",
    "category": "especiales",
    "categoryLabel": "Especiales",
    "description": "Medición de la cobalamina, vital para la formación de glóbulos rojos y función neurológica.",
    "price": "$11,50",
    "sampleType": "Suero sanguíneo protegido de la luz solar",
    "fastingHours": 8,
    "turnaroundTime": "24 a 48 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas continuas.",
      "Suspender suplementos multivitamínicos o inyectables del complejo B 72 horas previas a la prueba."
    ],
    "recommendedFor": "Diagnóstico diferencial de anemias macrocíticas, neuropatías sensitivas y control preconcepcional/gestacional.",
    "isPopular": true
  },
  {
    "id": "acido-folico-folato",
    "name": "Ácido Fólico (Folato)",
    "abbreviation": "Ac. Fólico",
    "category": "especiales",
    "categoryLabel": "Especiales",
    "description": "Vitamina B9 esencial para la síntesis de ADN y prevención de anemia megaloblástica.",
    "price": "$13,80",
    "sampleType": "Suero sanguíneo protegido de la luz solar",
    "fastingHours": 8,
    "turnaroundTime": "24 a 48 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas continuas.",
      "Suspender suplementos multivitamínicos o inyectables del complejo B 72 horas previas a la prueba."
    ],
    "recommendedFor": "Diagnóstico diferencial de anemias macrocíticas, neuropatías sensitivas y control preconcepcional/gestacional.",
    "isPopular": true
  },
  {
    "id": "vitamina-d",
    "name": "Vitamina D",
    "abbreviation": "Vit D / 25-OH",
    "category": "especiales",
    "categoryLabel": "Especiales",
    "description": "Mide la 25-hidroxivitamina D, clave en el metabolismo del calcio y salud inmune.",
    "price": "$13,80",
    "sampleType": "Suero sanguíneo",
    "fastingHours": 8,
    "turnaroundTime": "24 a 48 horas",
    "preparationInstructions": [
      "Ayuno de 8 horas.",
      "No ingerir suplementos de vitamina D el mismo día del estudio antes de la venopunción."
    ],
    "recommendedFor": "Evaluación de la salud ósea, niveles para absorción de calcio, osteopenia/osteoporosis y estado inmune.",
    "isPopular": true
  }
];
