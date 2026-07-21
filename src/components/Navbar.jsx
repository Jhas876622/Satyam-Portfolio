import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/portfolioData';

const Navbar = ({ theme, toggleTheme, activeSection }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        <button onClick={() => go('hero')} className="flex items-center gap-2 group" aria-label="Scroll to home">
          <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center font-mono text-sm text-white font-bold">SJ</div>
          <span className="font-display font-semibold hidden sm:inline" style={{ color: 'var(--text)' }}>Satyam Jha</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button key={item.id} onClick={() => go(item.id)} className="relative px-4 py-2 rounded-lg text-sm transition-colors"
                style={{ color: isActive ? 'var(--text)' : 'var(--text-muted)' }}>
                <span className="font-mono text-[10px] mr-1.5" style={{ color: isActive ? 'var(--accent-2)' : 'var(--text-dim)' }}>{item.num}</span>
                {item.label}
                {isActive && <span className="absolute bottom-1 left-4 right-4 h-px" style={{ background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))' }} />}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t" style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderColor: 'var(--border)' }}>
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => go(item.id)} className="text-left px-3 py-3 rounded-lg text-sm flex items-center gap-3 w-full"
                style={{ color: activeSection === item.id ? 'var(--text)' : 'var(--text-muted)' }}>
                <span className="font-mono text-xs" style={{ color: 'var(--accent-2)' }}>{item.num}</span>{item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
