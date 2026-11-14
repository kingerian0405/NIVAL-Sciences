import React from 'react';
import { Cpu, Sparkles, Layers, ShieldCheck, Database, ArrowRight } from 'lucide-react';

interface CapaInnovacionProps {
  onSelectCapa: (id: string) => void;
}

export const CapaInnovacion: React.FC<CapaInnovacionProps> = ({ onSelectCapa }) => {
  const herramientas = [
    {
      titulo: 'Portal Institucional y Gestión Digital',
      descripcion: 'Plataforma web unificada para consulta de perfiles de laboratorio, instrucciones preanalíticas de preparación y solicitud ágil de citas y servicios corporativos.',
      estado: 'En Producción',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      titulo: 'Microaplicaciones de Orientación Preventiva',
      descripcion: 'Herramientas interactivas de autoevaluación diseñadas para orientar al usuario en la selección de pruebas diagnósticas según su etapa de vida y antecedentes.',
      estado: 'Fase de Consolidación',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      titulo: 'Interoperabilidad Diagnóstica Segura',
      descripcion: 'Protocolos de entrega digital y trazabilidad de informes clínicos con estricto resguardo de la confidencialidad y protección de datos sanitarios.',
      estado: 'En Desarrollo',
      badgeColor: 'bg-sky-100 text-sky-900 border-sky-300'
    },
    {
      titulo: 'Proyectos de Investigación Aplicada y Alianzas',
      descripcion: 'Colaboración científica con instituciones universitarias, centros de salud y entidades de investigación para la mejora continua de metodologías.',
      estado: 'Proyección Estratégica',
      badgeColor: 'bg-violet-100 text-violet-900 border-violet-300'
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
              <span className="inline-block bg-nival-gold text-slate-950 text-xs sm:text-sm font-bold px-3 py-1.5 rounded shadow-2xs">
                Transformación Digital · Ecosistema Tecnológico de Salud
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-2 font-normal">
              Microaplicaciones, herramientas digitales de gestión clínica, interoperabilidad segura e investigación aplicada para acercar la ciencia médica a las decisiones cotidianas.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#soluciones-digitales"
                className="px-6 py-2.5 rounded-lg bg-nival-gold hover:bg-nival-gold-hover text-slate-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer inline-block"
              >
                Conocer Soluciones Digitales
              </a>

              <button
                onClick={() => {
                  onSelectCapa('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-lg bg-nival-dark hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Proponer Proyecto de Innovación
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FILOSOFÍA DE INNOVACIÓN: LA TECNOLOGÍA AL SERVICIO DEL BIENESTAR */}
      <section className="bg-nival-section-alt py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          
          <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-sky-700" />
            <span>Transformación Digital con Enfoque Humano</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            La tecnología al servicio del bienestar
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            En <strong>NIVAL Sciences</strong> concebimos la transformación digital como un medio esencial para conectar servicios, personas, empresas y conocimiento científico, reduciendo barreras de acceso y facilitando decisiones oportunas.
          </p>

          <div className="p-5 sm:p-6 rounded-2xl border border-slate-300/80 bg-nival-card-tint text-slate-950 shadow-2xs">
            <blockquote className="border-l-4 border-amber-600 pl-4 py-1 text-xs sm:text-sm text-slate-900 font-semibold italic">
              “La tecnología conecta y facilita. La innovación permite evolucionar.”
            </blockquote>
          </div>

        </div>
      </section>

      {/* 3. MICROAPLICACIONES Y HERRAMIENTAS DIGITALES */}
      <section id="soluciones-digitales" className="bg-nival-section-light py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Microaplicaciones y Herramientas Digitales
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Plataformas activas y proyectos tecnológicos en despliegue institucional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {herramientas.map((h, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono font-bold text-slate-400">0{i + 1}</span>
                    <span className={`font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-full border ${h.badgeColor}`}>
                      {h.estado}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 leading-snug">
                    {h.titulo}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                    {h.descripcion}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Arquitectura NIVAL</span>
                  <button
                    onClick={() => {
                      onSelectCapa('contacto');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-bold text-amber-700 hover:text-amber-800 cursor-pointer inline-flex items-center space-x-1"
                  >
                    <span>Consultar detalles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INVESTIGACIÓN Y DESARROLLO (SECCIÓN OSCURA CARBÓN TIPO INICIO) */}
      <section className="bg-nival-dark py-16 sm:py-20 px-4 sm:px-6 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-nival-gold text-slate-950 flex items-center justify-center mx-auto shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Investigación Aplicada y Alianzas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Evolución Científica y Metodológica Continua
            </h2>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-slate-700/60 shadow-lg text-left">
            <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
              NIVAL Sciences colabora activamente con centros asistenciales, investigadores y entidades académicas para evaluar nuevas metodologías analíticas, optimizar tiempos de respuesta e implementar herramientas de interoperabilidad clínica que protejan la privacidad del paciente bajo los más altos estándares de ciberseguridad.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
