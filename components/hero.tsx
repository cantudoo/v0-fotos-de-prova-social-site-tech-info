"use client"

import { ArrowRight, Shield, Zap, Clock } from "lucide-react"
import Image from "next/image"
import { Particles } from "./particles"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <Particles />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/8 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-xs font-medium text-primary tracking-wide">
              Tecnologia que transforma resultados
            </span>
          </div>

          <h1
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance animate-slide-up"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Soluções em{" "}
            <span className="text-gradient">Tecnologia</span>
            <br />
            para o seu negócio
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
            A CANTUDO TECH INFO oferece soluções completas em TI para empresas e
            pessoas físicas. Suporte técnico, infraestrutura, desenvolvimento de
            software e muito mais.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20"
            >
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary hover:border-primary/30"
            >
              Nossos Serviços
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          {[
            { icon: Shield, label: "Segurança Garantida", desc: "Proteção total dos seus dados" },
            { icon: Zap, label: "Atendimento Rápido", desc: "Resposta em até 2 horas" },
            { icon: Clock, label: "Suporte 24/7", desc: "Disponíveis quando precisar" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80 hover-glow"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
