import React, { useState, useEffect } from 'react';
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
  Sparkles,
  ShoppingCart,
  Plus,
  Check,
  Trash2,
  X,
  MessageCircle
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

  // Carrito de compras / lista de exámenes para cotización directa
  const [cart, setCart] = useState<LabTest[]>(() => {
    try {
      const saved = localStorage.getItem('nival_lab_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('nival_lab_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const parsePrice = (priceStr?: string): number => {
    if (!priceStr) return 0;
    const cleaned = priceStr.replace(',', '.').replace(/[^0-9.]/g, '');
    const val = parseFloat(cleaned);
    return isNaN(val) ? 0 : val;
  };

  const formatPriceUSD = (val: number): string => {
    return `$${val.toFixed(2).replace('.', ',')}`;
  };

  const isInCart = (id: string) => cart.some(item => item.id === id);

  const toggleCartItem = (test: LabTest) => {
    setCart(prev => {
      if (prev.some(item => item.id === test.id)) {
        return prev.filter(item => item.id !== test.id);
      } else {
        return [...prev, test];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalUSD = cart.reduce((acc, test) => acc + parsePrice(test.price), 0);
  const maxFastingHours = cart.length > 0 ? Math.max(...cart.map(t => t.fastingHours || 0)) : 0;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const testLines = cart
      .map((t, idx) => `• ${t.name}${t.abbreviation ? ` [${t.abbreviation}]` : ''}: ${t.price || 'A consultar'} USD`)
      .join('\n');

    const fastingText = maxFastingHours > 0
      ? `\n⏳ *Ayuno recomendado:* ${maxFastingHours} horas continuas`
      : '\n⏳ *Ayuno:* No requiere ayuno estricto';

    const text = `Hola NIVAL Sciences, quisiera solicitar presupuesto y coordinar los siguientes exámenes de laboratorio:\n\n${testLines}\n\n📊 *Total de exámenes:* ${cart.length}\n💵 *Total estimado:* ${formatPriceUSD(totalUSD)} USD\n🇻🇪 *(Referencia en Bolívares pagadero a tasa oficial BCV del día)*${fastingText}\n\n¿Podrían indicarme disponibilidad para la toma de muestra y los pasos para confirmar? ¡Muchas gracias!`;

    const url = `https://wa.me/584129058894?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

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
    <div className="w-full bg-nival-main text-slate-900 capa-laboratorio">

      {/* 1. HERO INSTITUCIONAL CON IMAGEN DE FONDO (fondo.jpeg) */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden border-b border-slate-300"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}fondo.jpeg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1e42]/85 via-[#0d1e42]/35 via-40% to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-10 py-8 sm:py-16 lg:py-20">
          <div className="max-w-2xl text-left space-y-3 sm:space-y-4">

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif leading-tight sm:leading-[1.14] tracking-tight italic drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] capa-laboratorio-titulo capa-titulo-hero">
              “La visión que necesitas para vivir como sueñas”
            </h1>

            <div>
              <span className="inline-block font-extrabold text-white text-xs sm:text-sm pb-1 sm:pb-1.5 border-b-2 sm:border-b-[3px] border-nival-gold tracking-tight drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] capa-laboratorio-subtitulo capa-subtitulo">
                Primera Unidad Operativa · Diagnóstico Clínico Especializado
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/95 leading-snug sm:leading-relaxed font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] capa-laboratorio-parrafo capa-parrafo">
              Servicios analíticos rigurosos, perfiles preventivos integrales, preparación analítica estandarizada y canales de toma presencial y a domicilio bajo el principio rector de doble verificación.
            </p>

            <div className="pt-2 sm:pt-4">
              <button
                onClick={() => {
                  onSelectCapa('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-center px-6 py-2.5 sm:py-3 rounded-lg bg-nival-gold hover:bg-nival-gold-hover text-slate-950 font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
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

            <div className="bg-white rounded-2xl p-6 shadow-xs space-y-2 flex flex-col justify-between">
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

            <div className="bg-white rounded-2xl p-6 shadow-xs space-y-2 flex flex-col justify-between">
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

            <div className="bg-white rounded-2xl p-6 shadow-xs space-y-2 flex flex-col justify-between">
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

          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
              Baterías Analíticas y Exámenes Individuales
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight capa-laboratorio-titulo capa-titulo">
              Catálogo Oficial de Servicios Diagnósticos
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              <p className="text-xs sm:text-sm text-slate-600 capa-laboratorio-subtitulo capa-subtitulo">
                Consulta requisitos preanalíticos, tiempos de entrega y tarifas oficiales:
              </p>
              <span className="inline-flex items-center text-[11px] font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-300">
                Tarifas en USD · Ref. en Bolívares (Bs.) a tasa oficial BCV
              </span>
              {cart.length > 0 && (
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-slate-950 bg-nival-gold hover:bg-nival-gold-hover px-2.5 py-0.5 rounded-md shadow-2xs cursor-pointer transition-colors"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Mi lista: {cart.length} {cart.length === 1 ? 'examen' : 'exámenes'} ({formatPriceUSD(totalUSD)} USD)</span>
                </button>
              )}
            </div>
          </div>

          {/* Barra de Resumen en Página de Exámenes Seleccionados (cuando hay al menos 1) */}
          {cart.length > 0 && (
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-4 sm:p-5 rounded-2xl shadow-md border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-nival-gold text-slate-950 flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 flex-wrap">
                    <span className="font-extrabold text-sm text-white">
                      {cart.length} {cart.length === 1 ? 'examen seleccionado' : 'exámenes seleccionados'} en tu lista
                    </span>
                    <span className="bg-nival-gold/20 text-amber-300 text-xs font-mono font-bold px-2 py-0.5 rounded-md border border-nival-gold/40">
                      Total: {formatPriceUSD(totalUSD)} USD
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    *Precios de referencia en USD · Pagaderos en Bolívares (Bs.) a tasa oficial del Banco Central de Venezuela (BCV) del día.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer flex items-center space-x-1"
                >
                  <span>Ver lista ({cart.length})</span>
                </button>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-md transition-all cursor-pointer flex items-center space-x-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Pedir por WhatsApp</span>
                </button>
              </div>
            </div>
          )}

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
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${selectedCategory === cat.id
                    ? 'bg-nival-gold text-slate-950 font-bold shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Panel Interactivo: Lista y Ficha de Detalle de Preparación */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* Columna Izquierda: Lista de Exámenes (5 cols) */}
            <div className="lg:col-span-5 space-y-2 max-h-[620px] overflow-y-auto pr-1">
              {filteredTests.map((test) => {
                const isSelected = activeTest?.id === test.id;
                const inCart = isInCart(test.id);
                return (
                  <div
                    key={test.id}
                    onClick={() => setActiveTest(test)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${isSelected
                      ? 'bg-nival-gold text-slate-950 border-nival-gold shadow-sm scale-[1.01]'
                      : inCart
                        ? 'bg-emerald-50/50 text-slate-950 border-emerald-300 shadow-2xs'
                        : 'bg-white text-slate-950 border-slate-200 hover:border-slate-400 shadow-2xs'
                      }`}
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1.5 gap-2">
                      <span className={`truncate ${isSelected ? 'text-slate-800 font-bold' : 'text-slate-600'}`}>
                        {test.categoryLabel}
                      </span>
                      {test.price && (
                        <div className="flex flex-col items-end shrink-0">
                          <span className={`font-mono font-bold text-xs px-2 py-0.5 rounded ${isSelected
                            ? 'bg-slate-950/15 text-slate-950 border border-slate-950/20'
                            : inCart
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                              : 'bg-slate-100 text-slate-900 border border-slate-200'
                            }`}>
                            {test.price} USD
                          </span>
                          <span className={`text-[9px] font-semibold mt-0.5 ${isSelected ? 'text-slate-800' : 'text-slate-500'}`}>
                            Ref. Bs. BCV
                          </span>
                        </div>
                      )}
                    </div>
                    <h4 className="font-bold text-sm leading-snug">
                      {test.name}
                    </h4>
                    <div className="flex items-center justify-between text-[11px] mt-2 pt-2 border-t border-slate-200/60">
                      <div className="flex items-center space-x-2">
                        <span className={`font-mono font-semibold ${isSelected ? 'text-slate-800' : 'text-slate-700'}`}>
                          {test.abbreviation ? `[${test.abbreviation}]` : ''}
                        </span>
                        <span className={isSelected ? 'text-slate-800 font-medium' : 'text-slate-600'}>
                          {test.fastingHours > 0 ? `${test.fastingHours}h ayuno` : 'Sin ayuno'}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCartItem(test);
                        }}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer flex items-center space-x-1 ${
                          inCart
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-2xs'
                            : isSelected
                              ? 'bg-slate-950 text-white hover:bg-slate-800 shadow-2xs'
                              : 'bg-slate-100 hover:bg-nival-gold text-slate-800 hover:text-slate-950 border border-slate-200'
                        }`}
                        title={inCart ? 'Quitar de la lista' : 'Agregar a la lista'}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-3 h-3 text-white" />
                            <span>En lista</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3 h-3" />
                            <span>+ Lista</span>
                          </>
                        )}
                      </button>
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
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mt-0.5">
                            <span className="text-2xl sm:text-3xl font-black font-mono text-slate-950">
                              {activeTest.price}
                            </span>
                            <span className="text-xs text-slate-700 font-bold">
                              USD
                            </span>
                            <span className="text-[11px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                              Ref. en Bs. a tasa oficial BCV
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            onClick={() => toggleCartItem(activeTest)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center space-x-1.5 ${
                              isInCart(activeTest.id)
                                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                : 'bg-nival-gold hover:bg-nival-gold-hover text-slate-950'
                            }`}
                          >
                            {isInCart(activeTest.id) ? (
                              <>
                                <Check className="w-4 h-4" />
                                <span>En tu lista (Quitar)</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-4 h-4" />
                                <span>Agregar a mi lista</span>
                              </>
                            )}
                          </button>
                        </div>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight capa-laboratorio-titulo capa-titulo">
              Canales de Atención del Laboratorio
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 capa-laboratorio-subtitulo capa-subtitulo">
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
                <p><strong>Lunes a Viernes:</strong> 7:00 AM – 7:00 PM</p>
                <p><strong>Sábados y Domingos:</strong> 7:00 AM – 6:00 PM</p>
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
                <p className="flex flex-wrap items-center gap-x-1.5">
                  <strong>Coordinación directa:</strong>
                  <a
                    href="https://wa.me/584129058894?text=Hola%20NIVAL%20Sciences,%20quisiera%20agendar%20una%20toma%20de%20muestra%20a%20domicilio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-bold hover:underline inline-block whitespace-nowrap"
                  >
                    WhatsApp +58 412 9058894
                  </a>
                </p>
                <p><strong>Cobertura:</strong> Domicilios particulares, residencias y sedes corporativas</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CARRITO FLOTANTE / BARRA DE ACCIÓN DIRECTA */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl z-40 bg-slate-950/95 backdrop-blur-md text-white rounded-2xl shadow-2xl p-3 sm:p-4 border border-amber-500/50 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div
            onClick={() => setIsCartOpen(true)}
            className="flex items-center space-x-3 cursor-pointer group min-w-0"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-nival-gold text-slate-950 flex items-center justify-center font-bold shadow-xs">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-950 shadow-xs">
                {cart.length}
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline space-x-1.5 truncate">
                <span className="font-extrabold text-xs sm:text-sm text-white">
                  {cart.length} {cart.length === 1 ? 'examen' : 'exámenes'}
                </span>
                <span className="text-amber-400 font-mono font-black text-sm sm:text-base">
                  {formatPriceUSD(totalUSD)} USD
                </span>
              </div>
              <span className="text-[10px] text-slate-400 block truncate">
                Ref. en Bs. a tasa oficial BCV
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsCartOpen(true)}
              className="hidden sm:inline-flex px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              Ver lista
            </button>
            <button
              onClick={handleWhatsAppCheckout}
              className="px-4 py-2 sm:py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center space-x-1.5 cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span>Pedir por WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* 6. MODAL / DETALLE DE LA LISTA DE EXÁMENES (CARRITO) */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div className="bg-slate-900 text-white px-6 py-4.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-white">
                    Mi Lista de Exámenes para Cotizar
                  </h3>
                  <span className="text-[11px] text-slate-300">
                    {cart.length} {cart.length === 1 ? 'prueba seleccionada' : 'pruebas seleccionadas'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lista de Exámenes agregados */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-2.5 divide-y divide-slate-100 flex-1">
              {cart.map((test) => (
                <div key={test.id} className="pt-2.5 first:pt-0 flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold text-xs sm:text-sm text-slate-950 leading-snug">
                        {test.name}
                      </span>
                      {test.abbreviation && (
                        <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                          {test.abbreviation}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                      <span className="truncate">{test.categoryLabel}</span>
                      <span>•</span>
                      <span>{test.fastingHours > 0 ? `${test.fastingHours}h ayuno` : 'Sin ayuno'}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <div className="text-right">
                      <span className="font-mono font-black text-sm text-slate-950 block">
                        {test.price || 'Consultar'}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block">
                        USD (Ref. BCV)
                      </span>
                    </div>
                    <button
                      onClick={() => removeFromCart(test.id)}
                      className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 hover:text-rose-700 transition-colors cursor-pointer"
                      title="Eliminar de la lista"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {cart.length === 0 && (
                <div className="py-12 text-center space-y-2">
                  <p className="text-sm text-slate-500 font-medium">
                    No has agregado ningún examen a tu lista aún.
                  </p>
                  <p className="text-xs text-slate-400">
                    Explora el catálogo y presiona "+ Lista" o "Agregar a mi lista".
                  </p>
                </div>
              )}
            </div>

            {/* Footer con Totales y Botón WhatsApp */}
            {cart.length > 0 && (
              <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6 space-y-4">
                
                {/* Nota de ayuno e indicación BCV */}
                <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="flex items-center space-x-1.5 font-bold">
                    <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>
                      {maxFastingHours > 0
                        ? `Ayuno máximo requerido: ${maxFastingHours} horas continuas.`
                        : 'Ninguno de los exámenes agregados requiere ayuno prolongado.'}
                    </span>
                  </div>
                  <p className="text-[11px] text-amber-800 leading-relaxed font-normal">
                    * Todos los precios en dólares (USD) son referenciales. Los pagos en Bolívares (Bs.) se liquidan a la tasa oficial del Banco Central de Venezuela (BCV) del día de la atención.
                  </p>
                </div>

                {/* Subtotal y Total */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Total Estimado ({cart.length} {cart.length === 1 ? 'examen' : 'exámenes'})
                    </span>
                    <span className="text-[11px] text-slate-600 font-medium">
                      Pagadero en Bs. a tasa oficial BCV
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-slate-950 block">
                      {formatPriceUSD(totalUSD)} <span className="text-sm font-sans font-bold text-slate-600">USD</span>
                    </span>
                  </div>
                </div>

                {/* Botones de Acción */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                  <button
                    onClick={clearCart}
                    className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    Vaciar Lista
                  </button>
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full sm:flex-1 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                    <span>Pedir esta lista por WhatsApp (+58 412 9058894)</span>
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
