import Link from 'next/link'
import YunoLogo from './yuno-logo'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background text-foreground border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="Yuno Logo" width={50} height={50}/>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Yuno</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed font-medium pr-4">
              Store management for Nigerian businesses. Track sessions, monitor staff, and reduce revenue leakage.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-lg tracking-tight">Product</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-[#de0f3f] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#de0f3f] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-[#de0f3f] transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-lg tracking-tight">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
             <li>
                <a href="/how-to-use" className="text-muted-foreground hover:text-[#de0f3f] transition-colors">
                  How to Use
                </a>
              </li>
              <li>
                <a href="/support" className="text-muted-foreground hover:text-[#de0f3f] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#de0f3f] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-lg tracking-tight">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#de0f3f] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#de0f3f] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-medium">
          <p>&copy; {currentYear} Yuno. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
