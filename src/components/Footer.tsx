import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-rb-blue)] border-t border-slate-800 pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo className="h-12 w-auto" color="#ffffff" />
            </div>
            <p className="text-slate-400 font-light mb-8 max-w-sm leading-relaxed">
              A Risco Brasil Corretora de Seguros atua no mercado nacional desde 2013, consolidando experiência em seguros complexos e soluções financeiras para o setor de engenharia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-[var(--color-rb-gold)] hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-[var(--color-rb-gold)] hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-[var(--color-rb-gold)] hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold text-[var(--color-rb-gold)] uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-slate-600 group-hover:text-[var(--color-rb-gold)] transition-colors shrink-0 mt-0.5" />
                <span className="group-hover:text-white transition-colors">R. Pequetita, 145 – Cj. 91<br/>Vl. Olímpia – São Paulo/SP</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-slate-600 group-hover:text-[var(--color-rb-gold)] transition-colors shrink-0" />
                <span className="group-hover:text-white transition-colors">(11) 2337-0104</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-slate-600 group-hover:text-[var(--color-rb-gold)] transition-colors shrink-0" />
                <span className="group-hover:text-white transition-colors">contato@riscobrasil.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold text-[var(--color-rb-gold)] uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-3 text-slate-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-700"></span>Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-700"></span>Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-700"></span>Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest">
          <p>CNPJ 17.894.463/0001-47 · © 2026 Risco Brasil</p>
          <p>
            Desenvolvido por <a href="https://marketingalphadigital.com.br/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--color-rb-gold)] transition-colors font-bold">Alpha Marketing Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
