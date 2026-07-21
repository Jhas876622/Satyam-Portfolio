import React from 'react';
import { useActiveSection, useReveal, useTheme } from './hooks/usePortfolioHooks';
import { NAV_ITEMS } from './data/portfolioData';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import StatBand from './components/StatBand';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CommunityLeadership from './components/CommunityLeadership';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastProvider } from './components/Toast';

const SECTION_IDS = ['hero', ...NAV_ITEMS.map((n) => n.id)];

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const active = useActiveSection(SECTION_IDS);
  useReveal();

  return (
    <ToastProvider>
      <div className={`theme-${theme}`} style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
        <ScrollProgress />
        <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={active} />
        <main>
          <Hero />
          <StatBand />
          <About />
          <Skills />
          <Experience />
          <CommunityLeadership />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ToastProvider>
  );
}
