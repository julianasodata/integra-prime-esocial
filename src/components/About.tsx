import { ShieldCheck, FileText, Users } from "lucide-react";

const About = () => {
  return (
    <section
      id="sobre"
      className="w-full bg-gradient-to-br from-[#0B2A4A] to-[#061A33] py-20"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <span className="text-accent font-semibold uppercase tracking-wider">
          Sobre nós
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6">
          Especialistas em eSocial e SST
        </h2>

        <p className="text-white/80 text-lg mb-6 leading-relaxed">
          A <strong>Integra Prime</strong> nasceu para ajudar empresas a
          cumprirem todas as obrigações do eSocial e SST com segurança,
          organização e tranquilidade.
        </p>

        <p className="text-white/80 text-lg mb-12 leading-relaxed">
          Atuamos de forma consultiva, preventiva e estratégica, reduzindo
          riscos trabalhistas e garantindo conformidade com a legislação
          vigente.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#0E2A45] rounded-2xl p-6">
            <ShieldCheck className="w-8 h-8 text-accent mb-4" />
            <h4 className="font-semibold text-white mb-2">
              Conformidade Legal
            </h4>
            <p className="text-white/70 text-sm">
              Garantimos que sua empresa esteja alinhada às exigências legais
              do eSocial e normas de SST.
            </p>
          </div>

          <div className="bg-[#0E2A45] rounded-2xl p-6">
            <FileText className="w-8 h-8 text-accent mb-4" />
            <h4 className="font-semibold text-white mb-2">
              Documentação Completa
            </h4>
            <p className="text-white/70 text-sm">
              Gestão de laudos, eventos e obrigações periódicas com total
              organização.
            </p>
          </div>

          <div className="bg-[#0E2A45] rounded-2xl p-6">
            <Users className="w-8 h-8 text-accent mb-4" />
            <h4 className="font-semibold text-white mb-2">
              Atendimento Consultivo
            </h4>
            <p className="text-white/70 text-sm">
              Suporte próximo e humanizado para orientar sua empresa em cada
              etapa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
