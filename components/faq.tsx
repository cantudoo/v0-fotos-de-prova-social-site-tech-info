"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Quais tipos de empresas a CANTUDO TECH INFO atende?",
    answer:
      "Atendemos empresas de todos os portes, desde microempreendedores até grandes corporações. Também oferecemos serviços para pessoas físicas que precisam de suporte técnico ou manutenção de equipamentos.",
  },
  {
    question: "Qual o prazo para atendimento de chamados técnicos?",
    answer:
      "Nosso tempo de resposta é de até 2 horas para chamados urgentes e até 24 horas para chamados de prioridade normal. Contamos com uma equipe de plantão para emergências fora do horário comercial.",
  },
  {
    question: "Vocês oferecem contrato de manutenção preventiva?",
    answer:
      "Sim! Oferecemos planos de manutenção preventiva mensais, trimestrais e semestrais, com visitas técnicas programadas, monitoramento remoto e suporte prioritário.",
  },
  {
    question: "É possível contratar serviços avulsos?",
    answer:
      "Claro! Além dos contratos, oferecemos serviços avulsos como formatação, instalação de softwares, configuração de rede, consultoria e reparos em geral.",
  },
  {
    question: "Vocês trabalham com desenvolvimento de sistemas personalizados?",
    answer:
      "Sim, desenvolvemos sistemas sob medida para as necessidades do seu negócio, incluindo aplicações web, mobile, integrações com APIs, automação de processos e muito mais.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary uppercase">
            Dúvidas Frequentes
          </span>
          <h2
            className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Perguntas Frequentes
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-xl border border-border/50 bg-card/50 transition-all hover:border-primary/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-sm font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
