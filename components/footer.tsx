import { Monitor, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
]

const serviceLinks = [
  "Manutenção de Computadores",
  "Conserto de Smartphones",
  "Desenvolvimento de Software",
  "Infraestrutura de TI",
  "Venda de Equipamentos",
  "Redes e Conectividade",
  "Segurança Digital",
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#inicio" className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <Monitor className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-wider text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  CANTUDO
                </span>
                <span className="text-[10px] tracking-[0.2em] text-primary font-medium">
                  TECH INFO
                </span>
              </div>
            </a>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Soluções tecnológicas completas para empresas e pessoas físicas. Inovação, qualidade e compromisso com resultados.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:cantudotechinfo@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                cantudotechinfo@gmail.com
              </a>
              <a href="tel:+5521988188774" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                (21) 98818-8774
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Ipanema - Rio de Janeiro, Brasil
              </span>
              <span className="mt-2 text-xs text-muted-foreground/70">
                CNPJ: 59.506.112/0001-61
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold text-foreground uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
              Links Rápidos
            </h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold text-foreground uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
              Serviços
            </h3>
            <nav className="flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <a
                  key={service}
                  href="#servicos"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold text-foreground uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
              Redes Sociais
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Instagram
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Facebook
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://wa.me/5521988188774"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} CANTUDO TECH INFO. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            CNPJ: 59.506.112/0001-61
          </p>
          <p className="text-xs text-muted-foreground">
            Ipanema - Rio de Janeiro, RJ
          </p>
        </div>
      </div>
    </footer>
  )
}
