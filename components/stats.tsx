"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 2500, suffix: "+", label: "Clientes Atendidos" },
  { value: 15000, suffix: "+", label: "Chamados Resolvidos" },
  { value: 99, suffix: "%", label: "Satisfação dos Clientes" },
  { value: 10, suffix: "+", label: "Anos de Experiência" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref}>
      <span
        className="text-4xl font-bold text-foreground md:text-5xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {count.toLocaleString("pt-BR")}
        <span className="text-primary">{suffix}</span>
      </span>
    </div>
  )
}

export function Stats() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
