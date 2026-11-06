import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  CheckCircle2, 
  ShieldAlert, 
  Clock, 
  Send, 
  Share2, 
  HeartHandshake
} from 'lucide-react';
import { QUIZ_QUESTIONS, calculateQuizRecommendation, RecommendationResult } from '../data/preventionQuizData';

interface PreventionEvaluatorProps {
  onScheduleProfile: (profileName: string) => void;
}

export const PreventionEvaluator: React.FC<PreventionEvaluatorProps> = ({ onScheduleProfile }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<RecommendationResult | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const progressPercent = Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100);

  const handleSelectOption = (value: string) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finished all questions
      const rec = calculateQuizRecommendation(updatedAnswers);
      setResult(rec);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const handleShare = () => {
    if (!result) return;
    const textToCopy = `Orientación Preventiva NIVAL Sciences:\nPlan: ${result.title}\nPruebas sugeridas:\n${result.suggestedTests.map(t => `- ${t.name} (${t.fasting})`).join('\n')}\nhttps://nivalsciences.com`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="prevencion" className="py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Microherramienta Interactiva de Salud</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Orientador Preventivo de Salud NIVAL
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Descubre en 60 segundos cuáles son los estudios de laboratorio y marcadores preventivos más recomendados según tu etapa vital y objetivos personales.
          </p>
        </div>

        {/* Tarjeta del Cuestionario */}
        <div className="mt-12 bg-slate-800/90 rounded-3xl border border-slate-700 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          
          {!result ? (
            /* Flujo de Preguntas */
            <div className="space-y-8">
              
              {/* Barra de Progreso */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Paso {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
                  <span className="font-semibold text-emerald-400">{progressPercent}% completado</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-sky-400 transition-all duration-300 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>

              {/* Pregunta Actual */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {currentQuestion.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {currentQuestion.subtitle}
                </p>
              </div>

              {/* Opciones de Respuesta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleSelectOption(option.value)}
                      className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                        isSelected
                          ? 'bg-emerald-950/60 border-emerald-400 shadow-md ring-1 ring-emerald-400'
                          : 'bg-slate-800/70 hover:bg-slate-700/80 border-slate-700 hover:border-slate-500 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
                          {option.label}
                        </span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected ? 'border-emerald-400 bg-emerald-500 text-slate-950' : 'border-slate-500 group-hover:border-slate-300'
                        }`}>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                      {option.description && (
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                          {option.description}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Botón Volver */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/80">
                {currentStep > 0 ? (
                  <button
                    onClick={handleBack}
                    className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Pregunta anterior</span>
                  </button>
                ) : <div></div>}
                
                <span className="text-[11px] text-slate-500">
                  Herramienta de orientación preventiva preliminar
                </span>
              </div>

            </div>
          ) : (
            /* Pantalla de Resultados Personalizados */
            <div className="space-y-8 animate-fadeIn">
              
              {/* Badge de Diagnóstico */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-700">
                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
                    {result.highlightBadge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {result.title}
                  </h3>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleShare}
                    className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>{copied ? '¡Copiado!' : 'Compartir'}</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-slate-300" />
                    <span>Reiniciar</span>
                  </button>
                </div>
              </div>

              {/* Explicación Clínica */}
              <div className="p-4 rounded-2xl bg-sky-950/40 border border-sky-800/60 text-slate-200 text-xs sm:text-sm leading-relaxed flex items-start space-x-3">
                <HeartHandshake className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <p>{result.summary}</p>
              </div>

              {/* Pruebas Recomendadas */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Pruebas y Perfiles Diagnósticos Sugeridos:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {result.suggestedTests.map((test, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col justify-between">
                      <div>
                        <h5 className="font-bold text-sm text-white">{test.name}</h5>
                        <p className="text-xs text-slate-400 mt-1 leading-snug">{test.why}</p>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-slate-700/80 flex items-center text-[11px] text-amber-300">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>Ayuno: {test.fasting}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recomendaciones de Autocuidado y Hábitos */}
              <div className="p-4 rounded-2xl bg-slate-850 border border-slate-750">
                <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                  Pautas de Autocuidado NIVAL:
                </h4>
                <ul className="space-y-1.5">
                  {result.habitsAdvice.map((habit, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{habit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer de Responsabilidad */}
              <div className="text-[11px] text-slate-400 bg-slate-900/50 p-3 rounded-xl border border-slate-800 flex items-start space-x-2">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Aviso Institucional:</strong> Este resultado es una guía orientativa basada en principios de salud preventiva. No constituye un diagnóstico médico vinculante. Las decisiones clínicas deben ser evaluadas por su médico tratante.
                </span>
              </div>

              {/* Acciones */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto text-xs font-medium text-slate-400 hover:text-slate-200"
                >
                  &larr; Realizar otra consulta
                </button>

                <button
                  onClick={() => onScheduleProfile(result.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white font-bold text-xs sm:text-sm shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Agendar este Perfil en NIVAL</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

