import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

export const Hero = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text-char',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, duration: 1, ease: 'power4.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white z-10"></div>
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/d/1xG18V9Ylt7vTUcpNwB5daG8ws5dGeGxo"
            alt="Background Construction"
            className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-medium text-[var(--color-rb-blue)] leading-[1.1] mb-8 tracking-tight">
              Seguro de Engenharia <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-rb-blue)] via-[var(--color-rb-gold)] to-[var(--color-rb-blue)]">
                para destravar sua obra.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-light">
              A Risco Brasil atua desde 2013 ajudando engenheiros e empreiteiras a organizar o que o contratante exige. Sem burocracia, direto ao ponto.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button
                onClick={() => scrollTo('contato-form')}
                className="group relative px-8 py-4 bg-[var(--color-rb-gold)] text-white rounded-full font-bold text-sm uppercase tracking-wider overflow-hidden transition-all hover:scale-105 shadow-lg shadow-[var(--color-rb-gold)]/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Cotar Agora <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#b49264] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
              </button>

              <button
                onClick={() => window.open('https://wa.me/551123370104', '_blank')}
                className="px-8 py-4 bg-transparent border border-slate-200 text-slate-700 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-slate-50 transition-colors"
              >
                Falar no WhatsApp
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-[var(--color-rb-blue)] font-mono">600+</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Empresas Atendidas</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-[var(--color-rb-blue)] font-mono">13 Anos</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">De Mercado</span>
              </div>
              <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
                <span className="text-2xl font-bold text-[var(--color-rb-blue)] font-mono">100%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Online e Ágil</span>
              </div>
            </div>
          </div>

          {/* Right Form - Glassmorphism */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-rb-gold)] to-[#e5c585] rounded-2xl opacity-10"></div>
            <div className="relative bg-white/90 border border-slate-200 p-8 rounded-2xl shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-[var(--color-rb-blue)] mb-2">Diagnóstico Rápido</h3>
                <p className="text-sm text-slate-500">Preencha para receber uma análise preliminar.</p>
              </div>

              <form className="space-y-4" onSubmit={async (e) => {
                e.preventDefault();
                const btn = e.currentTarget.querySelector('button[type="submit"]');
                if (btn) btn.innerHTML = 'Enviando...';

                const formData = new FormData(e.currentTarget);

                // Enviar para o PHP em background
                try {
                  await fetch('/lp/send-mail.php', {
                    method: 'POST',
                    body: formData
                  });
                } catch (error) {
                  console.error('Erro ao enviar e-mail:', error);
                }

                // Redirecionar para arquivo HTML físico (mais seguro na Locaweb)
                window.location.href = '/lp/lp-obrigado.html';
              }}>
                <div className="space-y-4">
                  <div className="relative group">
                    <input name="nome" type="text" required style={{ color: '#0f172a', backgroundColor: '#ffffff' }} className="w-full border-2 border-slate-900 rounded-xl px-4 py-3 font-bold text-base focus:border-[var(--color-rb-gold)] outline-none transition-all" placeholder="Nome Completo" />
                  </div>

                  <div className="relative group">
                    <input name="whatsapp" type="tel" required style={{ color: '#0f172a', backgroundColor: '#ffffff' }} className="w-full border-2 border-slate-900 rounded-xl px-4 py-3 font-bold text-base focus:border-[var(--color-rb-gold)] outline-none transition-all" placeholder="Seu WhatsApp" />
                  </div>

                  <div className="relative group">
                    <input name="email" type="email" required style={{ color: '#0f172a', backgroundColor: '#ffffff' }} className="w-full border-2 border-slate-900 rounded-xl px-4 py-3 font-bold text-base focus:border-[var(--color-rb-gold)] outline-none transition-all" placeholder="Seu E-mail Corporativo" />
                  </div>

                  <div className="relative group">
                    <select name="servico" required style={{ color: '#0f172a', backgroundColor: '#ffffff' }} className="w-full border-2 border-slate-900 rounded-xl px-4 py-3 font-bold text-base focus:border-[var(--color-rb-gold)] outline-none transition-all appearance-none cursor-pointer">
                      <option value="" className="text-slate-400">Selecione o serviço...</option>
                      <option value="Seguro de Engenharia">Seguro de Engenharia</option>
                      <option value="Responsabilidade Civil">Responsabilidade Civil</option>
                      <option value="Garantia Contratual">Garantia Contratual</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full bg-[var(--color-rb-gold)] text-white py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#b49264] transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-[var(--color-rb-gold)]/20">
                  Solicitar Cotação
                </button>

                <p className="text-[10px] text-center text-slate-500 mt-4">
                  <CheckCircle2 className="w-3 h-3 inline mr-1 text-[var(--color-rb-gold)]" />
                  Dados protegidos e criptografados.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
