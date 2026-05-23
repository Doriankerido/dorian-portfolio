import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(245,243,238,0.92)] backdrop-blur-[12px] border-b border-surface'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="font-display text-xl font-semibold text-ink tracking-tight"
        >
          Dorian
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: 'Work', to: '/work' },
            { label: 'About', to: '/about' },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`font-mono text-[13px] tracking-widest uppercase transition-colors ${
                location.pathname.startsWith(to)
                  ? 'text-accent-dark'
                  : 'text-ink hover:text-accent-dark'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:dorian@email.com"
            className="font-mono text-[13px] tracking-widest uppercase text-ink hover:text-accent-dark transition-colors"
          >
            Contact
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-ink transition-transform duration-200 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-transform duration-200 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[rgba(245,243,238,0.97)] backdrop-blur-[12px] border-b border-surface px-6 pb-8 pt-2 flex flex-col gap-6">
          <Link to="/work" className="font-mono text-sm tracking-widest uppercase text-ink py-2">
            Work
          </Link>
          <Link to="/about" className="font-mono text-sm tracking-widest uppercase text-ink py-2">
            About
          </Link>
          <a href="mailto:dorian@email.com" className="font-mono text-sm tracking-widest uppercase text-ink py-2">
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
