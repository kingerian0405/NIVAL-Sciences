import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Clock, 
  Lightbulb, 
  HeartHandshake,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface CapaInicioProps {
  onSelectCapa: (id: string) => void;
}

export const CapaInicio: React.FC<CapaInicioProps> = ({ onSelectCapa }) => {
  const [currentTechSlide, setCurrentTechSlide] = useState(0);

  const techSlides = [
    {
      title: 'Portal Institucional y Gestión Digital',
      description: 'Plataforma web unificada para consulta de perfiles de laboratorio, instrucciones preanalíticas de preparación y solicitud ágil de citas y servicios corporativos.',
      badge: 'En Producción'
    },
    {
      title: 'Interoperabilidad Diagnóstica',
      description: 'Integración continua de protocolos analíticos con validación bioanalítica estandarizada y trazabilidad de extremo a extremo.',
      badge: 'En Desarrollo'
    },
    {
      title: 'Herramientas Digitales de Salud',
      description: 'Microaplicaciones orientadas a la evaluación precoz de factores de riesgo y el autocuidado preventivo.',
      badge: 'En Evolución'
    }
  ];

  const nextTechSlide = () => {
    setCurrentTechSlide((prev) => (prev + 1) % techSlides.length);
  };

  const prevTechSlide = () => {
    setCurrentTechSlide((prev) => (prev - 1 + techSlides.length) % techSlides.length);
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900">
      
      {/* SECCIÓN 1: HERO CON IMAGEN DE FONDO (fondo.jpeg) */}
      <section 
        className="relative w-full bg-cover bg-center overflow-hidden border-b border-slate-300"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}fondo.jpeg)` }}
      >
        {/* Capa de iluminación y descanso óptico para garantizar máxima legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 sm:to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-24 lg:py-28">
          <div className="max-w-xl text-left space-y-4">
            
            {/* Lema Principal Oficial */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-serif leading-[1.14] tracking-tight italic">
              “La visión que necesitas para vivir como sueñas”
            </h1>

            {/* Franja de Enfoque Institucional Dorada */}
            <div>
              <span className="inline-block bg-[#eeb510] text-slate-950 text-xs sm:text-sm font-bold px-3 py-1.5 rounded shadow-2xs">
                Salud integral con visión preventiva, tecnologia y acompañamiento profesional
              </span>
            </div>

            {/* Párrafo Descriptivo Institucional */}
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-2 font-normal">
              Desarrollamos y ofrecemos soluciones integrales mediante servicios diagnósticos confiables, asesoría especializada a personas naturales y empresas, programas de prevención, formación científica e innovación tecnológica, integrando conocimiento, talento humano y herramientas digitales para facilitar decisiones oportunas, fortalecer capacidades y contribuir al bienestar individual, organizacional y colectivo.
            </p>

            {/* Botón de Acción Principal */}
            <div className="pt-4">
              <button
                onClick={() => {
                  onSelectCapa('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-lg bg-[#eeb510] hover:bg-[#dca30a] text-slate-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Solicitar atención
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* SECCIÓN 2: NUESTROS VALORES */}
      <section className="relative bg-[#f0f4f9] py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300 overflow-hidden">
        
        {/* Fondo decorativo geométrico sutil */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
          <div className="w-[680px] h-[340px] bg-gradient-to-b from-white/60 to-transparent transform -skew-y-3 rounded-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Nuestros valores
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-xl mx-auto">
            Un modelo de trabajo basado en interoperabilidad, doble verificación y orientación integral
          </p>

          {/* 5 Tarjetas Doradas Horizontales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mt-10 text-left">
            
            {/* Calidad */}
            <div className="bg-[#eeb510] rounded-xl p-4 sm:p-5 text-slate-950 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-7 h-7 rounded-full bg-slate-950/15 flex items-center justify-center mb-3 text-slate-950">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-sm text-slate-950 mb-1.5">
                  Calidad
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-900 leading-relaxed">
                  Rigor técnico, controles analíticos estrictos y mejora continua en todos los procesos.
                </p>
              </div>
            </div>

            {/* Confiabilidad */}
            <div className="bg-[#eeb510] rounded-xl p-4 sm:p-5 text-slate-950 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-7 h-7 rounded-full bg-slate-950/15 flex items-center justify-center mb-3 text-slate-950">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-sm text-slate-950 mb-1.5">
                  Confiabilidad
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-900 leading-relaxed">
                  Doble verificación, trazabilidad y veracidad técnica en cada resultado y asesoría.
                </p>
              </div>
            </div>

            {/* Eficiencia */}
            <div className="bg-[#eeb510] rounded-xl p-4 sm:p-5 text-slate-950 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-7 h-7 rounded-full bg-slate-950/15 flex items-center justify-center mb-3 text-slate-950">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-sm text-slate-950 mb-1.5">
                  Eficiencia
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-900 leading-relaxed">
                  Agilidad operativa, tiempos óptimos de respuesta y accesibilidad a servicios.
                </p>
              </div>
            </div>

            {/* Innovación */}
            <div className="bg-[#eeb510] rounded-xl p-4 sm:p-5 text-slate-950 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-7 h-7 rounded-full bg-slate-950/15 flex items-center justify-center mb-3 text-slate-950">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-sm text-slate-950 mb-1.5">
                  Innovación
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-900 leading-relaxed">
                  Herramientas digitales, microaplicaciones y metodologías fundamentadas en la ciencia.
                </p>
              </div>
            </div>

            {/* Responsabilidad */}
            <div className="bg-[#eeb510] rounded-xl p-4 sm:p-5 text-slate-950 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-7 h-7 rounded-full bg-slate-950/15 flex items-center justify-center mb-3 text-slate-950">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-sm text-slate-950 mb-1.5">
                  Responsabilidad
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-900 leading-relaxed">
                  Compromiso ético, respeto normativo, protección de datos y confidencialidad médica.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* SECCIÓN 3: PREVENIR TAMBIEN ES CUIDAR */}
      <section className="bg-[#f8fafc] py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Prevenir tambien es cuidar
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Los servicios de Nival cubren evaluaciones preventivas periódicas para asintomáticos (con perfiles metabólicos y de vigilancia cardiovascular según la etapa de vida); jornadas de promoción de la salud orientadas al tamizaje y detección oportuna in-situ en instituciones educativas y empresas; y programas de educación para el autocuidado, que incluyen guías de interpretación de exámenes, pautas preanalíticas y recomendaciones de hábitos saludables basadas en evidencia para fomentar decisiones conscientes.
          </p>

          {/* Cuadro destacado de anticipación */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-300 bg-white/80 shadow-2xs">
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              En la medicina convencional suele acudirse a la evaluación analítica únicamente cuando el síntoma ya se ha instaurado. En NIVAL Sciences concebimos la prevención como una herramienta para anticiparse a los eventos
            </p>
          </div>

          <div>
            <button
              onClick={() => {
                onSelectCapa('prevencion');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded-lg bg-[#26272b] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
            >
              Descubrir más
            </button>
          </div>

        </div>
      </section>


      {/* SECCIÓN 4: SOLUCIONES CORPORATIVAS CON IMPACTO MEDIBLE */}
      <section className="bg-[#26272b] py-20 px-4 sm:px-6 text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Soluciones corporativas con impacto medible
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed mt-3 font-normal">
              En NIVAL Sciences concebimos la salud corporativa no como un mero requisito de cumplimiento, sino como un pilar estratégico de continuidad y bienestar. Diseñamos soluciones a la medida del perfil operativo y el número de colaboradores de tu organización, orientadas a reducir el ausentismo y proteger a tu talento.
            </p>
          </div>

          {/* 4 Tarjetas Doradas Corporativas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            
            <div className="bg-[#eeb510] rounded-xl p-5 text-slate-950 flex flex-col justify-between shadow-md">
              <div>
                <h3 className="font-extrabold text-sm text-slate-950 mb-2">
                  Asesoría y Consultoría
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-900 leading-relaxed">
                  Diagnóstico de riesgos biológicos y diseño de planes de bienestar ajustados a los objetivos de tu organización.
                </p>
              </div>
            </div>

            <div className="bg-[#eeb510] rounded-xl p-5 text-slate-950 flex flex-col justify-between shadow-md">
              <div>
                <h3 className="font-extrabold text-sm text-slate-950 mb-2">
                  Programas de Prevención
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-900 leading-relaxed">
                  Baterías diagnósticas y planes preventivos orientados a vigilar la aptitud del personal y reducir el ausentismo.
                </p>
              </div>
            </div>

            <div className="bg-[#eeb510] rounded-xl p-5 text-slate-950 flex flex-col justify-between shadow-md">
              <div>
                <h3 className="font-extrabold text-sm text-slate-950 mb-2">
                  Jornadas de Salud In-Company
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-900 leading-relaxed">
                  Extracción de muestras en tus instalaciones, minimizando la interrupción operativa y garantizando reportes confidenciales.
                </p>
              </div>
            </div>

            <div className="bg-[#eeb510] rounded-xl p-5 text-slate-950 flex flex-col justify-between shadow-md">
              <div>
                <h3 className="font-extrabold text-sm text-slate-950 mb-2">
                  Capacitación para Colaboradores
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-900 leading-relaxed">
                  Talleres de autocuidado, ergonomía y pausas activas, junto con formación en primeros auxilios y salud ocupacional.
                </p>
              </div>
            </div>

          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onSelectCapa('soluciones-empresas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-7 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              Mas detalles
            </button>
          </div>

        </div>
      </section>


      {/* SECCIÓN 5: FORMACIÓN QUE TRANSFORMA Y DESARROLLA CAPACIDADES */}
      <section className="bg-[#f0f4f9] py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 text-center tracking-tight mb-12">
            Formación que transforma y desarrolla capacidades
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Mensaje y Acción (5 cols) */}
            <div className="lg:col-span-5 text-left space-y-4">
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                En NIVAL Sciences la educación en salud es un motor de transformación. Diseñamos programas formativos dirigidos a tres audiencias clave: profesionales del área de la salud, equipos de trabajo corporativos y la comunidad en general.
              </p>

              <p className="font-bold text-slate-950 text-xs sm:text-sm italic pt-1">
                “La formación desarrolla capacidades.”
              </p>

              <div className="pt-4">
                <button
                  onClick={() => {
                    onSelectCapa('formacion');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#eeb510] hover:bg-[#dca30a] text-slate-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
                >
                  Mas información
                </button>
              </div>
            </div>

            {/* Columna Derecha: Las 3 Tarjetas Formativas (7 cols) */}
            <div className="lg:col-span-7 space-y-3.5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Para Profesionales */}
                <div className="bg-[#dfe4ef] rounded-xl p-4 sm:p-5 border border-slate-300/40 text-slate-950 shadow-2xs">
                  <h3 className="font-bold text-xs text-slate-950 mb-1.5">
                    Para Profesionales
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-800 leading-relaxed">
                    Aseguramiento de Calidad en Laboratorio Clínico. Programa técnico-práctico sobre control interno, trazabilidad analítica y reducción de errores preanalíticos.
                  </p>
                </div>

                {/* Para Empresas */}
                <div className="bg-[#dfe4ef] rounded-xl p-4 sm:p-5 border border-slate-300/40 text-slate-950 shadow-2xs">
                  <h3 className="font-bold text-xs text-slate-950 mb-1.5">
                    Para Empresas
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-800 leading-relaxed">
                    Gestión Preventiva en el Entorno Laboral. Capacitación orientada a comités y RRHH para reducir el ausentismo derivado de riesgos cardiometabólicos.
                  </p>
                </div>
              </div>

              {/* Para la Comunidad (centrado abajo) */}
              <div className="flex justify-center">
                <div className="w-full sm:w-3/4 bg-[#dfe4ef] rounded-xl p-4 sm:p-5 border border-slate-300/40 text-slate-950 shadow-2xs">
                  <h3 className="font-bold text-xs text-slate-950 mb-1.5">
                    Para la Comunidad
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-800 leading-relaxed">
                    Taller de Autocuidado y Marcadores de Salud. Espacio educativo para comprender exámenes de rutina y adoptar decisiones preventivas a tiempo.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SECCIÓN 6: LA TECNOLOGÍA AL SERVICIO DEL BIENESTAR */}
      <section className="bg-[#f8fafc] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 text-center tracking-tight mb-12">
            La tecnología al servicio del bienestar
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Tarjeta Interactiva Dorada (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#eeb510] rounded-2xl p-6 sm:p-8 text-slate-950 relative shadow-md flex flex-col justify-between min-h-[220px]">
                
                {/* Contenido Principal con Controles Laterales */}
                <div className="flex items-start justify-between gap-3">
                  <button 
                    onClick={prevTechSlide}
                    aria-label="Anterior"
                    className="p-1 rounded-full hover:bg-slate-950/10 text-slate-950 transition-colors cursor-pointer mt-1"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex-1 px-2 text-left">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug drop-shadow-xs">
                      {techSlides[currentTechSlide].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-950 mt-3 font-medium leading-relaxed max-w-lg">
                      {techSlides[currentTechSlide].description}
                    </p>
                  </div>

                  <button 
                    onClick={nextTechSlide}
                    aria-label="Siguiente"
                    className="p-1 rounded-full hover:bg-slate-950/10 text-slate-950 transition-colors cursor-pointer mt-1"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Fila Inferior con Paginador y Badge */}
                <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-950/10">
                  <div className="flex items-center space-x-1.5 pl-6">
                    {techSlides.map((_, i) => (
                      <span 
                        key={i} 
                        onClick={() => setCurrentTechSlide(i)}
                        className={`h-2 rounded-full cursor-pointer transition-all ${
                          i === currentTechSlide ? 'w-5 bg-white' : 'w-2 bg-slate-950/25'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="bg-[#26272b] text-white text-[10px] font-bold px-3 py-1 rounded-sm shadow-xs uppercase tracking-wider">
                    {techSlides[currentTechSlide].badge}
                  </span>
                </div>

              </div>
            </div>

            {/* Columna Derecha: Filosofía Tecnológica NIVAL (5 cols) */}
            <div className="lg:col-span-5 text-left space-y-4">
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                En NIVAL Sciences concebimos la transformación digital como un medio esencial para conectar servicios, personas y conocimiento científico, reduciendo barreras de acceso y facilitando decisiones oportunas.
              </p>

              <p className="font-bold text-xs sm:text-sm italic pt-1 text-[#caa00f]">
                “La tecnología conecta y facilita. La innovación permite evolucionar.”
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
