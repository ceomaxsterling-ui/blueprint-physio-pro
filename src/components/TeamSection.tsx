import { Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const team = [
  {
    name: "Dra. Camila Ferreira",
    role: "Fisioterapeuta Ortopédica",
    bio: "Especialista em dores crônicas e reabilitação musculoesquelética com mais de 12 anos de experiência clínica.",
    initials: "CF",
  },
  {
    name: "Dr. Rafael Souza",
    role: "Reabilitação Esportiva",
    bio: "Formado pela USP com especialização em medicina esportiva. Atende atletas amadores e profissionais.",
    initials: "RS",
  },
  {
    name: "Dra. Juliana Costa",
    role: "RPG e Pilates Terapêutico",
    bio: "Pioneira em integração de RPG com pilates clínico. Pós-graduada em posturologia avançada.",
    initials: "JC",
  },
  {
    name: "Dr. André Oliveira",
    role: "Fisioterapia Geriátrica",
    bio: "Dedicado ao cuidado da terceira idade, com foco em mobilidade funcional e prevenção de quedas.",
    initials: "AO",
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
            <div className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-xl">
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 text-2xl font-serif font-bold text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                {m.initials}
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{m.name}</h3>
              <p className="text-accent text-sm font-medium mb-3">{m.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{m.bio}</p>
              <button className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors" aria-label={`LinkedIn de ${m.name}`}>
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
