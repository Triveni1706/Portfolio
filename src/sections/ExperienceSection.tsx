import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import tataCert from '../../screenshot/tata.png';
import myDailyWorkCert from '../../screenshot/certificate.jpeg';

interface ExperienceItem {
  number: string;
  role: string;
  company: string;
  period: string;
  detail: string;
  image: string;
  imageAlt: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    number: '01',
    role: 'GenAI Powered Data Analytics Virtual Intern',
    company: 'TATA Forage',
    period: 'Jun 2026',
    image: tataCert,
    imageAlt: 'TATA Forage certificate',
    detail:
      'Performed exploratory data analysis, risk profiling, and AI-driven delinquency prediction on business datasets, and developed data-driven insights and recommendations for collections strategy using GenAI and analytics techniques.',
  },
  {
    number: '02',
    role: 'Web Development Intern',
    company: 'MyDailyWork',
    period: 'Jan 2026 -- Feb 2026',
    image: myDailyWorkCert,
    imageAlt: 'MyDailyWork certificate',
    detail:
      'Completed 3 web development projects using HTML, CSS, React, Node.js, MongoDB, and basic backend concepts during a 4-week virtual internship, gaining hands-on experience in website development, debugging, and responsive design.',
  },
];

const TOTAL_CARDS = EXPERIENCE.length;

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-18 md:top-22 h-[74vh] sm:h-[68vh]"
      style={{ top: `${index * 20}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-full w-full rounded-[28px] sm:rounded-[34px] md:rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3 sm:p-4 md:p-5 flex flex-col gap-3 sm:gap-4 overflow-hidden"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(1.6rem, 5vw, 60px)' }}
            >
              {experience.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-xs sm:text-sm font-light">
                {experience.company}
              </span>
              <span className="text-[#D7E2EA] uppercase font-medium text-base sm:text-lg md:text-xl leading-tight">
                {experience.role}
              </span>
            </div>
          </div>
          <span
            className="text-[#D7E2EA] font-light uppercase tracking-widest"
            style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)', opacity: 0.7 }}
          >
            {experience.period}
          </span>
        </div>

        <div className="flex-1 min-h-0 flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch">
          <div className="w-full sm:w-[60%] flex-1 overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[44px]">
            <img
              src={experience.image}
              alt={experience.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="sm:w-[40%] flex flex-col justify-center gap-4 sm:gap-6">
            <p
              className="text-[#D7E2EA] font-light leading-relaxed opacity-80"
              style={{ fontSize: 'clamp(0.78rem, 1.2vw, 1rem)' }}
            >
              {experience.detail}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'end start'],
  });

  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const blurRaw = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const opacityRaw = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  const spring = { stiffness: 260, damping: 40, mass: 0.6 };
  const scale = useSpring(scaleRaw, spring);
  const blurAmount = useSpring(blurRaw, spring);
  const opacity = useSpring(opacityRaw, spring);
  const filter = useTransform(blurAmount, (v) => `blur(${v}px)`);

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      style={{ scale, opacity, filter }}
      className="relative z-0 origin-top bg-black rounded-t-[40px] sm:rounded-t-[48px] md:rounded-t-[56px] px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#D7E2EA] font-black uppercase text-center mb-10 sm:mb-14 md:mb-16"
          style={{ fontSize: 'clamp(2rem, 8vw, 80px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="flex flex-col">
        {EXPERIENCE.map((experience, i) => (
          <ExperienceCard key={experience.number} experience={experience} index={i} />
        ))}
      </div>
    </motion.section>
  );
}
