import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-white text-xl font-semibold">CertTraining</div>
          <p className="mt-3 text-sm text-gray-400">
            Pay After You Pass. Sri Lanka’s trusted partner for IT certification training across AWS, Azure, Cisco, CompTIA, and more.
          </p>
          <div className="mt-4 flex items-center gap-3 text-gray-400">
            <a aria-label="Facebook" href="#" className="hover:text-white"><Facebook size={18} /></a>
            <a aria-label="LinkedIn" href="#" className="hover:text-white"><Linkedin size={18} /></a>
            <a aria-label="Twitter" href="#" className="hover:text-white"><Twitter size={18} /></a>
          </div>
        </div>

        <div>
          <div className="text-white font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white" href="#home">Home</a></li>
            <li><a className="hover:text-white" href="#certs">Certifications</a></li>
            <li><a className="hover:text-white" href="#how">How It Works</a></li>
            <li><a className="hover:text-white" href="#about">About Us</a></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold">Popular Certifications</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>AWS Solutions Architect</li>
            <li>Microsoft Azure Administrator</li>
            <li>Cisco CCNA</li>
            <li>CompTIA Security+</li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail size={16} /> info@certtraining.lk</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +94 77 123 4567</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} CertTraining. All rights reserved.</p>
          <p>100% Legitimate training services. No exam fraud or cheating.</p>
        </div>
      </div>
    </footer>
  );
}
