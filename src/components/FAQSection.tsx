import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

interface FaqItem {
  q: string;
  a: string;
}

const faqsLeft: FaqItem[] = [
  {
    q: "O que é um consórcio?",
    a: "Consórcio é uma modalidade de compra programada na qual um grupo de pessoas se reúne para juntos formarem uma poupança comum, destinada à aquisição de bens e serviços. É fiscalizado pelo Banco Central do Brasil.",
  },
  {
    q: "Como funciona a contemplação?",
    a: "A contemplação ocorre mensalmente por sorteio ou por lance. Ao ser contemplado, você recebe a carta de crédito no valor contratado e pode utilizá-la para adquirir o bem desejado.",
  },
  {
    q: "Posso usar o FGTS no consórcio de imóveis?",
    a: "Sim. O FGTS pode ser utilizado para dar lance, complementar a carta de crédito ou amortizar parcelas, conforme as regras do programa habitacional.",
  },
  {
    q: "É possível antecipar parcelas?",
    a: "Sim. Você pode antecipar parcelas para reduzir o prazo do consórcio ou aumentar suas chances de contemplação por lance.",
  },
];

const faqsRight: FaqItem[] = [
  {
    q: "Posso cancelar meu consórcio?",
    a: "Sim. O cancelamento é possível seguindo as regras do contrato. Os valores pagos retornam após o encerramento do grupo, conforme regulamentação do Banco Central.",
  },
  {
    q: "O que é a compra de carta contemplada?",
    a: "É quando você adquire uma cota já contemplada de outro consorciado, recebendo a carta de crédito imediatamente. A Malta orienta em todo o processo com segurança.",
  },
  {
    q: "Há consulta ao SPC ou Serasa para simular?",
    a: "Não. A simulação é 100% gratuita e sem consulta a órgãos de proteção ao crédito. A análise de crédito ocorre apenas na contemplação, antes da liberação da carta.",
  },
  {
    q: "Quais bens posso adquirir via consórcio Malta?",
    a: "Imóveis, carros, motos, caminhões, máquinas pesadas, reformas e serviços. Consulte nossas categorias na seção 'Qual o tamanho do seu sonho hoje?'.",
  },
];

const FaqColumn = ({ items, idPrefix }: { items: FaqItem[]; idPrefix: string }) => (
  <Accordion type="single" collapsible className="space-y-3">
    {items.map((item, idx) => (
      <AccordionItem
        key={idx}
        value={`${idPrefix}-${idx}`}
        className="bg-card border border-border rounded-xl px-5 shadow-card data-[state=open]:shadow-card-hover transition-shadow"
      >
        <AccordionTrigger className="font-heading font-semibold text-foreground hover:text-primary text-left py-4">
          {item.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
          {item.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <Reveal effect="fade-up">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">
              Perguntas Frequentes
            </h2>
          </Reveal>
          <Reveal effect="fade-up" delay={120}>
            <p className="text-base md:text-lg text-muted-foreground">
              Tire suas dúvidas sobre como funciona o consórcio na Malta.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
          <Reveal effect="fade-right" delay={80}>
            <FaqColumn items={faqsLeft} idPrefix="left" />
          </Reveal>
          <Reveal effect="fade-left" delay={160}>
            <FaqColumn items={faqsRight} idPrefix="right" />
          </Reveal>
        </div>

        <div className="text-center mt-10">
          <Reveal effect="fade-up" delay={200}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
            >
              Acesse nossa Central de Ajuda
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
