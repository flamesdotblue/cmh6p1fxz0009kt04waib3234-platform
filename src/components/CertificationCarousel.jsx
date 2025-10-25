import React from 'react';

const badges = [
  {
    name: 'AWS Solutions Architect',
    img: 'https://images.credly.com/images/99c72e39-7a56-4b9c-9b6b-528b61dfec8a/associate-architect-600x600.png',
  },
  {
    name: 'AWS Security Specialty',
    img: 'https://images.credly.com/images/2a0e4b5b-40c3-4a67-9e99-0d17e49a8e03/security-specialty-600x600.png',
  },
  {
    name: 'CompTIA Security+',
    img: 'https://images.credly.com/images/74790a75-8451-4003-9c7a-3a0e04d0a9e9/CompTIA_Security_2Bce.png',
  },
  {
    name: 'Cisco CCNA',
    img: 'https://images.credly.com/images/01b6b9b7-7a9a-413a-8b0b-27d3d4d0b512/ccna_badge.png',
  },
  {
    name: 'Microsoft Azure Administrator',
    img: 'https://images.credly.com/images/6a254dad-77e5-4e71-8049-94d0e74e2f87/azure-administrator-associate-600x600.png',
  },
  {
    name: 'ISC2 CISSP',
    img: 'https://images.credly.com/images/2f8f7a5d-7e3e-4f53-8f2e-8c8d84b3b2b4/CISSP.png',
  },
  {
    name: 'ISACA CISA',
    img: 'https://images.credly.com/images/64e0a0c6-6e66-4c92-b8a2-8ed7be417d99/CISA.png',
  },
  {
    name: 'PMI PMP',
    img: 'https://images.credly.com/images/8f2d2e76-1b13-4af5-8f5e-1d1b5f5b3b1a/PMP_badge.png',
  },
  {
    name: 'Google Cloud Associate',
    img: 'https://images.credly.com/images/1e6f3bfa-7a9a-4e6a-9a6f-ef9b9b9d9e3c/Google-Cloud-Associate-Cloud-Engineer.png',
  },
  {
    name: 'Red Hat RHCSA',
    img: 'https://images.credly.com/images/99d7a2b1-86b3-4b3c-9a27-2f2e6c2c9f32/rhcsa.png',
  },
];

export default function CertificationCarousel() {
  const row = [...badges, ...badges];

  return (
    <section id="certs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trusted Certification Badges</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 text-sm md:text-base">View All Certifications →</a>
        </div>

        <div className="mt-6 overflow-hidden relative group">
          <style>{`
            @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          `}</style>
          <div
            className="flex gap-8 items-center"
            style={{
              width: '200%',
              animation: 'scroll 30s linear infinite',
            }}
          >
            {row.map((b, idx) => (
              <div key={idx} className="shrink-0 w-48 h-28 rounded-2xl bg-white border border-gray-200 p-4 flex items-center justify-center hover:shadow-md transition-shadow">
                <img
                  src={b.img}
                  alt={b.name}
                  className="max-h-16 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/120x120.png?text=Badge';
                  }}
                />
              </div>
            ))}
          </div>
          {/* Pause on hover */}
          <div className="absolute inset-0" onMouseEnter={(e)=>{e.currentTarget.previousSibling.style.animationPlayState='paused';}} onMouseLeave={(e)=>{e.currentTarget.previousSibling.style.animationPlayState='running';}}/>
        </div>
      </div>
    </section>
  );
}
