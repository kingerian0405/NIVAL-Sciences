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
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { LAB_TESTS } from '../data/labTests';
import { LabTest } from '../types';

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
                Primera Unidad Operativa · Diagnóstico Clínico Especializado
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-2 font-normal">
              Servicios analíticos rigurosos, perfiles preventivos integrales, preparación analítica estandarizada y canales de toma presencial y a domicilio bajo el principio rector de doble verificación.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#catalogo"
                className="px-6 py-2.5 rounded-lg bg-nival-gold hover:bg-nival-gold-hover text-slate-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer inline-block"
              >
                Explorar Catálogo ({LAB_TESTS.length} Exámenes)
              </a>

              <button
                onClick={() => {
                  onSelectCapa('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-lg bg-nival-dark hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
              >
                Agendar Toma a Domicilio
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTRODUCCIÓN OPERATIVA: CONFIABILIDAD ANALÍTICA */}
      <section className="bg-nival-section-alt py-14 sm:py-16 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
              Garantía de Precisión Médica
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Calidad y Doble Verificación en Cada Resultado
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              El laboratorio clínico constituye la primera unidad operativa consolidada de NIVAL Sciences, asegurando trazabilidad y confiabilidad en la información que apoya las decisiones de salud.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-3 border border-amber-200">
                  <ShieldCheck className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="text-base font-extrabold text-slate-950">
                  Doble Verificación
                </h3>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  Revisión analítica sistemática y validación cruzada por profesionales de bioanálisis antes de la emisión final.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-900 flex items-center justify-center mb-3 border border-sky-200">
                  <FileCheck2 className="w-5 h-5 text-sky-700" />
                </div>
                <h3 className="text-base font-extrabold text-slate-950">
                  Trazabilidad Total
                </h3>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  Identificación inequívoca de cada muestra desde el momento de la extracción hasta la entrega del informe.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-3 border border-emerald-200">
                  <Sparkles className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-base font-extrabold text-slate-950">
                  Confiabilidad Analítica
                </h3>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  Calibración sistemática con estándares internacionales y controles de precisión clínica continua.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CATÁLOGO INTERACTIVO DE SERVICIOS Y PERFILES */}
      <section id="catalogo" className="bg-nival-section-light py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                Baterías Analíticas y Exámenes Individuales
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Catálogo Oficial de Servicios Diagnósticos
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Consulta requisitos preanalíticos, tiempos de entrega y tarifas oficiales:
              </p>
            </div>

            <div className="text-xs text-slate-600 font-semibold bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 self-start md:self-auto shadow-2xs">
              Mostrando <strong className="text-slate-950">{filteredTests.length}</strong> de <strong className="text-slate-950">{LAB_TESTS.length}</strong> pruebas
            </div>
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
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-slate-500 shadow-2xs"
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
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      selectedCategory === cat.id ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panel Interactivo: Lista y Ficha de Detalle de Preparación */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Columna Izquierda: Lista de Exámenes (5 cols) */}
            <div className="lg:col-span-5 space-y-2 max-h-[620px] overflow-y-auto pr-1">
              {filteredTests.map((test) => {
                const isSelected = activeTest?.id === test.id;
                return (
                  <div
                    key={test.id}
                    onClick={() => setActiveTest(test)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-nival-gold text-slate-950 border-nival-gold shadow-sm scale-[1.01]'
                        : 'bg-white text-slate-950 border-slate-200 hover:border-slate-400 shadow-2xs'
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
                            : 'bg-slate-100 text-slate-900 border border-slate-200'
                        }`}>
                          {test.price}
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-sm leading-snug">
                      {test.name}
                    </h4>
                    <div className="flex items-center justify-between text-[11px] mt-2 pt-2 border-t border-slate-200/60">
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
                <div className="p-8 text-center text-xs text-slate-600 bg-white rounded-xl border border-slate-200">
                  No se encontraron pruebas coincidentes con "{search}".
                </div>
              )}
            </div>

            {/* Columna Derecha: Ficha Técnica y Preparación al Paciente (7 cols) */}
            <div className="lg:col-span-7">
              {activeTest ? (
                <div className="bg-white rounded-2xl border border-slate-300 p-6 sm:p-8 space-y-6 shadow-sm">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md border border-amber-300">
                        {activeTest.categoryLabel}
                      </span>
                      {activeTest.abbreviation && (
                        <span className="text-[11px] font-mono font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                          Siglas: {activeTest.abbreviation}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 leading-tight">
                      {activeTest.name}
                    </h3>

                    {/* Tarifa Oficial NIVAL */}
                    {activeTest.price && (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-nival-card-tint border border-slate-300 shadow-2xs">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-700 block">
                            Tarifa Oficial del Examen
                          </span>
                          <div className="flex items-baseline space-x-1.5 mt-0.5">
                            <span className="text-2xl sm:text-3xl font-black font-mono text-slate-950">
                              {activeTest.price}
                            </span>
                            <span className="text-xs text-slate-700 font-bold">
                              USD
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            onSelectCapa('contacto');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="px-5 py-2.5 rounded-lg bg-nival-gold hover:bg-nival-gold-hover text-slate-950 text-xs font-bold transition-all shadow-xs cursor-pointer text-center"
                        >
                          Consultar / Agendar este Examen &rarr;
                        </button>
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                      {activeTest.description}
                    </p>
                  </div>

                  {/* Parámetros Preanalíticos */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-200">
                    <div className="p-3.5 rounded-xl bg-nival-section-light border border-slate-200 shadow-2xs">
                      <span className="text-[11px] text-slate-600 font-medium block">Ayuno Requerido</span>
                      <strong className="text-xs text-slate-950 block mt-0.5">
                        {activeTest.fastingHours > 0 ? `${activeTest.fastingHours} horas continuas` : 'No requiere ayuno'}
                      </strong>
                    </div>
                    <div className="p-3.5 rounded-xl bg-nival-section-light border border-slate-200 shadow-2xs">
                      <span className="text-[11px] text-slate-600 font-medium block">Tipo de Muestra</span>
                      <strong className="text-xs text-slate-950 block mt-0.5">
                        {activeTest.sampleType}
                      </strong>
                    </div>
                    <div className="p-3.5 rounded-xl bg-nival-section-light border border-slate-200 shadow-2xs">
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
                    <ul className="space-y-2 bg-nival-section-light p-4 rounded-xl border border-slate-200 text-xs text-slate-800 shadow-2xs">
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
                    <p className="text-xs text-slate-700 bg-nival-section-light p-3.5 rounded-xl border border-slate-200 leading-relaxed shadow-2xs">
                      {activeTest.recommendedFor}
                    </p>
                  </div>

                  <div className="text-[11px] text-slate-600 border-t border-slate-200 pt-3 flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-sky-800 shrink-0" />
                    <span>Procesado bajo el protocolo institucional de validación analítica NIVAL Sciences.</span>
                  </div>
                </div>
              ) : null}
            </div>

          </div>
        </div>
      </section>

      {/* 4. CANALES DE ATENCIÓN DEL LABORATORIO */}
      <section className="bg-nival-section-alt py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Canales de Atención del Laboratorio
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Opciones flexibles diseñadas para la máxima comodidad de pacientes y familias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Sede Central */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center border border-slate-800">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Atención Presencial en Sede Central
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Toma de muestras bajo condiciones controladas de bioseguridad, con personal altamente capacitado y atención por orden de llegada o cita previa.
              </p>
              <div className="pt-2 text-xs text-slate-800 space-y-1 bg-nival-section-light p-3.5 rounded-xl border border-slate-200">
                <p><strong>Lunes a Viernes:</strong> 7:00 AM – 4:00 PM</p>
                <p><strong>Sábados:</strong> 7:30 AM – 1:00 PM</p>
              </div>
            </div>

            {/* Toma a Domicilio */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-nival-gold text-slate-950 flex items-center justify-center border border-nival-gold">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">
                Servicio de Toma a Domicilio y en Oficinas
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Equipo profesional de extracción trasladado con cadena de frío y materiales estériles para pacientes con movilidad reducida o jornadas programadas.
              </p>
              <div className="pt-2 text-xs text-slate-800 space-y-1 bg-nival-section-light p-3.5 rounded-xl border border-slate-200">
                <p><strong>Coordinación previa:</strong> Canales de contacto institucional</p>
                <p><strong>Cobertura:</strong> Domicilios particulares, residencias y sedes corporativas</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
