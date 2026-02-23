import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <span className="text-2xl font-serif font-bold">
            Fisio<span className="text-secondary">Elite</span>
          </span>
          <p className="mt-3 text-primary-foreground/60 text-sm leading-relaxed">
            Referência em fisioterapia de elite. Cuidado personalizado para sua
            recuperação e bem-estar.
          </p>
        </div>
        <div>
          <h4 className="font-serif font-semibold mb-4">Links Rápidos</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            {["Sobre Nós", "Tratamentos", "Resultados", "Equipe", "Blog", "Contato"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "")}`} className="hover:text-secondary transition-colors">{l}</a>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-serif font-semibold mb-4">Tratamentos</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            {["Fisioterapia Ortopédica", "Reabilitação Esportiva", "RPG", "Acupuntura", "Pilates Terapêutico"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
        <p>© 2026 FisioElite. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1">
          Feito com <Heart className="w-4 h-4 text-secondary fill-secondary" /> para sua saúde
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
