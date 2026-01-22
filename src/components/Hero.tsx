import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight, Phone } from "lucide-react";
import felipeImg from "@/assets/felipe-professional.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/5544988256277?text=Olá! Gostaria de saber mais sobre os serviços de eSocial e SST.";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>

      <div className="container relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Técnico de Segurança Certificado</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Gestão completa de{" "}
              <span className="text-accent">eSocial</span> e{" "}
              <span className="text-accent">SST</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Evite multas e passivos trabalhistas. Adeque sua empresa às 
              exigências legais com suporte especializado e monitoramento contínuo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                variant="hero"
                className="group"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Fale Comigo Agora
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="heroOutline"
              >
                <a href="#servicos">
                  Conhecer Serviços
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start text-primary-foreground/70"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="text-sm">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">0</div>
                <div className="text-sm">Multas nos Clientes</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-xl" />
              
              <img
                src={felipeImg}
                alt="Felipe Angelo dos Santos - Técnico de Segurança do Trabalho"
                className="relative w-80 h-auto rounded-2xl shadow-elevated object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
