import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navigation() {
  const [mode, setMode] = useState<'day' | 'night'>('day');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const isNight = document.documentElement.classList.contains('night');
    setMode(isNight ? 'night' : 'day');
  }, []);

  const toggleMode = () => {
    const nextMode = mode === 'day' ? 'night' : 'day';
    setMode(nextMode);
    document.documentElement.classList.toggle('night', nextMode === 'night');
    localStorage.setItem('site-theme', nextMode);
  };

  return (
    <header className="relative md:sticky md:top-0 z-50 bg-[color-mix(in_oklab,var(--color-bg)_92%,transparent)] md:backdrop-blur-sm shadow-[0_10px_30px_-28px_rgba(0,0,0,0.85)]">
      <div className="shell h-16 sm:h-18 md:h-20 flex items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8">
        <a href="#" className="font-serif text-xl md:text-2xl text-[var(--color-accent-base)] tracking-wide">
          NM.
        </a>

        <nav className="hidden lg:flex items-center justify-center gap-8 text-sm font-medium text-[color-mix(in_oklab,var(--color-text)_74%,transparent)]">
          <a href="#work" className="inline-flex items-center h-12 hover:text-[var(--color-text)] transition-colors">Works</a>
          <a href="#services" className="inline-flex items-center h-12 hover:text-[var(--color-text)] transition-colors">Services</a>
          <a href="#arsenal" className="inline-flex items-center h-12 hover:text-[var(--color-text)] transition-colors">Arsenal</a>
          <a href="#about" className="inline-flex items-center h-12 hover:text-[var(--color-text)] transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 lg:justify-self-end">
          <a
            href="#contact"
            className="hidden md:inline-flex text-sm px-3 sm:px-4 min-h-12 items-center cta-gold md:px-4"
            data-cursor-grow
          >
            Initiate a Consultation
          </a>

          <button
            type="button"
            onClick={toggleMode}
            aria-label="Toggle day and night mode"
            className="hidden md:inline-flex items-center justify-center min-h-12 min-w-12 border border-[var(--color-border)] hover:border-[var(--color-accent-base)] transition-colors"
            data-cursor-grow
          >
            {mode === 'day' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            className="inline-flex lg:hidden items-center justify-center min-h-12 min-w-12 border border-[var(--color-accent-base)]/70 hover:border-[var(--color-accent-base)] transition-colors"
            data-cursor-grow
          >
            <span className="relative inline-flex flex-col justify-center items-center w-5 h-5">
              <span className={`absolute h-px w-5 bg-[var(--color-accent-base)] transition-transform duration-200 ${mobileOpen ? 'rotate-45' : '-translate-y-[6px]'}`} />
              <span className={`absolute h-px w-5 bg-[var(--color-accent-base)] transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute h-px w-5 bg-[var(--color-accent-base)] transition-transform duration-200 ${mobileOpen ? '-rotate-45' : 'translate-y-[6px]'}`} />
            </span>
          </button>
        </div>
      </div>

      <div className={`lg:hidden bg-[var(--color-bg)] transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="shell py-4 flex flex-col gap-1">
          <a href="#work" onClick={() => setMobileOpen(false)} className="min-h-12 flex items-center px-3 hover:text-[var(--color-accent-base)]">Works</a>
          <a href="#services" onClick={() => setMobileOpen(false)} className="min-h-12 flex items-center px-3 hover:text-[var(--color-accent-base)]">Services</a>
          <a href="#arsenal" onClick={() => setMobileOpen(false)} className="min-h-12 flex items-center px-3 hover:text-[var(--color-accent-base)]">Arsenal</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="min-h-12 flex items-center px-3 hover:text-[var(--color-accent-base)]">About</a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 w-full min-h-12 inline-flex items-center justify-center cta-gold"
            data-cursor-grow
          >
            Initiate a Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
