import { useState, useEffect } from "react";
import { CheckCircle, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";

const CONSULTANT_WHATSAPP_NUMBER = "5581993797051";
const CONSULTANT_WHATSAPP_URL = `https://wa.me/${CONSULTANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Acabei de enviar minha simulação no site da Malta e gostaria de falar com um consultor agora."
)}`;

interface KommoProof {
  leadId: number;
  traceId: string;
  leadUrl: string;
  verified: boolean;
}

const ThankYou = () => {
  const [proof, setProof] = useState<KommoProof | null>(null);
  const [searchParams] = useSearchParams();
  const isDebug = searchParams.get("debug") === "1";

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("kommo_proof");
      if (stored) {
        setProof(JSON.parse(stored));
      }
    } catch { /* ignore */ }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-6">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Obrigado!
          </h1>
          <p className="text-lg text-muted-foreground">
            Sua solicitação foi enviada com sucesso! Em breve entraremos em contato via WhatsApp.
          </p>
        </div>

        <div className="bg-secondary border border-border rounded-2xl p-5 md:p-6 space-y-4 animate-fade-in">
          <p className="text-base md:text-lg font-medium text-foreground">
            Para um atendimento mais rápido é só clicar no botão que você vai conversar com um consultor agora mesmo.
          </p>
          <Button
            asChild
            size="lg"
            className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold rounded-full px-7 py-6 text-base hover:scale-105 transition-transform shadow-lg"
          >
            <a
              href={CONSULTANT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 w-5 h-5" fill="currentColor" />
              Falar com um consultor agora
            </a>
          </Button>
        </div>

        {isDebug && proof && (
          <div className="bg-muted rounded-lg p-4 text-left space-y-2 text-sm">
            <p className="font-semibold text-foreground">Comprovante (debug)</p>
            <p className="text-muted-foreground">Protocolo: <span className="font-mono text-foreground">{proof.traceId}</span></p>
            <p className="text-muted-foreground">Lead ID: <span className="font-mono text-foreground">{proof.leadId}</span></p>
            <p className="text-muted-foreground">Verificado: {proof.verified ? "✅ Sim" : "⚠️ Não confirmado"}</p>
            <a
              href={proof.leadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline mt-1"
            >
              Abrir no CRM <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        <div className="pt-4">
          <Link to="/">
            <Button className="bg-primary hover:bg-primary-hover">
              Voltar para o início
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
