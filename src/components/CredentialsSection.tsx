import { ShieldCheck, Award, BadgeCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const credentials = [
  {
    icon: ShieldCheck,
    eyebrow: "Segurança Institucional",
    title: "Autorizada e Fiscalizada pelo Banco Central do Brasil",
  },
  {
    icon: Award,
    eyebrow: "Profissionais Certificados",
    title: "Nossos profissionais fazem parte da ABAC",
    subtitle: "Associação Brasileira de Administradoras de Consórcios",
  },
  {
    icon: BadgeCheck,
    eyebrow: "Tradição",
    title: "Décadas de credibilidade no mercado de consórcios",
  },
];

const CredentialsSection = () => {
  return (
    <section
      className="py-12 md:py-14 text-white relative overflow-hidden"
      style={{ background: "var(--gradient-primary)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-7 md:gap-8 items-stretch">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <Reveal key={idx} effect="fade-up" delay={idx * 130}>
                <div className="flex items-start gap-4 justify-center md:justify-start">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center animate-pulse-soft" style={{ animationDelay: `${idx * 0.4}s` }}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-highlight font-bold mb-1">
                      {cred.eyebrow}
                    </p>
                    <p className="font-heading text-base md:text-lg font-bold leading-snug">
                      {cred.title}
                    </p>
                    {cred.subtitle && (
                      <p className="text-sm text-white/80 mt-1">{cred.subtitle}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
