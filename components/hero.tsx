import { ArrowRight, Download, ShieldCheck, Zap, Activity } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-xl blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-foreground text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#de0f3f] animate-pulse"></span>
            The app for Nigerian gaming stores
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tighter text-balance text-foreground">
            Stay in the
            <span className="text-[#de0f3f] italic"> Know</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Yuno is an offline-first management platform that tracks sessions, monitors staff activity, and sends automated daily reports.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:opacity-90 transition-all shadow-lg hover:-translate-y-0.5"
            >
              <Download size={20} />
              Download App
            </a>
            <a
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary/50 backdrop-blur-sm text-foreground rounded-full font-semibold hover:bg-secondary transition-all border border-border"
            >
              Learn More
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-t border-border/50 pt-10 md:pt-12 text-left max-w-3xl mx-auto">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-xl text-foreground border border-border">
                   <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Secure Session Logging</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Fully encrypted data</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-xl text-foreground border border-border">
                   <Zap size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Offline First</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Works without internet</p>
                </div>
             </div>
             <div className="items-center gap-4 hidden md:flex">
                <div className="p-3 bg-secondary rounded-xl text-foreground border border-border">
                   <Activity size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Real-time Analytics</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Instant daily reports</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
