'use client'

import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Phone, Mail, Clock, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const supportPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  return (
    <main className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-balance mb-6 text-foreground">
              How can we help?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our team is ready to assist you. Reach out via phone or email, or check our frequently asked questions below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-background border-y border-border/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-secondary/30 rounded-3xl p-6 md:p-8 border border-border text-center hover:shadow-xl hover:border-foreground/30 transition-all duration-300 group shadow-sm">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Phone size={28} className="text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Phone</h3>
              <a
                href="tel:08147388169"
                className="text-muted-foreground hover:text-foreground transition font-semibold text-lg"
              >
                +234 814 7388 169
              </a>
              <p className="text-sm text-muted-foreground mt-4 font-medium">
                Available Mon - Fri, 9 AM - 6 PM WAT
              </p>
            </div>

            {/* Email */}
            <div className="bg-secondary/30 rounded-3xl p-6 md:p-8 border border-border text-center hover:shadow-xl hover:border-foreground/30 transition-all duration-300 group shadow-sm">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Mail size={28} className="text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Email</h3>
              <a
                href="mailto:davidakachi9@gmail.com"
                className="text-muted-foreground hover:text-foreground transition font-semibold text-lg break-all"
              >
                davidakachi9@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-4 font-medium">
                We'll respond within 24 hours
              </p>
            </div>

            {/* Hours */}
            <div className="bg-secondary/30 rounded-3xl p-6 md:p-8 border border-border text-center hover:shadow-xl hover:border-foreground/30 transition-all duration-300 group shadow-sm">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Clock size={28} className="text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Hours</h3>
              <div className="text-muted-foreground text-sm space-y-2 font-medium">
                <p>Mon - Fri: 9 AM - 6 PM</p>
                <p>Saturday: 10 AM - 4 PM</p>
                <p className="text-foreground/50">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Yuno. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How much does Yuno cost?",
                a: "Yuno is designed as an affordable solution for small gaming store owners. We offer flexible pricing plans tailored to your business size. Contact us for a personalized quote and special introductory rates for early adopters.",
              },
              {
                q: "Can I use Yuno without internet?",
                a: "Yes! Yuno is offline-first by design. It works perfectly without internet and automatically syncs your data when connection is restored. Your data is always secure, and you will never lose important information.",
              },
              {
                q: "How do I onboard my staff?",
                a: "Onboarding is simple and quick. Generate a unique QR code in the app, and have your staff scan it with their phone. They enter their name and PIN code, and they are ready to start tracking sessions. No complex passwords or registration needed.",
              },
              {
                q: "What data does Yuno collect and how secure is it?",
                a: "Yuno collects session data (time, game played, revenue), staff activity logs, and payment information. We use industry-standard encryption and never share your data with third parties. Your business information is protected with the highest security standards.",
              },
              {
                q: "Is there a free trial?",
                a: "Absolutely! We offer a 21-day free trial with full access to all features. Download the app from your devices store and get started immediately. No credit card or complex setup required.",
              },
              {
                q: "What if I need technical support?",
                a: "We are here to help! Contact us anytime via phone at 08147388169 or email helloyuno@gmail.com. Our team typically responds within 24 hours. You can also visit us in Port Harcourt.",
              },
              {
                q: "What devices does Yuno support?",
                a: "Yuno works on most modern smartphones and tablets running iOS or Android. The app is optimized for both older and newer devices, ensuring compatibility across a wide range of hardware.",
              },
              {
                q: "Can I customize reports for my store?",
                a: "Yes! Yuno's reporting system is flexible. You can generate daily, weekly, or monthly reports based on your needs. Reports are automatically emailed to you and include all the metrics that matter for your business.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-foreground/30 shadow-sm"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between hover:bg-secondary/30 transition-colors"
                >
                  <h3 className="text-lg font-bold text-foreground text-left pr-4">{faq.q}</h3>
                  <div className={`w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180 bg-foreground text-background border-foreground' : 'text-muted-foreground'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <div
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFAQ === index ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed font-medium pt-2 border-t border-border/50">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 md:mt-20 bg-foreground text-background rounded-3xl p-8 md:p-14 text-center shadow-xl relative">
            <Image src={"/abstract-1.jpg"} alt='Background image' fill className="object-cover rounded-3xl opacity-60"/>
            <div className="relative z-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tight">Still Have Questions?</h3>
              <p className="text-background/80 mb-10 text-lg font-medium">
                Our support team is ready to help you get the most out of Yuno.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:08174388169"
                className="px-8 py-4 bg-background text-foreground font-bold rounded-full hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone size={20} />
                Call Us
              </a>
              <a
                href="mailto:davidakachi9@gmail.com"
                className="px-8 py-4 border border-foreground/30 text-foreground font-bold rounded-full hover:bg-background/10 transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default supportPage
