import React, { useState } from 'react';
import { 
  Microscope, 
  ShieldCheck, 
  Compass, 
  Building2, 
  GraduationCap, 
  Cpu, 
  FlaskConical,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { STRATEGIC_PILLARS } from '../data/ecosystemData';

export const EcosystemPillars: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('diagnostico');

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Microscope': return <Microscope className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      default: return <Microscope className="w-5 h-5" />;
    }
  };

  const activePillar = STRATEGIC_PILLARS.find(p => p.id === activePillarId) || STRATEGIC_PILLARS[0];

  return (
    <section id="ecosistema" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la Sección */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <span>Estructura Institucional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Los 7 Pilares del Ecosistema NIVAL Sciences
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            El laboratorio clínico constituye nuestra primera unidad operativa consolidada, proyectándose hacia un ecosistema multidisciplinario que integra prevención, asesoría, educación y tecnología.
          </p>
        </div>

        {/* Eje Interactivo de Pilares: Selector de Pestañas */}
        <div className="mt-12">
          {/* Pills de selección */}
          <div className="flex items-center overflow-x-auto pb-4 gap-2 no-scrollbar justify-start lg:justify-center">
            {STRATEGIC_PILLARS.map((pillar) => {
              const isActive = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`flex items-center space-x-2.5 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 shadow-xs cursor-pointer ${
                    isActive 
                      ? 'bg-slate-900 text-white shadow-md scale-102 ring-2 ring-amber-400/50' 
                      : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <span className={isActive ? 'text-amber-400' : 'text-sky-600'}>
                    {getPillarIcon(pillar.iconName)}
                  </span>
                  <span>{pillar.title}</span>
                </button>
              );
            })}
          </div>

          {/* Panel de Contenido Expandido del Pilar Activo */}
          <div className="mt-6 rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Información Descriptiva */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
                  <span>Propósito Estratégico</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activePillar.title}
                </h3>

                <p className="text-base sm:text-lg font-medium text-sky-800 leading-snug">
                  "{activePillar.purpose}"
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activePillar.scope}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Alcances y Compromisos Clave:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePillar.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tarjeta Lateral de Acción Directa para este Pilar */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-8 space-y-5 shadow-lg border border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                      NIVAL Sciences
                    </span>
                    <div className="p-2 rounded-lg bg-white/10 text-white">
                      {getPillarIcon(activePillar.iconName)}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold">
                    ¿Cómo interactúa este pilar contigo?
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Cada componente está diseñado para vincular datos científicos y tecnología con decisiones cotidianas de salud y bienestar para personas y organizaciones.
                  </p>

                  <div className="pt-2">
                    {activePillar.id === 'diagnostico' && (
                      <a
                        href="#laboratorio"
                        className="inline-flex items-center justify-center w-full space-x-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-md transition-all"
                      >
                        <span>Ver Pruebas de Laboratorio</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                    {activePillar.id === 'prevencion' && (
                      <a
                        href="#prevencion"
                        className="inline-flex items-center justify-center w-full space-x-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition-all"
                      >
                        <span>Iniciar Orientación Preventiva</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                    {activePillar.id === 'empresas' && (
                      <a
                        href="#empresas"
                        className="inline-flex items-center justify-center w-full space-x-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all"
                      >
                        <span>Cotizar Jornada Corporativa</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                    {(activePillar.id !== 'diagnostico' && activePillar.id !== 'prevencion' && activePillar.id !== 'empresas') && (
                      <a
                        href="#contacto"
                        className="inline-flex items-center justify-center w-full space-x-2 py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs shadow-md transition-all"
                      >
                        <span>Solicitar Información o Alianza</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

