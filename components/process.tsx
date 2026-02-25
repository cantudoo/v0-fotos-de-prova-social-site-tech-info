import { Search, FileText, Settings, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico",
    description:
      "Analisamos sua infraestrutura atual, identificamos pontos de melhoria e mapeamos suas necessidades tecnológicas.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Planejamento",
    description:
      "Elaboramos um plano de ação detalhado com cronograma, investimento e as melhores soluções para o seu cenário.",
  },
  {
    icon: Settings,
    step: "03",
    title: "Implementação",
    description:
      "Executamos o projeto com agilidade e precisão, garantindo mínimo impacto nas operações do dia a dia.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Acompanhamento",
    description:
      "Monitoramos continuamente os resultados, oferecemos suporte dedicado e realizamos ajustes conforme necessário.",
  },
]

export function Process() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary uppercase">
            Como Trabalhamos
          </span>
          <h2
            className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Nosso processo de trabalho
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Um método comprovado para entregar soluções de tecnologia com excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.step} className="group relative">
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-full hidden h-px w-full bg-gradient-to-r from-primary/30 to-transparent lg:block" />
              )}
              <div className="relative rounded-2xl border border-border/50 bg-card/50 p-7 transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover-glow">
                <span
                  className="mb-4 block text-4xl font-black text-primary/15"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.step}
                </span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3
                  className="mb-2 text-lg font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
