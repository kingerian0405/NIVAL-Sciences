import React from 'react';
import { 
  Microscope, 
  ShieldCheck, 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  FileText,
  Lock
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Top Banner de Compromiso Bioético */}
      <div className="bg-slate-900/80 border-b border-slate-850 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center space-x-2 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-[11px] sm:text-xs">
              <strong className="text-white">Aviso Sanitario y Legal:</strong> Los servicios diagnósticos, preventivos y de asesoría se prestan con estricto apego a las competencias y regulaciones sanitarias aplicables.
            </span>
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Contenido Principal del Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Columna Marca e Identidad (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-850 flex items-center justify-center border border-slate-700">
                <Microscope className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="flex items-baseline space-x-1.5 leading-none">
                  <span className="text-xl font-extrabold text-white tracking-tight">NIVAL</span>
                  <span className="text-xl font-bold text-sky-400 tracking-wider">SCIENCES</span>
                </div>
                <div className="h-0.5 w-full bg-gradient-to-r from-amber-500 to-amber-300 mt-1 rounded-full"></div>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Ecosistema integral de salud, asesoría, prevención, formación e innovación. Trabajamos con rigor científico y cercanía humana para que personas y organizaciones tomen decisiones oportunas de salud.
            </p>

            <div className="text-[11px] text-amber-300 font-semibold tracking-wide">
              CIENCIA · SALUD · CONOCIMIENTO · INNOVACIÓN
            </div>
          </div>

          {/* Columna Navegación Rápida (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Ecosistema y Servicios
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#laboratorio" className="hover:text-amber-300 transition-colors">
                  Laboratorio Clínico y Pruebas
                </a>
              </li>
              <li>
                <a href="#prevencion" className="hover:text-amber-300 transition-colors">
                  Orientador Preventivo de Salud
                </a>
              </li>
              <li>
                <a href="#empresas" className="hover:text-amber-300 transition-colors">
                  Soluciones Corporativas B2B
                </a>
              </li>
              <li>
                <a href="#asesoria" className="hover:text-amber-300 transition-colors">
                  Asesoría en Salud y Bienestar
                </a>
              </li>
              <li>
                <a href="#formacion" className="hover:text-amber-300 transition-colors">
                  Formación Continua y Campus Digital
                </a>
              </li>
              <li>
                <a href="#innovacion" className="hover:text-amber-300 transition-colors">
                  Proyección por Etapas y Metas
                </a>
              </li>
            </ul>
          </div>

          {/* Columna Guía del Paciente (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Para el Paciente
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#laboratorio" className="hover:text-amber-300 transition-colors">
                  Horas de Ayuno
                </a>
              </li>
              <li>
                <a href="#laboratorio" className="hover:text-amber-300 transition-colors">
                  Preparación de Muestras
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-amber-300 transition-colors">
                  Toma a Domicilio
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-amber-300 transition-colors">
                  Consulta de Resultados
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-amber-300 transition-colors">
                  Doble Verificación
                </a>
              </li>
            </ul>
          </div>

          {/* Columna Contacto Directo (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Atención y Canales
            </h4>
            <p className="text-slate-400 text-xs">
              <strong>Atención de Muestras:</strong><br />
              Lunes a Viernes: 7:00 AM – 4:00 PM<br />
              Sábados: 7:30 AM – 1:00 PM
            </p>
            <div className="pt-1 space-y-1.5 text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+58 (412) 000-0000</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>contacto@nivalsciences.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Separador y Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong>NIVAL Sciences</strong>. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Lock className="w-3 h-3 text-slate-400" />
              <span>Privacidad & Confidencialidad Sanitaria</span>
            </span>
            <span>•</span>
            <span className="text-slate-400">Ciencia para la vida</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

