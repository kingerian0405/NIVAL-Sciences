import React from 'react';
import { Target, Eye, ShieldCheck, Layers, Award, Lightbulb, Zap, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

interface CapaNosotrosProps {
  onSelectCapa: (id: string) => void;
}

export const CapaNosotros: React.FC<CapaNosotrosProps> = ({ onSelectCapa }) => {
  const valores = [
    {
      nombre: 'Calidad',
      descripcion: 'Rigor técnico, controles analíticos estrictos y mejora continua en todos los procesos.',
      icon: <Award className="w-5 h-5 text-sky-700" />
    },
    {
      nombre: 'Confiabilidad',
      descripcion: 'Doble verificación, trazabilidad y veracidad técnica en cada resultado y asesoría.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />
    },
    {
      nombre: 'Eficiencia',
      descripcion: 'Agilidad operativa, tiempos óptimos de respuesta y accesibilidad a los servicios.',
      icon: <Zap className="w-5 h-5 text-amber-600" />
    },
    {
      nombre: 'Innovación',
      descripcion: 'Herramientas digitales, microaplicaciones y metodologías fundamentadas en la ciencia.',
      icon: <Lightbulb className="w-5 h-5 text-violet-700" />
    },
    {
      nombre: 'Responsabilidad',
      descripcion: 'Compromiso ético, respeto normativo, protección de datos y confidencialidad médica.',
      icon: <HeartHandshake className="w-5 h-5 text-rose-700" />
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-16">
      
      {/* Encabezado de la Capa */}
      <div className="border-b border-slate-200 pb-8 space-y-2">
        <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-wider block">
          Capa 02 · Identidad Institucional
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Nosotros
        </h1>
        <p className="text-amber-800 text-base font-semibold italic">
          “La visión que necesitas para vivir como sueñas”
        </p>
        <p className="text-sm text-slate-600">
          Historia, misión, visión, valores y modelo de trabajo ecosistémico de NIVAL Sciences.
        </p>
      </div>

      {/* Espacio reservado con fondo gris para Imagen Institucional / Equipo */}
      <ImagePlaceholder 
        label="Espacio reservado para fotografía institucional de fondo"
        sublabel="Equipo directivo, panel científico o instalaciones del ecosistema NIVAL Sciences."
        className="h-56 sm:h-72"
      />

      {/* 1. Concepto Institucional */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-950 flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
          <span>1. Concepto Institucional</span>
        </h2>
        
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            <strong>NIVAL Sciences</strong> es una organización orientada al desarrollo de soluciones integrales de salud, asesoría y gestión del conocimiento. Su actividad articula servicios diagnósticos, prevención, acompañamiento y asesoría a personas naturales y empresas, formación, capacitación e innovación tecnológica.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium">
            El laboratorio clínico constituye su primera unidad operativa, pero no representa el límite de la organización. NIVAL se proyecta como un ecosistema capaz de integrar diferentes servicios y soluciones para responder a las necesidades de individuos, organizaciones e instituciones.
          </div>
        </div>
      </section>

      {/* 2. Misión y Visión */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Misión */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center border border-sky-100">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">
              2. Misión
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Desarrollar y ofrecer soluciones integrales mediante servicios diagnósticos confiables, asesoría especializada a personas naturales y empresas, programas de prevención, formación científica e innovación tecnológica; integrando conocimiento, talento humano y herramientas digitales para facilitar decisiones oportunas, fortalecer capacidades y contribuir al bienestar individual, organizacional y colectivo.
            </p>
          </div>
        </div>

        {/* Visión */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-100">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">
              3. Visión
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ser una organización referente en el desarrollo de un ecosistema integral de salud y soluciones especializadas, reconocido por su excelencia científica, capacidad de asesoría, innovación tecnológica y compromiso con la prevención, la formación y el bienestar de las personas y las organizaciones.
            </p>
          </div>
        </div>

      </section>

      {/* 3. Objetivo General */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-950 flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
          <span>4. Objetivo General</span>
        </h2>

        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-3">
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            Consolidar a <strong>NIVAL Sciences</strong> como una organización integral de servicios y soluciones, desarrollando progresivamente un ecosistema que integre diagnóstico clínico, asesoría, prevención, educación, capacitación, tecnología y gestión del conocimiento, bajo principios de calidad, confiabilidad, eficiencia, innovación y responsabilidad.
          </p>
        </div>
      </section>

      {/* 4. Valores Institucionales */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-950 flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
          <span>5. Valores Rectores</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {valores.map((v, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="mb-3">{v.icon}</div>
                <h4 className="text-sm font-bold text-slate-950">{v.nombre}</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{v.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Modelo de Trabajo Ecosistémico */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-950 flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
          <span>6. Modelo de Trabajo Ecosistémico</span>
        </h2>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            El modelo de trabajo de NIVAL Sciences no opera como unidades aisladas. Se articula bajo un principio de <strong>continuidad asistencial e informativa</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-950 text-xs uppercase mb-1">Interoperabilidad</h4>
              <p className="text-xs text-slate-600">
                La información clínica diagnóstica alimenta de forma segura las pautas de prevención y las asesorías especializadas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-950 text-xs uppercase mb-1">Doble Verificación</h4>
              <p className="text-xs text-slate-600">
                Aseguramiento de la confiabilidad analítica en procesos críticos antes de emitir cualquier dictamen o informe.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-950 text-xs uppercase mb-1">Orientación Integral</h4>
              <p className="text-xs text-slate-600">
                Respuestas adaptadas tanto para la persona y su familia como para comités de salud ocupacional de empresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navegación al final de la capa */}
      <div className="pt-8 border-t border-slate-200 flex justify-between items-center text-xs">
        <button
          onClick={() => {
            onSelectCapa('inicio');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          &larr; Volver a Presentación Institucional
        </button>

        <button
          onClick={() => {
            onSelectCapa('laboratorio');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-bold text-slate-950 hover:text-amber-600 cursor-pointer"
        >
          Siguiente: Capa 03 · Laboratorio Clínico &rarr;
        </button>
      </div>

    </div>
  );
};

