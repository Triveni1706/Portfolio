import FadeIn from '../components/FadeIn';

const EDUCATION = [
  {
    number: '01',
    name: 'A J Institute of Engineering & Technology',
    period: '2023 -- Present',
    detail: 'B.E, Computer Science & Engineering -- CGPA 8.31',
  },
  {
    number: '02',
    name: 'Karnataka Science College, Dharwad',
    period: '2021 -- 2023',
    detail: 'Senior Secondary (12th), KSEAB -- 87.6%',
  },
  {
    number: '03',
    name: 'Fathima High School',
    period: '2020 -- 2021',
    detail: 'Secondary School (SSLC), KSEEB -- 81.4%',
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="bg-white rounded-t-[32px] sm:rounded-t-[40px] md:rounded-t-[48px] px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-10 sm:mb-14 md:mb-18"
          style={{ fontSize: 'clamp(2rem, 8vw, 72px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto grid gap-8">
        {EDUCATION.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.1} y={20}>
            <div className="rounded-[24px] border border-[#0C0C0C]/10 bg-[#F8F9FB] p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-5 sm:gap-10 flex-wrap sm:flex-nowrap">
                <span
                  className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                  style={{ fontSize: 'clamp(2.2rem, 7vw, 4.6rem)' }}
                >
                  {item.number}
                </span>
                <div className="flex flex-col gap-3 sm:gap-4 justify-center flex-1">
                  <div className="flex items-baseline justify-between gap-5 flex-wrap">
                    <h3
                      className="text-[#0C0C0C] font-semibold uppercase"
                      style={{ fontSize: 'clamp(0.95rem, 2vw, 1.35rem)' }}
                    >
                      {item.name}
                    </h3>
                    <span
                      className="text-[#0C0C0C] font-medium uppercase tracking-widest"
                      style={{ fontSize: 'clamp(0.75rem, 1vw, 0.95rem)', opacity: 0.68 }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <p
                    className="text-[#0C0C0C] font-medium leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.25vw, 0.98rem)', opacity: 0.72 }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
