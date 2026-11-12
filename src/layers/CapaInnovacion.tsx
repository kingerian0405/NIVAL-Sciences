import React from 'react';
import { Cpu } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

interface CapaInnovacionProps {
  onSelectCapa: (id: string) => void;
}

export const CapaInnovacion: React.FC<CapaInnovacionProps> = ({ onSelectCapa }) => {
  const herramientas = [
    {
      titulo: 'Portal Institucional y Gestión Digital',
      descripcion: 'Plataforma web unificada para consulta de perfiles de laboratorio, instrucciones preanalíticas de preparación y solicitud ágil de citas y servicios corporativos.',
      estado: 'En Producción'
    },
    {
      titulo: 'Microaplicaciones de Orientación Preventiva',
      descripcion: 'Herramientas interactivas de autoevaluación diseñadas para orientar al usuario en la selección de pruebas diagnósticas según su etapa de vida y antecedentes.',
      estado: 'Fase de Consolidación'
    },
    {
      titulo: 'Interoperabilidad Diagnóstica Segura',
      descripcion: 'Protocolos de entrega digital y trazabilidad de informes clínicos con estricto resguardo de la confidencialidad y protección de datos sanitarios.',
      estado: 'En Desarrollo'
    },
    {
      titulo: 'Proyectos de Investigación Aplicada y Alianzas',
      descripcion: 'Colaboración científica con instituciones universitarias, centros de salud y entidades de investigación para la mejora continua de metodologías.',
      estado: 'Proyección Estratégica'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-16">
      
      {/* Encabezado */}
      <div className="border-b border-slate-400 pb-8">
        <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
          Capa 08 · Transformación Digital
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Innovación y Tecnología
        </h1>
        <p className="text-base text-slate-700 mt-2">
          Microaplicaciones, herramientas digitales, investigación aplicada y proyectos institucionales en evolución.
        </p>
      </div>

      {/* Espacio reservado con fondo gris para Imagen de Fondo de Tecnología */}
      <ImagePlaceholder 
        label="Espacio reservado para imagen de fondo: Ecosistema Tecnológico y Digital"
        sublabel="Herramientas digitales, plataformas de gestión clínica y proyectos de innovación científica."
        className="h-56 sm:h-72"
      />

      {/* Filosofía de la Tecnología e Innovación */}
      <section className="bg-[#dde3ec] rounded-2xl p-6 sm:p-8 border border-slate-400 space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed">
        <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm uppercase tracking-wider">
          <Cpu className="w-4 h-4 text-sky-700" />
          <span>La Tecnología al Servicio del Bienestar</span>
        </div>
        <p>
          En <strong>NIVAL Sciences</strong> concebimos la transformación digital como un medio esencial para conectar servicios, personas, empresas y conocimiento científico, reduciendo barreras de acceso y facilitando decisiones oportunas.
        </p>
        <blockquote className="border-l-4 border-amber-500 pl-4 py-1 text-slate-900 font-medium italic">
          “La tecnología conecta y facilita. La innovación permite evolucionar.”
        </blockquote>
      </section>

      {/* Microaplicaciones y Soluciones Digitales */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-950 flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
            <span>Microaplicaciones y Herramientas Digitales</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 mt-1">
            Soluciones en desarrollo y despliegue dentro del ecosistema tecnológico:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {herramientas.map((h, i) => (
            <div key={i} className="bg-[#dde3ec] rounded-2xl border border-slate-400 p-6 sm:p-7 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="font-mono text-slate-500 font-bold">0{i + 1}</span>
                  <span className="font-semibold text-sky-900 bg-sky-100 px-2 py-0.5 rounded-md border border-sky-300">
                    {h.estado}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-950">
                  {h.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
                  {h.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navegación al final de la capa */}
      <div className="pt-8 border-t border-slate-400 flex justify-between items-center text-xs">
        <button
          onClick={() => {
            onSelectCapa('formacion');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          &larr; Capa 07 · Formación y Capacitación
        </button>

        <button
          onClick={() => {
            onSelectCapa('contacto');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-bold text-slate-950 hover:text-amber-600 cursor-pointer"
        >
          Siguiente: Capa 09 · Contacto y Atención &rarr;
        </button>
      </div>

    </div>
  );
};

