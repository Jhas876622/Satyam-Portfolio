import React from 'react';
import SectionHeader from './SectionHeader';
import { SKILLS, ALL_TOOLS } from '../data/portfolioData';

const ToolsMarquee = () => (
  <div className="reveal marquee-mask py-4 overflow-hidden" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
    <div className="marquee-track">
      {[...ALL_TOOLS, ...ALL_TOOLS].map((t, i) => (
        <span key={i} className="font-mono text-sm mx-5 inline-flex items-center gap-2" style={{ color: 'var(--text-dim)' }}>
          <span className="w-1 h-1 rounded-full" style={{ background: 'var(--accent-2)' }} />{t}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="relative py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <SectionHeader num="02/" eyebrow="Toolkit" title="What I build with." tagline="Grouped by role, not by hype. Every tag here has shipped code." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {SKILLS.map((group, gi) => {
          const Icon = group.icon;
          return (
            <div key={group.title} className="reveal p-6 rounded-2xl glow-hover" style={{ background: 'var(--surface)', border: '1px solid var(--border)', transitionDelay: `${gi * 70}ms` }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent-1) 20%, transparent), color-mix(in srgb, var(--accent-2) 20%, transparent))', border: '1px solid var(--border-strong)' }}>
                  <Icon size={18} style={{ color: 'var(--accent-3)' }} />
                </div>
                <h3 className="font-display font-semibold text-lg" style={{ color: 'var(--text)' }}>{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="font-mono text-xs px-2.5 py-1.5 rounded-md" style={{ background: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <ToolsMarquee />
    </div>
  </section>
);

export default Skills;
