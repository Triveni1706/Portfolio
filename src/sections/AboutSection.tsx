import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ASSET_BASE =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7';

const ABOUT_TEXT =
  "I'm a Computer Science & Engineering student at A J Institute of Engineering & Technology, driven by curiosity for AI, web development, and data analytics. I enjoy turning real-world problems into working software, from audio classification models to full-stack systems. Let's build something meaningful together!";

const BIO_FACTS = [
  { label: 'Location', value: 'Hubli, Karnataka' },
  { label: 'Nationality', value: 'Indian' },
  { label: 'Languages', value: 'English, Kannada, Hindi' },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[75vh] flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-12 overflow-hidden"
    >
      {/* Top-left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-60}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[90px] sm:w-[120px] md:w-[140px]"
      >
        <img src={`${ASSET_BASE}/moon_icon.11395d36.png`} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img src={`${ASSET_BASE}/p59_1.4659672e.png`} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Top-right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={60}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[90px] sm:w-[120px] md:w-[140px]"
      >
        <img src={`${ASSET_BASE}/lego_icon-1.703bb594.png`} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img src={`${ASSET_BASE}/Group_134-1.2e04f3ce.png`} alt="" className="w-full h-auto" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2rem, 8vw, 90px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[620px]"
            style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)' }}
          />

          <FadeIn delay={0.1} y={20}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {BIO_FACTS.map((fact) => (
                <div key={fact.label} className="text-center">
                  <p className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest font-light">
                    {fact.label}
                  </p>
                  <p className="text-[#D7E2EA] text-sm sm:text-base font-medium">{fact.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
