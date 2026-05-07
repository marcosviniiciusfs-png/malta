import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

interface Article {
  category: string;
  title: string;
  image: string;
  excerpt: string;
}

const articles: Article[] = [
  {
    category: "Imóveis",
    title: "Como funciona o consórcio de imóveis e por que ele vale a pena",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Entenda o passo a passo da contemplação, lances e o uso da carta de crédito para comprar sua casa.",
  },
  {
    category: "Veículos",
    title: "Consórcio ou financiamento de carro: qual é a melhor escolha?",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Comparamos juros, prazos e flexibilidade para você escolher a melhor estratégia para o seu bolso.",
  },
  {
    category: "Educação Financeira",
    title: "5 passos para se preparar antes de entrar em um consórcio",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Organize seu orçamento, defina objetivos e descubra como o consórcio pode acelerar seus planos.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-6 mb-8 md:mb-10">
          <div>
            <Reveal effect="fade-right">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                Malta Explica
              </h2>
            </Reveal>
            <Reveal effect="fade-right" delay={100}>
              <p className="text-base md:text-lg text-muted-foreground">
                Tudo sobre como funciona o consórcio
              </p>
            </Reveal>
          </div>
          <Reveal effect="fade-left" delay={150}>
            <Button
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white self-start md:self-auto"
            >
              Acessar nosso Blog
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {articles.map((article, idx) => (
            <Reveal key={idx} effect="fade-up" delay={idx * 130}>
              <article className="bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <span className="inline-block self-start bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <button className="text-cta font-semibold text-sm inline-flex items-center hover:gap-3 gap-2 transition-all self-start">
                    Leia mais
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
