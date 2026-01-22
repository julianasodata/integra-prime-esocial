import { Phone, Mail, Linkedin } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/5544988256277";

  return (
    <footer className="bg-secondary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src={logoImg}
              alt="Integra Prime"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Gestão completa de eSocial e SST para empresas que buscam 
              conformidade legal e tranquilidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (44) 98825-6277
                </a>
              </li>
              <li>
                <a
                  href="mailto:felipeangelorvsantos@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  felipeangelorvsantos@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Integra Prime. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Felipe Angelo dos Santos - Técnico de Segurança do Trabalho
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
