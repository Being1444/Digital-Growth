export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </a>
              </li>
              <li>
                <a href="/press" className="text-muted-foreground hover:text-foreground">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/marketing" className="text-muted-foreground hover:text-foreground">
                  Marketing
                </a>
              </li>
              <li>
                <a href="/services/development" className="text-muted-foreground hover:text-foreground">
                  Development
                </a>
              </li>
              <li>
                <a href="/services/strategy" className="text-muted-foreground hover:text-foreground">
                  Strategy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-muted-foreground hover:text-foreground">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/documentation" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms
                </a>
              </li>
              <li>
                <a href="/security" className="text-muted-foreground hover:text-foreground">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 DigitalGrowth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

