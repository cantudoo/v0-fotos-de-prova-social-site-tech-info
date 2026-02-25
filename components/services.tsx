"use client"

import {
  Monitor,
  Code2,
  Server,
  ShoppingBag,
  Wifi,
  ShieldCheck,
  Smartphone,
} from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Manutenção de Computadores",
    description:
      "Diagnóstico, reparo e manutenção preventiva de desktops, notebooks e periféricos. Formatação, upgrade de hardware e recuperação de dados.",
  },
  {
    icon: Smartphone,
    title: "Conserto de Smartphones",
    description:
      "Reparo de telas, troca de baterias, conectores, câmeras e placas. Atendemos todas as marcas: iPhone, Samsung, Motorola, Xiaomi e mais.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento de Software",
    description:
      "Criação de sistemas personalizados, aplicativos web e mobile, automação de processos e integração de sistemas empresariais.",
  },
  {
    icon: Server,
    title: "Infraestrutura de TI",
    description:
      "Montagem e configuração de servidores, redes corporativas, cloud computing, backup e virtualização de ambientes.",
  },
  {
    icon: ShoppingBag,
    title: "Venda de Equipamentos",
    description:
      "Computadores, notebooks, servidores, periféricos e acessórios das melhores marcas. Consultoria para a melhor escolha.",
  },
  {
    icon: Wifi,
    title: "Redes e Conectividade",
    description:
      "Projeto e implementação de redes cabeadas e Wi-Fi, configuração de roteadores, switches e firewalls corporativos.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Digital",
    description:
      "Proteção contra ameaças cibernéticas, antivírus corporativo, monitoramento de rede, backup em nuvem e políticas de segurança.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary uppercase">
            O que fazemos
          </span>
          <h2
            className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Serviços que impulsionam o seu negócio
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Oferecemos um portfólio completo de soluções tecnológicas para atender
            todas as necessidades da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-7 transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover-glow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-primary/3 transition-all group-hover:bg-primary/5" />

              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-all group-hover:bg-primary/15 group-hover:border-primary/30">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3
                  className="mb-3 text-lg font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
