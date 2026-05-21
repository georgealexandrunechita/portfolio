const VIDEO_URL = 'https://res.cloudinary.com/dcp7o3atw/video/upload/v1779359465/14520076_1920_1080_24fps_hvtpye.mp4'

export function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
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
