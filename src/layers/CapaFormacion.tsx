import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ShieldAlert, 
  Laptop,
  Award
} from 'lucide-react';
import { TRAINING_COURSES } from '../data/ecosystemData';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

interface CapaFormacionProps {
  onSelectCapa: (id: string) => void;
}

export const CapaFormacion: React.FC<CapaFormacionProps> = ({ onSelectCapa }) => {
  const [filter, setFilter] = useState<string>('todos');

  const filtered = TRAINING_COURSES.filter(
    c => filter === 'todos' || c.targetAudience === filter
  );

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-16">
      
      {/* Encabezado */}
      <div className="border-b border-slate-300 pb-8">
        <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
          Capa 07 · Gestión del Conocimiento
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Formación y Capacitación
        </h1>
        <p className="text-base text-slate-600 mt-2">
          Cursos, talleres técnicos, seminarios de actualización científica, calendario académico y proyección del campus digital.
        </p>
      </div>

      {/* Espacio reservado con fondo gris para Imagen de Fondo de Formación */}
      <ImagePlaceholder 
        label="Espacio reservado para imagen de fondo: Espacios de Capacitación y Actualización"
        sublabel="Talleres teóricos, actualización científica a bioanalistas y actividades comunitarias."
        className="h-56 sm:h-72"
      />

      {/* Filosofía del Pilar de Formación */}
      <section className="bg-[#f4f6f9] rounded-2xl p-6 sm:p-8 border border-slate-300 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
        <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm uppercase tracking-wider">
          <GraduationCap className="w-4 h-4 text-violet-700" />
          <span>Desarrollo de Capacidades Colectivas</span>
        </div>
        <p>
          En <strong>NIVAL Sciences</strong> la educación en salud es un motor de transformación. Concebimos programas de formación dirigidos a tres audiencias fundamentales: profesionales del área de la salud, equipos de trabajo corporativos y la comunidad en general.
        </p>
        <blockquote className="border-l-4 border-amber-500 pl-4 py-1 text-slate-900 font-medium italic">
          “La formación desarrolla capacidades.”
        </blockquote>
      </section>

      {/* Catálogo Inicial de Cursos y Talleres */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-950 flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
              <span>Catálogo de Cursos y Talleres</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Programas diseñados para fortalecer el rigor analítico y la cultura de prevención:
            </p>
          </div>

          {/* Filtros */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            {['todos', 'Profesionales', 'Empresas', 'Comunidad'].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  filter === item
                    ? 'bg-slate-900 text-white'
                    : 'bg-[#f4f6f9] text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                {item === 'todos' ? 'Todos' : item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <div key={course.id} className="bg-[#f4f6f9] rounded-2xl border border-slate-300 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px]">
                  <span className="font-bold text-violet-800 bg-violet-50 px-2 py-0.5 rounded-md border border-violet-100">
                    {course.targetAudience}
                  </span>
                  <span className="text-slate-500 font-medium">
                    {course.modality}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-950 leading-snug">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="text-xs text-slate-700 font-medium mb-3 flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Duración: {course.duration}</span>
                  </div>

                  <h5 className="text-[11px] font-bold uppercase text-slate-400 mb-2">
                    Ejes temáticos:
                  </h5>
                  <ul className="space-y-1.5">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 mt-0.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proyección del Campus Digital */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-violet-500/20 text-violet-300 border border-violet-400/30">
            <Laptop className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Proyección Institucional · Etapa de Expansión
            </span>
            <h3 className="text-xl font-bold text-white">
              Campus Digital NIVAL Sciences
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          El campus digital integrará módulos educativos virtuales, repositorio científico de acceso abierto, guías clínicas estandarizadas y recursos interactivos de formación continua para colaboradores y profesionales de la salud.
        </p>

        <div className="pt-2 border-t border-slate-800 flex items-start space-x-2 text-[11px] text-slate-400">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong>Criterio normativo:</strong> Conforme al documento de Identidad Estratégica, las certificaciones y acreditaciones formales se emitirán únicamente cuando exista la autorización legal o alianza académica correspondiente.
          </span>
        </div>
      </section>

      {/* Navegación al final de la capa */}
      <div className="pt-8 border-t border-slate-300 flex justify-between items-center text-xs">
        <button
          onClick={() => {
            onSelectCapa('soluciones-empresas');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          &larr; Capa 06 · Soluciones para Empresas
        </button>

        <button
          onClick={() => {
            onSelectCapa('innovacion');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-bold text-slate-950 hover:text-amber-600 cursor-pointer"
        >
          Siguiente: Capa 08 · Innovación y Tecnología &rarr;
        </button>
      </div>

    </div>
  );
};

