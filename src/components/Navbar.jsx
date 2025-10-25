import React, { useState } from 'react';
import { Award, Phone, Mail, MessageCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/94771234567', '_blank', 'noopener,noreferrer');
  };

  const NavLinks = ({ className = '' }) => (
    <ul className={`flex items-center gap-6 ${className}`}>
      <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
      <li><a href="#certs" className="hover:text-blue-600 transition-colors">Certifications</a></li>
      <li><a href="#how" className="hover:text-blue-600 transition-colors">How It Works</a></li>
      <li><a href="#about" className="hover:text-blue-600 transition-colors">About Us</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden md:block bg-blue-900 text-blue-50 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Mail size={16} /> info@certtraining.lk</span>
            <span className="flex items-center gap-2"><Phone size={16} /> +94 77 123 4567</span>
          </div>
          <button onClick={handleWhatsApp} className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-md transition-colors">
            <MessageCircle size={18} /> WhatsApp
          </button>
        </div>
      </div>

      {/* Main nav */}
      <nav className="backdrop-blur bg-white/90 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white"><Award size={20} /></span>
            <span className="text-lg">CertTraining</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <button onClick={handleWhatsApp} className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md transition-colors">
              <MessageCircle size={18} /> Chat
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-200 px-4 py-3">
            <NavLinks className="flex-col items-start gap-4" />
            <button onClick={handleWhatsApp} className="mt-3 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md w-full justify-center">
              <MessageCircle size={18} /> WhatsApp Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
