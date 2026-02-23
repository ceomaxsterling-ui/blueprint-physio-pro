import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import teamCamila from "@/assets/team-camila.jpg";
import teamRafael from "@/assets/team-rafael.jpg";
import teamJuliana from "@/assets/team-juliana.jpg";
import teamAndre from "@/assets/team-andre.jpg";

const team = [
  {
    name: "Dra. Camila Ferreira",
    role: "Fisioterapeuta Ortopédica",
    bio: "Especialista em dores crônicas e reabilitação musculoesquelética com mais de 12 anos de experiência clínica.",
    photo: teamCamila,
  },
  {
    name: "Dr. Rafael Souza",
    role: "Reabilitação Esportiva",
    bio: "Formado pela USP com especialização em medicina esportiva. Atende atletas amadores e profissionais.",
    photo: teamRafael,
  },
  {
    name: "Dra. Juliana Costa",
    role: "RPG e Pilates Terapêutico",
    bio: "Pioneira em integração de RPG com pilates clínico. Pós-graduada em posturologia avançada.",
    photo: teamJuliana,
  },
  {
    name: "Dr. André Oliveira",
    role: "Fisioterapia Geriátrica",
    bio: "Dedicado ao cuidado da terceira idade, com foco em mobilidade funcional e prevenção de quedas.",
    photo: teamAndre,
  },
];

const TeamSection = () => (
  <section id="equipe" className="section-padding bg-background">
    <div className="container mx-auto">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest mb-4 block">
          Nossa Equipe
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
          Especialistas com{" "}
          <span className="text-accent">Paixão e Conhecimento</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Profissionais dedicados que unem ciência e cuidado humano em cada
          atendimento.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m, i) => (
          <AnimatedSection key={m.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group text-center rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={m.photo}
                  alt={`Foto de ${m.name}`}
                  className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6 -mt-8 relative z-10">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{m.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{m.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{m.bio}</p>
                <button className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors" aria-label={`LinkedIn de ${m.name}`}>
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
