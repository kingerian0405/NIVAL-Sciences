import React from 'react';
import { 
  Building2, 
  Briefcase, 
  CheckCircle2, 
  FileSpreadsheet, 
  Users, 
  ShieldCheck, 
  Clock, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';

interface CapaSolucionesEmpresasProps {
  onSelectCapa: (id: string) => void;
}

export const CapaSolucionesEmpresas: React.FC<CapaSolucionesEmpresasProps> = ({ onSelectCapa }) => {
  const lineasEmpresas = [
    {
      titulo: '1. Asesoría Corporativa y Consultoría',
      descripcion: 'Acompañamiento especializado para gerencias de Recursos Humanos, directores de operaciones y comités de Seguridad y Salud Laboral.',
      icono: <Briefcase className="w-5 h-5 text-slate-950" />,
      items: [
        'Diagnóstico inicial de la matriz de riesgos biológicos y de salud en la organización',
        'Asesoría técnica para el cumplimiento de normativas sanitarias y laborales aplicables',
        'Diseño de planes estratégicos de salud y bienestar adaptados al objeto de la empresa'
      ]
    },
    {
      titulo: '2. Programas Corporativos de Salud y Prevención',
      descripcion: 'Estructuración de baterías diagnósticas periódicas y pre-empleo orientadas a vigilar la aptitud del personal y reducir el ausentismo.',
      icono: <ShieldCheck className="w-5 h-5 text-slate-950" />,
      items: [
        'Baterías de ingreso (pre-empleo), periódicas y post-vacacionales',
        'Planes preventivos para mitigar el impacto de enfermedades metabólicas y cardiovasculares',
        'Convenios institucionales continuos con condiciones operativas preferenciales'
      ]
    },
    {
      titulo: '3. Jornadas de Salud In-Company',
      descripcion: 'Operativos organizados de extracción de muestras clínicas directamente en las instalaciones o sedes de la empresa.',
      icono: <Users className="w-5 h-5 text-slate-950" />,
      items: [
        'Despliegue de personal técnico de bioanálisis con estrictos protocolos de bioseguridad',
        'Mínima interrupción de los turnos de trabajo y cero traslados innecesarios del personal',
        'Entrega individual confidencial de resultados y entrega global anonimizada para RRHH'
      ]
    },
    {
      titulo: '4. Capacitación y Formación para Colaboradores',
      descripcion: 'Espacios formativos dirigidos a trabajadores y supervisores sobre autocuidado, ergonomía y prevención de riesgos laborales.',
      icono: <GraduationCap className="w-5 h-5 text-slate-950" />,
      items: [
        'Talleres de pausas activas, nutrición laboral y prevención del estrés metabólico',
        'Charlas de concientización sobre factores de riesgo cardiovascular',
        'Capacitación a brigadas de primeros auxilios y salud ocupacional'
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
                Salud Corporativa B2B · Continuidad Operativa y Productividad
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-2 font-normal">
              Diseñamos soluciones a la medida del perfil operativo y el número de colaboradores de tu organización, orientadas a mitigar riesgos biológicos, reducir el ausentismo y proteger a tu talento.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  onSelectCapa('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-lg bg-nival-gold hover:bg-nival-gold-hover text-slate-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Solicitar Propuesta Corporativa
              </button>

              <button
                onClick={() => {
                  onSelectCapa('laboratorio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-lg bg-nival-dark hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Baterías Ocupacionales
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ALINEACIÓN ESTRATÉGICA CON LA PRODUCTIVIDAD */}
      <section className="bg-nival-section-alt py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          
          <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-indigo-700" />
            <span>Alineación Estratégica con la Productividad</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Salud Ocupacional con Impacto Real en el Negocio
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            En <strong>NIVAL Sciences</strong> concebimos la salud corporativa no como un mero requisito formal de cumplimiento, sino como un pilar estratégico de continuidad y bienestar para la organización. Diseñamos soluciones ajustadas al perfil operativo, número de colaboradores y habilitación de cada empresa.
          </p>

          <div className="p-5 sm:p-6 rounded-r-2xl border border-l-4 border-slate-300 border-l-nival-gold bg-nival-card-tint text-slate-950 shadow-2xs">
            <p className="text-xs sm:text-sm leading-relaxed font-semibold">
              Mínima disrupción en las operaciones diarias, confidencialidad absoluta en la entrega de informes individuales a cada colaborador y dashboards anonimizados consolidados para la gerencia de Talento Humano.
            </p>
          </div>

        </div>
      </section>

      {/* 3. LÍNEAS DE SOLUCIÓN CORPORATIVA */}
      <section className="bg-nival-section-light py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Líneas de Solución Corporativa
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Cuatro ejes de servicio diseñados para pymes, instituciones y corporaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {lineasEmpresas.map((linea, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-nival-gold flex items-center justify-center mb-4 shadow-2xs">
                    {linea.icono}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 leading-snug">
                    {linea.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                    {linea.descripcion}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold uppercase text-slate-500 mb-2.5">
                      Alcances del servicio:
                    </h4>
                    <ul className="space-y-2">
                      {linea.items.map((item, i) => (
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

      {/* 4. COMPROMISO CON INDICADORES DE GESTIÓN (SECCIÓN OSCURA CARBÓN TIPO INICIO) */}
      <section className="bg-nival-dark py-16 sm:py-20 px-4 sm:px-6 text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-10 text-center">
          
          <div>
            <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block mb-1">
              Métricas Objetivas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Compromiso con Indicadores de Gestión
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2 leading-relaxed">
              NIVAL Sciences monitorea el impacto de sus soluciones corporativas mediante métricas objetivas orientadas a la mejora continua:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            
            <div className="bg-nival-gold text-slate-950 rounded-xl p-5 flex flex-col justify-between shadow-md">
              <div>
                <span className="font-mono text-xs font-bold text-slate-800 block mb-1">Indicador 01</span>
                <h3 className="font-black text-sm text-slate-950 mb-2">Empresas</h3>
                <p className="text-xs text-slate-900 leading-relaxed font-medium">
                  Atención individualizada, seguimiento riguroso y asesoría técnica continua en salud laboral.
                </p>
              </div>
            </div>

            <div className="bg-nival-gold text-slate-950 rounded-xl p-5 flex flex-col justify-between shadow-md">
              <div>
                <span className="font-mono text-xs font-bold text-slate-800 block mb-1">Indicador 02</span>
                <h3 className="font-black text-sm text-slate-950 mb-2">Proyectos</h3>
                <p className="text-xs text-slate-900 leading-relaxed font-medium">
                  Ejecución rigurosa en fechas acordadas con entrega oportuna de resultados analíticos.
                </p>
              </div>
            </div>

            <div className="bg-nival-gold text-slate-950 rounded-xl p-5 flex flex-col justify-between shadow-md">
              <div>
                <span className="font-mono text-xs font-bold text-slate-800 block mb-1">Indicador 03</span>
                <h3 className="font-black text-sm text-slate-950 mb-2">Programas</h3>
                <p className="text-xs text-slate-900 leading-relaxed font-medium">
                  Implementación técnica sin disrupciones de las jornadas laborales o turnos productivos.
                </p>
              </div>
            </div>

            <div className="bg-nival-gold text-slate-950 rounded-xl p-5 flex flex-col justify-between shadow-md">
              <div>
                <span className="font-mono text-xs font-bold text-slate-800 block mb-1">Indicador 04</span>
                <h3 className="font-black text-sm text-slate-950 mb-2">Continuidad</h3>
                <p className="text-xs text-slate-900 leading-relaxed font-medium">
                  Alianzas, convenios sostenibles y planes preventivos a mediano y largo plazo.
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
              <span>Solicitar Convenio Corporativo para su Empresa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
