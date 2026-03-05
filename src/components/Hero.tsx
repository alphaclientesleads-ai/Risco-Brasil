import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-brand-navy leading-tight mb-6"
            >
              Seguro de Engenharia para destravar sua obra!
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              A Risco Brasil atua desde 2013 ajudando engenheiros e empreiteiras a organizar o que o contratante exige.
              <br/>Preencha o formulário ou fale conosco pelo WhatsApp.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => window.open('https://wa.me/551123370104', '_blank')}
                className="bg-brand-gold-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                COTAR MEU SEGURO DE ENGENHARIA
              </motion.button>
            </div>
            
            <div className="flex gap-4 items-center text-xs text-gray-500 font-medium">
               <div className="flex items-center gap-1"><img src="https://lh3.googleusercontent.com/d/1xG18V9Ylt7vTUcpNwB5daG8ws5dGeGxo" className="w-8 h-8 rounded-full object-cover" alt="Avatar"/> Mais de 600 Empresas atendidas</div>
               <div className="flex items-center gap-1">Empresas do pequeno ao grande porte</div>
               <div className="flex items-center gap-1">Mais de 13 anos de atuação no mercado</div>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-brand-blue-gradient p-6 rounded-2xl shadow-2xl text-white"
            >
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                const msg = `Olá! Vim pelo site e gostaria de uma cotação.
Nome: ${data.nome}
WhatsApp: ${data.whatsapp}
Email: ${data.email}
Serviço: ${data.servico}
Mensagem: ${data.mensagem}`;
                window.open(`https://wa.me/551123370104?text=${encodeURIComponent(msg)}`, '_blank');
              }}>
                <input name="nome" type="text" placeholder="Seu nome completo" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:bg-white/30" required />
                <input name="whatsapp" type="tel" placeholder="DDD+WhatsApp" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:bg-white/30" required />
                <input name="email" type="email" placeholder="Seu e-mail" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:bg-white/30" />
                <select name="servico" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:bg-white/30 appearance-none">
                  <option value="" className="text-gray-800">Serviço desejado</option>
                  <option value="Seguro de Engenharia" className="text-gray-800">Seguro de Engenharia</option>
                  <option value="Outros" className="text-gray-800">Outros</option>
                </select>
                <textarea name="mensagem" rows={3} placeholder="Mensagem" className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:bg-white/30 resize-none"></textarea>
                
                <button type="submit" className="w-full bg-brand-gold-gradient text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex justify-between items-center px-6">
                  <span>ENVIAR FORMULÁRIO</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
