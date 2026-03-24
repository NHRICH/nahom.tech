import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) {
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const onMove = (event: MouseEvent) => {
      ring.style.left = `${event.clientX}px`;
      ring.style.top = `${event.clientY}px`;
      ring.classList.add('active');

      const target = event.target as HTMLElement | null;
      const shouldGrow = Boolean(target?.closest('[data-cursor-grow]'));
      ring.classList.toggle('grow', shouldGrow);
    };

    const onLeave = () => {
      ring.classList.remove('active');
      ring.classList.remove('grow');
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return <div ref={ringRef} className="cursor-ring" aria-hidden="true" />;
}
