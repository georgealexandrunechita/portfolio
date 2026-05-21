import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

type Platform = 'github' | 'linkedin' | 'email'

interface SocialLinkProps {
  platform: Platform
  href: string
  className?: string
}

const icons: Record<Platform, React.ElementType> = {
  github:   Github,
  linkedin: Linkedin,
  email:    Mail,
}

const labels: Record<Platform, string> = {
  github:   'GitHub',
  linkedin: 'LinkedIn',
  email:    'Email',
}

export function SocialLink({ platform, href, className = '' }: SocialLinkProps) {
  const Icon = icons[platform]
  const isEmail = platform === 'email'

  return (
    <a
      href={isEmail ? `mailto:${href}` : href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      aria-label={labels[platform]}
      className={`group inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-200 ${className}`}
    >
      <Icon size={20} />
      <span className="text-sm">{labels[platform]}</span>
      {!isEmail && <ExternalLink size={12} className="opacity-0 group-hover:opacity-60 transition-opacity" />}
    </a>
  )
}
