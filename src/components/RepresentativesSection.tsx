import { Button } from "@/components/ui/button";
import { MapPin, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

interface RepresentativesSectionProps {
  onCtaClick: () => void;
}

const RepresentativesSection = ({ onCtaClick }: RepresentativesSectionProps) => {
  return (
    <section id="representantes" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-4 md:space-y-5 text-center md:text-left">
            <Reveal effect="fade-right">
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                Para Facilitadores
              </span>
            </Reveal>
            <Reveal effect="fade-right" delay={120}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Contamos com representantes por todo o Brasil
              </h2>
            </Reveal>
            <Reveal effect="fade-right" delay={220}>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Nossa rede nacional facilita o atendimento próximo de você. Onde
                quer que esteja, há um representante Malta preparado para
                encontrar a melhor solução de consórcio para o seu sonho.
              </p>
            </Reveal>

            <div className="flex flex-wrap gap-5 md:gap-6 pt-2 justify-center md:justify-start">
              <Reveal effect="zoom" delay={300}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-heading text-2xl font-bold text-primary leading-none">
                      +200
                    </p>
                    <p className="text-sm text-muted-foreground">
                      representantes em todo o país
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal effect="zoom" delay={400}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-heading text-2xl font-bold text-primary leading-none">
                      27
                    </p>
                    <p className="text-sm text-muted-foreground">
                      estados atendidos
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal effect="fade-up" delay={500}>
              <Button
                onClick={onCtaClick}
                size="lg"
                className="bg-cta hover:bg-cta-hover text-white font-semibold rounded-full px-7 md:px-8 mt-2 hover:scale-105 transition-transform"
              >
                Encontrar Representante
              </Button>
            </Reveal>
          </div>

          <Reveal effect="blur" duration={900} delay={120}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
                alt="Equipe de representantes Malta Consórcios em escritório moderno"
                className="w-full h-72 sm:h-96 md:h-[420px] object-cover rounded-2xl shadow-card"
                loading="lazy"
              />
              {/* SUBSTITUIR: foto real da equipe Malta */}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default RepresentativesSection;
