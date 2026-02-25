"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "CEO, Digital Solutions",
    content:
      "A CANTUDO TECH INFO transformou completamente a infraestrutura de TI da nossa empresa. O suporte é rápido, eficiente e a equipe sempre vai além do esperado.",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Diretora, Loja Virtual FC",
    content:
      "Excelente atendimento! Desenvolveram um sistema sob medida para o nosso e-commerce que aumentou nossas vendas em 40%. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Marcos Oliveira",
    role: "Gerente de TI, Grupo MO",
    content:
      "Parceria de longa data. A equipe é extremamente competente e sempre disponível. A migração para a nuvem foi feita sem nenhuma interrupção nos serviços.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary uppercase">
            Depoimentos
          </span>
          <h2
            className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A satisfação dos nossos clientes é o que nos motiva a entregar sempre o melhor.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-7 transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover-glow"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.content}"`}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
