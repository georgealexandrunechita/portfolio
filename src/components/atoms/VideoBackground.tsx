import { useEffect, useRef } from 'react'

const VIDEO_URL = 'https://res.cloudinary.com/dcp7o3atw/video/upload/v1779365337/12802106_3840_2160_30fps_bbtaij.mp4'

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
      />
      <div className="absolute inset-0 bg-bg/70" />
    </div>
  )
}
