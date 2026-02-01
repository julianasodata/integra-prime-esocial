import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const whatsappLink = "https://wa.me/5544988256277";

  return (
    <section
      id="contato"
      className="w-full bg-gradient-to-br from-[#0B2A4A] to-[#061A33] py-20"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="bg-[#0E2A45] rounded-3xl p-8 md:p-10 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fale com a Integra Prime
          </h2>

          <p className="text-white/80 mb-8">
            Entre em contato e descubra como podemos ajudar sua empresa a
            manter conformidade total com o eSocial e SST.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-accent text-accent-foreground px-6 py-4 rounded-xl font-semibold hover:opacity-90 transition"
            >
              <Phone className="w-5 h-5" />
              Falar no WhatsApp
            </a>

            <a
              href="mailto:felipeangelorvsantos@gmail.com"
              className="flex items-center gap-3 border border-white/20 text-white px-6 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
            >
              <Mail className="w-5 h-5" />
              Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
