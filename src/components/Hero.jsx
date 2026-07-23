import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowUpRight, Send, MapPin } from 'lucide-react';
import { PROFILE, ROLES, HERO_CHIPS } from '../data/portfolioData';
import { useTypewriter } from '../hooks/usePortfolioHooks';
import { useToast } from './Toast';

const SocialIcon = ({ href, children, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
     className="glow-hover w-10 h-10 rounded-lg flex items-center justify-center"
     style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
    {children}
  </a>
);

const Hero = () => {
  const role = useTypewriter(ROLES);
  const { showToast } = useToast();

  const handleResumeClick = (e) => {
    if (PROFILE.resumeUrl === '#replace-with-resume-pdf-link') {
      e.preventDefault();
      showToast('Résumé is being updated! Feel free to email me directly for the latest copy.', 'success');
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 float-blob pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent-1) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 float-blob pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent-2) 0%, transparent 70%)', animationDelay: '-8s' }} />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
        <div>
          <div className="reveal flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--text-dim)' }}>
            <span className="w-2 h-2 rounded-full live-dot" style={{ background: 'var(--live)' }} />
            Available for Summer 2026 & full-time roles
          </div>
          <p className="reveal font-mono text-sm mb-4" style={{ color: 'var(--text-muted)' }}>{PROFILE.greeting}</p>
          <h1 className="reveal font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-6">
            <span className="text-gradient">Satyam</span><br /><span style={{ color: 'var(--text)' }}>Kumar Jha</span>
          </h1>
          <div className="reveal flex items-center gap-2 mb-8 text-lg md:text-2xl font-display" style={{ color: 'var(--text)' }}>
            <span style={{ color: 'var(--text-muted)' }}>I build as a</span>
            <span className="font-semibold text-gradient min-w-[10ch]">{role}<span className="type-cursor" style={{ color: 'var(--accent-2)' }}>|</span></span>
          </div>
          <div className="reveal space-y-3 mb-10 max-w-xl">
            {PROFILE.bio.map((line, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>{line}</p>
            ))}
          </div>
          <div className="reveal flex flex-wrap gap-3 mb-10">
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-shine glow-hover group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-accent text-white font-medium text-sm">
              <Send size={15} /> Get in touch
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a href={PROFILE.resumeUrl} onClick={handleResumeClick} target="_blank" rel="noopener noreferrer"
              className="glow-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium"
              style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)', color: 'var(--text)' }}>
              <Download size={15} /> Download résumé
            </a>
          </div>
          <div className="reveal flex items-center gap-3">
            <SocialIcon href={PROFILE.github} label="GitHub"><Github size={16} /></SocialIcon>
            <SocialIcon href={PROFILE.linkedin} label="LinkedIn"><Linkedin size={16} /></SocialIcon>
            <SocialIcon href={`mailto:${PROFILE.email}`} label="Email"><Mail size={16} /></SocialIcon>
          </div>
        </div>

        {/* Photo with rotating gradient ring + floating metric chips */}
        <div className="reveal hidden md:flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full opacity-70 ring-spin"
              style={{ background: 'conic-gradient(from 0deg, var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-1))', filter: 'blur(18px)' }} />
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden"
              style={{ border: '2px solid var(--border-strong)', background: 'var(--surface)' }}>
              {PROFILE.photoUrl && !PROFILE.photoUrl.startsWith('__') ? (
                <img src={PROFILE.photoUrl} alt="Satyam Kumar Jha" className="w-full h-full object-cover" style={{ objectPosition: '50% 18%' }} />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center font-display font-bold text-3xl text-white">SJ</div>
                  <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>Drop profile photo →</p>
                </div>
              )}
            </div>

            {HERO_CHIPS.map((chip, i) => {
              const Icon = chip.icon;
              return (
                <div key={i} className={`absolute ${chip.pos} chip-float flex items-center gap-1.5 px-3 py-1.5 rounded-full whitespace-nowrap`}
                  style={{ background: 'var(--chip-bg)', border: '1px solid var(--border-strong)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', animationDelay: `${i * -1.3}s` }}>
                  <Icon size={12} style={{ color: 'var(--accent-3)' }} />
                  <span className="font-mono text-[11px]" style={{ color: 'var(--text)' }}>{chip.text}</span>
                </div>
              );
            })}

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap"
              style={{ background: 'var(--bg-elev)', border: '1px solid var(--border-strong)', color: 'var(--text)' }}>
              <MapPin size={12} style={{ color: 'var(--accent-2)' }} />
              <span className="font-mono text-[11px]">{PROFILE.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
