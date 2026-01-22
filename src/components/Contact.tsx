import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappLink = "https://wa.me/5544988256277?text=Olá! Gostaria de saber mais sobre os serviços de eSocial e SST.";

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(44) 98825-6277",
      href: whatsappLink,
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "felipeangelorvsantos@gmail.com",
      href: "mailto:felipeangelorvsantos@gmail.com",
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg - Sex: 8h às 18h",
      href: null,
    },
  ];

  return (
    <section id="contato" className="py-24 bg-gradient-dark text-primary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
              Vamos conversar sobre o seu negócio?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Entre em contato agora mesmo e descubra como posso ajudar sua empresa 
              a estar em conformidade com o eSocial SST. Primeira consulta gratuita!
            </p>

            {/* Contact info */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-primary-foreground/60 text-sm">{item.label}</p>
                        <p className="font-semibold group-hover:text-accent transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-primary-foreground/60 text-sm">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              variant="hero"
              className="group"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Iniciar Conversa no WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card text-foreground rounded-3xl p-8 md:p-10 shadow-elevated"
          >
            <h3 className="text-2xl font-bold mb-4">
              Solicite uma Consulta Gratuita
            </h3>
            <p className="text-muted-foreground mb-8">
              Avaliamos sua situação atual e apresentamos um plano personalizado 
              para adequar sua empresa às exigências do eSocial SST.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Diagnóstico Inicial</h4>
                  <p className="text-muted-foreground text-sm">
                    Analisamos sua situação atual e identificamos gaps
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Proposta Personalizada</h4>
                  <p className="text-muted-foreground text-sm">
                    Desenvolvemos um plano sob medida para sua empresa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Implementação</h4>
                  <p className="text-muted-foreground text-sm">
                    Colocamos tudo em prática com suporte contínuo
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-center text-sm">
                <span className="text-accent font-semibold">Não espere ser multado!</span>
                <br />
                Entre em contato hoje e proteja sua empresa.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
