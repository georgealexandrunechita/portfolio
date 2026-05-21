import { SocialLink } from '../atoms/SocialLink'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <span className="text-text font-bold tracking-tight">
          alexnechita<span className="text-accent">.</span>dev
        </span>

        <div className="flex gap-6">
          <SocialLink platform="github"   href="https://github.com/georgealexandrunechita" />
          <SocialLink platform="linkedin" href="https://linkedin.com/in/georgealexandrunechita" />
          <SocialLink platform="email"    href="georgealexandrunechita@gmail.com" />
        </div>

        <span className="text-text-faint text-xs">
          © {year} Alexandru Nechita
        </span>
      </div>
    </footer>
  )
}
