import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const ADDRESS = "Rua Professora Laura Maciel, 23 - Universitário, Caruaru/PE";
const MAPS_QUERY = encodeURIComponent(
  "Rua Professora Laura Maciel, 23, Universitário, Caruaru, PE"
);
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
          <Reveal effect="fade-up">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">
              Onde Estamos
            </h2>
          </Reveal>
          <Reveal effect="fade-up" delay={120}>
            <p className="text-base md:text-lg text-muted-foreground">
              Visite nosso escritório em Caruaru/PE — atendimento humanizado e presencial.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <Reveal effect="fade-right" delay={80} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card space-y-5">
            <div>
              <p className="font-heading text-xl font-bold text-primary mb-1">
                Empresarial Laura Maciel
              </p>
              <p className="text-muted-foreground text-sm">
                Atendimento Malta Caruaru
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cta mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Endereço</p>
                  <p className="text-muted-foreground text-sm">
                    Rua Professora Laura Maciel, 23 — Universitário
                    <br />
                    Caruaru/PE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cta mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Telefones</p>
                  <p className="text-muted-foreground text-sm">
                    Fixo: (81) 3046-2832
                    <br />
                    WhatsApp: (81) 99483-6614
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cta mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <p className="text-muted-foreground text-sm">contato@maltaconsorcios.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cta mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Horário de atendimento</p>
                  <p className="text-muted-foreground text-sm">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-cta hover:bg-cta-hover text-white rounded-full font-semibold"
              >
                <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  Como chegar
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a
                  href="https://wa.me/5581994836614?text=Olá! Gostaria de mais informações sobre os consórcios da Malta."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal effect="fade-left" delay={180} duration={900} className="rounded-2xl overflow-hidden shadow-card border border-border min-h-[360px] md:min-h-[420px]">
            <iframe
              title={`Localização da Malta Consórcios — ${ADDRESS}`}
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[360px] md:min-h-[420px] border-0"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
