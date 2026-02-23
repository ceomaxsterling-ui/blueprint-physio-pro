import { Bone, Activity, Repeat, Leaf, PersonStanding, Dumbbell, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const treatments = [
  { icon: Bone, title: "Fisioterapia Ortopédica", desc: "Tratamento especializado para dores articulares, musculares e ósseas, restaurando a função e aliviando o desconforto." },
  { icon: Activity, title: "Reabilitação Esportiva", desc: "Recuperação rápida e segura de lesões esportivas com protocolos avançados para retorno à atividade física." },
  { icon: Repeat, title: "RPG — Reeducação Postural", desc: "Técnica global que corrige desvios posturais e alivia dores crônicas através de posturas terapêuticas." },
  { icon: Leaf, title: "Acupuntura", desc: "Método milenar integrado à fisioterapia moderna para alívio de dores, estresse e recuperação funcional." },
  { icon: PersonStanding, title: "Fisioterapia Geriátrica", desc: "Cuidados especializados para melhorar mobilidade, equilíbrio e qualidade de vida na terceira idade." },
  { icon: Dumbbell, title: "Pilates Terapêutico", desc: "Exercícios controlados que fortalecem, alongam e reabilitam o corpo de forma inteligente e segura." },
];

const TreatmentsSection = () => (
  <section id="tratamentos" className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold text-accent uppercase tracking-widest mb-4 block">
          Nossos Tratamentos
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
          Tratamentos Especializados para Sua{" "}
          <span className="text-accent">Saúde e Bem-Estar</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Cada tratamento é personalizado para suas necessidades, combinando
          técnicas avançadas e cuidado humanizado.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((t, i) => (
          <AnimatedSection key={t.title} delay={i * 0.08}>
            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <t.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-foreground mb-3">{t.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1 mb-5">{t.desc}</p>
              <button className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all">
                Saiba Mais <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TreatmentsSection;
