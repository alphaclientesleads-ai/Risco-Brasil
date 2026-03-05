import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer id="contato" className="bg-brand-blue-gradient text-white pt-16 pb-8 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Final */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Quer destravar o seguro exigido e seguir com a obra?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Chama no WhatsApp e me diga: tipo de obra + o que o contrato está exigindo. Se fizer sentido, a gente encaminha o próximo passo.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/551123370104', '_blank')}
            className="bg-brand-gold-gradient text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity uppercase text-sm"
          >
            COTAR MEU SEGURO DE ENGENHARIA
          </button>
        </div>

        {/* Social Media */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
           <div className="flex items-center gap-4">
             <div className="bg-brand-navy p-3 rounded-full">
               <Logo light />
             </div>
             <div className="text-left">
               <h3 className="font-bold text-xl uppercase tracking-widest">NOS SIGA NAS<br/>REDES SOCIAIS</h3>
             </div>
           </div>
           <p className="max-w-xs text-sm text-gray-300">Risco Brasil, corretora de seguros em São Paulo, com atuação desde 2013.</p>
        </div>

        {/* Instagram Grid Placeholder - mimicking the image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 opacity-80">
           <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden"><img src="https://picsum.photos/seed/insta1/300/300" className="w-full h-full object-cover"/></div>
           <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden"><img src="https://picsum.photos/seed/insta2/300/300" className="w-full h-full object-cover"/></div>
           <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden"><img src="https://picsum.photos/seed/insta3/300/300" className="w-full h-full object-cover"/></div>
           <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden"><img src="https://picsum.photos/seed/insta4/300/300" className="w-full h-full object-cover"/></div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Logo light className="mb-6" />
            <p className="text-white mb-6 max-w-sm">
              A Risco Brasil Corretora de Seguros atua no mercado nacional desde 2013, consolidando experiência em seguros complexos e soluções financeiras.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-gold">Contato</h4>
            <ul className="space-y-4 text-white">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span>R. Pequetita, 145 – Cj. 91<br/>Vl. Olímpia – São Paulo/SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span>(11) 2337-0104</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>contato@riscobrasil.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-gold">Links</h4>
            <ul className="space-y-3 text-white">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

        </div>

          <div className="border-t border-white/10 pt-8 text-center text-white text-[10px] sm:text-xs">
            <p className="mb-2">CNPJ 17.894.463/0001-47 · © 2026 Risco Brasil Corretora de Seguros</p>
            <p>© 2026 Risco Brasil Corretora de Seguros. Todos os direitos reservados. Site desenvolvido por <a href="https://marketingalphadigital.com.br/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors">Alpha Marketing Digital</a>.</p>
          </div>
      </div>
    </footer>
  );
};
