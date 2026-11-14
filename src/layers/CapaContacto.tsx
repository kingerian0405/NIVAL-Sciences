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
import { ImagePlaceholder } from '../components/ImagePlaceholder';

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
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-16">
      
      {/* Encabezado */}
      <div className="border-b border-slate-200 pb-8 space-y-1.5">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
          Atención y Enlace Institucional
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Contacto y Canales de Atención
        </h1>
        <p className="text-amber-800 text-sm font-semibold italic">
          “La visión que necesitas para vivir como sueñas”
        </p>
        <p className="text-base text-slate-700">
          Puntos formales de contacto para solicitudes de servicio, convenios corporativos, alianzas institucionales y atención general.
        </p>
      </div>

      {/* Espacio reservado con fondo gris para Imagen de Fondo de Sede / Instalaciones */}
      <ImagePlaceholder 
        label="Espacio reservado para imagen de fondo: Fachada y Sede Central NIVAL Sciences"
        sublabel="Ubicación física, recepción de pacientes y puntos de acceso institucional."
        className="h-52 sm:h-64"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Columna Izquierda: Directorio de Atención (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-5 shadow-xs">
            <h3 className="text-base font-bold text-slate-950">
              Canales Oficiales
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-800">
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Sede Principal:</strong>
                  <span className="text-slate-700 text-xs">Instalaciones de Diagnóstico y Laboratorio Clínico NIVAL Sciences.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Horario de Toma y Atención:</strong>
                  <span className="text-slate-700 text-xs block">Lunes a Viernes: 7:00 AM – 4:00 PM</span>
                  <span className="text-slate-700 text-xs block">Sábados: 7:30 AM – 1:00 PM</span>
                  <span className="text-slate-600 text-[11px] block mt-0.5">Toma a domicilio previa programación.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Líneas de Atención:</strong>
                  <span className="text-slate-700 text-xs block">+58 (412) 000-0000 (Atención general)</span>
                  <span className="text-slate-700 text-xs block">+58 (212) 000-0000 (Sede administrativa)</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Correos Electrónicos:</strong>
                  <span className="text-slate-700 text-xs block">contacto@nivalsciences.com</span>
                  <span className="text-slate-700 text-xs block">corporativo@nivalsciences.com</span>
                  <span className="text-slate-700 text-xs block">alianzas@nivalsciences.com</span>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-200 flex items-start space-x-2 text-[11px] text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>Garantía de confidencialidad y estricto apego a normas de protección de datos sanitarios.</span>
            </div>
          </div>

        </div>

        {/* Columna Derecha: Formulario Formal de Solicitudes (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-xs">
            
            <div>
              <h3 className="text-base font-bold text-slate-950">
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
                className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-center cursor-pointer transition-colors ${
                  tipoGestion === 'servicio'
                    ? 'bg-nival-gold text-slate-950 font-bold shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Servicio / Paciente
              </button>

              <button
                type="button"
                onClick={() => setTipoGestion('empresa')}
                className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-center cursor-pointer transition-colors ${
                  tipoGestion === 'empresa'
                    ? 'bg-nival-gold text-slate-950 font-bold shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Empresa / B2B
              </button>

              <button
                type="button"
                onClick={() => setTipoGestion('alianza')}
                className={`py-2 px-2.5 rounded-xl text-xs font-semibold text-center cursor-pointer transition-colors ${
                  tipoGestion === 'alianza'
                    ? 'bg-nival-gold text-slate-950 font-bold shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                Alianza / Formación
              </button>
            </div>

            {enviado ? (
              <div className="p-8 text-center bg-white rounded-xl border border-slate-200 space-y-3 shadow-xs">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h4 className="text-base font-bold text-slate-950">Mensaje recibido correctamente</h4>
                <p className="text-xs text-slate-700 max-w-sm mx-auto leading-relaxed">
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
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-slate-400 shadow-2xs"
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
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-slate-400 shadow-2xs"
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
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-slate-400 shadow-2xs"
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
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-slate-400 shadow-2xs"
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
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-slate-400 shadow-2xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-nival-gold hover:bg-nival-gold-hover text-slate-950 font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center space-x-2 shadow-xs"
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
  );
};

