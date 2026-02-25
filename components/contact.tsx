"use client"

import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "(21) 98818-8774",
    href: "tel:+5521988188774",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "cantudotechinfo@gmail.com",
    href: "mailto:cantudotechinfo@gmail.com",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Ipanema - Rio de Janeiro, Brasil",
    href: "https://www.google.com/maps/search/Ipanema+Rio+de+Janeiro+Brasil",
  },
  {
    icon: Clock,
    label: "Horário de Atendimento",
    value: "Seg - Sex: 08h às 18h",
    href: "#",
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary uppercase">
            Contato
          </span>
          <h2
            className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Vamos conversar sobre o seu projeto
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Entre em contato conosco e descubra como podemos transformar a tecnologia da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-5 transition-all hover:border-primary/30 hover:bg-card/80 hover-glow"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/15">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            <a
              href="https://wa.me/5521988188774"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition-all hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/20"
            >
              <MessageCircle className="h-5 w-5" />
              Fale pelo WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border/50 bg-card/50 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                    <Send className="h-7 w-7 text-primary" />
                  </div>
                  <h3
                    className="mb-2 text-xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Mensagem Enviada!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-primary hover:underline"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-medium text-muted-foreground uppercase tracking-wider"
                      >
                        Nome Completo
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Seu nome"
                        className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-medium text-muted-foreground uppercase tracking-wider"
                      >
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-medium text-muted-foreground uppercase tracking-wider"
                    >
                      Telefone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(21) 98818-8774"
                      className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs font-medium text-muted-foreground uppercase tracking-wider"
                    >
                      Assunto
                    </label>
                    <select
                      id="subject"
                      className="w-full rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="manutencao">Manutenção de Computadores</option>
                      <option value="software">Desenvolvimento de Software</option>
                      <option value="infra">Infraestrutura de TI</option>
                      <option value="equipamentos">Venda de Equipamentos</option>
                      <option value="redes">Redes e Conectividade</option>
                      <option value="seguranca">Segurança Digital</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium text-muted-foreground uppercase tracking-wider"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Conte-nos sobre o seu projeto ou necessidade..."
                      className="w-full resize-none rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20"
                  >
                    <Send className="h-4 w-4" />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
