import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  User, 
  Calendar,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface ContactSectionProps {
  initialTab?: string;
  prefillMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialTab = 'paciente', 
  prefillMessage = '' 
}) => {
  const [activeTab, setActiveTab] = useState<'paciente' | 'empresas' | 'alianzas'>('paciente');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form states
  const [patientForm, setPatientForm] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'sede',
    preferredTest: '',
    date: '',
    notes: ''
  });

  const [companyForm, setCompanyForm] = useState({
    companyName: '',
    contactName: '',
    position: '',
    phone: '',
    email: '',
    employeeCount: '25-50',
    serviceNeeded: 'jornadas',
    message: ''
  });

  useEffect(() => {
    if (initialTab === 'empresas' || initialTab === 'alianzas' || initialTab === 'paciente') {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    if (prefillMessage) {
      if (activeTab === 'empresas') {
        setCompanyForm(prev => ({ ...prev, message: prefillMessage }));
      } else {
        setPatientForm(prev => ({ ...prev, preferredTest: prefillMessage }));
      }
    }
  }, [prefillMessage, activeTab]);

  const handlePatientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const whatsappDirect = "https://wa.me/584120000000?text=" + encodeURIComponent(
    activeTab === 'empresas' 
      ? "Hola NIVAL Sciences, deseo coordinar una reunión o cotización corporativa para mi empresa."
      : "Hola NIVAL Sciences, deseo consultar sobre citas y exámenes de laboratorio."
  );

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-sky-700" />
            <span>Canales de Atención & Citas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conecta con NIVAL Sciences
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Estamos disponibles para responder tus consultas diagnósticas, agendar toma de muestras en sede o domicilio, y diseñar soluciones corporativas a la medida.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Columna Izquierda: Información de Contacto y Canales */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-slate-900 text-white p-7 sm:p-8 space-y-6 shadow-xl border border-slate-800">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Atención Inmediata
              </span>
              <h3 className="text-2xl font-bold">
                Canales Oficiales
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Comunícate directamente con nuestro equipo de atención al usuario o asesores corporativos.
              </p>

              <div className="space-y-4 pt-2">
                <a 
                  href={whatsappDirect}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3.5 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold text-emerald-400 tracking-wider block">WhatsApp Directo</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-200">+58 (412) 000-0000</span>
                  </div>
                </a>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-800 border border-slate-700 text-slate-300">
                  <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">Correo Electrónico</span>
                    <span className="text-sm font-semibold text-white">contacto@nivalsciences.com</span>
                    <span className="text-xs text-slate-400 block mt-0.5">corporativo@nivalsciences.com</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-800 border border-slate-700 text-slate-300">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">Horario de Toma y Atención</span>
                    <p className="text-xs text-slate-200 mt-0.5">
                      <strong>Lunes a Viernes:</strong> 7:00 AM – 4:00 PM<br/>
                      <strong>Sábados:</strong> 7:30 AM – 1:00 PM<br/>
                      <span className="text-emerald-400 text-[11px]">Toma a domicilio previa cita programada</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-800 border border-slate-700 text-slate-300">
                  <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">Sede Operativa NIVAL</span>
                    <span className="text-xs text-slate-200 block mt-0.5">
                      Instalaciones centrales de diagnóstico y laboratorio clínico.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center space-x-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Confidencialidad médica y protección de datos garantizada.</span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Formulario Segmentado por Tabs */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-xs">
              
              {/* Tabs de Selección */}
              <div className="flex items-center space-x-2 pb-6 border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveTab('paciente')}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'paciente'
                      ? 'bg-sky-700 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Citas & Pacientes</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('empresas')}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'empresas'
                      ? 'bg-sky-700 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Empresas & B2B</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('alianzas')}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'alianzas'
                      ? 'bg-sky-700 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Alianzas & Cursos</span>
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">¡Solicitud recibida exitosamente!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Un asesor especializado de <strong>NIVAL Sciences</strong> se comunicará contigo al teléfono suministrado para confirmar los detalles de tu cita o propuesta.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-sky-700 text-white text-xs font-semibold"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <>
                  {/* TAB 1: PACIENTE / CITAS */}
                  {activeTab === 'paciente' && (
                    <form onSubmit={handlePatientSubmit} className="mt-6 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Nombre y Apellido *</label>
                          <input
                            type="text"
                            required
                            value={patientForm.name}
                            onChange={(e) => setPatientForm({ ...patientForm, name: e.target.value })}
                            placeholder="Ej. Carmen Rodríguez"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono o WhatsApp *</label>
                          <input
                            type="tel"
                            required
                            value={patientForm.phone}
                            onChange={(e) => setPatientForm({ ...patientForm, phone: e.target.value })}
                            placeholder="Ej. +58 412 1234567"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Modalidad de Atención</label>
                          <select
                            value={patientForm.serviceType}
                            onChange={(e) => setPatientForm({ ...patientForm, serviceType: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                          >
                            <option value="sede">Atención en Sede Principal</option>
                            <option value="domicilio">Toma de Muestra a Domicilio</option>
                            <option value="consulta">Consulta de Orientación / Asesoría</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Fecha Preferida</label>
                          <input
                            type="date"
                            value={patientForm.date}
                            onChange={(e) => setPatientForm({ ...patientForm, date: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Prueba o Perfil de Interés</label>
                        <input
                          type="text"
                          value={patientForm.preferredTest}
                          onChange={(e) => setPatientForm({ ...patientForm, preferredTest: e.target.value })}
                          placeholder="Ej. Perfil 20, Perfil Tiroideo, o indica tus indicaciones médicas"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Observaciones o Requerimientos Especiales</label>
                        <textarea
                          rows={3}
                          value={patientForm.notes}
                          onChange={(e) => setPatientForm({ ...patientForm, notes: e.target.value })}
                          placeholder="Indícanos si tienes alguna condición especial, orden médica o dudas sobre el ayuno..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Confirmar Solicitud de Cita</span>
                      </button>
                    </form>
                  )}

                  {/* TAB 2: EMPRESAS / B2B */}
                  {activeTab === 'empresas' && (
                    <form onSubmit={handleCompanySubmit} className="mt-6 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Razón Social de la Empresa *</label>
                          <input
                            type="text"
                            required
                            value={companyForm.companyName}
                            onChange={(e) => setCompanyForm({ ...companyForm, companyName: e.target.value })}
                            placeholder="Ej. Inversiones Globales C.A."
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Persona de Contacto y Cargo *</label>
                          <input
                            type="text"
                            required
                            value={companyForm.contactName}
                            onChange={(e) => setCompanyForm({ ...companyForm, contactName: e.target.value })}
                            placeholder="Ej. Lic. Ana Gómez - Gerente RRHH"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono Corporativo *</label>
                          <input
                            type="tel"
                            required
                            value={companyForm.phone}
                            onChange={(e) => setCompanyForm({ ...companyForm, phone: e.target.value })}
                            placeholder="Ej. +58 212 9999999"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Correo Institucional *</label>
                          <input
                            type="email"
                            required
                            value={companyForm.email}
                            onChange={(e) => setCompanyForm({ ...companyForm, email: e.target.value })}
                            placeholder="rrhh@tuempresa.com"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Número de Colaboradores</label>
                          <select
                            value={companyForm.employeeCount}
                            onChange={(e) => setCompanyForm({ ...companyForm, employeeCount: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                          >
                            <option value="10-25">10 a 25 colaboradores</option>
                            <option value="25-50">25 a 50 colaboradores</option>
                            <option value="50-150">50 a 150 colaboradores</option>
                            <option value="150+">Más de 150 colaboradores</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Servicio de Interés</label>
                          <select
                            value={companyForm.serviceNeeded}
                            onChange={(e) => setCompanyForm({ ...companyForm, serviceNeeded: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                          >
                            <option value="jornadas">Jornadas In-Company de Salud</option>
                            <option value="ocupacional">Exámenes Pre-empleo y Periódicos</option>
                            <option value="convenio">Convenio Colectivo con Tarifas Preferenciales</option>
                            <option value="capacitacion">Capacitación y Charlas de Prevención</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Detalle del Requerimiento</label>
                        <textarea
                          rows={3}
                          value={companyForm.message}
                          onChange={(e) => setCompanyForm({ ...companyForm, message: e.target.value })}
                          placeholder="Describe brevemente las fechas tentativas, turnos de trabajo o necesidades de salud ocupacional..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                      >
                        <Building2 className="w-4 h-4" />
                        <span>Solicitar Propuesta Corporativa B2B</span>
                      </button>
                    </form>
                  )}

                  {/* TAB 3: ALIANZAS Y FORMACIÓN */}
                  {activeTab === 'alianzas' && (
                    <form onSubmit={handleCompanySubmit} className="mt-6 space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Nombre o Institución *</label>
                        <input
                          type="text"
                          required
                          placeholder="Ej. Dr. Roberto Blanco / Centro Médico Los Álamos"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Teléfono de Contacto *</label>
                          <input
                            type="tel"
                            required
                            placeholder="Ej. +58 414 0000000"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Tipo de Propuesta</label>
                          <select className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm">
                            <option>Convenio Interinstitucional</option>
                            <option>Inscripción a Curso / Formación</option>
                            <option>Colaboración Científica / Investigación</option>
                            <option>Otros</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Mensaje o Propuesta</label>
                        <textarea
                          rows={3}
                          placeholder="Cuéntanos sobre tu institución o interés formativo..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all"
                      >
                        Enviar Propuesta
                      </button>
                    </form>
                  )}
                </>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

