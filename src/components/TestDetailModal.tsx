import React from 'react';
import { 
  X, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Microscope,
  FileCheck2,
  Droplet
} from 'lucide-react';
import { LabTest } from '../types';

interface TestDetailModalProps {
  test: LabTest | null;
  onClose: () => void;
  onSchedule: (testName: string) => void;
}

export const TestDetailModal: React.FC<TestDetailModalProps> = ({
  test,
  onClose,
  onSchedule,
}) => {
  if (!test) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola NIVAL Sciences, deseo consultar disponibilidad y agendar la prueba: "${test.name}".`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Modal */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/30">
            <Microscope className="w-3.5 h-3.5" />
            <span>{test.categoryLabel}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold pr-8">
            {test.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            {test.description}
          </p>
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-6 sm:p-7 space-y-6">
          
          {/* Ficha Rápida: Parámetros Preanalíticos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 flex items-start space-x-3">
              <Clock className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-900 block">Ayuno Requerido</span>
                <span className="text-sm font-bold text-sky-950">
                  {test.fastingHours > 0 ? `${test.fastingHours} Horas continuas` : 'No requiere ayuno'}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-100 flex items-start space-x-3">
              <Droplet className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">Tipo de Muestra</span>
                <span className="text-xs font-bold text-amber-950">{test.sampleType}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block">Tiempo de Entrega</span>
                <span className="text-sm font-bold text-emerald-950">{test.turnaroundTime}</span>
              </div>
            </div>
          </div>

          {/* Guía de Preparación al Paciente */}
          <div>
            <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm mb-3">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Instrucciones de Preparación Previa</span>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
              <ul className="space-y-2.5">
                {test.preparationInstructions.map((instruction, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Utilidad y Enfoque Clínico */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              ¿Para quién se recomienda esta prueba?
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 bg-slate-100/70 p-3 rounded-xl border border-slate-200">
              {test.recommendedFor}
            </p>
          </div>

          {/* Calidad NIVAL */}
          <div className="flex items-center space-x-3 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-dashed border-slate-300">
            <FileCheck2 className="w-5 h-5 text-sky-600 shrink-0" />
            <span>
              Procesamiento bajo protocolo de <strong>doble verificación analítica</strong> y validación por bioanalistas calificados.
            </span>
          </div>

        </div>

        {/* Footer del Modal con Acciones */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/584120000000?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-200 text-xs font-semibold transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                onSchedule(test.name);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold shadow-md transition-all"
            >
              Agendar en Sede o Domicilio
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

