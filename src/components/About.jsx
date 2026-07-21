import React from 'react';
import SectionHeader from './SectionHeader';
import { QUICK_FACTS } from '../data/portfolioData';

const About = () => (
  <section id="about" className="relative py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <SectionHeader num="01/" eyebrow="About" title="A ship-first mindset." />
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16">
        <div className="reveal space-y-4 text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          <p>I'm a final-year IT student who treats every course concept as a candidate for a deployed project. My work sits at the intersection of <span style={{ color: 'var(--text)' }}>data analysis</span>, <span style={{ color: 'var(--text)' }}>machine learning</span>, and <span style={{ color: 'var(--text)' }}>product thinking</span> — turning messy data into decisions someone can act on.</p>
          <p>Recently I've built end-to-end systems: an inventory intelligence platform for perishable goods, an A/B-testing analytics tool, and a real-time CV service — all live, all reachable through a URL. I care about statistical rigor, but equally about whether a business user could open the dashboard and know what to do next.</p>
          <p>I'm looking for roles where I can pair analytical depth with product judgment — Data Analytics, Product Analyst, and Software Engineering opportunities where I can keep shipping.</p>
        </div>
        <div className="reveal grid grid-cols-1 gap-3">
          {QUICK_FACTS.map((f) => (
            <div key={f.label} className="p-4 rounded-xl glow-hover" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-dim)' }}>{f.label}</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
