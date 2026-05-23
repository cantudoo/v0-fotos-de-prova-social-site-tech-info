"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import Script from "next/script"

const faqCategories = [
  {
    title: "Manutenção de Computadores e Celulares",
    items: [
      {
        question: "Meu computador está muito lento ou travando. O que pode ser?",
        answer:
          "A lentidão pode ser causada por excesso de programas, vírus ou hardware desatualizado. Realizamos um diagnóstico completo para otimizar seu sistema ou realizar o upgrade necessário.",
      },
      {
        question: "O que fazer se meu celular ou notebook não liga?",
        answer:
          "Não force o aparelho. O problema pode estar na bateria ou na placa-mãe. Traga para a CANTUDO TECH INFO para um diagnóstico seguro e profissional.",
      },
      {
        question: "Como saber se preciso trocar a tela do meu celular?",
        answer:
          "Se o vidro estiver trincado, o touch falhando ou houver manchas no display, a troca é recomendada para evitar danos maiores aos componentes internos.",
      },
    ],
  },
  {
    title: "Segurança Eletrônica (CFTV)",
    items: [
      {
        question: "Consigo ver as câmeras de segurança pelo meu celular?",
        answer:
          "Sim! Configuramos o acesso remoto para que você monitore seu ambiente em tempo real, de qualquer lugar, pelo seu smartphone.",
      },
      {
        question: "Com que frequência devo fazer manutenção no meu sistema de câmeras?",
        answer:
          "Recomendamos uma revisão a cada seis meses para garantir a limpeza das lentes e a integridade das gravações.",
      },
      {
        question: "O que fazer se meu gravador parar de gravar as imagens?",
        answer:
          "Isso pode indicar falha no disco rígido ou configuração. Nós realizamos a manutenção do sistema para garantir que suas imagens estejam sempre seguras.",
      },
    ],
  },
  {
    title: "Automação Comercial (PDV e ERP)",
    items: [
      {
        question: "O que é um sistema PDV e por que minha loja precisa de um?",
        answer:
          "O PDV agiliza suas vendas, controla o estoque automaticamente e organiza seu fluxo de caixa, evitando erros manuais.",
      },
      {
        question: "Como um sistema ERP ajuda minha empresa?",
        answer:
          "O ERP integra todas as áreas da sua empresa (financeiro, estoque, contabilidade), eliminando a burocracia e dando total controle sobre o negócio.",
      },
      {
        question: "Meu sistema está travando. Vocês resolvem?",
        answer:
          "Sim. Analisamos gargalos de software e rede para que seu sistema de gestão volte a rodar com máxima velocidade.",
      },
    ],
  },
]

// Gerar o Schema JSON-LD para FAQPage
const generateFAQSchema = () => {
  const allQuestions = faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  )

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestions,
  }
}

const whatsappLink = "https://wa.me/5521988188774?text=Ol%C3%A1%2C%20vi%20o%20FAQ%20no%20site%20e%20preciso%20de%20suporte."

export function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({
    "Manutenção de Computadores e Celulares": 0,
    "Segurança Eletrônica (CFTV)": null,
    "Automação Comercial (PDV e ERP)": null,
  })

  const toggleItem = (categoryTitle: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [categoryTitle]: prev[categoryTitle] === index ? null : index,
    }))
  }

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-4xl px-6">
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
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Tire suas principais dúvidas sobre nossos serviços. Não encontrou o que procura? Entre em contato conosco.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {faqCategories.map((category) => (
            <div key={category.title}>
              <h2
                className="mb-6 text-xl font-bold text-foreground md:text-2xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {category.title}
              </h2>

              <div className="flex flex-col gap-3">
                {category.items.map((faq, index) => (
                  <div
                    key={faq.question}
                    className="rounded-xl border border-border/50 bg-card/50 transition-all hover:border-primary/20"
                  >
                    <button
                      onClick={() => toggleItem(category.title, index)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                      aria-expanded={openItems[category.title] === index}
                    >
                      <h3 className="pr-4 text-sm font-semibold text-foreground md:text-base">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          openItems[category.title] === index ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openItems[category.title] === index ? "max-h-40 pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                <MessageCircle className="h-4 w-4" />
                Precisa de suporte especializado? Fale conosco no WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
