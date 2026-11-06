import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Laptop
} from 'lucide-react';
import { TRAINING_COURSES } from '../data/ecosystemData';

interface EducationCampusProps {
  onOpenContact: (tab?: string, prefillMessage?: string) => void;
}

export const EducationCampus: React.FC<EducationCampusProps> = ({ onOpenContact }) => {
  const [filterAudience, setFilterAudience] = useState<string>('todos');

  const filteredCourses = TRAINING_COURSES.filter(
    c => filterAudience === 'todos' || c.targetAudience === filterAudience
  );

  return (
    <section id="formacion" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-100 text-violet-900 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-violet-700" />
            <span>Formación, Capacitación & Campus Digital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gestión del Conocimiento y Educación en Salud
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Desarrollamos capacidades en profesionales, equipos corporativos y comunidades para una cultura médica basada en la ciencia, la prevención y la calidad.
          </p>
        </div>

        {/* Filtros de audiencia */}
        <div className="mt-10 flex justify-center items-center gap-2">
          {['todos', 'Profesionales', 'Empresas', 'Comunidad'].map((aud) => (
            <button
              key={aud}
              onClick={() => setFilterAudience(aud)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterAudience === aud
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {aud === 'todos' ? 'Todos los Programas' : `Para ${aud}`}
            </button>
          ))}
        </div>

        {/* Grid de Cursos */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl bg-white border border-slate-200 p-6 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-violet-800 bg-violet-50 px-2.5 py-1 rounded-md border border-violet-100">
                    {course.targetAudience}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {course.modality}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center text-xs text-slate-500 mb-2">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-violet-600" />
                    <span>Duración: <strong className="text-slate-800">{course.duration}</strong></span>
                  </div>

                  <h5 className="text-[11px] font-bold uppercase text-slate-400 mb-2">
                    Módulos temáticos:
                  </h5>
                  <ul className="space-y-1.5">
                    {course.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenContact('alianzas', `Interés en inscribirme o solicitar cupos para: "${course.title}"`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-violet-50 hover:bg-violet-100 text-violet-900 text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Solicitar Cupo / Información</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Proyección del Campus Digital */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-violet-950 via-slate-900 to-slate-900 text-white p-6 sm:p-10 border border-violet-800/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/20 text-violet-300 border border-violet-400/30 flex items-center justify-center shrink-0">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] uppercase font-bold text-violet-300 tracking-wider">
                Próximamente · Etapa de Expansión
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Campus Digital NIVAL Sciences
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Plataforma de e-learning con recursos educativos asíncronos, masterclasses con especialistas clínicos e insignias certificadas para actualización profesional continua.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenContact('alianzas', 'Deseo ser de los primeros en recibir novedades sobre el Campus Digital de NIVAL')}
            className="shrink-0 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-all whitespace-nowrap shadow-md"
          >
            Pre-inscribirme al Campus
          </button>
        </div>

      </div>
    </section>
  );
};

