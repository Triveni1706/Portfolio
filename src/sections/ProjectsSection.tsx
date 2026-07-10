import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import tpmsScreenshot from '../../screenshot/TPMS -- Task & Project Management.png';
import ecommerceScreenshot from '../../screenshot/ecommerce.png';

interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  image: string | null;
  liveUrl: string;
  repoUrl: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'TPMS -- Task & Project Management',
    category: 'Full-Stack -- MERN',
    description:
      'A full-stack platform for managing teams, projects, and tasks. Managers create projects and assign work, while members track and submit tasks through a centralized, role-based dashboard with live progress analytics.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: tpmsScreenshot,
    liveUrl: 'https://triveni1706.github.io/TPMS-Task-and-Project-Management-System/',
    repoUrl: 'https://github.com/Triveni1706/TPMS-Task-and-Project-Management-System',
  },
  {
    number: '02',
    name: 'HireHub -- Job Board Application',
    category: 'Full-Stack -- MERN',
    description:
      'A job board connecting recruiters and candidates. Recruiters post and manage listings while candidates search, filter, and apply with resume uploads -- all secured behind JWT auth and role-based access.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: 'https://github.com/Triveni1706/HireHub-Job-Board-Application/raw/main/screenshots/home.jpeg',
    liveUrl: 'https://triveni1706.github.io/HireHub-Job-Board-Application/',
    repoUrl: 'https://github.com/Triveni1706/HireHub-Job-Board-Application',
  },
  {
    number: '03',
    name: 'AI E-Commerce Product Intelligence',
    category: 'AI -- Computer Vision',
    description:
      'An end-to-end product intelligence system offering natural-language and image-based search, complementary recommendations, duplicate-listing detection, and zero-shot product classification.',
    tech: ['Python', 'PyTorch', 'OpenAI CLIP', 'Meta FAISS', 'Streamlit'],
    image: ecommerceScreenshot,
    liveUrl: 'https://ai-ecommerce-appuct-intelligence-33qtshdwttas9fgaxmfcos.streamlit.app/',
    repoUrl: 'https://github.com/Triveni1706/AI-Ecommerce-Product-Intelligence',
  },
  {
    number: '04',
    name: 'X-SKELETAGE -- Forensic Age & Gender Estimation',
    category: 'Machine Learning -- Forensics',
    description:
      'An ML model built to estimate age and gender from hand X-ray radiographs, currently being enhanced with CNN-based deep learning techniques to improve accuracy for forensic age and gender estimation.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn'],
    image: null,
    liveUrl: '',
    repoUrl: 'https://github.com/Triveni1706',
  },
];

const TOTAL_CARDS = PROJECTS.length;

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
      className="sticky top-20 md:top-24 h-[80vh] sm:h-[74vh]"
      style={{ top: `${index * 24}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-full w-full rounded-[32px] sm:rounded-[40px] md:rounded-[48px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-5 md:p-6 flex flex-col gap-4 sm:gap-5 overflow-hidden"
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(1.4rem, 5vw, 56px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-xs sm:text-sm font-light">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] uppercase font-medium text-sm sm:text-base md:text-lg leading-tight">
                {project.name}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="text-[#D7E2EA] opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <Github size={22} strokeWidth={1.5} />
            </a>
            {project.liveUrl && <LiveProjectButton href={project.liveUrl} />}
          </div>
        </div>

        {/* Body: image + description */}
        <div className="flex-1 min-h-0 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="sm:w-[52%] h-[160px] sm:h-full flex-shrink-0">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                className="w-full h-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px]"
                loading="lazy"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border-2 border-[#D7E2EA]/25"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(182,0,168,0.15), rgba(190,76,0,0.1))',
                }}
              >
                <Sparkles
                  className="text-[#D7E2EA]"
                  style={{ width: 'clamp(48px, 8vw, 88px)', height: 'clamp(48px, 8vw, 88px)' }}
                  strokeWidth={1.25}
                />
              </div>
            )}
          </div>
          <div className="sm:w-[45%] flex flex-col justify-center gap-4 sm:gap-6">
            <p
              className="text-[#D7E2EA] font-light leading-relaxed opacity-80"
              style={{ fontSize: 'clamp(0.78rem, 1.3vw, 1rem)' }}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[#D7E2EA]/70 text-xs uppercase tracking-widest border border-[#D7E2EA]/25 rounded-full px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ y: 120, opacity: 0.4 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ type: 'spring', stiffness: 220, damping: 30, mass: 0.7 }}
      className="relative bg-[#0C0C0C] rounded-t-[32px] sm:rounded-t-[40px] md:rounded-t-[48px] -mt-16 sm:-mt-24 md:-mt-32 z-10 px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 shadow-[0_-30px_80px_-20px_rgba(0,0,0,0.85)]"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14 md:mb-18"
          style={{ fontSize: 'clamp(2rem, 8vw, 84px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </motion.section>
  );
}