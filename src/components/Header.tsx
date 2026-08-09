import { useState, useEffect } from 'react';
import { BookOpen, Clock } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [seconds, setSeconds] = useState(9 * 60 + 47);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');

  return (
  <header
  className="fixed top-0 left-0 right-0 z-50"
  style={{ backgroundColor: '#E98B8B' }}
>
  <div className="flex w-full items-center justify-center gap-2 py-1 text-white">

    <Clock className="h-3.5 w-3.5" />

    <span className="text-xs font-bold uppercase">
      Oferta termina em
    </span>

    <span className="font-display text-sm font-bold tabular-nums">
        {mins}:{secs}
    </span>

  </div>
</header>
  );
}
