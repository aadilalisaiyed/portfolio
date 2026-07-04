import React from 'react';
import { softSkillsList } from '../data/portfolioData';

// SVG icon mapper — red/black/white palette
const SoftSkillIcon = ({ type }) => {
  const icons = {
    crown: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#ff2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" fill="#ff2a2a" opacity="0.15" />
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
        <path d="M5 16l-1 4h16l-1-4" />
      </svg>
    ),
    puzzle: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#ff2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02z" />
      </svg>
    ),
    handshake: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#ff2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 17a1 1 0 0 1-1 1H6l-4-4 6.768-6.768a2 2 0 0 1 2.828 0l.232.232" />
        <path d="m18 13-5.107-5.107a2 2 0 0 0-2.828 0L9 9" />
        <path d="m14 13 4 4-6 6" />
        <path d="M22 8 16 2l-4.3 4.3" />
        <path d="m9 12 3 3" />
      </svg>
    ),
    chat: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#ff2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#ff2a2a" opacity="0.1" />
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8" />
        <path d="M8 14h4" />
      </svg>
    ),
    bolt: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#ff2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#ff2a2a" opacity="0.15" />
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    palette: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#ff2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="0.5" fill="#ff2a2a" stroke="none" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="#ff2a2a" stroke="none" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="#ff2a2a" stroke="none" />
        <circle cx="6.5" cy="12.5" r="0.5" fill="#ff2a2a" stroke="none" />
        <circle cx="13.5" cy="6.5" r="1.5" />
        <circle cx="17.5" cy="10.5" r="1.5" />
        <circle cx="8.5" cy="7.5" r="1.5" />
        <circle cx="6.5" cy="12.5" r="1.5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    chart: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#ff2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <rect x="4" y="20" width="16" height="0" rx="0" />
      </svg>
    ),
    clock: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#ff2a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" fill="#ff2a2a" opacity="0.1" />
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  };
  return icons[type] || icons.bolt;
};

const SoftSkillCard = ({ skill, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 hover:scale-[1.03] hover:bg-white hover:border-[#ff2a2a]/30 hover:shadow-[0_20px_45px_rgba(255,42,42,0.08)] transition-all duration-500 group flex flex-col items-center text-center justify-between min-h-[220px]"
  >
    <div className="flex flex-col items-center">
      <div className="mb-4 p-3 bg-gray-100 rounded-2xl group-hover:bg-[#ff2a2a]/10 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
        <SoftSkillIcon type={skill.icon} />
      </div>
      <h3 className="text-gray-900 text-lg font-black tracking-tight mb-2 uppercase">
        {skill.name}
      </h3>
      <p className="text-gray-500 text-sm font-medium leading-relaxed">
        {skill.desc}
      </p>
    </div>
  </div>
);

const SoftSkills = () => {
  return (
    <section className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">

      {/* Top paper divider (torn SVG transition from dark section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 uppercase">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Essential traits that make me an effective engineer, coordinator, and communicator.
          </p>
        </div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoftSkills;
