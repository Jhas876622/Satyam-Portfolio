import React from 'react';
import { STATS } from '../data/portfolioData';
import { useInView, useCountUp } from '../hooks/usePortfolioHooks';

const StatItem = ({ stat, index }) => {
  const [ref, inView] = useInView(0.5);
  const display = useCountUp(stat.value, inView, { decimals: stat.decimals });
  const Icon = stat.icon;

  return (
    <div ref={ref} className="reveal relative p-6 md:p-7 rounded-2xl glow-hover" style={{ background: 'var(--surface)', border: '1px solid var(--border)', transitionDelay: `${index * 80}ms` }}>
      <Icon size={16} className="mb-3" style={{ color: 'var(--accent-3)' }} />
      <div className="font-display font-bold text-4xl md:text-5xl leading-none mb-2 text-gradient">
        {display}{stat.suffix}
      </div>
      <div className="text-xs md:text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
    </div>
  );
};

const StatBand = () => (
  <section className="relative py-8 md:py-12">
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s, i) => <StatItem key={s.label} stat={s} index={i} />)}
      </div>
    </div>
  </section>
);

export default StatBand;
