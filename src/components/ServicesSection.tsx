import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-white border-t border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-16 items-end">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium text-[var(--color-rb-blue)] leading-tight tracking-tight">
              Riscos de Engenharia: <br/>
              <span className="text-slate-400">proteção para construção, reforma e ampliação.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-600 font-light leading-relaxed pb-2">
            O foco aqui é Seguro de Engenharia / Seguro de Obra, aplicado a cenários reais do dia a dia da construção civil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "OBRA EM PRÉDIO",
              desc: "Proteção para obras verticais e condomínios.",
              image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
            },
            {
              title: "REFORMAS",
              desc: "Segurança para alterações estruturais e acabamentos.",
              image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
            },
            {
              title: "PROJETOS",
              desc: "Cobertura desde o projeto até a entrega das chaves.",
              image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
            }
          ].map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden h-96 spotlight-card border border-slate-200 bg-white shadow-lg">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-rb-blue)] via-[var(--color-rb-blue)]/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80"></div>
              
              <img 
                src={item.image} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale contrast-125 group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-white font-medium text-2xl tracking-tight">{item.title}</h3>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[var(--color-rb-gold)] hover:text-white">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-slate-200 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
