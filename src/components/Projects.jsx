import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../data/portfolioData';
import { useTilt } from '../hooks/usePortfolioHooks';

const ProjectCard = ({ project, index }) => {
  const tilt = useTilt(6);
  return (
    <div ref={tilt.ref} onMouseMove={tilt.onMove} onMouseLeave={tilt.onLeave}
      className="reveal tilt group relative rounded-2xl overflow-hidden flex flex-col"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)', transitionDelay: `${index * 80}ms` }}>
      {/* Project screenshot or gradient fallback */}
      <div className="relative h-40 md:h-48 overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover object-top" />
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
            <div className="absolute inset-0 bg-grid opacity-20" />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1 rounded-full backdrop-blur-md" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.15)' }}>
          <span className="w-1.5 h-1.5 rounded-full live-dot" style={{ background: 'var(--live)' }} />
          <span className="font-mono text-[10px] uppercase tracking-wider text-white">Live</span>
        </div>
        <div className="absolute top-4 right-4 font-mono text-xs text-white/70">{String(index + 1).padStart(2, '0')}</div>
        <div className="absolute bottom-4 left-4"><Sparkles size={20} className="text-white/50" /></div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg md:text-xl mb-1.5" style={{ color: 'var(--text)' }}>{project.title}</h3>
        <p className="text-sm mb-4" style={{ color: 'var(--accent-3)' }}>{project.tagline}</p>
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-muted)' }}>{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((s) => (
            <span key={s} className="font-mono text-[11px] px-2 py-1 rounded" style={{ background: 'var(--surface-hover)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>{s}</span>
          ))}
        </div>
        <div className="flex gap-2 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="btn-shine flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-gradient-accent text-white">
            <ExternalLink size={13} /> Live demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium"
            style={{ background: 'var(--surface-hover)', border: '1px solid var(--border-strong)', color: 'var(--text)' }}>
            <Github size={13} /> Source
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="relative py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <SectionHeader num="05/" eyebrow="Selected Work" title="Things I've shipped." tagline="Every project below has a URL a recruiter can click right now." />
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </div>
  </section>
);

export default Projects;
