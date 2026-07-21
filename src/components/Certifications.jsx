import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { CERTIFICATIONS } from '../data/portfolioData';

const Certifications = () => (
  <section id="certifications" className="relative py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <SectionHeader num="06/" eyebrow="Recognition" title="Certifications & academics." tagline="Verified industry credentials, job simulations, and academic standing." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={i} className="reveal glow-hover rounded-2xl overflow-hidden flex flex-col justify-between"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', transitionDelay: `${i * 60}ms` }}>

              {/* Optional Certificate Image Banner */}
              {c.image && (
                <div className="relative h-36 overflow-hidden border-b" style={{ borderColor: 'var(--border)' }}>
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              )}

              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent-1) 20%, transparent), color-mix(in srgb, var(--accent-2) 20%, transparent))', border: '1px solid var(--border-strong)' }}>
                      <Icon size={16} style={{ color: 'var(--accent-3)' }} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-semibold text-sm leading-tight" style={{ color: 'var(--text)' }}>{c.title}</div>
                      <div className="font-mono text-xs mt-0.5" style={{ color: 'var(--text-dim)' }}>{c.issuer}</div>
                    </div>
                  </div>

                  {c.description && (
                    <p className="text-xs leading-relaxed mt-2" style={{ color: 'var(--text-muted)' }}>
                      {c.description}
                    </p>
                  )}
                </div>

                {c.link && (
                  <a href={c.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs hover:underline pt-2 border-t"
                    style={{ color: 'var(--accent-3)', borderColor: 'var(--border)' }}>
                    <span>Verify credential</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Certifications;
