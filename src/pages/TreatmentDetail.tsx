import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight, Clock, Star, ChevronDown, ChevronUp } from "lucide-react";
import { getTreatmentBySlug } from "@/data/treatments";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const TreatmentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const treatment = getTreatmentBySlug(slug || "");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-bold text-foreground mb-4">Tratamento não encontrado</h1>
          <button onClick={() => navigate("/")} className="text-accent font-medium hover:underline">
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  const Icon = treatment.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Início
          </motion.button>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
                Tratamento Especializado
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-5"
            >
              {treatment.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-primary-foreground/75 leading-relaxed"
            >
              {treatment.heroDescription}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest mb-3 block">Benefícios</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              Por que escolher este tratamento?
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {treatment.benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">{b}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest mb-3 block">Como Funciona</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              Seu caminho para a <span className="text-accent">recuperação</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {treatment.process.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-serif font-bold text-lg flex-shrink-0">
                    {p.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-3 block">Transformações</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold">
              Histórias reais de <span className="text-secondary">recuperação</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {treatment.transformations.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/60 text-sm mb-2">
                    <span className="font-semibold text-primary-foreground">{t.name}</span> · {t.age}
                  </p>
                  <p className="text-sm text-primary-foreground/70 mb-3">
                    <span className="font-medium text-secondary">Condição:</span> {t.condition}
                  </p>
                  <p className="text-primary-foreground/90 font-medium flex-1 mb-4">{t.result}</p>
                  <div className="flex items-center gap-2 text-xs text-primary-foreground/50">
                    <Clock className="w-3.5 h-3.5" />
                    Tempo de tratamento: {t.duration}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest mb-3 block">Dúvidas Frequentes</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              Perguntas sobre o tratamento
            </h2>
          </AnimatedSection>

          <div className="space-y-3">
            {treatment.faq.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-5 rounded-xl bg-card border border-border hover:border-accent/40 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-foreground">{f.question}</h3>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                  </div>
                  {openFaq === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-muted-foreground leading-relaxed"
                    >
                      {f.answer}
                    </motion.p>
                  )}
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto text-center max-w-2xl">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Pronto para iniciar seu tratamento?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Agende sua avaliação gratuita e dê o primeiro passo para uma vida sem dor.
            </p>
            <button
              onClick={() => navigate("/#contato")}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-xl"
            >
              Agende Sua Avaliação Gratuita
              <ArrowRight className="w-5 h-5" />
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetail;
