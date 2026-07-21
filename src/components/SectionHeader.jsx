import React from 'react';

const SectionHeader = ({ num, eyebrow, title, tagline }) => (
  <div className="reveal mb-12 md:mb-16">
    <div className="flex items-baseline gap-3 mb-4">
      <span className="font-mono text-sm" style={{ color: 'var(--accent-2)' }}>{num}</span>
      <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--text-dim)' }}>{eyebrow}</span>
    </div>
    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: 'var(--text)' }}>{title}</h2>
    {tagline && <p className="mt-4 text-base md:text-lg max-w-2xl" style={{ color: 'var(--text-muted)' }}>{tagline}</p>}
  </div>
);

export default SectionHeader;
