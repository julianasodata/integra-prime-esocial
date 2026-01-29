import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/logo.png";

const Hero = () => {
  const whatsappLink = "https://wa.me/5544988256277?text=Olá! Gostaria de saber mais sobre os serviços de eSocial e SST.";
 
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
     <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0d2136]/90 via-[#153a5f]/80 to-[#1e5a8a]/85" />

      <div className="relative z-20 w-full px-6 lg:px-12 py-20">
        <div className="flex flex-col gap-12 items-center">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center w-full"
          >
            <img
              src={logoImg}
              alt="Felipe Angelo dos Santos - Técnico de Segurança do Trabalho"
              className="w-full h-auto object-cover"
              style={{ maxWidth: '600px' }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#1a4d7a]/30 text-blue-200 px-4 py-2 rounded-full mb-6 border border-blue-300/40 justify-center"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Técnico de Segurança Certificado</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Gestão completa de{" "}
              <span className="text-transparent bg-clip-text bg-[#0D93F2]">
                eSocial
              </span>{" "}
              e{" "}
              <span className="text-transparent bg-clip-text bg-[#0D93F2]">
                SST
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto"
            >
              Evite multas e passivos trabalhistas. Adeque sua empresa às 
              exigências legais com suporte especializado e monitoramento contínuo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#2196F3] hover:bg-[#1976D2] text-white px-6 py-6 rounded-lg font-semibold group transition-all"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Fale Comigo Agora
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 px-6 py-6 rounded-lg font-semibold transition-all"
              >
                <a href="#servicos" className="flex items-center justify-center">
                  Conhecer Serviços
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex flex-wrap gap-12 text-white justify-center"
            >
              <div className="text-center">
                {/* <div className="text-3xl font-bold text-[#0D93F2]">100+</div> */}
                <div className="text-3xl font-bold text-[#0D93F2]">Muitas</div>
                <div className="text-sm text-gray-200">Empresas Satisfeitas</div>
              </div>
              <div className="text-center">
                {/* <div className="text-3xl font-bold text-[#0D93F2]">5+</div> */}
                <div className="text-3xl font-bold text-[#0D93F2]">Muitos</div>
                <div className="text-sm text-gray-200">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0D93F2]">0</div>
                <div className="text-sm text-gray-200">Multas nos Clientes</div>
              </div>
            </motion.div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;