import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest mb-4 block">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
            Pronto para Começar Sua{" "}
            <span className="text-accent">Recuperação?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fale conosco e dê o primeiro passo rumo à sua saúde e bem-estar.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nome</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Telefone / WhatsApp</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground resize-none"
                  placeholder="Descreva brevemente o que você precisa..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
              {submitted && (
                <p className="text-center text-accent font-medium animate-in fade-in">
                  ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              )}
            </form>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Telefone", value: "(11) 3456-7890", href: "tel:+551134567890" },
                { icon: MessageCircle, label: "WhatsApp", value: "(11) 99876-5432", href: "https://wa.me/5511998765432" },
                { icon: Mail, label: "Email", value: "contato@fisioelite.com.br", href: "mailto:contato@fisioelite.com.br" },
                { icon: MapPin, label: "Endereço", value: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP", href: "#" },
                { icon: Clock, label: "Horário", value: "Seg–Sex: 7h–20h | Sáb: 8h–14h", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <p className="text-sm">Google Maps — Av. Paulista, 1000</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
