import { Phone, Mail } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/5544988256277";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 96;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-gradient-to-br from-[#0B2A4A] to-[#061A33]">
      <div className="mx-auto max-w-[1400px] pt-8 pb-8 px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img
              src={logoImg}
              alt="Integra Prime"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Gestão completa de eSocial e SST para empresas que buscam
              conformidade legal e tranquilidade.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-left text-white/70 hover:text-accent"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-left text-white/70 hover:text-accent"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-left text-white/70 hover:text-accent"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-accent"
                >
                  <Phone className="w-4 h-4" />
                  (44) 98825-6277
                </a>
              </li>
              <li>
                <a
                  href="mailto:felipeangelorvsantos@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-accent"
                >
                  <Mail className="w-4 h-4" />
                  felipeangelorvsantos@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Integra Prime. Todos os direitos reservados.
          </p>
          <p className="text-white/60 text-sm">
            Felipe Angelo dos Santos — Técnico de Segurança do Trabalho
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
