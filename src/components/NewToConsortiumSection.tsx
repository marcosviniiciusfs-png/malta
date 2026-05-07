import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

interface NewToConsortiumSectionProps {
  onCtaClick: () => void;
}

const NewToConsortiumSection = ({ onCtaClick }: NewToConsortiumSectionProps) => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <Reveal effect="fade-right" duration={800} className="order-2 md:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&q=80"
                alt="Casal sorrindo após contratar consórcio com a Malta"
                className="w-full h-72 sm:h-96 md:h-[420px] object-cover rounded-2xl shadow-card"
                loading="lazy"
              />
              {/* SUBSTITUIR: foto real de cliente Malta */}
            </div>
          </Reveal>

          <div className="space-y-4 md:space-y-5 order-1 md:order-2 text-center md:text-left">
            <Reveal effect="fade-left" delay={80}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                Entenda o consórcio
              </span>
            </Reveal>
            <Reveal effect="fade-left" delay={160}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Você chegou aqui e é novo no consórcio?
              </h2>
            </Reveal>
            <Reveal effect="fade-left" delay={260}>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Contamos com uma equipe totalmente capacitada para lhe auxiliar
                em cada etapa do processo. Tire suas dúvidas, conheça as regras e
                descubra como o consórcio pode ser o caminho mais inteligente para
                realizar seu sonho.
              </p>
            </Reveal>
            <Reveal effect="fade-up" delay={360}>
              <Button
                onClick={onCtaClick}
                size="lg"
                className="bg-cta hover:bg-cta-hover text-white font-semibold rounded-full px-7 md:px-8 py-5 md:py-6 text-sm md:text-base hover:scale-105 transition-transform"
              >
                Conheça as etapas do Consórcio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewToConsortiumSection;
