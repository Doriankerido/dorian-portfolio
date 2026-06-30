export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-mono text-base tracking-wide text-white/50">
          Dorian · UX Designer
        </span>
        <div className="flex items-center gap-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-base tracking-widest uppercase text-white/40 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-base tracking-widest uppercase text-white/40 hover:text-white transition-colors"
          >
            Behance
          </a>
          <a
            href="mailto:doriankerido@gmail.com"
            className="font-mono text-base tracking-widest uppercase text-white/40 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-5">
          <p className="font-mono text-base text-white/25 text-center">
            © 2026 Dorian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
