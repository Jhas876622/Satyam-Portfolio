import React from 'react';
import SectionHeader from './SectionHeader';
import { CERTIFICATIONS } from '../data/portfolioData';

const Certifications = () => (
  <section id="certifications" className="relative py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <SectionHeader num="06/" eyebrow="Recognition" title="Certifications & academics." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={i} className="reveal glow-hover p-5 rounded-xl flex items-start gap-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)', transitionDelay: `${i * 60}ms` }}>
              <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent-1) 20%, transparent), color-mix(in srgb, var(--accent-2) 20%, transparent))', border: '1px solid var(--border-strong)' }}>
                <Icon size={16} style={{ color: 'var(--accent-3)' }} />
              </div>
              <div className="min-w-0">
                <div className="font-medium text-sm mb-0.5" style={{ color: 'var(--text)' }}>{c.title}</div>
                <div className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>{c.issuer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Certifications;
