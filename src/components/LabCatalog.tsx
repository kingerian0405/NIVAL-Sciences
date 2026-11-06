import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Clock, 
  Calendar, 
  Droplet, 
  ArrowRight, 
  Home, 
  HelpCircle, 
  Sparkles,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import { LAB_TESTS } from '../data/labTests';
import { LabTest } from '../types';

interface LabCatalogProps {
  onSelectTest: (test: LabTest) => void;
  onOpenContact: (tab?: string) => void;
}

export const LabCatalog: React.FC<LabCatalogProps> = ({ onSelectTest, onOpenContact }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas las Pruebas' },
    { id: 'preventivo', label: 'Perfiles Preventivos' },
    { id: 'rutina', label: 'Rutina y Diagnóstico' },
    { id: 'metabolico', label: 'Metabolismo y Diabetes' },
    { id: 'cardiovascular', label: 'Cardiovascular' },
    { id: 'hormonal', label: 'Hormonal y Tiroides' },
    { id: 'ocupacional', label: 'Ocupacional & Empresas' },
  ];

  const filteredTests = useMemo(() => {
    return LAB_TESTS.filter((test) => {
      const matchesCategory = selectedCategory === 'todos' || test.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        q === '' ||
        test.name.toLowerCase().includes(q) ||
        test.description.toLowerCase().includes(q) ||
        test.recommendedFor.toLowerCase().includes(q) ||
        test.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="laboratorio" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-100">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <span>Primera Unidad Operativa Consolidada</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Laboratorio Clínico de Alta Fidelidad
            </h2>
            <p className="text-slate-600 text-base">
              Procesamiento automatizado, controles de calidad analítica internos y externos, y <strong className="text-slate-900 font-semibold">doble verificación de procesos</strong> para garantizar máxima confiabilidad en cada resultado.
            </p>
          </div>

          {/* Banner de Toma a Domicilio */}
          <div className="bg-gradient-to-r from-sky-50 to-amber-50 p-4 rounded-2xl border border-sky-200/80 flex items-center space-x-4 shrink-0 max-w-md shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">¿No puedes trasladarte?</h4>
              <p className="text-xs text-slate-600 mt-0.5">Servicio de toma de muestra a domicilio o en oficinas con cita previa.</p>
              <button
                onClick={() => onOpenContact('paciente')}
                className="text-xs font-bold text-sky-700 hover:text-sky-800 underline underline-offset-2 mt-1 inline-block"
              >
                Solicitar toma a domicilio &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Barra de Búsqueda y Filtros */}
        <div className="mt-8 space-y-4">
          <div className="relative max-w-2xl">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar prueba (ej. Perfil 20, Glucosa, Insulina, Tiroides, Colesterol, Orina...)"
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500/30 focus:border-sky-600 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Categorías */}
          <div className="flex items-center overflow-x-auto gap-2 pb-2 no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-sky-700 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lista de Pruebas */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="group rounded-3xl bg-white border border-slate-200 hover:border-sky-300 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Badges superiores */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                    {test.categoryLabel}
                  </span>
                  {test.isPopular && (
                    <span className="flex items-center space-x-1 text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>Destacado</span>
                    </span>
                  )}
                </div>

                {/* Título de la prueba */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {test.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {test.description}
                </p>

                {/* Ficha rápida de requisitos */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center space-x-1.5 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Ayuno:</span>
                    </span>
                    <span className="font-semibold text-slate-900">
                      {test.fastingHours > 0 ? `${test.fastingHours} hrs` : 'No requiere'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center space-x-1.5 text-slate-500">
                      <Droplet className="w-3.5 h-3.5 text-slate-400" />
                      <span>Muestra:</span>
                    </span>
                    <span className="font-semibold text-slate-900 truncate max-w-[160px]">
                      {test.sampleType}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center space-x-1.5 text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>Tiempo:</span>
                    </span>
                    <span className="font-semibold text-emerald-700">
                      {test.turnaroundTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Botón de Acción */}
              <div className="mt-6 pt-3">
                <button
                  onClick={() => onSelectTest(test)}
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-800 text-xs font-bold border border-slate-200 group-hover:border-sky-300 transition-all cursor-pointer"
                >
                  <span>Ver Preparación y Agendar</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Sin resultados */}
        {filteredTests.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300 mt-8">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800">No encontramos resultados para tu búsqueda</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
              Contamos con un portafolio clínico más amplio. Si no ves tu examen listado, consúltanos directamente.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('todos');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-sky-700 text-white text-xs font-semibold"
            >
              Ver todas las pruebas
            </button>
          </div>
        )}

        {/* Banner Inferior: Protocolo de Doble Verificación */}
        <div className="mt-14 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Compromiso de Doble Verificación Analítica
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                En NIVAL Sciences, cada parámetro fuera de rango o valor crítico es corroborado mediante segundas determinaciones y supervisión especializada antes de la entrega de su informe.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenContact('paciente')}
            className="shrink-0 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-md transition-all whitespace-nowrap"
          >
            Agendar Toma de Muestra
          </button>
        </div>

      </div>
    </section>
  );
};

