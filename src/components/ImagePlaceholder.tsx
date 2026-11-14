import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  className?: string;
  aspect?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  sublabel,
  className = '',
  aspect = 'aspect-16/9'
}) => {
  return (
    <div 
      className={`w-full rounded-2xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden relative shadow-xs ${aspect} ${className}`}
      role="img"
      aria-label={label}
    >
      {/* Sutil textura o trama institucional */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10 flex flex-col items-center space-y-2 max-w-md px-4">
        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-2xs">
          <ImageIcon className="w-5 h-5 text-slate-600" />
        </div>
        <div>
          <span className="text-xs font-bold text-slate-900 tracking-tight block">
            {label}
          </span>
          {sublabel && (
            <span className="text-[11px] text-slate-600 font-medium mt-0.5 block">
              {sublabel}
            </span>
          )}
        </div>
        <span className="text-[9px] uppercase tracking-widest text-slate-500 font-mono font-bold">
          Espacio Reservado para Fotografía
        </span>
      </div>
    </div>
  );
};

