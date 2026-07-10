import { Link } from 'react-router-dom';
import { Linkedin, Github, Instagram, ArrowLeft } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import profileImg from '../assets/profile.jpg';

const BIO_ROWS = [
  { label: 'Date of Birth', value: '17 July 2005' },
  { label: 'Gender', value: 'Female' },
  { label: 'Nationality', value: 'Indian' },
  { label: 'Location', value: 'Hubli, Karnataka' },
  { label: 'Email', value: 'trivenimanjunath8@gmail.com' },
  { label: 'Phone', value: '9036123313' },
  { label: 'Languages', value: 'English, Kannada, Hindi' },
];

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/triveni-manjunath-03894b346', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/Triveni1706', Icon: Github },
  { label: 'Instagram', href: 'https://instagram.com/triveni1706', Icon: Instagram },
];

export default function BioPage() {
  return (
    <section className="min-h-screen flex flex-col px-5 sm:px-8 md:px-10 py-10 sm:py-14">
      <FadeIn delay={0} y={-10} as="div">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#D7E2EA] font-medium uppercase tracking-widest text-sm hover:opacity-70 transition-opacity duration-200"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          Back to Portfolio
        </Link>
      </FadeIn>

      <div className="flex-1 flex items-center justify-center py-10 sm:py-16">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <FadeIn delay={0.1} x={-40} y={0} className="flex-shrink-0">
            <img
              src={profileImg}
              alt="Triveni Manjunath"
              className="w-[220px] sm:w-[260px] md:w-[300px] rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/40 object-cover"
              style={{ aspectRatio: '3 / 4', objectPosition: 'top' }}
            />
          </FadeIn>

          <div className="flex-1 w-full">
            <FadeIn delay={0} y={30}>
              <h1
                className="hero-heading font-black uppercase leading-none tracking-tight mb-2"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
              >
                Bio Data
              </h1>
              <p className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm mb-8 sm:mb-10">
                Triveni Manjunath
              </p>
            </FadeIn>

            <div className="flex flex-col">
              {BIO_ROWS.map((row, i) => (
                <FadeIn key={row.label} delay={0.05 + i * 0.06} y={16}>
                  <div
                    className="flex items-baseline justify-between gap-4 py-4 sm:py-5"
                    style={{ borderBottom: '1px solid rgba(215, 226, 234, 0.15)' }}
                  >
                    <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm font-light">
                      {row.label}
                    </span>
                    <span className="text-[#D7E2EA] text-sm sm:text-base font-medium text-right break-all">
                      {row.value}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5} y={20}>
              <div className="flex items-center gap-6 sm:gap-8 mt-8 sm:mt-10">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[#D7E2EA] opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <FadeIn delay={0} y={10}>
        <p className="text-center text-[#D7E2EA]/30 text-xs uppercase tracking-widest">
          © 2026 Triveni Manjunath -- All Rights Reserved
        </p>
      </FadeIn>
    </section>
  );
}
