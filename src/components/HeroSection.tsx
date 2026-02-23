import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-physio.jpg";

const stats = [
  { icon: Award, value: "+15", label: "Anos de Experiência" },
  { icon: Users, value: "+5.000", label: "Pacientes Recuperados" },
  { icon: Clock, value: "98%", label: "Taxa de Satisfação" },
];

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fisioterapeuta realizando tratamento em paciente em clínica moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      <div className="relative container mx-auto section-padding pt-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-accent/30">
              <Award className="w-4 h-4" />
              Referência em Fisioterapia de Elite
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6"
          >
            Recupere Sua Vida{" "}
            <span className="text-secondary">Sem Dor.</span>
            <br />
            Movimente-se Livremente.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-xl"
          >
            Nossa equipe de fisioterapeutas especializados utiliza as mais
            avançadas técnicas para aliviar sua dor e restaurar sua mobilidade,
            permitindo que você volte a fazer o que ama.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={() => scrollTo("#contato")}
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Agende Sua Avaliação Gratuita
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo("#tratamentos")}
              className="flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
            >
              Conheça Nossos Tratamentos
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center backdrop-blur-sm">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
