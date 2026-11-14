import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ShieldAlert, 
  Laptop, 
  Award,
  ArrowRight
} from 'lucide-react';
import { TRAINING_COURSES } from '../data/ecosystemData';

interface CapaFormacionProps {
  onSelectCapa: (id: string) => void;
}

export const CapaFormacion: React.FC<CapaFormacionProps> = ({ onSelectCapa }) => {
  const [filter, setFilter] = useState<string>('todos');

  const filtered = TRAINING_COURSES.filter(
    c => filter === 'todos' || c.targetAudience === filter
  );

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
                Gestión del Conocimiento · Educación y Capacitación Continua
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-2 font-normal">
              Programas de actualización científica, talleres técnicos en control de calidad, capacitación corporativa en prevención y proyección del campus digital formativo.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#cursos"
                className="px-6 py-2.5 rounded-lg bg-nival-gold hover:bg-nival-gold-hover text-slate-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer inline-block"
              >
                Ver Catálogo de Cursos
              </a>

              <button
                onClick={() => {
                  onSelectCapa('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-lg bg-nival-dark hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Proponer Convenio Académico
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FILOSOFÍA DE FORMACIÓN */}
      <section className="bg-nival-section-alt py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          
          <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-violet-700" />
            <span>Desarrollo de Capacidades Colectivas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            La Educación como Motor de Transformación en Salud
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            En <strong>NIVAL Sciences</strong> la educación en salud es un motor de transformación. Concebimos programas de formación dirigidos a tres audiencias fundamentales: profesionales del área de la salud, equipos de trabajo corporativos y la comunidad en general.
          </p>

          <div className="p-5 sm:p-6 rounded-2xl border border-slate-300/80 bg-nival-card-tint text-slate-950 shadow-2xs">
            <blockquote className="border-l-4 border-amber-600 pl-4 py-1 text-xs sm:text-sm text-slate-900 font-semibold italic">
              “La formación desarrolla capacidades.”
            </blockquote>
          </div>

        </div>
      </section>

      {/* 3. CATÁLOGO DE CURSOS Y TALLERES */}
      <section id="cursos" className="bg-nival-section-light py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                Programas Académicos y Prácticos
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Catálogo Inicial de Cursos y Talleres
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Diseñados para fortalecer el rigor analítico y la cultura de prevención:
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
                      ? 'bg-nival-gold text-slate-950 font-bold shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {item === 'todos' ? 'Todos' : item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3 text-[11px]">
                    <span className="font-bold text-violet-900 bg-violet-100 px-2.5 py-0.5 rounded-full border border-violet-200">
                      {course.targetAudience}
                    </span>
                    <span className="text-slate-600 font-semibold">
                      {course.modality}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-950 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-800 font-medium mb-3 flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>Duración: {course.duration}</span>
                    </div>

                    <h5 className="text-[11px] font-bold uppercase text-slate-500 mb-2">
                      Ejes temáticos:
                    </h5>
                    <ul className="space-y-1.5">
                      {course.topics.map((topic, i) => (
                        <li key={i} className="flex items-start space-x-2 text-xs text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-2">
                  <button
                    onClick={() => {
                      onSelectCapa('contacto');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-2 rounded-lg bg-nival-card-tint hover:bg-slate-200 text-slate-950 font-bold text-xs transition-colors cursor-pointer text-center"
                  >
                    Consultar Próxima Convocatoria &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PROYECCIÓN DEL CAMPUS DIGITAL */}
      <section className="bg-nival-dark py-16 sm:py-20 px-4 sm:px-6 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          
          <div className="w-12 h-12 rounded-2xl bg-nival-gold text-slate-950 flex items-center justify-center mx-auto shadow-md">
            <Laptop className="w-6 h-6" />
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Proyección Institucional · Etapa de Expansión
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Campus Digital NIVAL Sciences
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-slate-700/60 shadow-lg text-left space-y-4">
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              El campus digital integrará módulos educativos virtuales, repositorio científico de acceso abierto, guías clínicas estandarizadas y recursos interactivos de formación continua para colaboradores, bioanalistas y profesionales de la salud.
            </p>

            <div className="pt-3 border-t border-slate-700/60 flex items-start space-x-2 text-[11px] text-slate-300">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Criterio normativo:</strong> Conforme al documento de Identidad Estratégica, las certificaciones y acreditaciones formales se emitirán únicamente cuando exista la autorización legal o alianza académica correspondiente.
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
