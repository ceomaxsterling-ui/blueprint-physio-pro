import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Equipe", href: "#equipe" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "glass shadow-2xl border-b border-border py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
            <span className="text-accent font-serif font-bold text-xl leading-none italic">F</span>
          </div>
          <span className="text-xl font-serif tracking-wide text-foreground">
            Fisio<span className="text-accent italic">Elite</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-[13px] font-medium tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contato")}
            className="flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-5 py-2.5 rounded-2xl font-medium text-[13px] tracking-wide uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-500"
          >
            Agendar
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border"
          >
            <nav className="container mx-auto py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-left py-3 px-4 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm tracking-wide uppercase rounded-xl hover:bg-muted/50"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contato")}
                className="mt-4 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3.5 rounded-2xl font-medium tracking-wide uppercase text-sm"
              >
                Agendar Consulta
                <ArrowRight className="w-4 h-4" />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
