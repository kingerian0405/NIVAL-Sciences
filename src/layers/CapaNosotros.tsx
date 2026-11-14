import React from 'react';
import { Target, Telescope, ShieldCheck, Award, Lightbulb, Zap, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface CapaNosotrosProps {
  onSelectCapa: (id: string) => void;
}

export const CapaNosotros: React.FC<CapaNosotrosProps> = ({ onSelectCapa }) => {
  const valores = [
    {
      nombre: 'Calidad',
      descripcion: 'Rigor técnico, controles analíticos estrictos y mejora continua en todos los procesos.',
      icon: <Award className="w-4 h-4 text-slate-950" />
    },
    {
      nombre: 'Confiabilidad',
      descripcion: 'Doble verificación, trazabilidad y veracidad técnica en cada resultado y asesoría.',
      icon: <ShieldCheck className="w-4 h-4 text-slate-950" />
    },
    {
      nombre: 'Eficiencia',
      descripcion: 'Agilidad operativa, tiempos óptimos de respuesta y accesibilidad a los servicios.',
      icon: <Zap className="w-4 h-4 text-slate-950" />
    },
    {
      nombre: 'Innovación',
      descripcion: 'Herramientas digitales, microaplicaciones y metodologías fundamentadas en la ciencia.',
      icon: <Lightbulb className="w-4 h-4 text-slate-950" />
    },
    {
      nombre: 'Responsabilidad',
      descripcion: 'Compromiso ético, respeto normativo, protección de datos y confidencialidad médica.',
      icon: <HeartHandshake className="w-4 h-4 text-slate-950" />
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
              <span className="inline-block font-extrabold text-slate-950 text-xs sm:text-sm pb-1.5 border-b-2 sm:border-b-[3px] border-nival-gold tracking-tight">
                Identidad Institucional · Ecosistema Integral de Salud
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-2 font-normal">
              Conoce el propósito fundacional, la visión estratégica y los principios rectores que impulsan a NIVAL Sciences como un ecosistema orientado a articular diagnóstico de alta confiabilidad, asesoría profesional, prevención continua y tecnología médica.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  onSelectCapa('laboratorio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-lg bg-nival-gold hover:bg-nival-gold-hover text-slate-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Explorar Laboratorio Clínico
              </button>

              <button
                onClick={() => {
                  onSelectCapa('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-lg bg-nival-dark hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Contactar a NIVAL
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CONCEPTO INSTITUCIONAL CON LOGO OFICIAL */}
      <section className="bg-nival-section-light py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Tarjeta con Logotipo Oficial */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-md flex flex-col items-center text-center max-w-sm w-full">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border border-slate-100 shadow-inner flex items-center justify-center p-2 bg-white">
                  <img 
                    src={`${import.meta.env.BASE_URL}Nival.jpeg`} 
                    alt="NIVAL Sciences Logotipo Oficial" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-extrabold text-slate-950 text-base mt-4">
                  NIVAL Sciences
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-amber-700 font-bold mt-0.5">
                  Ecosistema de Salud y Bienestar
                </span>
                <p className="text-xs text-slate-700 mt-2 italic leading-relaxed">
                  <span className="border-b border-nival-gold pb-0.5 inline-block">“Ciencia rigurosa, cercanía humana y tecnología al servicio de la vida.”</span>
                </p>
              </div>
            </div>

            {/* Texto del Concepto Institucional */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                Propósito Fundacional
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Concepto Institucional
              </h2>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                <strong>NIVAL Sciences</strong> es una organización orientada al desarrollo de soluciones integrales de salud, asesoría y gestión del conocimiento. Su actividad articula servicios diagnósticos, prevención, acompañamiento y asesoría a personas naturales y empresas, formación, capacitación e innovación tecnológica.
              </p>
              
              <div className="p-4 sm:p-5 rounded-r-xl border border-l-4 border-slate-300 border-l-nival-gold bg-nival-card-tint text-slate-950 shadow-2xs">
                <p className="text-xs sm:text-sm leading-relaxed font-semibold">
                  El laboratorio clínico constituye su primera unidad operativa, pero no representa el límite de la organización. NIVAL se proyecta como un ecosistema capaz de integrar diferentes servicios y soluciones para responder a las necesidades de individuos, organizaciones e instituciones.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. MISIÓN Y VISIÓN (TARJETAS DORADAS DE ALTO IMPACTO) */}
      <section className="bg-nival-section-alt py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Misión y Visión Estratégica
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Los pilares esenciales que guían nuestro crecimiento y compromiso con la sociedad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Misión */}
            <div className="bg-nival-gold text-slate-950 rounded-2xl p-6 sm:p-8 border border-nival-gold shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-950/15 text-slate-950 flex items-center justify-center border border-slate-950/20">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-slate-950 tracking-tight">
                  Misión
                </h3>
                <p className="text-xs sm:text-sm text-slate-950 leading-relaxed font-medium">
                  Desarrollar y ofrecer soluciones integrales mediante servicios diagnósticos confiables, asesoría especializada a personas naturales y empresas, programas de prevención, formación científica e innovación tecnológica; integrando conocimiento, talento humano y herramientas digitales para facilitar decisiones oportunas, fortalecer capacidades y contribuir al bienestar individual, organizacional y colectivo.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-nival-gold text-slate-950 rounded-2xl p-6 sm:p-8 border border-nival-gold shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-950/15 text-slate-950 flex items-center justify-center border border-slate-950/20">
                  <Telescope className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-slate-950 tracking-tight">
                  Visión
                </h3>
                <p className="text-xs sm:text-sm text-slate-950 leading-relaxed font-medium">
                  Ser una organización referente en el desarrollo de un ecosistema integral de salud y soluciones especializadas, reconocido por su excelencia científica, capacidad de asesoría, innovación tecnológica y compromiso con la prevención, la formación y el bienestar de las personas y las organizaciones.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. OBJETIVO GENERAL (SECCIÓN OSCURA CARBÓN TIPO INICIO) */}
      <section className="bg-nival-dark py-16 sm:py-20 px-4 sm:px-6 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block">
            Horizonte Institucional
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Objetivo General
          </h2>
          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-slate-700/60 shadow-lg text-left">
            <p className="text-xs sm:text-base leading-relaxed text-slate-200">
              Consolidar a <strong>NIVAL Sciences</strong> como una organización integral de servicios y soluciones, desarrollando progresivamente un ecosistema que integre diagnóstico clínico, asesoría, prevención, educación, capacitación, tecnología y gestión del conocimiento, bajo principios de calidad, confiabilidad, eficiencia, innovación y responsabilidad.
            </p>
          </div>
        </div>
      </section>

      {/* 5. VALORES RECTORES (TARJETAS DORADAS ESTILO SECCIÓN 2 INICIO) */}
      <section className="bg-nival-section-light py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Valores Rectores
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-xl mx-auto">
              Principios que sustentan cada decisión técnica, asistencial y estratégica
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 text-left">
            {valores.map((v, i) => (
              <div key={i} className="bg-nival-gold rounded-xl p-4 sm:p-5 text-slate-950 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-7 h-7 rounded-full bg-slate-950/15 flex items-center justify-center mb-3 text-slate-950">
                    {v.icon}
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-950 mb-1.5">
                    {v.nombre}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-900 leading-relaxed font-medium">
                    {v.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. MODELO DE TRABAJO ECOSISTÉMICO */}
      <section className="bg-nival-section-alt py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Modelo de Trabajo Ecosistémico
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Continuidad asistencial e informativa sin barreras entre unidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-nival-card-tint rounded-xl p-5 sm:p-6 border border-slate-300/40 text-slate-950 shadow-2xs space-y-2">
              <div className="flex items-center space-x-2 text-slate-950 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                <h4 className="font-extrabold text-sm uppercase tracking-wider">Interoperabilidad</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                La información clínica diagnóstica alimenta de forma segura las pautas de prevención y las asesorías especializadas para decisiones tempranas.
              </p>
            </div>

            <div className="bg-nival-card-tint rounded-xl p-5 sm:p-6 border border-slate-300/40 text-slate-950 shadow-2xs space-y-2">
              <div className="flex items-center space-x-2 text-slate-950 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                <h4 className="font-extrabold text-sm uppercase tracking-wider">Doble Verificación</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                Aseguramiento de la confiabilidad analítica en procesos críticos antes de emitir cualquier dictamen o informe para máxima tranquilidad del usuario.
              </p>
            </div>

            <div className="bg-nival-card-tint rounded-xl p-5 sm:p-6 border border-slate-300/40 text-slate-950 shadow-2xs space-y-2">
              <div className="flex items-center space-x-2 text-slate-950 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                <h4 className="font-extrabold text-sm uppercase tracking-wider">Orientación Integral</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                Respuestas adaptadas tanto para la persona y su familia como para los comités de seguridad y salud ocupacional de empresas e instituciones.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
