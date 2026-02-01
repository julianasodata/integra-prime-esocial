import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@/assets/thumb_logo.png";

const HEADER_HEIGHT = 96;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "servicos", label: "Serviços" },
    { id: "sobre", label: "Sobre" },
    { id: "contato", label: "Contato" },
  ];

  const whatsappLink =
    "https://wa.me/5544988256277?text=Olá! Gostaria de saber mais sobre os serviços de eSocial e SST.";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;

    setIsMobileMenuOpen(false);

    setTimeout(() => {
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B2A4A]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } h-20 lg:h-24`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center touch-manipulation"
          >
            <img
              src={logoImg}
              alt="Integra Prime"
              className="h-12 md:h-14 lg:h-16 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-medium text-white hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Button
              asChild
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Fale Comigo
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden p-2 text-white touch-manipulation"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#061A33] border-t border-white/10"
          >
            <nav className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-white text-lg font-medium py-3 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <Button
                asChild
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white mt-4"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" />
                  Fale Comigo
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
