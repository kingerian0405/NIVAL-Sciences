import React, { useState } from 'react';
import { 
  Clock, 
  Droplet, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  Search, 
  MapPin, 
  Home, 
  ShieldCheck, 
  FileText,
  FileCheck2
} from 'lucide-react';
import { LAB_TESTS } from '../data/labTests';
import { LabTest } from '../types';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

interface CapaLaboratorioProps {
  onSelectCapa: (id: string) => void;
}

export const CapaLaboratorio: React.FC<CapaLaboratorioProps> = ({ onSelectCapa }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeTest, setActiveTest] = useState<LabTest | null>(LAB_TESTS[0]);

  const categories = [
    { id: 'todos', label: 'Todos los Perfiles' },
    { id: 'preventivo', label: 'Perfiles Preventivos' },
    { id: 'rutina', label: 'Rutina & Hematología' },
    { id: 'metabolico', label: 'Metabolismo & Diabetes' },
    { id: 'cardiovascular', label: 'Cardiovascular & Lípidos' },
    { id: 'hormonal', label: 'Hormonal & Tiroides' },
    { id: 'ocupacional', label: 'Ocupacional & Empresas' }
  ];

  const filteredTests = LAB_TESTS.filter(t => {
    const matchCat = selectedCategory === 'todos' || t.category === selectedCategory;
    const matchSearch = search.trim() === '' || 
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.recommendedFor.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-16">
      
      {/* Encabezado */}
      <div className="border-b border-slate-200 pb-8">
        <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
          Capa 03 · Primera Unidad Operativa
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Laboratorio Clínico
        </h1>
        <p className="text-base text-slate-600 mt-2">
          Servicios diagnósticos, perfiles preventivos, preparación analítica y canales de atención.
        </p>
      </div>

      {/* Espacio reservado con fondo gris para Imagen de Fondo del Laboratorio */}
      <ImagePlaceholder 
        label="Espacio reservado para imagen de fondo: Instalaciones de Laboratorio"
        sublabel="Área de toma de muestras, instrumentación automatizada y control de calidad analítica."
        className="h-56 sm:h-72"
      />

      {/* Introducción Operativa */}
      <section className="bg-[#f4f6f9] rounded-2xl p-6 sm:p-8 border border-slate-300 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
        <p>
          El laboratorio clínico constituye la <strong>primera unidad operativa consolidada</strong> de NIVAL Sciences. Nuestro modelo opera bajo un estricto protocolo de <strong>doble verificación analítica</strong> y controles de calidad internos y externos para asegurar confiabilidad en la información que apoya las decisiones de salud.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-[#e8ecf2] border border-slate-300">
            <span className="text-xs font-bold text-slate-950 block">Doble Verificación</span>
            <span className="text-xs text-slate-600 mt-0.5 block">Revisión y validación técnica en fases preanalítica y analítica.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#e8ecf2] border border-slate-300">
            <span className="text-xs font-bold text-slate-950 block">Trazabilidad Total</span>
            <span className="text-xs text-slate-600 mt-0.5 block">Identificación inequívoca de cada muestra desde la toma hasta el reporte.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#e8ecf2] border border-slate-300">
            <span className="text-xs font-bold text-slate-950 block">Confiabilidad Analítica</span>
            <span className="text-xs text-slate-600 mt-0.5 block">Calibración sistemática y controles de precisión clínica.</span>
          </div>
        </div>
      </section>

      {/* Catálogo de Servicios y Perfiles */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-950 flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
            <span>Servicios y Perfiles Diagnósticos</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Explora las baterías analíticas disponibles para personas naturales, instituciones y empresas:
          </p>
        </div>

        {/* Barra de Filtro y Búsqueda */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre de prueba o parámetro (ej. Perfil 20, Glicemia, Tiroides, Lipídico...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f4f6f9] border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-slate-400"
            />
          </div>

          <div className="flex items-center overflow-x-auto gap-1.5 pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-[#f4f6f9] text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Panel Interactivo: Lista y Ficha de Detalle de Preparación */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Columna Izquierda: Lista de Exámenes (5 cols) */}
          <div className="lg:col-span-5 space-y-2 max-h-[520px] overflow-y-auto pr-1">
            {filteredTests.map((test) => {
              const isSelected = activeTest?.id === test.id;
              return (
                <div
                  key={test.id}
                  onClick={() => setActiveTest(test)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-[#f4f6f9] text-slate-800 border-slate-300 hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className={isSelected ? 'text-amber-400 font-semibold' : 'text-slate-500'}>
                      {test.categoryLabel}
                    </span>
                    <span className={isSelected ? 'text-slate-300' : 'text-slate-500'}>
                      {test.fastingHours > 0 ? `${test.fastingHours}h ayuno` : 'Sin ayuno'}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm leading-snug">
                    {test.name}
                  </h4>
                </div>
              );
            })}
            {filteredTests.length === 0 && (
              <div className="p-6 text-center text-xs text-slate-500 bg-[#f4f6f9] rounded-xl border border-slate-300">
                No se encontraron pruebas coincidentes.
              </div>
            )}
          </div>

          {/* Columna Derecha: Ficha Técnica y Preparación al Paciente (7 cols) */}
          <div className="lg:col-span-7">
            {activeTest ? (
              <div className="bg-[#f4f6f9] rounded-2xl border border-slate-300 p-6 sm:p-7 space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80">
                    {activeTest.categoryLabel}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 mt-2">
                    {activeTest.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {activeTest.description}
                  </p>
                </div>

                {/* Parámetros Preanalíticos */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-slate-200">
                  <div className="p-3 rounded-xl bg-[#e8ecf2] border border-slate-300">
                    <span className="text-[11px] text-slate-500 font-medium block">Ayuno Requerido</span>
                    <strong className="text-xs text-slate-900 block mt-0.5">
                      {activeTest.fastingHours > 0 ? `${activeTest.fastingHours} horas continuas` : 'No requiere ayuno'}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#e8ecf2] border border-slate-300">
                    <span className="text-[11px] text-slate-500 font-medium block">Tipo de Muestra</span>
                    <strong className="text-xs text-slate-900 block mt-0.5">
                      {activeTest.sampleType}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#e8ecf2] border border-slate-300">
                    <span className="text-[11px] text-slate-500 font-medium block">Tiempo de Entrega</span>
                    <strong className="text-xs text-slate-900 block mt-0.5">
                      {activeTest.turnaroundTime}
                    </strong>
                  </div>
                </div>

                {/* Preparación al Paciente */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider flex items-center space-x-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Indicaciones de Preparación Previa</span>
                  </h4>
                  <ul className="space-y-1.5 bg-[#e8ecf2] p-4 rounded-xl border border-slate-300 text-xs text-slate-700">
                    {activeTest.preparationInstructions.map((inst, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{inst}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Indicación de Uso */}
                <div>
                  <h4 className="text-xs font-bold text-slate-950 uppercase tracking-wider mb-1">
                    Aplicación Clínica Sugerida
                  </h4>
                  <p className="text-xs text-slate-600 bg-[#e8ecf2] p-3 rounded-xl border border-slate-300 leading-relaxed">
                    {activeTest.recommendedFor}
                  </p>
                </div>

                <div className="text-[11px] text-slate-500 border-t border-slate-200 pt-3 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Procesado bajo el protocolo institucional de validación analítica NIVAL Sciences.</span>
                </div>
              </div>
            ) : null}
          </div>

        </div>
      </section>

      {/* Canales de Atención del Laboratorio */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-950 flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
          <span>Canales de Atención del Laboratorio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sede Central */}
          <div className="bg-[#f4f6f9] rounded-2xl p-6 sm:p-7 border border-slate-300 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center border border-slate-300">
              <MapPin className="w-5 h-5 text-slate-700" />
            </div>
            <h3 className="text-base font-bold text-slate-950">
              Atención Presencial en Sede
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Toma de muestras bajo condiciones controladas de bioseguridad, atención por orden de llegada o cita previa.
            </p>
            <div className="pt-2 text-xs text-slate-700 space-y-1">
              <p><strong>Lunes a Viernes:</strong> 7:00 AM – 4:00 PM</p>
              <p><strong>Sábados:</strong> 7:30 AM – 1:00 PM</p>
            </div>
          </div>

          {/* Toma a Domicilio */}
          <div className="bg-[#f4f6f9] rounded-2xl p-6 sm:p-7 border border-slate-300 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-200">
              <Home className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="text-base font-bold text-slate-950">
              Servicio de Toma a Domicilio y en Oficinas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Equipo profesional de extracción trasladado con cadena de frío y materiales estériles para pacientes con movilidad reducida o jornadas programadas.
            </p>
            <div className="pt-2 text-xs text-slate-700">
              <p>Coordinación previa mediante nuestros canales de contacto institucional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navegación al final de la capa */}
      <div className="pt-8 border-t border-slate-300 flex justify-between items-center text-xs">
        <button
          onClick={() => {
            onSelectCapa('nosotros');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          &larr; Capa 02 · Nosotros
        </button>

        <button
          onClick={() => {
            onSelectCapa('prevencion');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-bold text-slate-950 hover:text-amber-600 cursor-pointer"
        >
          Siguiente: Capa 04 · Prevención y Calidad de Vida &rarr;
        </button>
      </div>

    </div>
  );
};

