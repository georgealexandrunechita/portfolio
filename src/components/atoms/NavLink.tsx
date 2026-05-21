import { NavLink as RouterNavLink } from 'react-router-dom'

interface NavLinkProps {
  to: string
  children: React.ReactNode
  onClick?: () => void
}

export function NavLink({ to, children, onClick }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `relative text-sm font-medium transition-colors duration-200 pb-0.5
        after:absolute after:bottom-0 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-200
        ${isActive
          ? 'text-accent after:w-full'
          : 'text-text-muted hover:text-text after:w-0 hover:after:w-full'
        }`
      }
    >
      {children}
    </RouterNavLink>
  )
}
