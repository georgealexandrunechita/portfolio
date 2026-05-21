import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from '../atoms/NavLink'
import { Button } from '../atoms/Button'

const links = [
  { to: '/',           label: 'Inicio' },
  { to: '/projects',   label: 'Proyectos' },
  { to: '/skills',     label: 'Skills' },
  { to: '/experience', label: 'Experiencia' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border shadow-[0_1px_0_var(--color-border)]' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="text-text font-bold text-lg tracking-tight hover:text-accent transition-colors">
          alexnechita<span className="text-accent">.</span>dev
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to}>{label}</NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('mailto:georgealexandrunechita@gmail.com')}
          >
            Contacto
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-muted hover:text-text transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-b border-border px-4 pb-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}>{label}</NavLink>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="self-start"
            onClick={() => window.open('mailto:georgealexandrunechita@gmail.com')}
          >
            Contacto
          </Button>
        </div>
      )}
    </header>
  )
}
