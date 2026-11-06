import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Layers, 
  Workflow, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  BarChart3,
  Globe2,
  ArrowRight
} from 'lucide-react';
import { ROADMAP_STAGES } from '../data/ecosystemData';

interface InnovationTechProps {
  onOpenContact: (tab?: string) => void;
}

export const InnovationTech: React.FC<InnovationTechProps> = ({ onOpenContact }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section id="innovacion" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-sky-700" />
            <span>Innovación, Tecnología & Visión a Futuro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Metas y Proyección por Etapas
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Un plan estructurado de crecimiento progresivo y sostenible fundamentado en la ciencia, la calidad técnica y la transformación digital.
          </p>
        </div>

        {/* Las 3 Etapas Institucionales (Timeline Interactivo) */}
        <div className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ROADMAP_STAGES.map((item, index) => {
              const isActive = activeStage === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStage(index)}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-800 shadow-xl ring-2 ring-amber-400/50'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        isActive ? 'bg-amber-400/20 text-amber-300 border-amber-400/30' : item.badgeColor
                      }`}>
                        {item.period}
                      </span>
                      <span className={`text-xs font-bold ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                        {item.stage}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>

                    <p className={`text-xs mt-2 leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs font-semibold">
                    <span className={isActive ? 'text-amber-400' : 'text-sky-700'}>
                      {isActive ? 'Viendo hitos clave' : 'Ver hitos de esta etapa'}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400 translate-x-1' : 'text-slate-400'} transition-transform`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Panel con los hitos detallados de la etapa seleccionada */}
          <div className="mt-8 rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                  {ROADMAP_STAGES[activeStage].stage} ({ROADMAP_STAGES[activeStage].period})
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {ROADMAP_STAGES[activeStage].title}
                </h3>
              </div>
              <div className="text-xs font-bold text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                {ROADMAP_STAGES[activeStage].milestones.length} Objetivos Estratégicos
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {ROADMAP_STAGES[activeStage].milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                    {milestone}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 max-w-xl">
                ¿Interesado en participar como institución aliada, centro formativo o socio estratégico en el desarrollo de estas etapas?
              </p>
              <button
                onClick={() => onOpenContact('alianzas')}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
              >
                Proponer Alianza Estratégica
              </button>
            </div>
          </div>
        </div>

        {/* Indicadores de Gestión Institucional */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xl font-extrabold text-slate-900">100%</div>
            <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Control de Calidad</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xl font-extrabold text-slate-900">7 Áreas</div>
            <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Alcance Institucional</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xl font-extrabold text-slate-900">&lt; 24h</div>
            <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Tiempos de Respuesta</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xl font-extrabold text-slate-900">B2B + B2C</div>
            <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Atención Dual</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xl font-extrabold text-slate-900">Digital</div>
            <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Microaplicaciones</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xl font-extrabold text-slate-900">Ética</div>
            <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Bioética Sanitaria</div>
          </div>
        </div>

      </div>
    </section>
  );
};

