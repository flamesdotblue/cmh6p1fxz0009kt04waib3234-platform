import React from 'react';
import Spline from '@splinetool/react-spline';
import { MessageCircle, ArrowRight, Shield, Users, Clock, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/94771234567', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability - must not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-28 lg:py-32 text-white">
        <div className="max-w-3xl">
          <h1 className="font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Pass Your IT Certification Exams & Pay After Success
          </h1>
          <p className="mt-4 md:mt-5 text-base md:text-lg text-white/90">
            Expert-led training for AWS, Azure, Cisco, CompTIA, and more. 100% pass guarantee with 24/7 support. Invest in results, not promises.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#certs" className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm md:text-base font-semibold transition-colors">
              Get Started Now <ArrowRight size={18} />
            </a>
            <button onClick={handleWhatsApp} className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 text-sm md:text-base font-semibold transition-colors">
              <MessageCircle size={18} /> WhatsApp Us
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Students', value: '7,000+' },
              { label: 'Pass Rate', value: '100%' },
              { label: 'Certifications', value: '500+' },
              { label: 'Support', value: '24/7' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-white/10 backdrop-blur border border-white/10 p-4 text-center">
                <div className="text-lg md:text-xl font-bold">{s.value}</div>
                <div className="text-xs md:text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - mini highlights */}
        <div id="how" className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Shield, title: '100% Guarantee', desc: 'Pass with confidence' },
            { icon: CheckCircle2, title: 'Pay After Pass', desc: 'Results-first pricing' },
            { icon: Users, title: 'Expert Instructors', desc: 'Real-world experience' },
            { icon: Clock, title: '24/7 Support', desc: 'We’re always here' },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-5 flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20"><f.icon /></span>
              <div>
                <div className="font-semibold">{f.title}</div>
                <div className="text-sm text-white/80">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
