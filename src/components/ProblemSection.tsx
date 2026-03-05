import React from 'react';
import { motion } from 'motion/react';

export const ProblemSection = () => {
  return (
    <section className="bg-brand-navy text-white relative overflow-hidden">
      {/* Blue Banner with Scrolling Text */}
      <div className="bg-brand-blue-gradient py-3 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block text-xs md:text-sm font-bold tracking-widest uppercase"
        >
          PARA INCORPORADORAS, CONSTRUTORAS E EMPRESAS DE ENGENHARIA QUE PRECISAM DO SEGURO "CERTO" NÃO SÓ DO SEGURO "BARATO" &nbsp; • &nbsp; PARA INCORPORADORAS, CONSTRUTORAS E EMPRESAS DE ENGENHARIA QUE PRECISAM DO SEGURO "CERTO" NÃO SÓ DO SEGURO "BARATO"
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden h-[400px]">
             <img 
               src="https://lh3.googleusercontent.com/d/1CWXb1ZNtfGxac3rZojNvGmVbTLAbpO1X" 
               alt="Engenheiros em obra" 
               className="w-full h-full object-cover"
             />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Você sabe muito bem...
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Na prática, o seguro entra como uma etapa burocrática. O cliente final exige, e sem o seguro a obra não começa e se a obra não começa, você não verá tão cedo o recebimento!
            </p>
            <p className="text-sm text-gray-400">
              Se você está com obra, reforma ou ampliação e precisa cumprir exigências do contrato, nossos serviços são para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
