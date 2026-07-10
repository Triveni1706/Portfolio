import { useEffect, useRef, useState } from 'react';

const ROW1 = [
  'Python',
  'Java',
  'C',
  'C++',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'HTML',
  'CSS',
];

const ROW2 = [
  'OpenAI CLIP',
  'Scikit-learn',
  'MongoDB',
  'MySQL',
  'Jupyter Notebook',
  'VS Code',
  'Machine Learning',
  'Computer Vision',
  'Git & GitHub',
];

const TRIPLED_ROW1 = [...ROW1, ...ROW1, ...ROW1];
const TRIPLED_ROW2 = [...ROW2, ...ROW2, ...ROW2];

function Tile({ label }: { label: string }) {
  return (
    <div className="h-[56px] sm:h-[64px] px-6 sm:px-8 flex items-center justify-center rounded-2xl border border-[#D7E2EA]/25 bg-white/5 flex-shrink-0 whitespace-nowrap">
      <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm">
        {label}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const newOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(newOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-12 sm:pt-16 md:pt-20 pb-8 overflow-hidden"
    >
      <div className="flex flex-col gap-2">
        <div
          className="flex gap-2"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW1.map((label, i) => (
            <Tile key={`row1-${i}`} label={label} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW2.map((label, i) => (
            <Tile key={`row2-${i}`} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
