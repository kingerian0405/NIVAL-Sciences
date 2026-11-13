import React from 'react';
import { 
  ShieldCheck, 
  Heart, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Activity, 
  FileCheck,
  AlertTriangle
} from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

interface CapaPrevencionProps {
  onSelectCapa: (id: string) => void;
}

export const CapaPrevencion: React.FC<CapaPrevencionProps> = ({ onSelectCapa }) => {
  const programas = [
    {
      titulo: 'Evaluaciones Preventivas Periódicas',
      subtitulo: 'Monitoreo basal para personas asintomáticas',
      descripcion: 'Baterías analíticas planificadas de acuerdo al grupo etario y antecedentes familiares, permitiendo identificar desviaciones subclínicas antes de que originen patologías manifiestas.',
      items: [
        'Perfil preventivo metabólico (glicemia, insulina, perfil lipídico)',
        'Vigilancia cardiovascular temprana y marcadores endoteliales',
        'Controles preventivos específicos por etapa de vida (mujer, hombre, adulto mayor)'
      ]
    },
    {
      titulo: 'Jornadas de Promoción de la Salud',
      subtitulo: 'Detección oportuna comunitaria e institucional',
      descripcion: 'Despliegues organizados para la toma de muestras y tamizaje preventivo in-situ, facilitando el acceso a diagnósticos de calidad a grupos humanos amplios.',
      items: [
        'Jornadas de salud preventivas en instituciones educativas y gremiales',
        'Jornadas corporativas en empresas con mínima disrupción de turnos',
        'Tamizajes específicos: diabetes, dislipidemias, anemia y salud tiroidea'
      ]
    },
    {
      titulo: 'Educación para el Autocuidado y Recursos',
      subtitulo: 'Apropiación del conocimiento para decisiones conscientes',
      descripcion: 'Información pedagógica y guías estructuradas para que las personas comprendan sus propios indicadores biomédicos y adopten pautas de vida saludables basadas en evidencia.',
      items: [
        'Guías de interpretación básica de exámenes de rutina',
        'Pautas preanalíticas para evitar resultados alterados',
        'Recomendaciones nutricionales y de actividad física fundamentadas científicamente'
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-16">
      
      {/* Encabezado */}
      <div className="border-b border-slate-400 pb-8 space-y-1.5">
        <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-wider block">
          Capa 04 · Eje Estratégico
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Prevención y Calidad de Vida
        </h1>
        <p className="text-amber-800 text-sm font-semibold italic">
          “La visión que necesitas para vivir como sueñas”
        </p>
        <p className="text-base text-slate-700">
          Programas preventivos, jornadas de salud integrales y recursos para el autocuidado continuo.
        </p>
      </div>

      {/* Espacio reservado con fondo gris para Imagen de Fondo de Prevención */}
      <ImagePlaceholder 
        label="Espacio reservado para imagen de fondo: Jornadas de Prevención y Salud"
        sublabel="Atención a personas, jornadas de tamizaje y actividades educativas de promoción del bienestar."
        className="h-56 sm:h-72"
      />

      {/* Filosofía de la Prevención */}
      <section className="bg-[#dde3ec] rounded-2xl p-6 sm:p-8 border border-slate-400 space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed">
        <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>El Enfoque Proactivo NIVAL</span>
        </div>
        <p>
          En la medicina convencional suele acudirse a la evaluación analítica únicamente cuando el síntoma ya se ha instaurado. En <strong>NIVAL Sciences</strong> concebimos la prevención como una herramienta para anticiparse a los eventos de salud.
        </p>
        <blockquote className="border-l-4 border-amber-500 pl-4 py-1 text-slate-900 font-medium italic">
          “El diagnóstico aporta información. La prevención ayuda a anticiparse.”
        </blockquote>
      </section>

      {/* Programas y Recursos */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-950 flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
            <span>Programas, Jornadas y Recursos</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 mt-1">
            Los tres componentes operativos del alcance institucional en prevención:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programas.map((prog, idx) => (
            <div key={idx} className="bg-[#dde3ec] rounded-2xl border border-slate-400 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  Componente 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-950 leading-snug">
                  {prog.titulo}
                </h3>
                <p className="text-xs font-semibold text-slate-600 mt-1">
                  {prog.subtitulo}
                </p>
                <p className="text-xs text-slate-700 mt-3 leading-relaxed">
                  {prog.descripcion}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-300">
                  <h4 className="text-[11px] font-bold uppercase text-slate-500 mb-2">
                    Acciones clave:
                  </h4>
                  <ul className="space-y-2">
                    {prog.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
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

      {/* Identificación de Factores de Riesgo */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-950 flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
          <span>Detección Oportuna de Factores de Riesgo</span>
        </h2>

        <div className="bg-nival-gold text-slate-950 rounded-2xl p-6 sm:p-8 space-y-4 text-xs sm:text-sm leading-relaxed border border-nival-gold shadow-sm">
          <p className="text-slate-950 font-medium">
            Los programas preventivos de NIVAL Sciences ponen especial atención en factores de riesgo modificables que con frecuencia cursan de forma asintomática:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-950/15 border border-slate-950/20">
              <span className="font-extrabold text-slate-950 block mb-1">Riesgo Glucémico</span>
              <span className="text-xs text-slate-900 font-medium">Resistencia a la insulina y prediabetes asintomática.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/15 border border-slate-950/20">
              <span className="font-extrabold text-slate-950 block mb-1">Riesgo Lipídico</span>
              <span className="text-xs text-slate-900 font-medium">Aterogénesis y desequilibrio entre fracciones de colesterol.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/15 border border-slate-950/20">
              <span className="font-extrabold text-slate-950 block mb-1">Riesgo Renal y Hepático</span>
              <span className="text-xs text-slate-900 font-medium">Sobrecarga metabólica, esteatosis y filtración glomerular.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/15 border border-slate-950/20">
              <span className="font-extrabold text-slate-950 block mb-1">Riesgo Funcional</span>
              <span className="text-xs text-slate-900 font-medium">Déficits vitamínicos y alteraciones subclínicas del tiroides.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navegación al final de la capa */}
      <div className="pt-8 border-t border-slate-400 flex justify-between items-center text-xs">
        <button
          onClick={() => {
            onSelectCapa('laboratorio');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          &larr; Capa 03 · Laboratorio Clínico
        </button>

        <button
          onClick={() => {
            onSelectCapa('asesoria-personas');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-bold text-slate-950 hover:text-amber-600 cursor-pointer"
        >
          Siguiente: Capa 05 · Asesoría para Personas &rarr;
        </button>
      </div>

    </div>
  );
};

