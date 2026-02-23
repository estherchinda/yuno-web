import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Info, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Use | Yuno',
  description: 'Learn how to use Yuno to make session tracking easy, so you can focus on your day.',
}

const steps = [
  {
    number: "1",
    title: "Start a session",
    description: <p className="text-lg text-muted-foreground leading-relaxed font-medium">Tap the <strong className="text-foreground font-semibold px-0.5">+</strong> button whenever a customer wants to play.</p>,
    content: null,
  },
  {
    number: "2",
    title: "Pick the game",
    description: <p className="text-lg text-muted-foreground leading-relaxed font-medium">Select the game being played. Some games are charged by time, others by rounds. Yuno already stores the price.</p>,
    content: null,
  },
  {
    number: "3",
    title: "Record the play",
    description: <p className="text-lg text-muted-foreground leading-relaxed font-medium">Yuno takes care of the calculations for you:</p>,
    content: (
      <ul className="mt-6 space-y-4">
        <li className="flex items-start gap-4 text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
          <span className="leading-relaxed font-medium text-lg">
            For time-based games, tap <strong className="text-foreground font-semibold">Start</strong> and come back to <strong className="text-foreground font-semibold">End</strong> when finished
          </span>
        </li>
        <li className="flex items-start gap-4 text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
          <span className="leading-relaxed font-medium text-lg">
            For round-based games, enter the number of rounds played
          </span>
        </li>
      </ul>
    )
  },
  {
    number: "4",
    title: "Log the payment",
    description: <p className="text-lg text-muted-foreground leading-relaxed font-medium">Choose how the customer paid:</p>,
    content: (
      <div className="mt-6">
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-secondary px-4 py-2 rounded-xl text-sm font-semibold text-muted-foreground border border-border">Cash</span>
          <span className="bg-secondary px-4 py-2 rounded-xl text-sm font-semibold text-muted-foreground border border-border">Transfer</span>
          <span className="bg-secondary px-4 py-2 rounded-xl text-sm font-semibold text-muted-foreground border border-border">POS</span>
        </div>
        <p className="text-[15px] font-medium text-muted-foreground/80">You can also add a short note if needed.</p>
      </div>
    )
  },
  {
    number: "5",
    title: "Sync when ready",
    description: <p className="text-lg text-muted-foreground leading-relaxed font-medium">All sessions are saved offline as you work. Sync anytime, or wait for automatic sync at day's end.</p>,
    content: (
      <div className="mt-6 bg-secondary/30 border border-border rounded-xl p-4 flex items-center gap-3">
        <Info className="text-muted-foreground h-5 w-5 flex-shrink-0" />
        <p className="text-[15px] font-medium text-muted-foreground">No internet needed during work hours</p>
      </div>
    )
  }
]

const tips = [
  'Use "No Customers" when the store is quiet',
  'View active sessions on the Home screen',
  'Everything you log is saved automatically'
]

export default function HowToUse() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-balance mb-6 text-foreground">
              How to use Yuno
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Welcome! Yuno is here to make session tracking easy, so you can focus on your day.
            </p>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-24 bg-background border-y border-border/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-secondary/20 rounded-3xl p-8 border border-border/50 hover:border-foreground/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Number Box */}
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-foreground justify-center items-center shadow-md">
                    <span className="text-xl font-bold text-background leading-none mt-0.5">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Mobile Number Box */}
                      <div className="md:hidden w-10 h-10 rounded-full bg-foreground flex justify-center items-center flex-shrink-0 shadow-sm">
                        <span className="text-lg font-bold text-background leading-none mt-0.5">{step.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">{step.title}</h3>
                    </div>
                    {step.description}
                    {step.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-16 bg-background rounded-3xl p-8 lg:p-10 border border-border shadow-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary/50 border border-border flex justify-center items-center flex-shrink-0">
                <Lightbulb size={24} className="text-foreground" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">A few helpful tips</h3>
            </div>
            
            <ul className="space-y-6">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/50 mt-2.5 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground leading-relaxed font-medium">
                    {tip.includes('"No Customers"') ? (
                      <>Use <strong className="text-foreground font-semibold px-0.5">"No Customers"</strong> when the store is quiet</>
                    ) : (
                      tip
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
