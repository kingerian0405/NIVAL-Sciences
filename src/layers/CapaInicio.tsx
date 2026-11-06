import React from 'react';
import { 
  ArrowRight, 
  Microscope, 
  ShieldCheck, 
  Compass, 
  Building2, 
  GraduationCap, 
  Cpu, 
  Phone,
  FileText
} from 'lucide-react';
import { CAPAS } from './layerData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

interface CapaInicioProps {
  onSelectCapa: (id: string) => void;
}

export const CapaInicio: React.FC<CapaInicioProps> = ({ onSelectCapa }) => {
  const layerIcons: Record<string, React.ReactNode> = {
    'nosotros': <FileText className="w-5 h-5 text-slate-700" />,
    'laboratorio': <Microscope className="w-5 h-5 text-sky-700" />,
    'prevencion': <ShieldCheck className="w-5 h-5 text-emerald-700" />,
    'asesoria-personas': <Compass className="w-5 h-5 text-amber-700" />,
    'soluciones-empresas': <Building2 className="w-5 h-5 text-indigo-700" />,
    'formacion': <GraduationCap className="w-5 h-5 text-violet-700" />,
    'innovacion': <Cpu className="w-5 h-5 text-cyan-700" />,
    'contacto': <Phone className="w-5 h-5 text-slate-700" />
  };

  return (
    <div className="space-y-16 py-12">
      
      {/* Portada Institucional: Estructura Editorial Equilibrada */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna de Contenido Institucional y Slogan (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span className="uppercase tracking-wider font-mono text-[10px]">Capa 01 · Presentación Institucional</span>
            </div>

            {/* Slogan Oficial */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-serif leading-[1.18] italic">
              “La visión que necesitas para vivir como sueñas”
            </h1>

            {/* Subtítulo Oficial */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 leading-snug">
              Ecosistema integral de salud, asesoría, prevención, formación e innovación.
            </p>

            {/* Cuarteto Fundacional */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-widest text-slate-600">
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">CIENCIA</span>
              <span className="text-slate-400">·</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">SALUD</span>
              <span className="text-slate-400">·</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">CONOCIMIENTO</span>
              <span className="text-slate-400">·</span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">INNOVACIÓN</span>
            </div>

            {/* Premisa Central */}
            <div className="bg-white border-l-4 border-amber-500 rounded-2xl p-5 sm:p-6 shadow-2xs border border-slate-200/80">
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                <strong className="font-semibold text-slate-950">NIVAL Sciences no espera a que las personas enfermen para acercarse a ellas.</strong> Trabaja también para que las personas y las organizaciones comprendan mejor sus necesidades, conozcan sus riesgos, accedan a información confiable y puedan tomar decisiones oportunas.
              </p>
            </div>

          </div>

          {/* Columna Derecha: Fondo Gris Reservado para Imagen Institucional (5 cols) */}
          <div className="lg:col-span-5">
            <ImagePlaceholder 
              label="Espacio para fotografía institucional de fondo"
              sublabel="Instalaciones centrales, equipo de bioanálisis o ambiente científico de NIVAL Sciences."
              className="h-80 sm:h-96 w-full shadow-xs"
            />
          </div>

        </div>
      </section>

      {/* Secuencia Conceptual Fundacional */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Articulación del Ecosistema
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
            <span className="block font-bold text-slate-900 text-sm">El diagnóstico</span>
            <span className="text-xs text-slate-500 mt-1 block">aporta información</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
            <span className="block font-bold text-slate-900 text-sm">La prevención</span>
            <span className="text-xs text-slate-500 mt-1 block">ayuda a anticiparse</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
            <span className="block font-bold text-slate-900 text-sm">La asesoría</span>
            <span className="text-xs text-slate-500 mt-1 block">transforma en soluciones</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
            <span className="block font-bold text-slate-900 text-sm">La formación</span>
            <span className="text-xs text-slate-500 mt-1 block">desarrolla capacidades</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
            <span className="block font-bold text-slate-900 text-sm">La tecnología</span>
            <span className="text-xs text-slate-500 mt-1 block">conecta y facilita</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
            <span className="block font-bold text-slate-900 text-sm">La innovación</span>
            <span className="text-xs text-slate-500 mt-1 block">permite evolucionar</span>
          </div>
        </div>
      </section>

      {/* Directorio de Acceso a las Principales Soluciones (Las 8 capas siguientes) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        <div className="border-t border-slate-200 pt-10">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
              Estructura Institucional y Soluciones
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Acceso directo a las capas estratégicas definidas en la proyección de NIVAL Sciences:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CAPAS.filter(c => c.id !== 'inicio').map((capa) => (
              <button
                key={capa.id}
                onClick={() => {
                  onSelectCapa(capa.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-amber-600 transition-colors">
                      Capa {capa.number}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      {layerIcons[capa.id] || <FileText className="w-5 h-5 text-slate-600" />}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-950">
                    {capa.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {capa.subtitle}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-amber-600 transition-colors">
                  <span>Acceder a esta capa</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

