import React from 'react';
import { 
  Compass, 
  UserCheck, 
  Building, 
  CheckCircle2, 
  ShieldAlert, 
  ArrowRight,
  FileText,
  HeartPulse
} from 'lucide-react';

interface AdvisoryServicesProps {
  onOpenContact: (tab?: string) => void;
}

export const AdvisoryServices: React.FC<AdvisoryServicesProps> = ({ onOpenContact }) => {
  return (
    <section id="asesoria" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Gestión del Conocimiento y Acompañamiento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Asesoría que Transforma Información en Decisiones
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Un resultado clínico cobra verdadero valor cuando se comprende. Brindamos acompañamiento para que personas y empresas conozcan sus riesgos y elijan las mejores rutas de acción.
          </p>
        </div>

        {/* Las Dos Rutas de Asesoría */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. Asesoría a Personas Naturales */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                Atención Individual y Familiar
              </span>

              <h3 className="text-2xl font-bold text-slate-900">
                Orientación en Salud Preventiva
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Acompañamos a nuestros usuarios para que entiendan el significado de sus indicadores de laboratorio, reconozcan factores modificables y sepan a qué especialista acudir oportunamente.
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="flex items-start space-x-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Explicación clara y comprensible de los parámetros analizados.</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Orientación sobre periodicidad recomendada para futuros controles.</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Canalización responsable hacia médicos tratantes y especialistas.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200">
              <button
                onClick={() => onOpenContact('paciente')}
                className="inline-flex items-center space-x-2 text-xs font-bold text-sky-700 hover:text-sky-900 transition-colors"
              >
                <span>Solicitar orientación individual</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. Asesoría a Empresas y Organizaciones */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Consultoría B2B
              </span>

              <h3 className="text-2xl font-bold text-slate-900">
                Consultoría en Salud Laboral y Bienestar
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Asesoramos a gerencias de Recursos Humanos y Comités de Seguridad y Salud en el Trabajo en la evaluación de necesidades, prevención de riesgos y diseño de programas a la medida.
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="flex items-start space-x-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>Diagnóstico inicial de la matriz de riesgos biológicos y de salud de la empresa.</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>Programas específicos para mitigar el ausentismo laboral derivado de enfermedades crónicas.</span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>Acompañamiento en el cumplimiento estricto de las leyes y normas ocupacionales.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200">
              <button
                onClick={() => onOpenContact('empresas')}
                className="inline-flex items-center space-x-2 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors"
              >
                <span>Agendar consultoría corporativa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Principio Ético de Actuación y Responsabilidad */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-100 border border-slate-300/70 flex items-start space-x-4">
          <ShieldAlert className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-900">Principio de Responsabilidad Profesional NIVAL Sciences:</strong> Toda actividad diagnóstica, formativa y de asesoría se ofrece en riguroso apego a las competencias profesionales y normas sanitarias aplicables. Diferenciamos con absoluta claridad la información educativa y la orientación preventiva de los actos médicos regulados y el diagnóstico clínico prescriptivo individual.
          </div>
        </div>

      </div>
    </section>
  );
};

