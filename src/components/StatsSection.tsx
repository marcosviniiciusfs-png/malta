import { useEffect, useRef, useState } from "react";

interface Stat {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { prefix: "+", value: 1000, label: "clientes contemplados" },
  { prefix: "+", value: 200, label: "parceiros e colaboradores" },
  { prefix: "+", value: 27, suffix: "", label: "estados atendidos" },
];

const formatNumber = (n: number) => new Intl.NumberFormat("pt-BR").format(n);

const useCountUp = (target: number, durationMs: number, start: boolean) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startedAt;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);
  return value;
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 text-white relative overflow-hidden"
      style={{ background: "var(--gradient-primary)" }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 md:mb-12">
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Décadas de história
          </h2>
          <p
            className={`text-base md:text-lg text-white/85 transition-all duration-700 ease-out delay-150 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Tempo de Malta no mercado de consórcios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} animate={inView} delay={idx * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, animate, delay }: { stat: Stat; animate: boolean; delay: number }) => {
  const value = useCountUp(stat.value, 1800, animate);
  return (
    <div
      className={`text-center transition-all duration-700 ease-out ${
        animate ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-heading text-5xl md:text-6xl font-extrabold text-highlight drop-shadow-md">
        {stat.prefix}
        {formatNumber(value)}
        {stat.suffix ?? ""}
      </p>
      <p className="text-base md:text-lg text-white/90 mt-2">{stat.label}</p>
    </div>
  );
};

export default StatsSection;
