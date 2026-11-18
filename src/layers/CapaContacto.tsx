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
    <div className="w-full bg-nival-main text-slate-900 capa-contacto">

      {/* 1. HERO INSTITUCIONAL CON IMAGEN DE FONDO (fondo.jpeg) */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden border-b border-slate-300"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}fondo.jpeg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 sm:to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-10 py-8 sm:py-16 lg:py-20">
          <div className="max-w-2xl text-left space-y-3 sm:space-y-4">

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-serif leading-tight sm:leading-[1.14] tracking-tight italic capa-contacto-titulo capa-titulo-hero">
              “La visión que necesitas para vivir como sueñas”
            </h1>

            <div>
              <span className="inline-block font-extrabold text-slate-950 text-xs sm:text-sm pb-1 sm:pb-1.5 border-b-2 sm:border-b-[3px] border-nival-gold tracking-tight capa-contacto-subtitulo capa-subtitulo">
                Atención y Enlace Institucional · Contacto Directo
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-snug sm:leading-relaxed font-normal capa-contacto-parrafo capa-parrafo">
              Puntos formales de contacto para agendamiento de exámenes de laboratorio, tomas a domicilio, convenios corporativos para empresas, alianzas académicas y atención al usuario.
            </p>

          </div>
        </div>
      </section>

      {/* 2. DIRECTORIO OFICIAL DE CANALES DE CONTACTO */}
      <section className="bg-nival-section-light py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-300">
        <div className="max-w-6xl mx-auto w-full space-y-8 sm:space-y-10">

          {/* Encabezado Centrado de Ancho Completo */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
              Información de Contacto Directo
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight capa-contacto-titulo capa-titulo">
              Canales Oficiales
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto capa-contacto-subtitulo capa-subtitulo">
              Comunícate directamente con nuestro equipo para agendamiento de exámenes, toma a domicilio, convenios empresariales y atención institucional.
            </p>
          </div>

          {/* Tarjeta Principal de Ancho Completo */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 sm:space-y-10 w-full">

            {/* Grid de 4 Canales Centrados abarcando todo el ancho */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">

              {/* 1. Sede Principal */}
              <div className="flex flex-col items-center p-5 rounded-2xl bg-nival-section-light border border-slate-200/80 hover:border-slate-300 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 shadow-2xs shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 text-base mb-1">Sede Principal</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Instalaciones de Diagnóstico y Laboratorio Clínico NIVAL Sciences.
                  </p>
                </div>
              </div>

              {/* 2. Horarios de Atención */}
              <div className="flex flex-col items-center p-5 rounded-2xl bg-nival-section-light border border-slate-200/80 hover:border-slate-300 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-800 shadow-2xs shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 text-base mb-1">Horarios de Atención</h4>
                  <p className="text-slate-800 text-xs sm:text-sm font-semibold">
                    Lun a Vie: 7:00 AM – 7:00 PM
                  </p>
                  <p className="text-slate-800 text-xs sm:text-sm font-semibold">
                    Sáb y Dom: 7:00 AM – 6:00 PM
                  </p>
                  <span className="text-amber-800 text-xs font-bold block mt-1.5">
                    Toma a domicilio previa cita
                  </span>
                </div>
              </div>

              {/* 3. WhatsApp Oficial */}
              <div className="flex flex-col items-center p-5 rounded-2xl bg-nival-section-light border border-slate-200/80 hover:border-slate-300 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-800 shadow-2xs shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 text-base mb-1">WhatsApp Oficial</h4>
                  <a
                    href="https://wa.me/584129058894?text=Hola%20NIVAL%20Sciences,%20quisiera%20solicitar%20información%20y%20atención"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-800 font-extrabold text-sm sm:text-base block hover:underline"
                  >
                    <span className="whitespace-nowrap">+58 412 9058894</span>
                  </a>
                  <span className="text-slate-600 text-xs sm:text-sm block mt-1">
                    Atención inmediata y cotizaciones
                  </span>
                </div>
              </div>

              {/* 4. Correos Oficiales */}
              <div className="flex flex-col items-center p-5 rounded-2xl bg-nival-section-light border border-slate-200/80 hover:border-slate-300 transition-all space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-800 shadow-2xs shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-950 text-base mb-1">Correos Oficiales</h4>
                  <a href="mailto:contacto@nivalsciences.com" className="text-slate-700 hover:text-slate-950 text-xs sm:text-sm block font-medium hover:underline">
                    contacto@nivalsciences.com
                  </a>
                  <a href="mailto:corporativo@nivalsciences.com" className="text-slate-700 hover:text-slate-950 text-xs sm:text-sm block font-medium hover:underline">
                    corporativo@nivalsciences.com
                  </a>
                  <a href="mailto:alianzas@nivalsciences.com" className="text-slate-700 hover:text-slate-950 text-xs sm:text-sm block font-medium hover:underline">
                    alianzas@nivalsciences.com
                  </a>
                </div>
              </div>

            </div>

            {/* Acción Principal Centrada y Sello de Confidencialidad */}
            <div className="pt-6 border-t border-slate-100 flex flex-col items-center justify-center space-y-4 text-center">
              <a
                href="https://wa.me/584129058894?text=Hola%20NIVAL%20Sciences,%20quisiera%20solicitar%20información%20y%20atención"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base transition-all flex items-center justify-center space-x-2.5 shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>
                  Iniciar Chat por WhatsApp <span className="whitespace-nowrap">(+58 412 9058894)</span>
                </span>
              </a>

              <div className="flex items-center justify-center space-x-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Garantía de confidencialidad y estricto apego a normas de protección de datos sanitarios.</span>
              </div>
            </div>

          </div>

          {/* Formulario Formal de Solicitudes (guardado por si se reactiva) */}
          {/*
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                  Comunicación Directa
                </span>
                <h3 className="text-xl font-extrabold text-slate-950 mt-1 capa-contacto-titulo capa-titulo">
                  Formulario de Solicitudes y Enlace
                </h3>
                <p className="text-xs text-slate-600 mt-1 capa-contacto-subtitulo capa-subtitulo">
                  Selecciona el tipo de comunicación institucional para dirigir tu mensaje al área correspondiente:
                </p>
              </div>

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
          */}

        </div>
      </section>

    </div>
  );
};
