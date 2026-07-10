import { useMemo } from 'react';
import { Code2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { motion } from "framer-motion";

const PARTICLE_COUNT = 18;

function SkillsParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: Math.round(Math.random() * 100),
        size: 2 + Math.round(Math.random() * 4),
        duration: 10 + Math.round(Math.random() * 12),
        delay: Math.round(Math.random() * 12),
        drift: Math.round((Math.random() - 0.5) * 80),
      })),
    []
  );

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          className="skills-particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ['--drift-x' as string]: `${p.drift}px`,
          }}
        />
      ))}
    </>
  );
}

const SKILLS = [
  {
    name: 'Languages',
    description:
      'Python, C, Java, JavaScript, and C++ – the core languages I write and problem-solve in daily.',
  },
  {
    name: 'Frameworks',
    description:
      'React, Node.js, Express.js, HTML, and CSS for building full-stack, responsive web applications.',
  },
  {
    name: 'Tools & DevOps',
    description:
      'Git, GitHub, MySQL, Jupyter Notebook, and VS Code for development, versioning, and collaboration.',
  },
  {
    name: 'AI & Data',
    description:
      'Machine Learning, Computer Vision, Scikit-learn, OpenAI CLIP, Pandas, and NumPy for AI and data analysis.',
  },
  {
    name: 'Focus Areas',
    description:
      'Web Development, Applied AI, Data Analytics, and Full-Stack Software Development.',
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-18"
    >
      {/* Animated Background */}
      <div className="skills-bg">
        <SkillsParticles />
      </div>

      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="relative z-10 text-white font-black uppercase text-center mb-10 sm:mb-12 md:mb-16"
          style={{ fontSize: 'clamp(2rem, 8vw, 84px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      {/* Skills Grid */}
<div className="relative z-10 max-w-5xl mx-auto">

  {/* First 4 Skills */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {SKILLS.slice(0, 4).map((skill, i) => (
      <FadeIn key={skill.name} delay={i * 0.1} y={20}>
       <motion.div
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-4 rounded-[28px] border-2 border-[#D7E2EA]/30 px-6 py-5"
        >

          <Code2
            className="text-[#D7E2EA] flex-shrink-0"
            size={28}
            strokeWidth={1.5}
          />

          <div>
            <p className="text-[#D7E2EA] font-medium uppercase tracking-wide text-sm">
              {skill.name}
            </p>

            <p className="text-[#D7E2EA]/50 font-light text-xs mt-1 leading-relaxed">
              {skill.description}
            </p>
          </div>

        </motion.div>
      </FadeIn>
    ))}
  </div>

  {/* Focus Areas */}
  <div className="grid grid-cols-1 mt-4">
    <div className="flex justify-center">
      <div className="w-full md:w-[49%]">

        <FadeIn delay={0.5} y={20}>
          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 rounded-[28px] border-2 border-[#D7E2EA]/30 px-6 py-5 min-h-[120px] bg-white/[0.02] backdrop-blur-sm"
          >

            <Code2
              className="text-[#D7E2EA] flex-shrink-0"
              size={28}
              strokeWidth={1.5}
            />

            <div>
              <p className="text-[#D7E2EA] font-medium uppercase tracking-wide text-sm">
                {SKILLS[4].name}
              </p>

              <p className="text-[#D7E2EA]/50 font-light text-xs mt-1 leading-relaxed">
                {SKILLS[4].description}
              </p>
            </div>

          </motion.div>
        </FadeIn>

      </div>
    </div>
  </div>

</div>
    </section>
  );
}