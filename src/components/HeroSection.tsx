import { useEffect, useRef, useState } from "react";
import { Home as HomeIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Reveal from "@/components/Reveal";
import heroBanner from "@/assets/hero-banner.png";

interface HeroSectionProps {
  onSimulateClick: () => void;
}

interface Slide {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  imageAlt: string;
}

const slides: Slide[] = [
  {
    title: "Fazemos do seu sonho, o nosso sonho",
    subtitle:
      "Imóveis, carros, motos, caminhões e muito mais. Conquiste o que você sempre quis com a segurança e tradição da Malta.",
    cta: "Simular Agora",
    image: heroBanner,
    imageAlt: "Família feliz realizando o sonho da casa própria com a Malta Consórcios",
  },
  {
    title: "Realize seu sonho com segurança e planejamento",
    subtitle:
      "Mais de 1000 simulações realizadas. 100% gratuito, sem consulta ao SPC e resultado direto no seu WhatsApp.",
    cta: "Quero Simular",
    image: heroBanner,
    imageAlt: "Casal recebendo a chave do carro novo após contemplação",
  },
];

const HeroSection = ({ onSimulateClick }: HeroSectionProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section
      id="inicio"
      className="relative pt-24 pb-16 overflow-hidden text-white"
      style={{ background: "var(--gradient-primary)" }}
    >
      {/* Decorative outline icons */}
      <HomeIcon
        aria-hidden
        className="hidden md:block absolute -left-12 top-32 w-72 h-72 text-white/10 animate-float"
        strokeWidth={1.2}
      />
      <HomeIcon
        aria-hidden
        className="hidden md:block absolute right-10 bottom-10 w-44 h-44 text-white/10 animate-float"
        strokeWidth={1.2}
        style={{ animationDelay: "1.2s" }}
      />

      <div className="container mx-auto px-4 relative">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem key={idx}>
                <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center min-h-[420px]">
                  <div className="space-y-5 md:space-y-6 text-center md:text-left">
                    <Reveal effect="fade-right" duration={800}>
                      <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                    </Reveal>
                    <Reveal effect="fade-up" delay={200} duration={700}>
                      <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto md:mx-0">
                        {slide.subtitle}
                      </p>
                    </Reveal>
                    <Reveal effect="fade-up" delay={400} duration={700}>
                      <Button
                        onClick={onSimulateClick}
                        size="lg"
                        className="bg-highlight hover:bg-highlight/90 text-foreground font-semibold text-base md:text-lg px-7 md:px-8 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                      >
                        {slide.cta}
                      </Button>
                    </Reveal>
                  </div>
                  <Reveal effect="blur" delay={150} duration={900}>
                    <div className="relative">
                      <img
                        src={slide.image}
                        alt={slide.imageAlt}
                        className="w-full h-auto rounded-2xl shadow-2xl"
                        loading={idx === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </Reveal>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation arrows */}
        <button
          onClick={() => api?.scrollPrev()}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm items-center justify-center text-white transition-all"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => api?.scrollNext()}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm items-center justify-center text-white transition-all"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                idx === current ? "w-8 bg-highlight" : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
