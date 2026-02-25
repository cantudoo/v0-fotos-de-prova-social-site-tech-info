"use client"

import Image from "next/image"
import { useState } from "react"
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    src: "/images/social-proof-1.jpg",
    alt: "Bancada profissional de manutencao de computadores com ferramentas e placa-mae",
    caption: "Manutencao especializada de computadores e notebooks",
    category: "Manutencao",
  },
  {
    src: "/images/social-proof-2.jpg",
    alt: "Sistema de cameras de seguranca CFTV com monitoramento em multiplas telas",
    caption: "Instalacao e monitoramento de CFTV profissional",
    category: "CFTV",
  },
  {
    src: "/images/social-proof-3.jpg",
    alt: "Sistema de automacao comercial com terminal PDV e leitor de codigo de barras",
    caption: "Automacao comercial com sistemas PDV completos",
    category: "Automacao Comercial",
  },
  {
    src: "/images/social-proof-4.jpg",
    alt: "Rack de rede com cabeamento estruturado e switches profissionais",
    caption: "Redes corporativas com cabeamento estruturado",
    category: "Redes",
  },
  {
    src: "/images/social-proof-5.jpg",
    alt: "Video porteiro eletronico instalado em entrada de edificio",
    caption: "Porteiro eletronico e controle de acesso",
    category: "Porteiro Eletronico",
  },
  {
    src: "/images/social-proof-6.jpg",
    alt: "Estacao de desenvolvimento de software com codigo e dashboards",
    caption: "Desenvolvimento de software e sistemas sob medida",
    category: "Desenvolvimento",
  },
]

export function SocialProofGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  function openLightbox(index: number) {
    setActiveIndex(index)
    setLightboxOpen(true)
  }

  function closeLightbox() {
    setLightboxOpen(false)
  }

  function goNext() {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length)
  }

  function goPrev() {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section id="galeria" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary uppercase">
            Nosso Trabalho
          </span>
          <h2
            className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Veja nossos resultados na pratica
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Confira algumas fotos do nosso dia a dia, da nossa equipe em acao e dos
            projetos que entregamos com excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <button
              key={item.src}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-card/50 transition-all duration-500 hover:border-primary/30 hover-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="mb-1 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                  {item.category}
                </span>
                <p className="text-sm font-semibold text-foreground">
                  {item.caption}
                </p>
              </div>

              <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/60 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Camera className="h-4 w-4 text-foreground" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5">
            <Camera className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {galleryItems.length} projetos em destaque
            </span>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotos"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 text-foreground transition-colors hover:bg-card hover:border-primary/30"
            aria-label="Fechar galeria"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/80 text-foreground transition-colors hover:bg-card hover:border-primary/30 md:left-8"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="relative mx-16 aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-2xl border border-border/50"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryItems[activeIndex].src}
              alt={galleryItems[activeIndex].alt}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <span className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                {galleryItems[activeIndex].category}
              </span>
              <p className="text-base font-semibold text-foreground">
                {galleryItems[activeIndex].caption}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/80 text-foreground transition-colors hover:bg-card hover:border-primary/30 md:right-8"
            aria-label="Proxima foto"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-6 flex gap-2">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveIndex(i)
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === activeIndex
                    ? "w-6 bg-primary"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Ir para foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
