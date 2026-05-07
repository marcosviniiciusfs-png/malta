import { Home, Car, Bike, Truck, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

interface Category {
  icon: LucideIcon;
  name: string;
  startingValue: string;
}

const categories: Category[] = [
  { icon: Home, name: "Imóveis", startingValue: "R$ 80.000" },
  { icon: Car, name: "Carros", startingValue: "R$ 30.000" },
  { icon: Bike, name: "Motos", startingValue: "R$ 16.000" },
  { icon: Truck, name: "Caminhões", startingValue: "R$ 100.000" },
  { icon: Hammer, name: "Reforma", startingValue: "R$ 40.000" },
];

interface CategoriesSectionProps {
  onContractClick: () => void;
}

const CategoriesSection = ({ onContractClick }: CategoriesSectionProps) => {
  return (
    <section id="categorias" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <Reveal effect="fade-up">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">
              Qual o tamanho do seu sonho hoje?
            </h2>
          </Reveal>
          <Reveal effect="fade-up" delay={120}>
            <p className="text-base md:text-lg text-muted-foreground">
              Invista com a segurança e a tradição da Malta
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.name} effect="zoom" delay={idx * 90}>
                <article className="group bg-card rounded-2xl border border-border p-5 md:p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primary/40 h-full">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] md:text-xs text-muted-foreground mb-1">a partir de</p>
                  <p className="font-heading text-lg md:text-xl font-bold text-cta mb-4">
                    {cat.startingValue}
                  </p>
                  <Button
                    onClick={onContractClick}
                    className="bg-cta hover:bg-cta-hover text-white w-full rounded-full font-semibold text-sm md:text-base mt-auto"
                  >
                    Contratar
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
