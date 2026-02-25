"use client"

const brands = [
  "Microsoft",
  "HP",
  "Dell",
  "Lenovo",
  "Intel",
  "AMD",
  "Cisco",
  "Samsung",
]

export function Brands() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Trabalhamos com as maiores marcas do mercado
        </p>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="flex gap-12 overflow-hidden">
            <div className="flex shrink-0 animate-[scroll_20s_linear_infinite] gap-12">
              {[...brands, ...brands].map((brand, i) => (
                <div
                  key={`${brand}-${i}`}
                  className="flex h-12 shrink-0 items-center justify-center rounded-lg border border-border/30 bg-card/30 px-8"
                >
                  <span className="text-sm font-semibold tracking-wider text-muted-foreground/60">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
