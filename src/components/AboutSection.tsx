import { Heart, Cpu, Users, Target } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const differentials = [
  { icon: Cpu, title: "Tecnologia de Ponta", desc: "Equipamentos de última geração para diagnósticos precisos e tratamentos eficazes." },
  { icon: Users, title: "Equipe Multidisciplinar", desc: "Profissionais especializados trabalhando em conjunto para sua recuperação completa." },
  { icon: Heart, title: "Abordagem Holística", desc: "Tratamento que considera o corpo e a mente, promovendo bem-estar integral." },
  { icon: Target, title: "Resultados Comprovados", desc: "Mais de 5.000 pacientes recuperados com protocolos baseados em evidências." },
];

const AboutSection = () => (
  <section id="sobre" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection direction="left">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest mb-4 block">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
            Cuidado Personalizado para Sua{" "}
            <span className="text-accent">Recuperação Duradoura</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Fundada com a missão de transformar vidas através da fisioterapia de
            excelência, a FisioElite combina ciência, tecnologia e cuidado
            humano em cada atendimento. Acreditamos que cada paciente é único e
            merece um plano de tratamento personalizado.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nosso compromisso vai além do alívio da dor — buscamos restaurar sua
            liberdade de movimento e qualidade de vida, com resultados que
            perduram.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {differentials.map((d, i) => (
            <AnimatedSection key={d.title} delay={i * 0.1} direction="right">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-xl group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <d.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
