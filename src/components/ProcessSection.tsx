import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ProcessSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-white border-t border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-medium text-[var(--color-rb-blue)] leading-tight tracking-tight mb-6">
            Um processo simples: <span className="text-slate-400">você traz o contrato.</span><br/>
            A gente organiza e conduz o seguro.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Diagnóstico rápido da obra",
              desc: "Você envia tipo de obra, localização, prazo, valor aproximado e exigências contratuais.",
              image: "https://lh3.googleusercontent.com/d/1AAzUUI2BID94ntC0fR56cnEFKGqCCy0_"
            },
            {
              step: "02",
              title: "Enquadramento e proposta",
              desc: "A equipe traduz o contrato em requisitos e estrutura a proposta com coberturas equivalentes ao que foi pedido.",
              image: "https://lh3.googleusercontent.com/d/1RrRHF7AymdfaETOh9zfGmPLTcemlVlQn"
            },
            {
              step: "03",
              title: "Emissão e acompanhamento",
              desc: "Com tudo alinhado, conduzimos o processo com a seguradora e acompanhamos até a emissão.",
              image: "https://lh3.googleusercontent.com/d/1N2JNfikdfYdXjwVEnry9op3EmWTk4gg0"
            },
            {
              step: "04",
              title: "Suporte contínuo",
              desc: "Após a emissão, continuamos ao seu lado para qualquer necessidade ou sinistro.",
              image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            }
          ].map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden h-[420px] spotlight-card border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="absolute inset-0 z-0">
                 <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110 filter grayscale contrast-125" />
                 <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="text-6xl font-mono font-bold text-slate-100 mb-auto group-hover:text-[var(--color-rb-gold)]/20 transition-colors duration-500">
                  {item.step}
                </div>
                
                <div className="mt-auto">
                  <div className="w-8 h-px bg-[var(--color-rb-gold)] mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <h3 className="font-medium text-xl text-[var(--color-rb-blue)] mb-4 leading-tight group-hover:text-[var(--color-rb-gold)] transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <p className="text-xs text-slate-500 uppercase tracking-widest mb-8">Se faz sentido pro seu contrato, me chama no WhatsApp.</p>
           <button 
             onClick={() => window.open('https://wa.me/551123370104', '_blank')}
             className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-rb-gold)] text-white rounded-full font-bold text-sm uppercase tracking-wider overflow-hidden transition-all hover:scale-105 shadow-lg shadow-[var(--color-rb-gold)]/20"
           >
             <span className="relative z-10">Cotar meu Seguro de Engenharia</span>
             <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
             <div className="absolute inset-0 bg-[#b49264] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
           </button>
        </div>
      </div>
    </section>
  );
};
