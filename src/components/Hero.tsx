import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Users, 
  Microscope,
  Activity,
  Award
} from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
  onOpenContact: (tab?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz, onOpenContact }) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-16 pb-24 lg:pt-20 lg:pb-32">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Mensaje Central */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge Institucional */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
                Identidad Estratégica & Proyección Digital
              </span>
            </div>

            {/* Titular Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Ciencia y precisión para <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-amber-300">anticiparse a la salud</span> y fortalecer organizaciones.
            </h1>

            {/* Filosofía Destacada */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              <strong className="text-white font-medium">NIVAL Sciences no espera a que las personas enfermen para acercarse a ellas.</strong> Articulamos servicios diagnósticos de alta fidelidad, asesoría preventiva y gestión del conocimiento en un ecosistema de salud continuo.
            </p>

            {/* CTAs Principales */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#laboratorio"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white font-semibold text-sm shadow-lg shadow-sky-900/30 hover:shadow-sky-800/40 transition-all group"
              >
                <Microscope className="w-4 h-4 text-sky-200" />
                <span>Explorar Laboratorio y Pruebas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/30 text-amber-300 hover:text-amber-200 font-semibold text-sm backdrop-blur-xs transition-all shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Orientador Preventivo Interactivo</span>
              </button>
            </div>

            {/* Indicadores de Confianza y Calidad */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Doble Verificación</h4>
                  <p className="text-xs text-slate-400">Control analítico riguroso</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Enfoque Proactivo</h4>
                  <p className="text-xs text-slate-400">Prevención antes del síntoma</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 col-span-2 sm:col-span-1">
                <Building2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Soluciones B2B</h4>
                  <p className="text-xs text-slate-400">Programas corporativos</p>
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Interactiva del Ecosistema NIVAL */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              
              <div className="flex items-center justify-between pb-5 border-b border-slate-700/60">
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-amber-400">Ecosistema NIVAL</span>
                  <h3 className="text-xl font-bold text-white">Unidades y Soluciones</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-sky-400" />
                </div>
              </div>

              {/* Los 3 Accesos Rápidos según tipo de visitante */}
              <div className="mt-6 space-y-3.5">
                
                {/* 1. Personas y Familias */}
                <div className="group p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800/90 border border-slate-700/50 hover:border-sky-500/40 transition-all cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById('laboratorio');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                          Para Personas y Familias
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Exámenes de rutina, perfiles preventivos y toma a domicilio.
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* 2. Empresas e Instituciones */}
                <div className="group p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800/90 border border-slate-700/50 hover:border-amber-500/40 transition-all cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById('empresas');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                          Para Empresas y Organizaciones
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Jornadas in-company, salud ocupacional y convenios colectivos.
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

                {/* 3. Profesionales y Educación */}
                <div className="group p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800/90 border border-slate-700/50 hover:border-emerald-500/40 transition-all cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById('formacion');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                          Formación y Alianzas Científicas
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Capacitación continua, bioanálisis y convenios interinstitucionales.
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

              </div>

              {/* Callout de Contacto Directo */}
              <div className="mt-6 pt-5 border-t border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-xs text-slate-300">Canales de atención habilitados</span>
                </div>
                <button
                  onClick={() => onOpenContact('paciente')}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  Agendar o Cotizar &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

