import { ArrowRight, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const posts = [
  {
    title: "5 Exercícios para Aliviar Dores na Coluna em Casa",
    summary: "Descubra exercícios simples e eficazes que você pode fazer diariamente para reduzir dores na coluna e melhorar sua postura.",
    category: "Dores na Coluna",
    date: "18 Fev 2026",
    readTime: "5 min",
  },
  {
    title: "Como a Fisioterapia Esportiva Acelera Sua Recuperação",
    summary: "Entenda os protocolos modernos de reabilitação esportiva e como eles podem reduzir seu tempo de recuperação pela metade.",
    category: "Reabilitação Esportiva",
    date: "12 Fev 2026",
    readTime: "7 min",
  },
  {
    title: "RPG: O Que É e Para Quem É Indicado?",
    summary: "A Reeducação Postural Global é uma das técnicas mais procuradas. Saiba se ela é a solução ideal para o seu caso.",
    category: "Prevenção",
    date: "05 Fev 2026",
    readTime: "4 min",
  },
];

const BlogSection = () => (
  <section id="blog" className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest mb-4 block">
          Blog
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
          Conhecimento para{" "}
          <span className="text-accent">Sua Saúde</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Artigos escritos por nossos especialistas para ajudar você a viver
          melhor.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <article className="group rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-xl overflow-hidden h-full flex flex-col">
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                <span className="text-xs font-semibold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.readTime}</span>
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-3 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{p.summary}</p>
                <button className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all">
                  Ler Mais <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
