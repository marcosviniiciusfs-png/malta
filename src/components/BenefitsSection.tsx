import { MessageCircle, DollarSign, FileText, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: MessageCircle,
      title: "Receba direto no WhatsApp",
      description:
        "Sua simulação de crédito é enviada rapidamente para o seu WhatsApp com todas as informações necessárias.",
    },
    {
      icon: DollarSign,
      title: "Parcelas que cabem no seu bolso",
      description:
        "Encontramos as melhores condições com parcelas que se adequam ao seu orçamento e ao seu sonho.",
    },
    {
      icon: FileText,
      title: "Simulação sem compromisso",
      description:
        "Faça quantas simulações quiser, totalmente grátis e sem consulta ao SPC ou Serasa.",
    },
    {
      icon: ShieldCheck,
      title: "Segurança garantida",
      description:
        "Empresa autorizada e fiscalizada pelo Banco Central — sua tranquilidade do início ao fim.",
    },
  ];

  return (
    <section id="beneficios" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <Reveal effect="fade-up">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">
              Por que escolher a Malta?
            </h2>
          </Reveal>
          <Reveal effect="fade-up" delay={120}>
            <p className="text-base md:text-lg text-muted-foreground">
              Oferecemos as melhores condições do mercado com total transparência e agilidade.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <Reveal key={index} effect="zoom" delay={index * 110}>
              <div className="group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1.5 h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-2 text-center">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
