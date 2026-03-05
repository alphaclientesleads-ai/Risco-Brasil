import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const Header = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-brand-blue-gradient text-white py-2 text-center text-[10px] sm:text-xs px-4">
        Corretora especializada em seguros empresariais e riscos complexos desde 2013.
      </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav - Pill Shape */}
        <nav className="hidden md:flex items-center bg-gray-100 rounded-full px-6 py-2 gap-8">
          {['Home', 'Serviços', 'Como funciona', 'Depoimentos', 'Contato'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
              className="text-sm font-medium text-gray-600 hover:text-brand-navy transition-colors uppercase"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => scrollTo('contato')}
            className="bg-brand-gold-gradient text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity duration-300 uppercase text-sm"
          >
            Cotar Seguro
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="text-brand-navy" /> : <Menu className="text-brand-navy" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {['Home', 'Serviços', 'Como funciona', 'Depoimentos', 'Contato'].map((item) => (
                <button 
                  key={item}
                  onClick={() => { scrollTo(item.toLowerCase().replace(' ', '-')); setIsMenuOpen(false); }}
                  className="text-left text-gray-600 hover:text-brand-navy py-2 uppercase"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
