import React from 'react';

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-brand-blue-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/d/1YUsal5p54uNvwBkN62IrpsRMP4fXtiNN" 
              alt="Equipe Risco Brasil" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Uma corretora de seguros em São Paulo, com atuação desde 2013.
            </h2>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              A Risco Brasil foi fundada em 2013 e atua com foco em soluções de seguros para diferentes frentes (incluindo riscos patrimoniais entre outras soluções e, aqui, com destaque para Riscos de Engenharia).
            </p>
            <p className="text-xl font-medium text-white">
              A lógica é simples: quando o assunto é obra, o seguro precisa destravar, não atrasar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
