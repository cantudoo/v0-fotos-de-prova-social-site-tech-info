import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Equipe altamente qualificada e certificada",
  "Atendimento personalizado para cada cliente",
  "Tecnologia de ponta e metodologias ágeis",
  "Soluções escaláveis e sob medida",
  "Suporte contínuo e acompanhamento pós-venda",
  "Parcerias com as maiores marcas do mercado",
]

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -left-40 top-1/2 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50">
              <Image
                src="/images/about.jpg"
                alt="Equipe CANTUDO TECH INFO trabalhando"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl border border-primary/20 bg-card p-5 glow-border">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                    +10
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Anos de</p>
                  <p className="text-xs text-muted-foreground">Experiência</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary uppercase">
              Quem somos
            </span>
            <h2
              className="mb-6 text-3xl font-bold text-foreground md:text-4xl text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Transformamos desafios tecnológicos em soluções inteligentes
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              A CANTUDO TECH INFO nasceu com o propósito de democratizar o acesso
              à tecnologia de qualidade. Somos especializados em oferecer soluções
              completas e personalizadas que atendem desde pequenas empresas até
              grandes corporações, sempre com foco em eficiência, segurança e inovação.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
