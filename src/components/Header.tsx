import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-8 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}`}>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-full px-2 py-2 flex items-center gap-1 shadow-lg transition-all duration-500 hover:border-[var(--color-rb-gold)]/20 hover:bg-white/90">
          {['Home', 'Serviços', 'Como funciona', 'Depoimentos', 'Contato'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
              className="hidden md:block px-4 md:px-6 py-2.5 text-[10px] md:text-xs font-medium text-[var(--color-rb-gray)] hover:text-[var(--color-rb-blue)] rounded-full hover:bg-slate-100 transition-all uppercase tracking-wider"
            >
              {item}
            </button>
          ))}
          
          <div className="w-px h-4 bg-slate-200 mx-2 hidden md:block"></div>
          
          <button
            onClick={() => scrollTo('contato')}
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
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {['Home', 'Serviços', 'Como funciona', 'Depoimentos', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => { scrollTo(item.toLowerCase().replace(' ', '-')); setIsMenuOpen(false); }}
                  className="text-xl font-medium text-[var(--color-rb-blue)] hover:text-[var(--color-rb-gold)] transition-colors uppercase tracking-widest"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Mark */}
      <div className="fixed top-9 left-8 z-40 pointer-events-none hidden md:block">
        <div className="text-sm font-semibold tracking-tight text-[var(--color-rb-blue)] flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-rb-gold)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-rb-gold)] shadow-[0_0_15px_rgba(197,160,89,0.8)]"></span>
          </div>
          <span className="tracking-[0.2em] text-xs font-mono">RISCO BRASIL</span>
        </div>
      </div>
    </>
  );
};
