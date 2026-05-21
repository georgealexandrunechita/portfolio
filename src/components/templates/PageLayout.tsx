import { Navbar } from '../organisms/Navbar'
import { Footer } from '../organisms/Footer'
import { VideoBackground } from '../atoms/VideoBackground'
import { CustomCursor } from '../atoms/CustomCursor'

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <CustomCursor />
      <VideoBackground />
      <div className="relative z-10 min-h-screen flex flex-col text-text">
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
