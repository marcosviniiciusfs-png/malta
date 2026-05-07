import { Button } from "@/components/ui/button";
import { Award, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

interface AboutSectionProps {
  onCtaClick: () => void;
}

const AboutSection = ({ onCtaClick }: AboutSectionProps) => {
  return (
    <section id="quem-somos" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-4 md:space-y-5 text-center md:text-left">
            <Reveal effect="fade-right">
              <p className="font-heading text-cta text-xl font-bold tracking-wide">Malta</p>
            </Reveal>
            <Reveal effect="fade-right" delay={120}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Décadas apoiando sonhos com segurança e credibilidade
              </h2>
            </Reveal>
            <Reveal effect="fade-right" delay={220}>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Com sede em Caruaru/PE, a Malta nasceu para transformar o
                consórcio em uma experiência simples, transparente e segura. Nossa
                missão é estar ao lado das famílias brasileiras em cada conquista
                — do primeiro carro à casa própria.
              </p>
            </Reveal>

            <Reveal effect="fade-up" delay={320}>
              <div className="flex items-start gap-3 bg-secondary p-4 rounded-xl border border-border text-left">
                <Award className="w-6 h-6 text-cta shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-foreground font-medium">
                  Uma das administradoras mais tradicionais do Nordeste — referência
                  em atendimento humanizado e acompanhamento integral do cliente.
                </p>
              </div>
            </Reveal>

            <Reveal effect="fade-up" delay={420}>
              <Button
                onClick={onCtaClick}
                size="lg"
                className="bg-cta hover:bg-cta-hover text-white font-semibold rounded-full px-7 md:px-8 hover:scale-105 transition-transform"
              >
                Conheça nossa história
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Reveal>
          </div>

          <Reveal effect="blur" duration={900} delay={120}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
                alt="Equipe Malta Consórcios em Caruaru/PE"
                className="w-full h-80 sm:h-96 md:h-[460px] object-cover rounded-2xl shadow-card"
                loading="lazy"
              />
              {/* SUBSTITUIR: foto real da equipe/escritório Malta Caruaru */}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
