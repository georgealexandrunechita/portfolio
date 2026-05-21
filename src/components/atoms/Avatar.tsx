type Size = 'sm' | 'md' | 'lg'

interface AvatarProps {
  src: string
  alt: string
  size?: Size
  className?: string
}

const sizes: Record<Size, string> = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-20 h-20 text-lg',
}

export function Avatar({ src, alt, size = 'md', className = '' }: AvatarProps) {
  return (
    <div className={`relative rounded-full overflow-hidden border-2 border-accent/30 shrink-0 ${sizes[size]} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
