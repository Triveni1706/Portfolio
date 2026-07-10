import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Mouse,
  Zap,
} from "lucide-react";

import profileImg from "../assets/profile.jpg";

const SCROLL_LINKS = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
}

export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const heading = "TRIVENI".split("");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060606] text-white">

     <div className="absolute inset-0 overflow-hidden">

  {/* Cyan Glow */}
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="absolute -top-40 -left-32 h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[180px]"
  />

  {/* Pink Glow */}
  <motion.div
    animate={{
      scale: [1.1, 0.9, 1.1],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
    }}
    className="absolute bottom-0 right-0 h-[550px] w-[550px] rounded-full bg-fuchsia-500/20 blur-[180px]"
  />

  {/* Center Glow */}
  <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

  {/* Grid */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:80px_80px]" />

  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

  {/* Noise */}
  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:18px_18px]" />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/55" />

</div>

      {/* navbar */}

      <nav className="absolute top-6 left-1/2 z-50 flex w-[94%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-3xl">

        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-black tracking-[4px]"
        >
          <div className="flex items-center gap-3">
  {/* Logo */}
  <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#4F7CFF] to-[#66D9FF] shadow-[0_8px_25px_rgba(79,124,255,.35)]">
    <span className="font-serif text-xl font-bold text-[#05070f]">
      T
    </span>
  </div>

  {/* Text */}
  <div className="leading-none">
    <h2 className="text-[1rem] font-black uppercase tracking-[0.1em] text-white">
      TRIVENI
    </h2>

    <p className="mt-1 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-slate-300">
      PORTFOLIO
    </p>
  </div>
</div>
        </motion.h2>

        <div className="hidden lg:flex gap-8">

          {SCROLL_LINKS.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToId(link.id)}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="..."
              >
                {link.label}
              </motion.button>
            ))}

        </div>

        <Link
  to="/bio"
  className="group hidden md:inline-flex items-center gap-3 rounded-full border border-cyan-400 bg-[#071225]/90 px-7 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,.35)]"
>
  <Zap
    size={18}
    className="text-white transition-transform duration-300 group-hover:rotate-12"
  />

  <span className="text-sm font-bold uppercase tracking-[0.1em] text-white">
    Bio Data
  </span>
</Link>
      </nav>

      {/* HERO */}

      <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl flex-col-reverse items-center justify-center gap-20 px-6 py-16 lg:flex-row">

  {/* LEFT */}

  <div className="flex-1">

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl"
    >
      <Sparkles size={15} />

      SOFTWARE ENGINEER

    </motion.div>

    <div className="relative mt-10">

      {/* background text */}

      <h1 className="pointer-events-none absolute -top-24 left-0 hidden text-[180px] font-black leading-none text-white/[0.03] lg:block">

        TRI

      </h1>

      <h1 className="pointer-events-none absolute top-24 left-24 hidden text-[180px] font-black leading-none text-white/[0.03] lg:block">

        VENI

      </h1>

      <div className="relative flex flex-wrap text-6xl font-black md:text-8xl">

        {heading.map((letter, index) => (

          <motion.span
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * .05,
              duration: .5,
            }}
          >
            {letter}
          </motion.span>

        ))}

      </div>

      <p className="mt-5 bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-xl font-semibold uppercase tracking-[2px] text-transparent">

        FULL STACK • AI ENGINEER

      </p>

    </div>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .4 }}
      className="mt-10 max-w-xl text-lg leading-8 text-slate-300"
    >
      Passionate Computer Science student specializing in
      modern frontend development, artificial intelligence,
      and premium web experiences.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .7 }}
      className="mt-10 flex flex-wrap gap-5"
    >

      <button
        onClick={() => scrollToId("projects")}
        className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 px-8 py-4 font-semibold shadow-[0_0_50px_rgba(34,211,238,.35)] transition hover:-translate-y-1"
      >
        View Projects

        <ArrowRight className="transition group-hover:translate-x-1" />

      </button>

      <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:border-cyan-400 hover:-translate-y-1">

        <Download size={18} />

        Resume

      </button>

    </motion.div>

  </div>

  {/* RIGHT */}

  <motion.div
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
    }}
    className="relative flex-1"
    style={{
      transform: `translate(${mouse.x}px, ${mouse.y}px)`
    }}
  >

    <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[120px]" />

    <div className="absolute right-0 top-10 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-[120px]" />

    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
      className="absolute -inset-3 rounded-[42px] bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 opacity-70 blur-md"
    />

    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-3 backdrop-blur-1xl">

      <motion.img
        whileHover={{
          scale: 1.04,
          rotate: 1,
        }}
        src={profileImg}
        alt="Profile"
        draggable={false}
        className="aspect-[3/4] w-[320px] rounded-[32px] object-cover md:w-[430px]"
      />

    </div>

  </motion.div>

</div>

{/* Scroll */}

<motion.div
  animate={{
    y: [0, 10, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
  <Mouse className="h-7 w-7 text-cyan-400" />
</motion.div>

    </section>
  );
}