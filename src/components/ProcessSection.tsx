import React from 'react';

export const ProcessSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">
            Um processo simples: você traz o contrato.<br/>A gente organiza e conduz o seguro.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Entendimento do que o contratante exige",
              desc: "Para nós não importa se sua apólice é de 10 mil ou 100 milhões, o foco é o mesmo: entender o contrato para não ter erro.",
              image: "https://lh3.googleusercontent.com/d/1AAzUUI2BID94ntC0fR56cnEFKGqCCy0_"
            },
            {
              step: "02",
              title: "Organização das informações e cotação",
              desc: "O time da Risco Brasil faz o levantamento de dados, documentação e conduz a cotação com as seguradoras especialistas.",
              image: "https://lh3.googleusercontent.com/d/1RrRHF7AymdfaETOh9zfGmPLTcemlVlQn"
            },
            {
              step: "03",
              title: "Ajustes e conformidade da apólice",
              desc: "As minutas são analisadas e ajustadas para garantir que atendem as exigências contratuais da obra.",
              image: "https://lh3.googleusercontent.com/d/1N2JNfikdfYdXjwVEnry9op3EmWTk4gg0"
            },
            {
              step: "04",
              title: "Emissão e continuidade",
              desc: "Após a aprovação, a apólice é emitida com agilidade para você colocar o time em campo e tocar a obra.",
              image: "https://picsum.photos/seed/emissao/800/600"
            }
          ].map((item, i) => (
            <div key={i} className="bg-brand-navy rounded-2xl overflow-hidden text-white h-full flex flex-col">
              <div className="h-40 overflow-hidden relative">
                 <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60" />
                 <div className="absolute top-4 left-4 text-5xl font-bold text-white/20">{item.step}</div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="font-bold text-lg mb-3 leading-tight">{item.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Se faz sentido pro seu contrato, me chama no WhatsApp.</p>
           <button 
             onClick={() => window.open('https://wa.me/551123370104', '_blank')}
             className="bg-brand-gold-gradient text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity uppercase text-sm"
           >
             Cotar meu Seguro de Engenharia
           </button>
        </div>
      </div>
    </section>
  );
};
