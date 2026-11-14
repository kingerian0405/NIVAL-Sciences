import React from 'react';
import { 
  ShieldCheck, 
  Heart, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Activity, 
  FileCheck,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

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
    <div className="w-full bg-nival-main text-slate-900">
      
      {/* 1. HERO INSTITUCIONAL CON IMAGEN DE FONDO (fondo.jpeg) */}
      <section 
        className="relative w-full bg-cover bg-center overflow-hidden border-b border-slate-300"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}fondo.jpeg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 sm:to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-24 lg:py-28">
          <div className="max-w-2xl text-left space-y-4">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-serif leading-[1.14] tracking-tight italic">
              “La visión que necesitas para vivir como sueñas”
            </h1>

            <div>
              <span className="inline-block font-extrabold text-slate-950 text-xs sm:text-sm pb-1.5 border-b-2 sm:border-b-[3px] border-nival-gold tracking-tight">
                Eje Estratégico · Programas de Salud y Prevención
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-2 font-normal">
              Concebimos la prevención no como un acto reactivo ante la enfermedad, sino como una herramienta científica para anticiparse a los eventos de salud mediante monitoreo continuo, educación y tamizajes oportunos.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  onSelectCapa('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-lg bg-nival-gold hover:bg-nival-gold-hover text-slate-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Solicitar Jornada o Chequeo
              </button>

              <button
                onClick={() => {
                  onSelectCapa('laboratorio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-lg bg-nival-dark hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Ver Exámenes de Laboratorio
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FILOSOFÍA DE PREVENCIÓN: PREVENIR TAMBIÉN ES CUIDAR */}
      <section className="bg-nival-section-alt py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          
          <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>El Enfoque Proactivo NIVAL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Prevenir también es cuidar
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            En la medicina convencional suele acudirse a la evaluación analítica únicamente cuando el síntoma ya se ha instaurado. En <strong>NIVAL Sciences</strong> concebimos la prevención como una herramienta esencial para anticiparse a los eventos, identificar factores de riesgo subclínicos y mantener la calidad de vida en el tiempo.
          </p>

          {/* Cuadro destacado de anticipación */}
          <div className="p-5 sm:p-6 rounded-r-2xl border border-l-4 border-slate-300 border-l-nival-gold bg-nival-card-tint text-slate-950 shadow-2xs">
            <blockquote className="border-l-4 border-nival-gold pl-4 py-1 text-xs sm:text-sm text-slate-900 font-semibold italic">
              <span className="border-b-2 border-nival-gold pb-0.5 inline-block">“El diagnóstico aporta información. La prevención ayuda a anticiparse.”</span>
            </blockquote>
          </div>

        </div>
      </section>

      {/* 3. PROGRAMAS, JORNADAS Y RECURSOS */}
      <section className="bg-nival-section-light py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Componentes del Alcance Preventivo
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Tres frentes de acción integrados para individuos, familias y colectivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programas.map((prog, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="text-[11px] font-bold text-slate-950 bg-nival-gold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block mb-3">
                    Componente 0{idx + 1}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-950 leading-snug">
                    {prog.titulo}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mt-1">
                    {prog.subtitulo}
                  </p>
                  <p className="text-xs text-slate-700 mt-3 leading-relaxed">
                    {prog.descripcion}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
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

        </div>
      </section>

      {/* 4. IDENTIFICACIÓN DE FACTORES DE RIESGO (SECCIÓN OSCURA CON TARJETAS DORADAS) */}
      <section className="bg-nival-dark py-16 sm:py-20 px-4 sm:px-6 text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-10 text-center">
          
          <div>
            <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block mb-1">
              Detección Oportuna
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Factores de Riesgo Subclínicos Monitoreados
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2 leading-relaxed">
              Los programas preventivos de NIVAL Sciences ponen especial atención en condiciones asintomáticas reversibles:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            
            <div className="bg-nival-gold text-slate-950 rounded-xl p-5 flex flex-col justify-between shadow-md">
              <div>
                <span className="font-mono text-xs font-bold text-slate-800 block mb-1">Eje 01</span>
                <h3 className="font-black text-sm text-slate-950 mb-2">Riesgo Glucémico</h3>
                <p className="text-xs text-slate-900 leading-relaxed font-medium">
                  Resistencia a la insulina, hiperinsulinemia y prediabetes asintomática detectadas antes de daños tisulares.
                </p>
              </div>
            </div>

            <div className="bg-nival-gold text-slate-950 rounded-xl p-5 flex flex-col justify-between shadow-md">
              <div>
                <span className="font-mono text-xs font-bold text-slate-800 block mb-1">Eje 02</span>
                <h3 className="font-black text-sm text-slate-950 mb-2">Riesgo Lipídico</h3>
                <p className="text-xs text-slate-900 leading-relaxed font-medium">
                  Aterogénesis temprana, desequilibrio en fracciones de colesterol y triglicéridos elevados.
                </p>
              </div>
            </div>

            <div className="bg-nival-gold text-slate-950 rounded-xl p-5 flex flex-col justify-between shadow-md">
              <div>
                <span className="font-mono text-xs font-bold text-slate-800 block mb-1">Eje 03</span>
                <h3 className="font-black text-sm text-slate-950 mb-2">Riesgo Renal y Hepático</h3>
                <p className="text-xs text-slate-900 leading-relaxed font-medium">
                  Sobrecarga metabólica, esteatosis hepática y alteraciones incipientes en la filtración glomerular.
                </p>
              </div>
            </div>

            <div className="bg-nival-gold text-slate-950 rounded-xl p-5 flex flex-col justify-between shadow-md">
              <div>
                <span className="font-mono text-xs font-bold text-slate-800 block mb-1">Eje 04</span>
                <h3 className="font-black text-sm text-slate-950 mb-2">Riesgo Funcional</h3>
                <p className="text-xs text-slate-900 leading-relaxed font-medium">
                  Déficits vitamínicos, fatiga crónica metabólica y alteraciones subclínicas tiroideas.
                </p>
              </div>
            </div>

          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onSelectCapa('contacto');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded-lg bg-nival-gold hover:bg-nival-gold-hover text-slate-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer inline-flex items-center space-x-2"
            >
              <span>Consultar Perfil Preventivo Recomendado</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
