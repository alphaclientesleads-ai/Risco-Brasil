import React from 'react';
import { motion } from 'motion/react';

export const ProblemSection = () => {
  return (
    <section className="bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Scrolling Text Banner */}
      <div className="bg-[var(--color-rb-gold)]/10 border-y border-[var(--color-rb-gold)]/20 py-3 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-8 text-xs md:text-sm font-mono font-bold tracking-widest uppercase text-[var(--color-rb-blue)]"
        >
          <span>PARA INCORPORADORAS, CONSTRUTORAS E EMPRESAS DE ENGENHARIA QUE PRECISAM DO SEGURO "CERTO" NÃO SÓ DO SEGURO "BARATO"</span>
          <span>•</span>
          <span>PARA INCORPORADORAS, CONSTRUTORAS E EMPRESAS DE ENGENHARIA QUE PRECISAM DO SEGURO "CERTO" NÃO SÓ DO SEGURO "BARATO"</span>
          <span>•</span>
          <span>PARA INCORPORADORAS, CONSTRUTORAS E EMPRESAS DE ENGENHARIA QUE PRECISAM DO SEGURO "CERTO" NÃO SÓ DO SEGURO "BARATO"</span>
          <span>•</span>
          <span>PARA INCORPORADORAS, CONSTRUTORAS E EMPRESAS DE ENGENHARIA QUE PRECISAM DO SEGURO "CERTO" NÃO SÓ DO SEGURO "BARATO"</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden h-[500px] group spotlight-card border border-slate-200 shadow-xl">
             <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-rb-blue)]/80 via-transparent to-transparent z-10"></div>
             <img 
               src="https://lh3.googleusercontent.com/d/1CWXb1ZNtfGxac3rZojNvGmVbTLAbpO1X" 
               alt="Engenheiros em obra" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale contrast-125"
             />
             <div className="absolute bottom-0 left-0 p-8 z-20">
               <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-rb-gold)]/20 border border-[var(--color-rb-gold)]/30 text-[var(--color-rb-blue)] text-[10px] font-mono uppercase tracking-widest mb-4">
                 Realidade da Obra
               </div>
               <p className="text-white font-medium text-lg">
                 O canteiro não para, e a burocracia não pode ser o freio.
               </p>
             </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-5xl font-medium text-[var(--color-rb-blue)] mb-8 leading-tight tracking-tight">
              Você sabe muito bem...
            </h2>
            
            <div className="space-y-8">
              <div className="pl-6 border-l border-slate-200">
                <p className="text-xl text-slate-800 mb-2 font-light">
                  Na prática, o seguro entra como uma etapa burocrática.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  O cliente final exige, e sem o seguro a obra não começa. E se a obra não começa, você não verá tão cedo o recebimento!
                </p>
              </div>

              <div className="pl-6 border-l border-[var(--color-rb-gold)]">
                <p className="text-xl text-slate-800 mb-2 font-light">
                  A solução Risco Brasil
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Se você está com obra, reforma ou ampliação e precisa cumprir exigências do contrato, nossos serviços são desenhados para destravar esse processo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
