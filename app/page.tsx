import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Brands } from "@/components/brands"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { SocialProofGallery } from "@/components/social-proof-gallery"
import { Testimonials } from "@/components/testimonials"
import { CTABanner } from "@/components/cta-banner"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Process />
      <About />
      <Stats />
      <SocialProofGallery />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </main>
  )
}
