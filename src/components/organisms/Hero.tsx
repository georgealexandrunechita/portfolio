import { ArrowDown } from 'lucide-react'
import { Button } from '../atoms/Button'
import { SocialLink } from '../atoms/SocialLink'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="flex flex-col items-center gap-6 max-w-2xl">

        {/* Status badge */}
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent-glow text-accent text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Disponible para trabajar
        </span>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl sm:text-6xl font-bold text-text tracking-tight">
            Georgi Nechita
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-accent">
            Full-Stack Developer
          </p>
        </div>

        {/* Description */}
        <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl">
          Desarrollador web full-stack con experiencia en React, Node.js y .NET.
          Apasionado por construir productos con impacto real.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver proyectos
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.open('mailto:georgealexandrunechita@gmail.com')}
          >
            Contacto
          </Button>
        </div>

        {/* Social links */}
        <div className="flex gap-6">
          <SocialLink platform="github"   href="https://github.com/georgealexandrunechita" />
          <SocialLink platform="linkedin" href="https://linkedin.com/in/georgealexandrunechita" />
          <SocialLink platform="email"    href="georgealexandrunechita@gmail.com" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-faint animate-bounce">
        <ArrowDown size={20} />
      </div>
    </section>
  )
}
