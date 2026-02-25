import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2
          className="mb-6 text-3xl font-bold text-foreground md:text-5xl text-balance"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Pronto para levar sua empresa ao{" "}
          <span className="text-gradient">próximo nível</span>?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Agende uma consultoria gratuita e descubra como nossas soluções
          tecnológicas podem transformar o seu negócio.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
          >
            Agendar Consultoria Gratuita
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/5521988188774"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-8 py-4 text-sm font-bold text-foreground transition-all hover:bg-secondary hover:border-primary/30"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
