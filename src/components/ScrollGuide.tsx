import { useEffect, useState } from 'react';

export default function ScrollGuide() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const next = height > 0 ? Math.min(scrollTop / height, 1) : 0;
      setProgress(next);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed left-[5%] top-0 h-screen w-px z-10 pointer-events-none bg-[rgba(197,160,89,0.24)]">
      <div
        className="w-full bg-[var(--color-accent-base)] origin-top transition-transform duration-200"
        style={{ height: '100%', transform: `scaleY(${progress})` }}
      />
    </div>
  );
}
