'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import YunoLogo from './yuno-logo'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/70 backdrop-blur-xl border border-border/50 z-50 md:rounded-full md:my-5 md:mx-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="Yuno Logo" width={60} height={60}/>
          <span className="text-2xl font-bold text-foreground tracking-tight">Yuno</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-sm md:text-lg font-medium text-foreground/80 hover:text-[#de0f3f] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm md:text-lg font-medium text-foreground/80 hover:text-[#de0f3f] transition-colors">
            About
          </Link>
          <Link href="/support" className="text-sm md:text-lg font-medium text-foreground/80 hover:text-[#de0f3f] transition-colors">
            Support
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/download"
            className="flex items-center gap-3 pl-4 pr-5 py-2 bg-foreground text-background rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div className="flex items-center  gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.65-.63 1.62.11 2.8.76 3.55 1.87-3.01 1.76-2.52 5.56.32 6.74-.75 1.84-1.6 3.48-2.6 4.19zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M3.1 2.553C2.424 3.007 2 3.868 2 5.03v14c0 1.164.425 2.025 1.1 2.478l10.74-10.72L3.1 2.553z"/>
                <path d="M14.6 11.533L4.19 1.143c.48-.256 1.05-.28 1.62-.05l12.44 7.15-3.65 3.29z"/>
                <path d="M18.25 8.24l3.22 1.85c1.07.62 1.07 1.62 0 2.24l-3.22 1.86-3.83-3.95 3.83-2z"/>
                <path d="M14.6 12.87l3.65 3.3-12.44 7.14c-.57.23-1.14.2-1.62-.05L14.6 12.87z"/>
              </svg>
            {/* <span>Download app</span> */}
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-secondary/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 absolute w-full shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            <Link
              href="/"
              className="text-foreground/80 hover:text-[#de0f3f] font-medium text-lg transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground/80 hover:text-[#de0f3f] font-medium text-lg transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/support"
              className="text-foreground/80 hover:text-[#de0f3f] font-medium text-lg transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Support
            </Link>
            <a
              href="#download"
              className="mt-4 flex items-center justify-center gap-3 px-6 py-3 bg-foreground text-background rounded-full font-bold transition shadow-lg hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-2 border-r border-background/20 pr-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.65-.63 1.62.11 2.8.76 3.55 1.87-3.01 1.76-2.52 5.56.32 6.74-.75 1.84-1.6 3.48-2.6 4.19zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3.1 2.553C2.424 3.007 2 3.868 2 5.03v14c0 1.164.425 2.025 1.1 2.478l10.74-10.72L3.1 2.553z"/>
                  <path d="M14.6 11.533L4.19 1.143c.48-.256 1.05-.28 1.62-.05l12.44 7.15-3.65 3.29z"/>
                  <path d="M18.25 8.24l3.22 1.85c1.07.62 1.07 1.62 0 2.24l-3.22 1.86-3.83-3.95 3.83-2z"/>
                  <path d="M14.6 12.87l3.65 3.3-12.44 7.14c-.57.23-1.14.2-1.62-.05L14.6 12.87z"/>
                </svg>
              </div>
              <span>Download Yuno</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
