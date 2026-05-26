"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/communities', label: 'Communities' },
  { href: '/entrepreneurs', label: 'Entrepreneurs' },
  { href: '/investors', label: 'Investors' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/team', label: 'The Team' },
];

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/[0.15] backdrop-blur-2xl border-b border-white/20 shadow-lg shadow-black/10' 
          : 'bg-transparent'
      }`}>
        <nav className="w-full px-6 md:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <a href="https://newvion.com" target="_blank" rel="noopener noreferrer" className="flex items-center relative">
              <div className="absolute inset-0 bg-[#D4AF37]/25 rounded-full blur-2xl scale-150" />
              <Image
                src="/images/logo.png"
                alt="Newvion"
                width={80}
                height={80}
                className="object-contain relative z-10"
                style={{ width: 'auto', height: 'auto' }}
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    pathname === link.href
                      ? 'text-[#FDFBF7] bg-white/20 backdrop-blur-md'
                      : 'text-white hover:text-white hover:bg-white/30 backdrop-blur-sm'
                  }`}
                >
                  {link.label}
              </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#FDFBF7]/80 hover:text-[#FDFBF7] transition-colors relative z-50"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-Out Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[110] w-[300px] max-w-[80vw] bg-[#020C1B] border-l border-white/10 shadow-2xl flex flex-col"

            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <span className="text-[#FFD700] text-glow-gold-subtle text-xs font-medium tracking-[0.2em] uppercase">Menu</span>
                <button
                  className="p-2 text-white/60 hover:text-white transition-colors"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-center px-8 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 px-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                      pathname === link.href
                        ? 'text-[#FFD700] text-glow-gold-subtle bg-white/10'
                        : 'text-white hover:text-[#FFD700] hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="px-8 py-6 border-t border-white/10">
                <p className="text-white/40 text-xs text-center">
                  Newvion Wellness Marina
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
