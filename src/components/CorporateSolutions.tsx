import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  Calculator, 
  ArrowRight, 
  TrendingUp, 
  Briefcase,
  FileSpreadsheet,
  Award
} from 'lucide-react';
import { CORPORATE_PLANS } from '../data/ecosystemData';

interface CorporateSolutionsProps {
  onOpenContact: (tab?: string, prefillMessage?: string) => void;
}

export const CorporateSolutions: React.FC<CorporateSolutionsProps> = ({ onOpenContact }) => {
  const [employeeCount, setEmployeeCount] = useState<number>(45);
  const [selectedPlanType, setSelectedPlanType] = useState<string>('jornadas');

  const handleRequestQuote = () => {
    const planName = selectedPlanType === 'jornadas' 
      ? 'Jornadas de Salud In-Company' 
      : selectedPlanType === 'ocupacional' 
        ? 'Batería Pre-empleo y Ocupacional' 
        : 'Convenio Continuo para Colaboradores';
    
    const message = `Solicitud de cotización corporativa: Plan "${planName}" para un estimado de ${employeeCount} colaboradores.`;
    onOpenContact('empresas', message);
  };

  return (
    <section id="empresas" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-amber-700" />
              <span>Soluciones Corporativas B2B</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Salud, Prevención y Bienestar para Organizaciones
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Diseñamos soluciones ajustadas al objeto y habilitación de cada empresa: jornadas in-company, cumplimiento de normativas de salud laboral y programas continuos de prevención.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => onOpenContact('empresas')}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center space-x-2"
            >
              <span>Solicitar Reunión o Propuesta</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>

        {/* Pilares de Valor para la Empresa */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Continuidad Operativa</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Realizamos la toma de muestras in-situ con rapidez para evitar ausentismos, desplazamientos del personal y pérdidas de horas productivas.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Rigor y Respaldo Legal</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Exámenes pre-empleo y periódicos con doble verificación analítica y formatos acordes a los requerimientos de seguridad laboral vigentes.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Informe Epidemiológico Global</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Entregamos a la gerencia un informe consolidado anonimizado sobre factores de riesgo de la plantilla para planificar intervenciones efectivas.
            </p>
          </div>
        </div>

        {/* Planes Corporativos Destacados */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CORPORATE_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="rounded-3xl bg-white border border-slate-200 p-7 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider mb-4 border border-slate-200">
                  {plan.badge}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {plan.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {plan.description}
                </p>

                <div className="mt-5 pt-5 border-t border-slate-100">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Incluye para su organización:
                  </h4>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <button
                  onClick={() => onOpenContact('empresas', `Interés en el plan corporativo: ${plan.title}`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-sky-800 text-xs font-bold border border-slate-200 transition-colors"
                >
                  Solicitar Propuesta Detallada &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Calculadora / Estimador Corporativo Interactivo */}
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-10 shadow-2xl border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulador de Propuesta para Empresas</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Calcula una propuesta estimada para tu equipo
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Ajusta el número de colaboradores de tu nómina y selecciona la modalidad requerida para recibir una propuesta formal y agenda técnica en menos de 24 horas.
              </p>

              {/* Slider de colaboradores */}
              <div className="space-y-2 bg-slate-800/80 p-4 rounded-2xl border border-slate-700 max-w-xl">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300">Número de colaboradores:</span>
                  <span className="font-extrabold text-amber-400 text-lg">{employeeCount} colaboradores</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="5"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="w-full accent-amber-400 h-2 bg-slate-700 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>10 (Pymes)</span>
                  <span>100 (Medianas)</span>
                  <span>300+ (Corporaciones)</span>
                </div>
              </div>

              {/* Selector de Servicio */}
              <div className="flex flex-wrap gap-2 max-w-xl">
                <button
                  onClick={() => setSelectedPlanType('jornadas')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                    selectedPlanType === 'jornadas'
                      ? 'bg-sky-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Jornada In-Company (Extracción en sede)
                </button>

                <button
                  onClick={() => setSelectedPlanType('ocupacional')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                    selectedPlanType === 'ocupacional'
                      ? 'bg-sky-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Batería Ocupacional / Pre-empleo
                </button>

                <button
                  onClick={() => setSelectedPlanType('convenio')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                    selectedPlanType === 'convenio'
                      ? 'bg-sky-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Convenio Colectivo Continuo
                </button>
              </div>

            </div>

            {/* Resumen del Estimador */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-800/90 border border-slate-700 p-6 space-y-4 shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                  <span className="text-xs uppercase font-bold text-slate-400">Resumen Estimado</span>
                  <span className="text-xs font-bold text-emerald-400">Tarifa Corporativa</span>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Alcance:</span>
                    <strong className="text-white">{employeeCount} colaboradores</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Modalidad:</span>
                    <strong className="text-white">
                      {selectedPlanType === 'jornadas' ? 'In-Company / On-site' : selectedPlanType === 'ocupacional' ? 'Ingreso & Control' : 'Convenio 365 días'}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Doble Verificación:</span>
                    <strong className="text-amber-400">Incluida 100%</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Informe Epidemiológico:</span>
                    <strong className="text-sky-400">Incluido para RRHH</strong>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700">
                  <button
                    onClick={handleRequestQuote}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Generar Cotización Formal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    Respuesta garantizada en horario de oficina por nuestro equipo corporativo.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

