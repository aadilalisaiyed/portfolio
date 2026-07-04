import React from 'react';
import { certificates } from '../data/portfolioData';

// SVG icon mapper — red/black/white palette
const CertIcon = ({ type }) => {
  const icons = {
    cloud: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    robot: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7v4"/>
        <line x1="8" y1="16" x2="8" y2="16"/>
        <line x1="16" y1="16" x2="16" y2="16"/>
        <circle cx="8" cy="16" r="1" fill="#000000"/>
        <circle cx="16" cy="16" r="1" fill="#000000"/>
      </svg>
    ),
    trophy: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    ),
    code: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
        <line x1="14" y1="4" x2="10" y2="20"/>
      </svg>
    ),
    brain: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 4.6 3A5 5 0 0 1 21 10a5 5 0 0 1-1.1 3.1A5 5 0 0 1 21 16a5 5 0 0 1-4.4 5A5 5 0 0 1 12 23a5 5 0 0 1-4.6-2A5 5 0 0 1 3 16a5 5 0 0 1 1.1-2.9A5 5 0 0 1 3 10a5 5 0 0 1 4.4-5A5 5 0 0 1 12 2z"/>
        <path d="M12 2v20"/>
        <path d="M8 8h8"/>
        <path d="M7 14h10"/>
      </svg>
    ),
    compass: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#000000" opacity="0.2" stroke="#000000"/>
      </svg>
    ),
  };
  return (
    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-black/15 group-hover:bg-black/25 transition-all duration-300">
      {icons[type] || icons.code}
    </div>
  );
};

const CertificateCard = ({ cert, aosDelay }) => (
  <div 
    data-aos="zoom-in"
    data-aos-delay={aosDelay}
    className="bg-black/20 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/25 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-500 cursor-default group"
  >
    <div className="flex items-start gap-4">
      <div className="mt-0.5 group-hover:scale-110 transition-transform duration-300">
        <CertIcon type={cert.icon} />
      </div>
      <div>
        <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-1 group-hover:text-white transition-colors">
          {cert.name}
        </h3>
        <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">
          {cert.issuer}
        </p>
      </div>
    </div>
  </div>
);

const Certificates = () => {
  return (
    <section className="bg-[#ff2a2a] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top (transition from dark Projects section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            Certifications
          </h2>
          <p className="text-red-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Industry-recognized certifications that validate my technical expertise.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {certificates.featured.map((cert, index) => (
            <CertificateCard 
              key={cert.name} 
              cert={cert} 
              aosDelay={String((index + 1) * 100)} 
            />
          ))}
        </div>

        {/* View All Certificates CTA */}
        <div data-aos="fade-up" data-aos-delay="700" className="flex justify-center">
          <a
            href={certificates.viewAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-bold text-base hover:bg-gray-100 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 group"
          >
            <svg className="w-5 h-5 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View All Certificates
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative stars (matching About section) */}
      <div className="absolute top-16 left-6 md:left-16 text-black opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;
