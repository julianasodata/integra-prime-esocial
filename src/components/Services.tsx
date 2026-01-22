import { motion } from "framer-motion";
import { 
  FileCheck, 
  Send, 
  Scale, 
  Users, 
  Headphones, 
  ShieldCheck 
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Implantação do eSocial SST",
    description: "Configuração completa do sistema de envio de eventos de SST ao eSocial, garantindo conformidade desde o primeiro dia.",
  },
  {
    icon: Send,
    title: "Envio de Eventos S-2210, S-2220 e S-2240",
    description: "Gestão e transmissão dos eventos de CAT, ASO e condições ambientais com total precisão e dentro dos prazos.",
  },
  {
    icon: Scale,
    title: "Adequação às Exigências Legais",
    description: "Análise e adequação da sua empresa a todas as normas regulamentadoras e legislações trabalhistas vigentes.",
  },
  {
    icon: Users,
    title: "Integração SST, RH e Contabilidade",
    description: "Harmonização dos processos entre departamentos para um fluxo de informações eficiente e sem erros.",
  },
  {
    icon: Headphones,
    title: "Suporte Contínuo e Monitoramento",
    description: "Acompanhamento constante dos prazos e atualizações, com suporte dedicado para todas as suas dúvidas.",
  },
  {
    icon: ShieldCheck,
    title: "Prevenção de Multas e Passivos",
    description: "Assessoria estratégica para identificar e eliminar riscos de autuações e passivos trabalhistas.",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="servicos" className="py-24 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Soluções completas em{" "}
            <span className="text-gradient">eSocial e SST</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos serviços especializados para manter sua empresa em conformidade 
            com todas as obrigações legais de segurança do trabalho.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
