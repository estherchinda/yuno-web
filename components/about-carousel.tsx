'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reasons = [
  {
    title: 'Built for Nigerian Businesses',
    description: 'Yuno is designed specifically for the Nigerian gaming store ecosystem. We understand your challenges and build solutions that work in your context.',
  },
  {
    title: 'Offline-First Architecture',
    description: 'Works without internet. All data syncs automatically when connection returns. No downtime, no lost records.',
  },
  {
    title: 'Simple Onboarding',
    description: 'QR code-based staff onboarding. No passwords, no complex setups. Staff can join in seconds.',
  },
  {
    title: 'Actionable Insights',
    description: 'Daily reports delivered to your inbox with revenue breakdowns, staff performance, and anomaly detection.',
  }
]

export default function AboutCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative max-w-5xl mx-auto px-4 md:px-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-6 h-100">
          {reasons.map((reason, index) => (
            <div className="flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_50%]" key={index}>
              <div className="flex flex-col justify-between h-full bg-secondary/30 p-8 rounded-3xl border border-border group hover:bg-secondary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center shrink-0 font-bold text-xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={scrollPrev}
        className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-background border border-border rounded-full shadow-xl text-foreground hover:bg-foreground hover:text-background transition-colors z-10 hidden md:flex md:items-center md:justify-center"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-background border border-border rounded-full shadow-xl text-foreground hover:bg-foreground hover:text-background transition-colors z-10 hidden md:flex md:items-center md:justify-center"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-3 mt-10">
        {reasons.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-foreground' : 'bg-foreground/20'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
