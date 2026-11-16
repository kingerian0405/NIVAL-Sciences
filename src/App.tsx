import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { InstitutionalHeader } from './components/InstitutionalHeader';
import { InstitutionalFooter } from './components/InstitutionalFooter';
import { CapaInicio } from './layers/CapaInicio';
import { CapaNosotros } from './layers/CapaNosotros';
import { CapaLaboratorio } from './layers/CapaLaboratorio';
import { CapaPrevencion } from './layers/CapaPrevencion';
import { CapaAsesoriaPersonas } from './layers/CapaAsesoriaPersonas';
import { CapaSolucionesEmpresas } from './layers/CapaSolucionesEmpresas';
import { CapaFormacion } from './layers/CapaFormacion';
import { CapaInnovacion } from './layers/CapaInnovacion';
import { CapaContacto } from './layers/CapaContacto';

export function App() {
  const [activeCapaId, setActiveCapaId] = useState<string>('inicio');

  // Sincronizar capa inicial desde el hash de la URL si existe
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveCapaId(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectCapa = (id: string) => {
    setActiveCapaId(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveCapa = () => {
    switch (activeCapaId) {
      case 'inicio':
        return <CapaInicio onSelectCapa={handleSelectCapa} />;
      case 'nosotros':
        return <CapaNosotros onSelectCapa={handleSelectCapa} />;
      case 'laboratorio':
        return <CapaLaboratorio onSelectCapa={handleSelectCapa} />;
      case 'prevencion':
        return <CapaPrevencion onSelectCapa={handleSelectCapa} />;
      case 'asesoria-personas':
        return <CapaAsesoriaPersonas onSelectCapa={handleSelectCapa} />;
      case 'soluciones-empresas':
        return <CapaSolucionesEmpresas onSelectCapa={handleSelectCapa} />;
      case 'formacion':
        return <CapaFormacion onSelectCapa={handleSelectCapa} />;
      case 'innovacion':
        return <CapaInnovacion onSelectCapa={handleSelectCapa} />;
      case 'contacto':
        return <CapaContacto onSelectCapa={handleSelectCapa} />;
      default:
        return <CapaInicio onSelectCapa={handleSelectCapa} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-900">
      {/* Cabecera Institucional Sobria con Navegación Principal */}
      <InstitutionalHeader 
        activeCapaId={activeCapaId}
        onSelectCapa={handleSelectCapa}
      />

      {/* Vista de la Capa Activa */}
      <main className="flex-1">
        {renderActiveCapa()}
      </main>

      {/* Pie de Página Institucional y Marco Ético */}
      <InstitutionalFooter 
        onSelectCapa={handleSelectCapa}
      />

      {/* Botón Flotante Permanente de WhatsApp */}
      <a
        href="https://wa.me/584129058894?text=Hola%20NIVAL%20Sciences,%20quisiera%20solicitar%20información%20y%20atención"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center space-x-2 transition-all hover:scale-105 group border border-emerald-400/40 cursor-pointer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        <span className="hidden sm:inline font-bold text-xs tracking-tight">WhatsApp NIVAL</span>
      </a>
    </div>
  );
}

export default App;
