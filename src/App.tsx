import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Demo } from '@/components/sections/Demo'
import { Architecture } from '@/components/sections/Architecture'
import { GetStarted } from '@/components/sections/GetStarted'
import { FAQ } from '@/components/sections/FAQ'
import { TechStrip } from '@/components/sections/TechStrip'
import { CTA } from '@/components/sections/CTA'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Architecture />
        <GetStarted />
        <FAQ />
        <TechStrip />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
