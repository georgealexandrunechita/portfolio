import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const s = { mx: 0, my: 0, rx: 0, ry: 0, scale: 1, targetScale: 1, visible: false }
    let raf: number

    const onMove = (e: MouseEvent) => {
      s.mx = e.clientX
      s.my = e.clientY
      if (!s.visible) {
        s.visible = true
        s.rx = e.clientX
        s.ry = e.clientY
        dotRef.current?.classList.remove('opacity-0')
        ringRef.current?.classList.remove('opacity-0')
      }
    }

    const onOver = (e: MouseEvent) => {
      s.targetScale = (e.target as Element).closest('a, button') ? 1.8 : 1
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)

    const tick = () => {
      s.rx    += (s.mx - s.rx) * 0.12
      s.ry    += (s.my - s.ry) * 0.12
      s.scale += (s.targetScale - s.scale) * 0.1

      if (dotRef.current)
        dotRef.current.style.transform  = `translate(${s.mx - 4}px, ${s.my - 4}px)`
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${s.rx - 16}px, ${s.ry - 16}px) scale(${s.scale})`

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="opacity-0 pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-accent"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="opacity-0 pointer-events-none fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full border border-accent/50"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
