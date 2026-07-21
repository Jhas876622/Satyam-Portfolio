import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, ArrowUpRight, Loader2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PROFILE } from '../data/portfolioData';
import { useToast } from './Toast';

const Field = ({ label, children }) => (
  <label className="block">
    <span className="font-mono text-[10px] uppercase tracking-widest mb-2 block" style={{ color: 'var(--text-dim)' }}>{label}</span>
    {children}
  </label>
);

const ContactLink = ({ href, icon: Icon, label, value }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="glow-hover flex items-center gap-4 p-4 rounded-xl group" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent-1) 20%, transparent), color-mix(in srgb, var(--accent-2) 20%, transparent))', border: '1px solid var(--border-strong)' }}>
      <Icon size={16} style={{ color: 'var(--accent-3)' }} />
    </div>
    <div className="min-w-0 flex-1">
      <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>{label}</div>
      <div className="text-sm truncate" style={{ color: 'var(--text)' }}>{value}</div>
    </div>
    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: 'var(--text-muted)' }} />
  </a>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'mnjezbzg';

    if (formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(form),
        });

        if (res.ok) {
          setSent(true);
          showToast("Message sent! I'll get back to you soon.", 'success');
          setForm({ name: '', email: '', message: '' });
        } else {
          showToast('Failed to send via backend. Opening your email app...', 'error');
          window.location.href = `mailto:${PROFILE.email}?subject=Contact%20from%20Portfolio&body=${encodeURIComponent(form.message)}`;
        }
      } catch (err) {
        showToast('Network error. Opening your email app...', 'error');
        window.location.href = `mailto:${PROFILE.email}?subject=Contact%20from%20Portfolio&body=${encodeURIComponent(form.message)}`;
      }
    } else {
      // Demo mode fallback
      console.log('Contact form payload:', form);
      setSent(true);
      showToast('Message received! Add VITE_FORMSPREE_ID to .env to receive live emails.', 'success');
      setTimeout(() => setSent(false), 4000);
      setForm({ name: '', email: '', message: '' });
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader num="07/" eyebrow="Contact" title="Let's talk." tagline="Full-time, internships, or an interesting problem — my inbox is open." />
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12">
          <div className="reveal space-y-3">
            <ContactLink href={`mailto:${PROFILE.email}`} icon={Mail} label="Email" value={PROFILE.email} />
            <ContactLink href={PROFILE.linkedin} icon={Linkedin} label="LinkedIn" value="satyam-kumar-jha-27545a288" />
            <ContactLink href={PROFILE.github} icon={Github} label="GitHub" value="Jhas876622" />
            <div className="p-5 rounded-xl mt-2" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full live-dot" style={{ background: 'var(--live)' }} />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>Currently</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>Open to Data Analyst, Product Analyst, and SDE roles — starting Summer 2026 or immediately for the right team.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal p-6 md:p-8 rounded-2xl space-y-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <Field label="Name">
              <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </Field>
            <Field label="Email">
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </Field>
            <Field label="Message">
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the role or the problem you're working on."
                className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ background: 'var(--bg-elev)', border: '1px solid var(--border)', color: 'var(--text)' }} />
            </Field>
            <button disabled={loading} type="submit" className="btn-shine glow-hover w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-accent text-white font-medium text-sm disabled:opacity-50">
              {loading ? (
                <><Loader2 size={15} className="animate-spin" /> Sending...</>
              ) : sent ? (
                "Message received — I'll reply soon."
              ) : (
                <><Send size={15} /> Send message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
