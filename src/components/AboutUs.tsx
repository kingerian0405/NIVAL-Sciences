import React from 'react';
import { 
  HeartHandshake, 
  Target, 
  Eye, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Award, 
  Lightbulb,
  CheckCircle2,
  Users2
} from 'lucide-react';

export const AboutUs: React.FC = () => {
  const values = [
    {
      title: 'Calidad y Rigor',
      description: 'Estándares analíticos exigentes, controles de calidad internos y externos con doble verificación.',
      icon: <Award className="w-5 h-5 text-sky-600" />
    },
    {
      title: 'Confiabilidad',
      description: 'Trazabilidad y veracidad técnica en cada resultado, informe y recomendación entregada.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />
    },
    {
      title: 'Eficiencia',
      description: 'Procesos digitales ágiles, toma de muestras oportuna y entregas sin demoras operativas.',
      icon: <Zap className="w-5 h-5 text-amber-500" />
    },
    {
      title: 'Innovación',
      description: 'Desarrollo de microaplicaciones, herramientas digitales y evolución científica permanente.',
      icon: <Lightbulb className="w-5 h-5 text-violet-600" />
    },
    {
      title: 'Responsabilidad y Bioética',
      description: 'Respeto irrestricto al marco legal sanitario, confidencialidad médica y protección de datos.',
      icon: <HeartHandshake className="w-5 h-5 text-rose-600" />
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <span>Identidad Institucional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nuestra Filosofía y Compromiso
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            NIVAL Sciences nace como una respuesta científica y humana a la medicina tradicional reactiva, integrando salud, conocimiento y tecnología.
          </p>
        </div>

        {/* Cita Filosofía Institucional */}
        <div className="mt-12 rounded-3xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
              Filosofía Fundacional
            </span>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed text-slate-100">
              “NIVAL Sciences no espera a que las personas enfermen para acercarse a ellas. Trabaja para que comprendan sus necesidades, conozcan sus riesgos y tomen decisiones oportunas.”
            </blockquote>

            {/* Secuencia Conceptual */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="block font-bold text-sky-400">El Diagnóstico</span>
                <span className="text-slate-400 text-[11px]">aporta información</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="block font-bold text-emerald-400">La Prevención</span>
                <span className="text-slate-400 text-[11px]">ayuda a anticiparse</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="block font-bold text-amber-400">La Asesoría</span>
                <span className="text-slate-400 text-[11px]">transforma en soluciones</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="block font-bold text-violet-400">La Formación</span>
                <span className="text-slate-400 text-[11px]">desarrolla capacidades</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="block font-bold text-cyan-400">La Tecnología</span>
                <span className="text-slate-400 text-[11px]">conecta y facilita</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="block font-bold text-rose-400">La Innovación</span>
                <span className="text-slate-400 text-[11px]">permite evolucionar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Misión */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              Nuestra Razón de Ser
            </span>
            <h3 className="text-2xl font-bold text-slate-900">Misión</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Desarrollar y ofrecer soluciones integrales mediante servicios diagnósticos confiables, asesoría especializada a personas naturales y empresas, programas de prevención, formación científica e innovación tecnológica; integrando conocimiento, talento humano y herramientas digitales para facilitar decisiones oportunas, fortalecer capacidades y contribuir al bienestar individual, organizacional y colectivo.
            </p>
          </div>

          {/* Visión */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Nuestro Horizonte Futuro
            </span>
            <h3 className="text-2xl font-bold text-slate-900">Visión</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ser una organización referente en el desarrollo de un ecosistema integral de salud y soluciones especializadas, reconocido por su excelencia científica, capacidad de asesoría, innovación tecnológica y compromiso con la prevención, la formación y el bienestar de las personas y las organizaciones.
            </p>
          </div>

        </div>

        {/* Valores Institucionales */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Valores que Rigen Nuestra Actividad</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Los principios que definen el actuar ético, analítico y humano de NIVAL Sciences.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((val, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 w-fit mb-3">
                    {val.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{val.title}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

