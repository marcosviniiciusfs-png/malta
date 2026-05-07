import { Phone, MapPin, Clock, Instagram, Mail, Youtube } from "lucide-react";
import logoFooter1 from "@/assets/logo-footer-1.png";
import logoBancoCentral from "@/assets/logo-banco-central.png";
import facebookIcon from "@/assets/facebook.png";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer id="contato" className="bg-[hsl(var(--header-footer))] text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img src={logoFooter1} alt="Malta Consórcios" className="h-14 w-auto mb-4" />
            <p className="text-white/85 text-sm leading-relaxed mb-5">
              Juntos construindo a sua história. Realize seus sonhos com a
              segurança, tradição e credibilidade da Malta.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/maltainvestimentosc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Malta Consórcios"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <img src={facebookIcon} alt="" className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/maltainvestimentos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Malta Consórcios"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube da Malta Consórcios"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollTo("categorias")} className="text-white/85 hover:text-white transition-colors">
                  Consórcios
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("simulador")} className="text-white/85 hover:text-white transition-colors">
                  Simulador
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("quem-somos")} className="text-white/85 hover:text-white transition-colors">
                  Quem Somos
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("blog")} className="text-white/85 hover:text-white transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("representantes")} className="text-white/85 hover:text-white transition-colors">
                  Representantes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("faq")} className="text-white/85 hover:text-white transition-colors">
                  Ajuda
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Fale Conosco</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-white/85">(81) 99483-6614</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p className="text-white/85">(81) 3046-2832</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-white/85">contato@maltaconsorcios.com.br</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Endereço</p>
                  <p className="text-white/85">
                    Rua Professora Laura Maciel, 23<br />
                    Universitário, Caruaru/PE
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Atendimento</p>
                  <p className="text-white/85">
                    Seg a Sex: 8h–18h<br />
                    Sábado: 8h–12h
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Credenciais</h3>
            <div className="bg-white/5 rounded-xl p-4 mb-3 flex items-center gap-3">
              <img src={logoBancoCentral} alt="Banco Central do Brasil" className="h-12 w-auto bg-white rounded-md p-1" />
              <p className="text-xs text-white/85">
                Autorizada e fiscalizada pelo Banco Central do Brasil
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-xs text-white/85 leading-relaxed">
                <span className="block font-bold text-white mb-1">ABAC</span>
                Nossos profissionais fazem parte da Associação Brasileira de
                Administradoras de Consórcios.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Malta Consórcios — Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-5 text-sm justify-center">
              <button className="text-white/80 hover:text-white transition-colors">
                Política de Privacidade
              </button>
              <button className="text-white/80 hover:text-white transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
