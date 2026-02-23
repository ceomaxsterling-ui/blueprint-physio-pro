import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Clock, CheckCircle2 } from "lucide-react";
import heroPortrait from "@/assets/hero-physio-portrait.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 text-secondary text-xs sm:text-sm font-medium">
                <Award className="w-3.5 h-3.5" />
                Referência em Fisioterapia
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 text-secondary text-xs sm:text-sm font-medium">
                <Clock className="w-3.5 h-3.5" />
                Atendimento Personalizado
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-serif font-bold text-primary-foreground leading-[1.15] mb-5 sm:mb-6"
            >
              Recupere Sua Vida{" "}
              <span className="text-secondary">Sem Dor.</span>
              <br className="hidden sm:block" />
              {" "}Movimente-se Livremente.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-primary-foreground/70 mb-6 sm:mb-8 leading-relaxed max-w-xl"
            >
              Nossa equipe de fisioterapeutas especializados utiliza as mais
              avançadas técnicas para aliviar sua dor e restaurar sua mobilidade,
              permitindo que você volte a fazer o que ama.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 sm:mb-10"
            >
              <span className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                +15 anos de experiência
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                +5.000 pacientes recuperados
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#contato")}
                className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-all shadow-xl"
              >
                Agende Sua Avaliação Gratuita
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#tratamentos")}
                className="flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-foreground/10 transition-all"
              >
                Conheça Nossos Tratamentos
              </motion.button>
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-[22rem] xl:w-[26rem]">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-secondary/20">
                <img
                  src={heroPortrait}
                  alt="Fisioterapeuta profissional sorrindo de braços cruzados"
                  className="w-full h-auto object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Floating badge top-right */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-3 -right-3 sm:top-2 sm:right-[-1rem] bg-card/90 backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-lg border border-border/50"
              >
                <p className="text-sm font-serif font-bold text-accent">Excelência</p>
                <p className="text-xs text-muted-foreground">em Reabilitação</p>
              </motion.div>

              {/* Floating badge bottom-right */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -bottom-3 -right-3 sm:bottom-4 sm:right-[-1rem] bg-card/90 backdrop-blur-sm rounded-lg px-4 py-2.5 shadow-lg border border-border/50 flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-secondary" />
                <div>
                  <p className="text-sm font-bold text-foreground">98%</p>
                  <p className="text-xs text-muted-foreground">Satisfação</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
