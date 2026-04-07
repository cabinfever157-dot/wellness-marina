"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/communities', label: 'Communities' },
  { href: '/entrepreneurs', label: 'Entrepreneurs' },
  { href: '/investors', label: 'Investors' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/boats', label: 'Boats' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="w-full bg-[#FDFBF7]/95 backdrop-blur-xl border-b border-[#E5E0D8] px-6 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 relative">
            <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-xl scale-150" />
            <Image
              src="/images/logo.png"
              alt="Newvion"
              width={40}
              height={40}
              className="object-contain relative z-10"
              style={{ width: 'auto', height: 'auto' }}
            />
            <span className="text-lg font-bold text-[#1E293B] tracking-tight hidden sm:block relative z-10">
              Newvion
              <span className="text-[#64748B] font-light ml-1">Wellness Marina</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  pathname === link.href
                    ? 'text-[#FDFBF7] bg-[#1E293B]'
                    : 'text-[#64748B] hover:text-[#1E293B] hover:bg-[#E5E0D8]/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-[#64748B] hover:text-[#1E293B] transition-colors" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
