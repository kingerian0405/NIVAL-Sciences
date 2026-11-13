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
    { id: 'todos', label: 'Todos los Exámenes' },
    { id: 'quimica', label: 'Química Sanguínea' },
    { id: 'hormonas', label: 'Hormonas' },
    { id: 'serologia', label: 'Serología' },
    { id: 'orina', label: 'Orina' },
    { id: 'inmunologia', label: 'Inmunología' },
    { id: 'hematologia', label: 'Hematología' },
    { id: 'coagulacion', label: 'Coagulación' },
    { id: 'heces', label: 'Heces & Copro' },
    { id: 'marcadores', label: 'Marcadores Tumorales' },
    { id: 'especiales', label: 'Especiales' }
  ];

  const filteredTests = LAB_TESTS.filter(t => {
    const matchCat = selectedCategory === 'todos' || t.category === selectedCategory;
    const q = search.trim().toLowerCase();
    const matchSearch = q === '' || 
      t.name.toLowerCase().includes(q) ||
      (t.abbreviation && t.abbreviation.toLowerCase().includes(q)) ||
      t.description.toLowerCase().includes(q) ||
      t.recommendedFor.toLowerCase().includes(q) ||
      t.categoryLabel.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-16">
      
      {/* Encabezado */}
      <div className="border-b border-slate-400 pb-8">
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
      <section className="bg-[#dde3ec] rounded-2xl p-6 sm:p-8 border border-slate-400 space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed">
        <p>
          El laboratorio clínico constituye la <strong>primera unidad operativa consolidada</strong> de NIVAL Sciences. Nuestro modelo opera bajo un estricto protocolo de <strong>doble verificación analítica</strong> y controles de calidad internos y externos para asegurar confiabilidad en la información que apoya las decisiones de salud.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-[#cbd5e1] border border-slate-400">
            <span className="text-xs font-bold text-slate-950 block">Doble Verificación</span>
            <span className="text-xs text-slate-700 mt-0.5 block">Revisión y validación técnica en fases preanalítica y analítica.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#cbd5e1] border border-slate-400">
            <span className="text-xs font-bold text-slate-950 block">Trazabilidad Total</span>
            <span className="text-xs text-slate-700 mt-0.5 block">Identificación inequívoca de cada muestra desde la toma hasta el reporte.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#cbd5e1] border border-slate-400">
            <span className="text-xs font-bold text-slate-950 block">Confiabilidad Analítica</span>
            <span className="text-xs text-slate-700 mt-0.5 block">Calibración sistemática y controles de precisión clínica.</span>
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
          <p className="text-xs sm:text-sm text-slate-700 mt-1">
            Explora las baterías analíticas disponibles para personas naturales, instituciones y empresas:
          </p>
        </div>

        {/* Barra de Filtro y Búsqueda */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre, sigla o parámetro (ej. Hematología, HC, Glicemia, TSH, PSA, EGO, Calcio...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#dde3ec] border border-slate-400 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-slate-600"
            />
          </div>

          <div className="flex items-center overflow-x-auto gap-1.5 pb-1 no-scrollbar">
            {categories.map((cat) => {
              const count = cat.id === 'todos' 
                ? LAB_TESTS.length 
                : LAB_TESTS.filter(t => t.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors flex items-center space-x-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-nival-gold text-slate-950 font-bold shadow-xs'
                      : 'bg-[#dde3ec] text-slate-800 hover:bg-[#bcc7d5] border border-slate-400'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedCategory === cat.id ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-300 text-slate-700'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] text-slate-600 font-medium">
            Mostrando <strong>{filteredTests.length}</strong> de <strong>{LAB_TESTS.length}</strong> exámenes en catálogo oficial
          </div>
        </div>

        {/* Panel Interactivo: Lista y Ficha de Detalle de Preparación */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Columna Izquierda: Lista de Exámenes (5 cols) */}
          <div className="lg:col-span-5 space-y-2 max-h-[580px] overflow-y-auto pr-1">
            {filteredTests.map((test) => {
              const isSelected = activeTest?.id === test.id;
              return (
                <div
                  key={test.id}
                  onClick={() => setActiveTest(test)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-nival-gold text-slate-950 border-nival-gold shadow-sm'
                      : 'bg-[#dde3ec] text-slate-900 border border-slate-400 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1.5 gap-2">
                    <span className={`truncate ${isSelected ? 'text-slate-800 font-bold' : 'text-slate-600'}`}>
                      {test.categoryLabel}
                    </span>
                    {test.price && (
                      <span className={`font-mono font-bold text-xs shrink-0 px-2 py-0.5 rounded ${
                        isSelected 
                          ? 'bg-slate-950/15 text-slate-800 border border-slate-950/20' 
                          : 'bg-[#cbd5e1] text-slate-900 border border-slate-400'
                      }`}>
                        {test.price}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm leading-snug">
                    {test.name}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] mt-2 pt-2 border-t border-slate-400/30">
                    <span className={`font-mono font-semibold ${isSelected ? 'text-slate-800' : 'text-slate-700'}`}>
                      {test.abbreviation ? `[${test.abbreviation}]` : ''}
                    </span>
                    <span className={isSelected ? 'text-slate-800 font-medium' : 'text-slate-600'}>
                      {test.fastingHours > 0 ? `${test.fastingHours}h ayuno` : 'Sin ayuno'}
                    </span>
                  </div>
                </div>
              );
            })}
            {filteredTests.length === 0 && (
              <div className="p-6 text-center text-xs text-slate-600 bg-[#dde3ec] rounded-xl border border-slate-400">
                No se encontraron pruebas coincidentes con "{search}".
              </div>
            )}
          </div>

          {/* Columna Derecha: Ficha Técnica y Preparación al Paciente (7 cols) */}
          <div className="lg:col-span-7">
            {activeTest ? (
              <div className="bg-[#dde3ec] rounded-2xl border border-slate-400 p-6 sm:p-7 space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md border border-amber-300">
                      {activeTest.categoryLabel}
                    </span>
                    {activeTest.abbreviation && (
                      <span className="text-[11px] font-mono font-bold text-slate-800 bg-[#cbd5e1] px-2.5 py-1 rounded-md border border-slate-400">
                        Siglas: {activeTest.abbreviation}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                    {activeTest.name}
                  </h3>

                  {/* Tarifa Oficial NIVAL */}
                  {activeTest.price && (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#cbd5e1] border border-slate-400">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-600 block">
                          Tarifa Oficial del Examen
                        </span>
                        <div className="flex items-baseline space-x-1.5 mt-0.5">
                          <span className="text-2xl font-black font-mono text-slate-950">
                            {activeTest.price}
                          </span>
                          <span className="text-[11px] text-slate-600 font-semibold">
                            USD
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          onSelectCapa('contacto');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-4 py-2 rounded-lg bg-nival-gold hover:bg-nival-gold-hover text-slate-950 text-xs font-bold transition-all shadow-xs cursor-pointer text-center"
                      >
                        Consultar / Agendar este Examen &rarr;
                      </button>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                    {activeTest.description}
                  </p>
                </div>

                {/* Parámetros Preanalíticos */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-slate-300">
                  <div className="p-3 rounded-xl bg-[#cbd5e1] border border-slate-400">
                    <span className="text-[11px] text-slate-600 font-medium block">Ayuno Requerido</span>
                    <strong className="text-xs text-slate-950 block mt-0.5">
                      {activeTest.fastingHours > 0 ? `${activeTest.fastingHours} horas continuas` : 'No requiere ayuno'}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#cbd5e1] border border-slate-400">
                    <span className="text-[11px] text-slate-600 font-medium block">Tipo de Muestra</span>
                    <strong className="text-xs text-slate-950 block mt-0.5">
                      {activeTest.sampleType}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#cbd5e1] border border-slate-400">
                    <span className="text-[11px] text-slate-600 font-medium block">Tiempo de Entrega</span>
                    <strong className="text-xs text-slate-950 block mt-0.5">
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
                  <ul className="space-y-1.5 bg-[#cbd5e1] p-4 rounded-xl border border-slate-400 text-xs text-slate-800">
                    {activeTest.preparationInstructions.map((inst, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
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
                  <p className="text-xs text-slate-700 bg-[#cbd5e1] p-3 rounded-xl border border-slate-400 leading-relaxed">
                    {activeTest.recommendedFor}
                  </p>
                </div>

                <div className="text-[11px] text-slate-600 border-t border-slate-300 pt-3 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-sky-800 shrink-0" />
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
          <div className="bg-[#dde3ec] rounded-2xl p-6 sm:p-7 border border-slate-400 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#cbd5e1] text-slate-900 flex items-center justify-center border border-slate-400">
              <MapPin className="w-5 h-5 text-slate-800" />
            </div>
            <h3 className="text-base font-bold text-slate-950">
              Atención Presencial en Sede
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Toma de muestras bajo condiciones controladas de bioseguridad, atención por orden de llegada o cita previa.
            </p>
            <div className="pt-2 text-xs text-slate-800 space-y-1">
              <p><strong>Lunes a Viernes:</strong> 7:00 AM – 4:00 PM</p>
              <p><strong>Sábados:</strong> 7:30 AM – 1:00 PM</p>
            </div>
          </div>

          {/* Toma a Domicilio */}
          <div className="bg-[#dde3ec] rounded-2xl p-6 sm:p-7 border border-slate-400 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center border border-amber-300">
              <Home className="w-5 h-5 text-amber-800" />
            </div>
            <h3 className="text-base font-bold text-slate-950">
              Servicio de Toma a Domicilio y en Oficinas
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Equipo profesional de extracción trasladado con cadena de frío y materiales estériles para pacientes con movilidad reducida o jornadas programadas.
            </p>
            <div className="pt-2 text-xs text-slate-800">
              <p>Coordinación previa mediante nuestros canales de contacto institucional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navegación al final de la capa */}
      <div className="pt-8 border-t border-slate-400 flex justify-between items-center text-xs">
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

