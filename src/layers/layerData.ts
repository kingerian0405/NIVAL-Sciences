export interface CapaInfo {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
}

export const CAPAS: CapaInfo[] = [
  {
    id: 'inicio',
    number: '01',
    title: 'Presentación Institucional',
    shortTitle: 'Inicio',
    subtitle: 'Ecosistema integral de salud, asesoría, prevención, formación e innovación',
    description: 'Documento base para orientar el desarrollo institucional, la presencia digital y la expansión de servicios de NIVAL Sciences.'
  },
  {
    id: 'nosotros',
    number: '02',
    title: 'Nosotros',
    shortTitle: 'Nosotros',
    subtitle: 'Historia, misión, visión, valores y modelo de trabajo',
    description: 'Concepto institucional, propósito fundacional y principios rectores del ecosistema.'
  },
  {
    id: 'laboratorio',
    number: '03',
    title: 'Laboratorio Clínico',
    shortTitle: 'Laboratorio',
    subtitle: 'Servicios, perfiles, preparación y canales de atención',
    description: 'Primera unidad operativa consolidada, controles de calidad y confiabilidad analítica.'
  },
  {
    id: 'prevencion',
    number: '04',
    title: 'Prevención y Calidad de Vida',
    shortTitle: 'Prevención',
    subtitle: 'Programas, jornadas y recursos',
    description: 'Evaluaciones preventivas periódicas, detección oportuna de riesgos y autocuidado.'
  },
  {
    id: 'asesoria-personas',
    number: '05',
    title: 'Asesoría para Personas',
    shortTitle: 'Asesoría Personas',
    subtitle: 'Servicios de orientación y acompañamiento disponibles',
    description: 'Orientación individual en materias vinculadas con los servicios de NIVAL y rutas de atención.'
  },
  {
    id: 'soluciones-empresas',
    number: '06',
    title: 'Soluciones para Empresas',
    shortTitle: 'Empresas',
    subtitle: 'Asesoría corporativa, programas, capacitación y jornadas',
    description: 'Consultoría, acompañamiento y programas preventivos ajustados a cada organización.'
  },
  {
    id: 'formacion',
    number: '07',
    title: 'Formación y Capacitación',
    shortTitle: 'Formación',
    subtitle: 'Cursos, talleres, calendario y campus digital',
    description: 'Espacios de educación, actualización científica y desarrollo de capacidades.'
  },
  {
    id: 'innovacion',
    number: '08',
    title: 'Innovación y Tecnología',
    shortTitle: 'Innovación',
    subtitle: 'Microaplicaciones, herramientas y proyectos',
    description: 'Portal institucional, soluciones digitales, investigación aplicada y convenios.'
  },
  {
    id: 'contacto',
    number: '09',
    title: 'Contacto y Atención',
    shortTitle: 'Contacto',
    subtitle: 'Solicitudes, alianzas y canales de atención',
    description: 'Puntos formales de enlace institucional, consultas y atención al usuario.'
  }
];

