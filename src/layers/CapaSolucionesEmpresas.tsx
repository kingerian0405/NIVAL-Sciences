import React from 'react';
import { 
  Building2, 
  Briefcase, 
  CheckCircle2, 
  FileSpreadsheet, 
  Users, 
  ShieldCheck, 
  Clock, 
  GraduationCap
} from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

interface CapaSolucionesEmpresasProps {
  onSelectCapa: (id: string) => void;
}

export const CapaSolucionesEmpresas: React.FC<CapaSolucionesEmpresasProps> = ({ onSelectCapa }) => {
  const lineasEmpresas = [
    {
      titulo: '1. Asesoría Corporativa y Consultoría',
      descripcion: 'Acompañamiento especializado para gerencias de Recursos Humanos, directores de operaciones y comités de Seguridad y Salud Laboral.',
      items: [
        'Diagnóstico inicial de la matriz de riesgos biológicos y de salud en la organización',
        'Asesoría técnica para el cumplimiento de normativas sanitarias y laborales aplicables',
        'Diseño de planes estratégicos de salud y bienestar adaptados al objeto de la empresa'
      ]
    },
    {
      titulo: '2. Programas Corporativos de Salud y Prevención',
      descripcion: 'Estructuración de baterías diagnósticas periódicas y pre-empleo orientadas a vigilar la aptitud del personal y reducir el ausentismo.',
      items: [
        'Baterías de ingreso (pre-empleo), periódicas y post-vacacionales',
        'Planes preventivos para mitigar el impacto de enfermedades metabólicas y cardiovasculares',
        'Convenios institucionales continuos con condiciones operativas preferenciales'
      ]
    },
    {
      titulo: '3. Jornadas de Salud In-Company',
      descripcion: 'Operativos organizados de extracción de muestras clínicas directamente en las instalaciones o sedes de la empresa.',
      items: [
        'Despliegue de personal técnico de bioanálisis con estrictos protocolos de bioseguridad',
        'Mínima interrupción de los turnos de trabajo y cero traslados innecesarios del personal',
        'Entrega individual confidencial de resultados y entrega global anonimizada para RRHH'
      ]
    },
    {
      titulo: '4. Capacitación y Formación para Colaboradores',
      descripcion: 'Espacios formativos dirigidos a trabajadores y supervisores sobre autocuidado, ergonomía y prevención de riesgos laborales.',
      items: [
        'Talleres de pausas activas, nutrición laboral y prevención del estrés metabólico',
        'Charlas de concientización sobre factores de riesgo cardiovascular',
        'Capacitación a brigadas de primeros auxilios y salud ocupacional'
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-16">
      
      {/* Encabezado */}
      <div className="border-b border-slate-200 pb-8">
        <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
          Capa 06 · Soluciones B2B
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Soluciones para Empresas
        </h1>
        <p className="text-base text-slate-600 mt-2">
          Asesoría corporativa, programas de salud laboral, capacitación y jornadas de evaluación in-situ.
        </p>
      </div>

      {/* Espacio reservado con fondo gris para Imagen de Fondo Corporativo */}
      <ImagePlaceholder 
        label="Espacio reservado para imagen de fondo: Jornadas de Salud Corporativa In-Company"
        sublabel="Atención preventiva a empresas, evaluaciones ocupacionales y bienestar de los colaboradores."
        className="h-56 sm:h-72"
      />

      {/* Concepto Institucional B2B */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
        <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm uppercase tracking-wider">
          <Building2 className="w-4 h-4 text-indigo-700" />
          <span>Alineación Estratégica con la Productividad</span>
        </div>
        <p>
          En <strong>NIVAL Sciences</strong> concebimos la salud corporativa no como un mero requisito formal de cumplimiento, sino como un pilar estratégico de continuidad y bienestar para la organización. Diseñamos soluciones ajustadas al perfil operativo, número de colaboradores y habilitación de cada empresa.
        </p>
      </section>

      {/* Las 4 Líneas de Soluciones para Empresas */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-950 flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
            <span>Líneas de Solución Corporativa</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Componentes estructurados para apoyar a instituciones, pymes y corporaciones:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lineasEmpresas.map((linea, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-950">
                  {linea.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {linea.descripcion}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <h4 className="text-[11px] font-bold uppercase text-slate-400 mb-2">
                    Alcances del servicio:
                  </h4>
                  <ul className="space-y-2">
                    {linea.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Indicadores de Gestión Corporativa (Sección 9) */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold uppercase tracking-wider text-amber-400">
          Compromiso con Indicadores de Gestión
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          NIVAL Sciences monitorea el impacto de sus soluciones corporativas mediante métricas objetivas orientadas a la mejora continua:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
          <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
            <span className="block font-bold text-white text-sm">Empresas</span>
            <span className="text-slate-400 text-[11px] mt-0.5 block">Atención individualizada y seguimiento</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
            <span className="block font-bold text-white text-sm">Proyectos</span>
            <span className="text-slate-400 text-[11px] mt-0.5 block">Ejecución rigurosa en fechas acordadas</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
            <span className="block font-bold text-white text-sm">Programas</span>
            <span className="text-slate-400 text-[11px] mt-0.5 block">Implementación técnica sin disrupciones</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
            <span className="block font-bold text-white text-sm">Continuidad</span>
            <span className="text-slate-400 text-[11px] mt-0.5 block">Alianzas y convenios sostenibles</span>
          </div>
        </div>
      </section>

      {/* Navegación al final de la capa */}
      <div className="pt-8 border-t border-slate-200 flex justify-between items-center text-xs">
        <button
          onClick={() => {
            onSelectCapa('asesoria-personas');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          &larr; Capa 05 · Asesoría para Personas
        </button>

        <button
          onClick={() => {
            onSelectCapa('formacion');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-bold text-slate-950 hover:text-amber-600 cursor-pointer"
        >
          Siguiente: Capa 07 · Formación y Capacitación &rarr;
        </button>
      </div>

    </div>
  );
};

