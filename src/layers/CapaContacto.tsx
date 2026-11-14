import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Building,
  User,
  Handshake
} from 'lucide-react';

interface CapaContactoProps {
  onSelectCapa: (id: string) => void;
}

export const CapaContacto: React.FC<CapaContactoProps> = ({ onSelectCapa }) => {
  const [tipoGestion, setTipoGestion] = useState<'servicio' | 'alianza' | 'empresa'>('servicio');
  const [enviado, setEnviado] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    organizacion: '',
    contacto: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 7000);
  };

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
              <span className="inline-block font-extrabold text-slate-950 text-xs sm:text-sm pb-1.5 border-b-2 sm:border-b-[3px] border-nival-gold tracking-tight">
                Atención y Enlace Institucional · Contacto Directo
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-2 font-normal">
              Puntos formales de contacto para agendamiento de exámenes de laboratorio, tomas a domicilio, convenios corporativos para empresas, alianzas académicas y atención al usuario.
            </p>

          </div>
        </div>
      </section>

      {/* 2. DIRECTORIO OFICIAL Y FORMULARIO INSTITUCIONAL */}
      <section className="bg-nival-section-light py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Columna Izquierda: Directorio de Atención (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-xs">
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                    Información de Contacto
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-950 mt-1">
                    Canales Oficiales
                  </h3>
                </div>

                <div className="space-y-5 text-xs sm:text-sm text-slate-800">
                  
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-950 font-bold">Sede Principal:</strong>
                      <span className="text-slate-600 text-xs">Instalaciones de Diagnóstico y Laboratorio Clínico NIVAL Sciences.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center text-sky-800 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-950 font-bold">Horario de Toma y Atención:</strong>
                      <span className="text-slate-600 text-xs block">Lunes a Viernes: 7:00 AM – 4:00 PM</span>
                      <span className="text-slate-600 text-xs block">Sábados: 7:30 AM – 1:00 PM</span>
                      <span className="text-amber-800 text-[11px] font-semibold block mt-1">Toma a domicilio previa programación.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-950 font-bold">Líneas de Atención:</strong>
                      <span className="text-slate-600 text-xs block">+58 (412) 000-0000 (Atención general)</span>
                      <span className="text-slate-600 text-xs block">+58 (212) 000-0000 (Sede administrativa)</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center text-violet-800 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-950 font-bold">Correos Institucionales:</strong>
                      <span className="text-slate-600 text-xs block">contacto@nivalsciences.com</span>
                      <span className="text-slate-600 text-xs block">corporativo@nivalsciences.com</span>
                      <span className="text-slate-600 text-xs block">alianzas@nivalsciences.com</span>
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-slate-100 flex items-start space-x-2 text-[11px] text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Garantía de confidencialidad y estricto apego a normas de protección de datos sanitarios.</span>
                </div>
              </div>

            </div>

            {/* Columna Derecha: Formulario Formal de Solicitudes (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-sm">
                
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                    Comunicación Directa
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-950 mt-1">
                    Formulario de Solicitudes y Enlace
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Selecciona el tipo de comunicación institucional para dirigir tu mensaje al área correspondiente:
                  </p>
                </div>

                {/* Selector de Tipo de Gestión */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setTipoGestion('servicio')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold text-center cursor-pointer transition-colors ${
                      tipoGestion === 'servicio'
                        ? 'bg-nival-gold text-slate-950 shadow-xs'
                        : 'bg-nival-section-light text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    Servicio / Paciente
                  </button>

                  <button
                    type="button"
                    onClick={() => setTipoGestion('empresa')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold text-center cursor-pointer transition-colors ${
                      tipoGestion === 'empresa'
                        ? 'bg-nival-gold text-slate-950 shadow-xs'
                        : 'bg-nival-section-light text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    Empresa / B2B
                  </button>

                  <button
                    type="button"
                    onClick={() => setTipoGestion('alianza')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold text-center cursor-pointer transition-colors ${
                      tipoGestion === 'alianza'
                        ? 'bg-nival-gold text-slate-950 shadow-xs'
                        : 'bg-nival-section-light text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    Alianza / Formación
                  </button>
                </div>

                {enviado ? (
                  <div className="p-8 text-center bg-nival-card-tint rounded-xl border border-slate-300 space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                    <h4 className="text-base font-extrabold text-slate-950">Mensaje recibido correctamente</h4>
                    <p className="text-xs text-slate-800 max-w-sm mx-auto leading-relaxed">
                      Su solicitud ha sido registrada en el sistema de NIVAL Sciences. Nuestro equipo de coordinación se pondrá en contacto a través de los datos indicados.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">
                          {tipoGestion === 'empresa' ? 'Razón Social / Organización *' : 'Nombre y Apellido *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          placeholder={tipoGestion === 'empresa' ? 'Nombre de la empresa' : 'Ej. Lic. Carlos Méndez'}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-nival-section-light border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-slate-500 shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">
                          Teléfono de Contacto *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.contacto}
                          onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
                          placeholder="Ej. +58 412 0000000"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-nival-section-light border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-slate-500 shadow-2xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.correo}
                          onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                          placeholder="correo@ejemplo.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-nival-section-light border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-slate-500 shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1">
                          Asunto o Motivo
                        </label>
                        <input
                          type="text"
                          value={formData.asunto}
                          onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                          placeholder={
                            tipoGestion === 'servicio' 
                              ? 'Ej. Consulta sobre examen o toma a domicilio'
                              : tipoGestion === 'empresa'
                                ? 'Ej. Solicitud de jornada in-company o convenio'
                                : 'Ej. Propuesta de convenio o curso'
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-nival-section-light border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-slate-500 shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Detalle del Requerimiento *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        placeholder="Escriba aquí los detalles de su consulta, solicitud de servicios o propuesta de alianza institucional..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-nival-section-light border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-slate-500 shadow-2xs"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl bg-nival-gold hover:bg-nival-gold-hover text-slate-950 font-extrabold text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center space-x-2 shadow-xs"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Enviar Comunicación Institucional</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
