import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Maria Clara Santos",
    role: "Empresária, 42 anos",
    text: "Após meses de dor nas costas, encontrei na FisioElite a solução definitiva. Em poucas sessões, já senti uma melhora incrível. A equipe é acolhedora e extremamente competente.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo Lima",
    role: "Atleta Amador, 35 anos",
    text: "Sofri uma lesão no joelho durante uma maratona e pensei que demoraria meses para me recuperar. O programa de reabilitação esportiva da FisioElite me colocou de volta aos treinos em tempo recorde.",
    rating: 5,
  },
  {
    name: "Ana Beatriz Oliveira",
    role: "Professora, 58 anos",
    text: "A fisioterapia geriátrica transformou minha qualidade de vida. Recuperei meu equilíbrio, minha confiança ao caminhar e voltei a fazer atividades que havia abandonado. Sou muito grata!",
    rating: 5,
  },
  {
    name: "Ricardo Mendes",
    role: "Desenvolvedor, 29 anos",
    text: "Anos de trabalho no computador me causaram dores terríveis no pescoço e ombros. O tratamento com RPG da FisioElite resolveu completamente. Recomendo a todos!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="resultados" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4">
            Histórias Reais de{" "}
            <span className="text-secondary">Recuperação</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Transformando vidas, um movimento de cada vez.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
              <Quote className="w-12 h-12 text-secondary/40 mb-6" />
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-primary-foreground/90 font-light italic">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-semibold text-lg">{t.name}</p>
                  <p className="text-primary-foreground/60 text-sm">{t.role}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-secondary w-8" : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
