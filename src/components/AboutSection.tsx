import React from 'react';

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-white border-t border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group spotlight-card border border-slate-200">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-rb-blue)]/50 via-transparent to-transparent z-10"></div>
            <img 
              src="https://lh3.googleusercontent.com/d/1YUsal5p54uNvwBkN62IrpsRMP4fXtiNN" 
              alt="Equipe Risco Brasil" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale contrast-125"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-rb-gold)]/20 border border-[var(--color-rb-gold)]/30 text-[var(--color-rb-blue)] text-[10px] font-mono uppercase tracking-widest mb-4">
                Desde 2013
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-5xl font-medium text-[var(--color-rb-blue)] mb-8 leading-tight tracking-tight">
              Uma corretora de seguros em São Paulo, <span className="text-slate-400">com atuação desde 2013.</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
              <p>
                A Risco Brasil foi fundada em 2013 e atua com foco em soluções de seguros para diferentes frentes (incluindo riscos patrimoniais entre outras soluções e, aqui, com destaque para Riscos de Engenharia).
              </p>
              <p className="text-slate-800 font-medium border-l-2 border-[var(--color-rb-gold)] pl-6">
                A lógica é simples: quando o assunto é obra, o seguro precisa destravar, não atrasar.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-200">
              <div>
                <span className="block text-4xl font-mono font-bold text-[var(--color-rb-blue)] mb-2">10+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">Anos de Experiência</span>
              </div>
              <div>
                <span className="block text-4xl font-mono font-bold text-[var(--color-rb-blue)] mb-2">100%</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">Foco em Solução</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
