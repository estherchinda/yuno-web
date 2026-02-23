import {
  BarChart3,
  Clock,
  Users,
  Wifi,
  AlertCircle,
  FileText,
} from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Precision Session Recording',
    description: 'Track time-based and per-game sessions with an automated timer. Eliminate manual entry errors and ensure every minute is billed.',
  },
  {
    icon: Users,
    title: 'Seamless Staff Management',
    description: 'Instant QR code onboarding. View staff activity, track idle periods, and measure performance metrics in real time.',
  },
  {
    icon: Wifi,
    title: 'True Offline Capability',
    description: 'Built for Nigeria. Yuno runs flawlessly without internet connection and synchronizes data automatically when you track online.',
  },
  {
    icon: FileText,
    title: 'Automated Daily Reports',
    description: 'Wake up to comprehensive emails detailing revenue, game breakdown, staff activity, and payment methods.',
  },
  {
    icon: AlertCircle,
    title: 'Inactivity & Anomaly Tracking',
    description: 'Transparently log idle periods. System alerts flag discrepancies between expected and reported sessions.',
  },
  {
    icon: BarChart3,
    title: 'Centralized Dashboard',
    description: 'A powerful hub giving you complete visibility. Edit sessions, flag anomalies, and manage multiple staff from one place.',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 tracking-tight text-balance">
            Everything you need,<br className="hidden md:block" />
            <span className="text-muted-foreground"> nothing you don't.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete suite of tools built specifically to optimize gaming lounge operations, 
            increase transparency, and maximize revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-secondary/30 backdrop-blur-md rounded-2xl p-8 border border-border hover:bg-secondary/60 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 p-6 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500">
                  <Icon size={160} className="text-foreground" />
                </div>
                
                <div className="mb-6 w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <Icon size={24} className="text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 relative z-10 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 text-sm md:text-base">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
