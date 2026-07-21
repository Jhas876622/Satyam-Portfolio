import React from 'react';

const Footer = () => (
  <footer className="relative py-10 border-t" style={{ borderColor: 'var(--border)' }}>
    <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>© {new Date().getFullYear()} Satyam Kumar Jha. All rights reserved.</div>
      <div className="font-mono text-xs flex items-center gap-2" style={{ color: 'var(--text-dim)' }}>
        Built with React & Tailwind ·
        <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full live-dot" style={{ background: 'var(--live)' }} />shipped</span>
      </div>
    </div>
  </footer>
);

export default Footer;
