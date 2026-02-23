import { Download, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function CTA() {
  return (
    <section id="download" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-foreground text-background rounded-3xl md:rounded-4xl p-8 sm:p-10 md:p-24 text-center relative overflow-hidden shadow-2xl">
      <Image src={"/abstract-1.jpg"} alt='Background image' fill className="object-cover rounded-3xl opacity-60"/>
          {/* Decorative glow inside card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-background/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-balance">
              Take back control of your business.
            </h2>
            <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Join Nigerian gaming store owners using Yuno to eliminate revenue leakage and optimize operations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                <Download size={22} />
                Get Yuno Now
              </a>
              <a
                href="/support"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-8 py-4 bg-transparent text-foreground border border-foreground rounded-full font-bold text-lg hover:bg-foreground/10 transition-colors duration-300"
              >
                Contact Sales
                <ChevronRight size={20} />
              </a>
            </div>
            <p className="mt-8 text-sm opacity-60 font-medium tracking-wide">
              AVAILABLE ON IOS AND ANDROID. WORKS OFFLINE.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
