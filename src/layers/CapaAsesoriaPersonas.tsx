import React from 'react';
import { 
  Compass, 
  UserCheck, 
  CheckCircle2, 
  ShieldAlert, 
  Route, 
  BookOpenCheck, 
  HeartHandshake
} from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

interface CapaAsesoriaPersonasProps {
  onSelectCapa: (id: string) => void;
}

export const CapaAsesoriaPersonas: React.FC<CapaAsesoriaPersonasProps> = ({ onSelectCapa }) => {
  const serviciosAsesoria = [
    {
      titulo: 'Comprensión de Necesidades Diagnósticas',
      descripcion: 'Orientamos a la persona sobre los requerimientos y alcances de cada prueba antes de su realización, aclarando dudas sobre indicaciones médicas previas y condiciones de preparación preanalítica.',
      icono: <BookOpenCheck className="w-5 h-5 text-sky-700" />
    },
    {
      titulo: 'Lectura Orientativa de Resultados',
      descripcion: 'Acompañamos al paciente para que entienda el lenguaje analítico y los rangos de referencia de sus informes de laboratorio, diferenciando valores esperados de aquellos que ameritan atención especializada.',
      icono: <Compass className="w-5 h-5 text-amber-700" />
    },
    {
      titulo: 'Definición de Rutas de Atención',
      descripcion: 'Facilitamos la canalización oportuna y responsable hacia las especialidades médicas correspondientes, ayudando a que la persona no postergue consultas necesarias ni pierda tiempo en trámites innecesarios.',
      icono: <Route className="w-5 h-5 text-emerald-700" />
    },
    {
      titulo: 'Organización de Acciones de Cuidado',
      descripcion: 'Apoyamos en la estructuración de calendarios preventivos personales y familiares para el seguimiento longitudinal de la salud en el tiempo.',
      icono: <HeartHandshake className="w-5 h-5 text-violet-700" />
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-16">
      
      {/* Encabezado */}
      <div className="border-b border-slate-400 pb-8">
        <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
          Capa 05 · Acompañamiento Individual
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Asesoría para Personas
        </h1>
        <p className="text-base text-slate-700 mt-2">
          Servicios de orientación, acompañamiento especializado y rutas de atención para la salud personal y familiar.
        </p>
      </div>

      {/* Espacio reservado con fondo gris para Imagen de Fondo de Asesoría */}
      <ImagePlaceholder 
        label="Espacio reservado para imagen de fondo: Orientación y Acompañamiento Personalizado"
        sublabel="Atención humana, lectura de resultados y asesoría especializada."
        className="h-52 sm:h-64"
      />

      {/* Concepto Central */}
      <section className="bg-[#dde3ec] rounded-2xl p-6 sm:p-8 border border-slate-400 space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed">
        <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm uppercase tracking-wider">
          <UserCheck className="w-4 h-4 text-amber-600" />
          <span>El Valor de la Orientación Profesional</span>
        </div>
        <p>
          En <strong>NIVAL Sciences</strong> entendemos que un informe de laboratorio no debe ser un documento incomprensible entregado sin contexto. La información clínica diagnóstica alcanza su verdadero valor cuando se transforma en orientación clara y decisiones oportunas de cuidado.
        </p>
        <blockquote className="border-l-4 border-amber-500 pl-4 py-1 text-slate-900 font-medium italic">
          “La asesoría transforma información en orientación y soluciones.”
        </blockquote>
      </section>

      {/* Servicios de Orientación y Acompañamiento */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-950 flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
            <span>Servicios de Acompañamiento Disponibles</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 mt-1">
            Líneas de asesoría individual desarrolladas dentro de las competencias profesionales aplicables:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviciosAsesoria.map((servicio, idx) => (
            <div key={idx} className="bg-[#dde3ec] rounded-2xl border border-slate-400 p-6 sm:p-7 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#cbd5e1] border border-slate-400 flex items-center justify-center">
                {servicio.icono}
              </div>
              <h3 className="text-base font-bold text-slate-950">
                {servicio.titulo}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Principio de Delimitación y Responsabilidad */}
      <section className="bg-[#cbd5e1] rounded-2xl p-6 sm:p-8 border border-slate-400 space-y-3 text-xs sm:text-sm">
        <div className="flex items-center space-x-2 text-slate-900 font-bold uppercase tracking-wider text-xs">
          <ShieldAlert className="w-4 h-4 text-amber-600" />
          <span>Marco Ético y Responsabilidad Profesional</span>
        </div>
        <p className="text-slate-800 leading-relaxed">
          Los servicios de asesoría a personas naturales se ofrecen dentro del marco legal sanitario correspondiente. La orientación tiene carácter <strong>educativo, preventivo y de canalización</strong>, diferenciándose con total claridad de los actos médicos prescriptivos y diagnósticos individuales regulados, los cuales competen exclusivamente a los médicos tratantes habilitados.
        </p>
      </section>

      {/* Navegación al final de la capa */}
      <div className="pt-8 border-t border-slate-400 flex justify-between items-center text-xs">
        <button
          onClick={() => {
            onSelectCapa('prevencion');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          &larr; Capa 04 · Prevención y Calidad de Vida
        </button>

        <button
          onClick={() => {
            onSelectCapa('soluciones-empresas');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-bold text-slate-950 hover:text-amber-600 cursor-pointer"
        >
          Siguiente: Capa 06 · Soluciones para Empresas &rarr;
        </button>
      </div>

    </div>
  );
};

