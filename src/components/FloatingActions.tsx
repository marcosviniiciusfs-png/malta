import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5581994836614";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de mais informações sobre os consórcios da Malta."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Malta no WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp/90 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110"
      >
        <MessageCircle className="w-7 h-7" strokeWidth={2.2} fill="currentColor" />
        <span className="sr-only">WhatsApp Malta</span>
      </a>

      <button
        type="button"
        onClick={scrollTop}
        aria-label="Voltar ao topo"
        className={`fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-primary hover:bg-primary-hover text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 ${
          showTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default FloatingActions;
