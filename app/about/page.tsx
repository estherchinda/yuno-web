import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Heart, Target, Shield, Zap } from 'lucide-react'
import AboutCarousel from '@/components/about-carousel'

export const metadata: Metadata = {
  title: 'About Yuno | Gaming Store Management',
  description: 'Learn about Yuno\'s mission to reduce revenue leakage in gaming stores.',
}

const coreValues = [
  {
    icon: Target,
    title: 'Transparency',
    description:
      'We believe in making business operations transparent. Staff activity is visible without surveillance.',
  },
  {
    icon: Heart,
    title: 'Trust',
    description:
      'We build tools that foster trust between owners and staff through clear, honest record-keeping.',
  },
  {
    icon: Shield,
    title: 'Security',
    description:
      'Your data is protected. We prioritize security and data privacy in everything we build.',
  },
  {
    icon: Zap,
    title: 'Simplicity',
    description:
      'Yuno is designed to be simple. No complex setups, no unnecessary features. Just what you need.',
  },
]

export default function About() {
  return (
    <main className="bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-balance mb-6 text-foreground">
              Empowering Gaming Stories Across Africa.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're on a mission to help gaming store owners reduce revenue leakage and build 
              transparent, accountable teams through simple, offline-first technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background border-y border-border/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Story</h2>
            <div className="w-24 h-1 bg-foreground/20 mx-auto mt-6 rounded-full" />
          </div>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-medium">
            <p className="p-6 bg-secondary/30 rounded-2xl border border-border">
              Yuno was born from a simple observation: gaming store owners across Nigeria face 
              persistent operational challenges that affect their bottom line. Staff underreporting, 
              mixed payment methods that are hard to reconcile, and the constant need to review CCTV 
              footage to verify honesty.
              Rather than build invasive surveillance tools, we decided to create something different. 
              Yuno is designed to increase visibility and accountability through transparency, not 
              surveillance. It gives owners the information they need to make better decisions, and 
              gives staff a clear framework for their work.
            </p>
            <p className="p-6 bg-secondary/30 rounded-2xl border border-border">
              Today, Yuno is being piloted with gaming store owners in Port Harcourt and Lagos. 
              Our mission is simple: help small business owners reduce revenue leakage and build 
              trustworthy, accountable teams.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make at Yuno.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-background rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-foreground/30 transition-all duration-300 group"
                >
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-secondary/50 border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why YUNO Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 md:mb-16 text-center tracking-tight text-balance">
            Why Choose Yuno?
          </h2>
          <AboutCarousel />
        </div>
      </section>

      <Footer />
    </main>
  )
}
