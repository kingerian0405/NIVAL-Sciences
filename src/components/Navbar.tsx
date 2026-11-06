import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Microscope, 
  Phone, 
  Sparkles, 
  Building2, 
  CalendarCheck,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenContact: (defaultTab?: string) => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenQuiz }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Ecosistema', href: '#ecosistema' },
    { label: 'Laboratorio', href: '#laboratorio' },
    { label: 'Prevención', href: '#prevencion' },
    { label: 'Empresas B2B', href: '#empresas' },
    { label: 'Asesoría', href: '#asesoria' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Nosotros', href: '#nosotros' },
  ];

  return (
    <>
      {/* Top Banner Informativo */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-200">Ecosistema Integral de Salud, Asesoría e Innovación</span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-400">Doble verificación analítica y riguroso control de calidad</span>
          </div>
          <div className="flex items-center space-x-4 text-slate-300">
            <a 
              href="https://wa.me/584120000000?text=Hola,%20deseo%20información%20sobre%20los%20servicios%20de%20NIVAL%20Sciences" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Atención Inmediata</span>
            </a>
            <span className="text-slate-600">|</span>
            <button 
              onClick={() => onOpenContact('empresas')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 text-xs"
            >
              <Building2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Atención Corporativa</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo NIVAL SCIENCES */}
            <a href="#inicio" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all border border-slate-700/50">
                <Microscope className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1.5 leading-none">
                  <span className="text-xl font-extrabold tracking-tight text-slate-900">NIVAL</span>
                  <span className="text-xl font-bold tracking-wider text-sky-700">SCIENCES</span>
                </div>
                {/* Característica línea dorada/ámbar de la marca */}
                <div className="h-0.5 w-full bg-gradient-to-r from-amber-500 via-amber-400 to-transparent mt-1 rounded-full"></div>
                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold mt-0.5">
                  Salud · Diagnóstico · Innovación
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-700 hover:bg-slate-100/80 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center space-x-2 text-xs font-semibold px-3.5 py-2 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Orientador Preventivo</span>
              </button>

              <button
                onClick={() => onOpenContact('paciente')}
                className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-sky-700 hover:bg-sky-800 text-white shadow-sm hover:shadow transition-all"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Solicitar Servicios</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center space-x-2">
              <button
                onClick={() => onOpenContact('paciente')}
                className="text-xs font-semibold px-3 py-1.5 rounded-md bg-sky-700 text-white md:hidden"
              >
                Citas
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
                aria-label="Abrir Menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 mt-3 space-y-3 shadow-lg animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="flex items-center justify-center space-x-1.5 p-2.5 rounded-lg bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Test Preventivo</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('empresas');
                }}
                className="flex items-center justify-center space-x-1.5 p-2.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
              >
                <Building2 className="w-4 h-4 text-sky-700" />
                <span>Área Empresas</span>
              </button>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('paciente');
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-sky-700 text-white font-semibold text-sm shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Solicitar Servicios / Cita</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

