import React from 'react';

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">
            Riscos de Engenharia: proteção para construção, reforma, ampliação e obras em geral.
          </h2>
          <p className="text-lg text-gray-600">
            O foco aqui é Seguro de Engenharia / Seguro de Obra, aplicado a cenários como:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "OBRA EM PRÉDIO",
              image: "https://picsum.photos/seed/predio/800/600"
            },
            {
              title: "REFORMAS",
              image: "https://picsum.photos/seed/reformas/800/600"
            },
            {
              title: "PROJETOS",
              image: "https://picsum.photos/seed/projetos/800/600"
            }
          ].map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden h-80 shadow-lg">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h3 className="text-white font-bold text-xl uppercase tracking-wider">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
