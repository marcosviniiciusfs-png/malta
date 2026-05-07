import { useRef, useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Reveal from "@/components/Reveal";

import cliente1 from "@/assets/clientes/cliente-1.jpeg";
import cliente2 from "@/assets/clientes/cliente-2.jpeg";
import cliente3 from "@/assets/clientes/cliente-3.jpeg";
import cliente4 from "@/assets/clientes/cliente-4.jpeg";
import cliente5 from "@/assets/clientes/cliente-5.jpeg";
import cliente6 from "@/assets/clientes/cliente-6.jpeg";
import cliente7 from "@/assets/clientes/cliente-7.jpeg";
import cliente8 from "@/assets/clientes/cliente-8.jpeg";
import cliente9 from "@/assets/clientes/cliente-9.jpeg";
import cliente10 from "@/assets/clientes/cliente-10.jpeg";

const clientImages = [
  cliente1, cliente2, cliente3, cliente4, cliente5,
  cliente6, cliente7, cliente8, cliente9, cliente10,
];

interface Quote {
  text: string;
  name: string;
  type: string;
  rating: number;
}

const quotes: Quote[] = [
  {
    text: "A Malta cuidou de todo o processo do início ao fim. Atendimento humano, claro e sem surpresas. Hoje minha família tem a casa própria graças a eles.",
    name: "Ana Cristina",
    type: "Consórcio de Imóvel",
    rating: 5,
  },
  {
    text: "Eu estava com receio de cair em cilada, mas a equipe me explicou tudo com muita transparência. Fui contemplado e recomendo de olhos fechados.",
    name: "Roberto Silva",
    type: "Consórcio de Veículo",
    rating: 5,
  },
  {
    text: "Sempre que precisei, fui atendido com atenção. A Malta é parceira de verdade — paguei minhas parcelas tranquilo e realizei meu sonho.",
    name: "Marcelo Andrade",
    type: "Consórcio de Caminhão",
    rating: 5,
  },
  {
    text: "Recomendei para toda minha família. A equipe é excelente e o suporte no WhatsApp é muito rápido. Empresa de confiança em Caruaru.",
    name: "Patrícia Lima",
    type: "Consórcio de Moto",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  // photo carousel
  const [photoApi, setPhotoApi] = useState<CarouselApi>();
  const [photoCurrent, setPhotoCurrent] = useState(0);
  const [photoCount, setPhotoCount] = useState(0);
  const photoAutoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true, stopOnFocusIn: true })
  );

  // quotes carousel
  const [quoteApi, setQuoteApi] = useState<CarouselApi>();
  const [quoteCurrent, setQuoteCurrent] = useState(0);
  const quoteAutoplay = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!photoApi) return;
    setPhotoCount(photoApi.scrollSnapList().length);
    setPhotoCurrent(photoApi.selectedScrollSnap());
    photoApi.on("select", () => setPhotoCurrent(photoApi.selectedScrollSnap()));
  }, [photoApi]);

  useEffect(() => {
    if (!quoteApi) return;
    setQuoteCurrent(quoteApi.selectedScrollSnap());
    quoteApi.on("select", () => setQuoteCurrent(quoteApi.selectedScrollSnap()));
  }, [quoteApi]);

  const photoPrev = useCallback(() => photoApi?.scrollPrev(), [photoApi]);
  const photoNext = useCallback(() => photoApi?.scrollNext(), [photoApi]);

  return (
    <section id="depoimentos" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 space-y-16 md:space-y-20">
        {/* Quotes block */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-4 text-center md:text-left">
            <Reveal effect="fade-right">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                O que os consorciados dizem sobre a Malta
              </h2>
            </Reveal>
            <Reveal effect="fade-right" delay={120}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Histórias reais de quem confiou na nossa tradição e realizou um sonho.
              </p>
            </Reveal>
          </div>

          <Reveal effect="fade-left" delay={150} duration={800} className="relative">
            <Carousel
              setApi={setQuoteApi}
              opts={{ align: "start", loop: true }}
              plugins={[quoteAutoplay.current]}
            >
              <CarouselContent>
                {quotes.map((q, idx) => (
                  <CarouselItem key={idx}>
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-7 shadow-card relative">
                      <Quote className="absolute -top-4 -left-2 w-10 h-10 text-cta/20" />
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: q.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                        ))}
                      </div>
                      <p className="text-foreground/85 leading-relaxed mb-5 text-base md:text-lg">
                        "{q.text}"
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-heading font-bold text-primary">{q.name}</p>
                        <p className="text-sm text-muted-foreground">{q.type}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center items-center gap-3 mt-5">
              <Button
                variant="outline"
                size="icon"
                onClick={() => quoteApi?.scrollPrev()}
                className="rounded-full"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-1.5">
                {quotes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => quoteApi?.scrollTo(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === quoteCurrent ? "w-6 bg-cta" : "w-2 bg-border"
                    }`}
                    aria-label={`Depoimento ${idx + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => quoteApi?.scrollNext()}
                className="rounded-full"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Photo gallery */}
        <div>
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <Reveal effect="fade-up">
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3">
                Conquistas reais de nossos clientes
              </h3>
            </Reveal>
            <Reveal effect="fade-up" delay={120}>
              <p className="text-muted-foreground">
                Muitas famílias já realizaram o sonho da casa própria, do carro novo e muito mais com a Malta.
              </p>
            </Reveal>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <Button
              variant="outline"
              size="icon"
              onClick={photoPrev}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hidden md:flex"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={photoNext}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hidden md:flex"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            <Carousel
              setApi={setPhotoApi}
              opts={{ align: "start", loop: true }}
              plugins={[photoAutoplay.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {clientImages.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="overflow-hidden rounded-xl shadow-card">
                      <img
                        src={image}
                        alt={`Cliente Malta contemplado ${index + 1}`}
                        loading="lazy"
                        className="w-full h-64 md:h-80 object-cover object-top transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center items-center gap-2 mt-6">
              {Array.from({ length: photoCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => photoApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === photoCurrent ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-4 md:hidden">
              <Button variant="outline" size="icon" onClick={photoPrev} className="rounded-full">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={photoNext} className="rounded-full">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
