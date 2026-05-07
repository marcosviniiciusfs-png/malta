import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import maltaLogo from "@/assets/malta-logo.png";

const navLinks: { label: string; id: string }[] = [
  { label: "Consórcios", id: "categorias" },
  { label: "Simulador", id: "simulador" },
  { label: "Quem Somos", id: "quem-somos" },
  { label: "Blog", id: "blog" },
  { label: "Representantes", id: "representantes" },
  { label: "Ajuda", id: "faq" },
  { label: "Contato", id: "contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--header-footer))] transition-shadow ${
        scrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("inicio");
          }}
          className="flex items-center gap-2 shrink-0"
          aria-label="Página inicial Malta Consórcios"
        >
          <img src={maltaLogo} alt="Malta Consórcios" className="h-12 w-auto" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button
            onClick={() => scrollToSection("simulador")}
            className="bg-highlight hover:bg-highlight/90 text-white font-semibold rounded-full px-6"
          >
            Simular Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[hsl(var(--header-footer))] border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white/90 hover:text-white hover:bg-white/5 transition-colors text-left py-3 px-2 rounded-md"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("simulador")}
              className="bg-highlight hover:bg-highlight/90 text-white font-semibold rounded-full mt-2"
            >
              Simular Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
