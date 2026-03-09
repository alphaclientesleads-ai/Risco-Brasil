import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const Header = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Como funciona', id: 'como-funciona' },
    { label: 'Depoimentos', id: 'depoimentos' },
    { label: 'Contato', id: 'contato-form' }
  ];

  return (
    <>
      <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center transition-all duration-500">
        <div className="bg-white/95 border border-slate-200 rounded-full px-2 py-2 flex items-center gap-1 shadow-lg transition-all duration-500 hover:border-[var(--color-rb-gold)]/20">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="hidden md:block px-4 md:px-6 py-2.5 text-[10px] md:text-xs font-medium text-[var(--color-rb-gray)] hover:text-[var(--color-rb-blue)] rounded-full hover:bg-slate-100 transition-all uppercase tracking-wider"
            >
              {item.label}
            </button>
          ))}
          
          <div className="w-px h-4 bg-slate-200 mx-2 hidden md:block"></div>
          
          <button
            onClick={() => scrollTo('contato-form')}
            className="group px-6 py-2.5 text-[10px] md:text-xs font-bold text-white bg-[var(--color-rb-gold)] rounded-full hover:bg-[#b49264] transition-colors shadow-lg shadow-[var(--color-rb-gold)]/20 uppercase tracking-wider flex items-center gap-2"
          >
            Cotar <span className="hidden group-hover:inline-block transition-all">→</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-[var(--color-rb-blue)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { scrollTo(item.id); setIsMenuOpen(false); }}
                  className="text-xl font-medium text-[var(--color-rb-blue)] hover:text-[var(--color-rb-gold)] transition-colors uppercase tracking-widest"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Mark */}
      <div className="fixed top-9 left-8 z-40 pointer-events-none hidden md:block">
        <div className="flex items-center gap-3">
          <Logo className="h-10 w-auto" color="#253464" />
        </div>
      </div>
    </>
  );
};
