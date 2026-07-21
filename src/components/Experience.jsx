import React from 'react';
import { Calendar } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { EXPERIENCE } from '../data/portfolioData';

const Experience = () => (
  <section id="experience" className="relative py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <SectionHeader num="03/" eyebrow="Timeline" title="Where I've worked and shipped." />
      <div className="relative">
        <div className="hidden md:block absolute left-[7.5rem] top-2 bottom-2 w-px" style={{ background: 'linear-gradient(180deg, var(--border-strong), transparent)' }} />
        <div className="space-y-8">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="reveal md:grid md:grid-cols-[7rem_1fr] md:gap-8" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="hidden md:block relative pt-1">
                <div className="absolute left-[6.75rem] top-2 w-3 h-3 rounded-full" style={{ background: 'var(--accent-2)', boxShadow: '0 0 0 4px var(--bg)' }} />
                <div className="font-mono text-xs whitespace-nowrap" style={{ color: 'var(--text-dim)' }}>{exp.period.split('—')[0].trim()}</div>
              </div>
              <div className="glow-hover p-6 md:p-7 rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="font-display font-semibold text-lg md:text-xl" style={{ color: 'var(--text)' }}>{exp.role}</h3>
                  <span className="text-sm" style={{ color: 'var(--accent-3)' }}>· {exp.org}</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs mb-4" style={{ color: 'var(--text-dim)' }}>
                  <span className="flex items-center gap-1.5"><Calendar size={12} />{exp.period}</span><span>{exp.mode}</span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex gap-3 text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent-2)' }} />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
