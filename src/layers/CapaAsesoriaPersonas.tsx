import React from 'react';
import { 
  Compass, 
  UserCheck, 
  CheckCircle2, 
  ShieldAlert, 
  Route, 
  BookOpenCheck, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

interface CapaAsesoriaPersonasProps {
  onSelectCapa: (id: string) => void;
}

export const CapaAsesoriaPersonas: React.FC<CapaAsesoriaPersonasProps> = ({ onSelectCapa }) => {
  const serviciosAsesoria = [
    {
      titulo: 'Comprensión de Necesidades Diagnósticas',
      descripcion: 'Orientamos a la persona sobre los requerimientos y alcances de cada prueba antes de su realización, aclarando dudas sobre indicaciones médicas previas y condiciones de preparación preanalítica.',
      icono: <BookOpenCheck className="w-5 h-5 text-slate-950" />
    },
    {
      titulo: 'Lectura Orientativa de Resultados',
      descripcion: 'Acompañamos al paciente para que entienda el lenguaje analítico y los rangos de referencia de sus informes de laboratorio, diferenciando valores esperados de aquellos que ameritan atención especializada.',
      icono: <Compass className="w-5 h-5 text-slate-950" />
    },
    {
      titulo: 'Definición de Rutas de Atención',
      descripcion: 'Facilitamos la canalización oportuna y responsable hacia las especialidades médicas correspondientes, ayudando a que la persona no postergue consultas necesarias ni pierda tiempo en trámites innecesarios.',
      icono: <Route className="w-5 h-5 text-slate-950" />
    },
    {
      titulo: 'Organización de Acciones de Cuidado',
      descripcion: 'Apoyamos en la estructuración de calendarios preventivos personales y familiares para el seguimiento longitudinal de la salud en el tiempo.',
      icono: <HeartHandshake className="w-5 h-5 text-slate-950" />
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
                Acompañamiento Individual · Orientación y Rutas de Salud
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-2 font-normal">
              Servicios de asesoría personalizada para entender diagnósticos, clarificar requerimientos de laboratorio y definir rutas oportunas de atención para la salud personal y de la familia.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  onSelectCapa('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-lg bg-nival-gold hover:bg-nival-gold-hover text-slate-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Solicitar Orientación Personal
              </button>

              <button
                onClick={() => {
                  onSelectCapa('laboratorio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-lg bg-nival-dark hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Consultar Exámenes
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CONCEPTO CENTRAL: EL VALOR DE LA ORIENTACIÓN PROFESIONAL */}
      <section className="bg-nival-section-alt py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          
          <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
            <UserCheck className="w-4 h-4 text-amber-700" />
            <span>Acompañamiento Cercano y Humano</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            El Valor de la Orientación Profesional
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            En <strong>NIVAL Sciences</strong> entendemos que un informe de laboratorio no debe ser un documento incomprensible entregado sin contexto. La información clínica diagnóstica alcanza su verdadero valor cuando se transforma en orientación clara y decisiones oportunas de cuidado.
          </p>

          <div className="p-5 sm:p-6 rounded-2xl border border-slate-300/80 bg-nival-card-tint text-slate-950 shadow-2xs">
            <blockquote className="border-l-4 border-amber-600 pl-4 py-1 text-xs sm:text-sm text-slate-900 font-semibold italic">
              “La asesoría transforma información en orientación y soluciones.”
            </blockquote>
          </div>

        </div>
      </section>

      {/* 3. SERVICIOS DE ACOMPAÑAMIENTO DISPONIBLES */}
      <section className="bg-nival-section-light py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Servicios de Acompañamiento Disponibles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Líneas de asesoría individual desarrolladas dentro de las competencias aplicables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {serviciosAsesoria.map((servicio, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-nival-gold flex items-center justify-center mb-4 shadow-2xs">
                    {servicio.icono}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 leading-snug">
                    {servicio.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                    {servicio.descripcion}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-amber-700">
                  <span>Asesoría personalizada NIVAL</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. MARCO ÉTICO Y RESPONSABILIDAD PROFESIONAL */}
      <section className="bg-nival-dark py-16 sm:py-20 px-4 sm:px-6 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-400/30">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Marco Ético y Responsabilidad Profesional
          </h2>
          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-slate-700/60 shadow-lg text-left">
            <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
              Los servicios de asesoría a personas naturales se ofrecen dentro del marco legal sanitario correspondiente. La orientación tiene carácter <strong>educativo, preventivo y de canalización</strong>, diferenciándose con total claridad de los actos médicos prescriptivos y diagnósticos individuales regulados, los cuales competen exclusivamente a los médicos tratantes habilitados.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
