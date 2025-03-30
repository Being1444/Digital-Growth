import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Services } from "@/components/services"
import { SplashScreen } from "@/components/splash-screen"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { ClientsLogos } from "@/components/clients-logos"
import { StatsCounter } from "@/components/stats-counter"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Hero />
      <ClientsLogos />
      <StatsCounter />
      <Features />
      <Experience />
      <Services />
      <Testimonials />
      <CTASection />
    </>
  )
}
