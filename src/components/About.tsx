import { motion } from "framer-motion";
import { Award, CheckCircle2, BookOpen, Building2 } from "lucide-react";
import felipeImg from "@/assets/felipe-professional.jpg";

const credentials = [
  {
    icon: Award,
    title: "Técnico de Segurança Certificado",
    description: "Registro ativo no Ministério do Trabalho",
  },
  {
    icon: BookOpen,
    title: "Especialista em eSocial SST",
    description: "Atualização constante nas normativas",
  },
  {
    icon: Building2,
    title: "Experiência Multissetorial",
    description: "Atendimento a diversos segmentos",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={felipeImg}
                alt="Felipe Angelo dos Santos"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elevated"
              />
            </div>
            {/* Decorative background */}
            <div className="absolute top-8 left-8 w-full max-w-md h-full bg-gradient-primary rounded-2xl -z-0 opacity-20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Sobre
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Felipe Angelo dos Santos
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Com anos de experiência em Segurança do Trabalho, me dedico a ajudar 
              empresas a navegar pelo complexo mundo do eSocial SST. Minha missão é 
              garantir que sua empresa esteja sempre em conformidade, evitando multas 
              e protegendo o que mais importa: seus colaboradores.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A <strong className="text-foreground">Integra Prime</strong> nasceu da 
              necessidade de oferecer um serviço personalizado e de alta qualidade, 
              com foco na prevenção e na gestão eficiente das obrigações trabalhistas.
            </p>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why choose us */}
            <div className="mt-10 p-6 bg-muted rounded-2xl">
              <h4 className="font-bold text-foreground mb-4">Por que escolher a Integra Prime?</h4>
              <ul className="space-y-3">
                {[
                  "Atendimento personalizado e humanizado",
                  "Respostas rápidas e suporte contínuo",
                  "Foco na prevenção de multas",
                  "Integração completa com seus processos",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
