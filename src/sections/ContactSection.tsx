import { Mail, Phone, MapPin, Download, Linkedin, Github, Instagram } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/triveni-manjunath-03894b346', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/Triveni1706', Icon: Github },
  { label: 'Instagram', href: 'https://instagram.com/triveni1706', Icon: Instagram },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-18">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-8 sm:mb-10 md:mb-14"
          style={{ fontSize: 'clamp(2rem, 8vw, 84px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p
          className="text-[#D7E2EA]/70 font-light text-center max-w-xl mx-auto leading-relaxed mb-8 sm:mb-12"
          style={{ fontSize: 'clamp(0.82rem, 1.4vw, 1rem)' }}
        >
          Open to entry-level opportunities in software and data. Reach out and let&apos;s talk.
        </p>
      </FadeIn>

      <div className="max-w-2xl mx-auto flex flex-col gap-3 sm:gap-4 mb-10 sm:mb-12">
        <FadeIn delay={0.15} y={20}>
          <a
            href="mailto:trivenimanjunath8@gmail.com"
            className="flex items-center gap-3 rounded-full border-2 border-[#D7E2EA]/30 px-5 py-3 sm:px-6 sm:py-4 hover:border-[#D7E2EA] transition-colors duration-200"
          >
            <Mail className="text-[#D7E2EA] flex-shrink-0" size={22} strokeWidth={1.5} />
            <span className="text-[#D7E2EA] text-sm sm:text-base font-light break-all">
              trivenimanjunath8@gmail.com
            </span>
          </a>
        </FadeIn>
        <FadeIn delay={0.2} y={20}>
          <a
            href="tel:+919036123313"
            className="flex items-center gap-3 rounded-full border-2 border-[#D7E2EA]/30 px-5 py-3 sm:px-6 sm:py-4 hover:border-[#D7E2EA] transition-colors duration-200"
          >
            <Phone className="text-[#D7E2EA] flex-shrink-0" size={22} strokeWidth={1.5} />
            <span className="text-[#D7E2EA] text-sm sm:text-base font-light">9036123313</span>
          </a>
        </FadeIn>
        <FadeIn delay={0.25} y={20}>
          <div className="flex items-center gap-4 rounded-full border-2 border-[#D7E2EA]/30 px-6 py-4 sm:px-8 sm:py-5">
            <MapPin className="text-[#D7E2EA] flex-shrink-0" size={22} strokeWidth={1.5} />
            <span className="text-[#D7E2EA] text-sm sm:text-base font-light">Hubli, Karnataka, India</span>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.3} y={20}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <ContactButton href="mailto:trivenimanjunath8@gmail.com" label="Email Me" />
          <a
            href="/resume.pdf"
            download
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-colors duration-200 hover:bg-[#D7E2EA]/10 flex items-center gap-2"
          >
            <Download size={18} strokeWidth={1.5} />
            Download Resume
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.35} y={20}>
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#D7E2EA] opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <Icon size={26} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.4} y={10}>
        <p className="text-center text-[#D7E2EA]/30 text-xs uppercase tracking-widest mt-16 sm:mt-20">
          © 2026 Triveni Manjunath -- All Rights Reserved
        </p>
      </FadeIn>
    </section>
  );
}
