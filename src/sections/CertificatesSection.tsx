import { Award } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const CERTIFICATES = [
  { name: 'GenAI Powered Data Analytics Job Simulation', issuer: 'TATA Forage' },
  { name: 'TechA Java Developer Certification', issuer: 'Infosys Springboard' },
  { name: 'Web Development', issuer: 'MyDailyWork' },
  { name: 'Data Analytics with Python', issuer: 'NPTEL' },
  { name: 'Hands-on Robotics: Designing the Future', issuer: 'St Aloysius (Deemed to be University)' },
  { name: 'AINNOVATION 2025 -- AI Learning Challenge', issuer: 'Microsoft' },
];

const COACTIVITIES = [
  'IEEE CEDA Ideathon Participant -- VTU, Belagavi',
  'Core Member, IEEE Computer Society -- AJIET Student Branch',
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-18">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-12 md:mb-16"
          style={{ fontSize: 'clamp(2rem, 8vw, 84px)' }}
        >
          Certificates
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {CERTIFICATES.map((cert, i) => (
          <FadeIn key={cert.name} delay={i * 0.1} y={20}>
            <div className="flex items-center gap-3 sm:gap-4 rounded-[24px] sm:rounded-[28px] border-2 border-[#D7E2EA]/30 px-4 py-4 sm:px-6 sm:py-5 h-full">
              <Award className="text-[#D7E2EA] flex-shrink-0" size={26} strokeWidth={1.5} />
              <div>
                <p className="text-[#D7E2EA] font-medium uppercase tracking-wide text-xs sm:text-sm">
                  {cert.name}
                </p>
                <p className="text-[#D7E2EA]/50 font-light text-[0.7rem] sm:text-xs mt-1">{cert.issuer}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} y={20}>
        <div className="max-w-5xl mx-auto mt-8 sm:mt-10 flex flex-col gap-2 items-center text-center">
          {COACTIVITIES.map((line) => (
            <p key={line} className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm uppercase tracking-widest">
              {line}
            </p>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
