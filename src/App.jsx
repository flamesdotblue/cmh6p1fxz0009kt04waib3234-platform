import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CertificationCarousel from './components/CertificationCarousel.jsx';
import Footer from './components/Footer.jsx';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/94771234567', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <CertificationCarousel />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 animate-pulse"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  );
}
