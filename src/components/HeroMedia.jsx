import { useState } from 'react'
import SmartImage from './SmartImage'

/**
 * Full-bleed hero background. Add a video at videoSrc (e.g.
 * /src/assets/videos/hero-video.mp4) and it plays muted/looped behind
 * your hero content. Until you add a real video file, this quietly
 * falls back to the still image instead of showing a broken player.
 */
export default function HeroMedia({ imageSrc, videoSrc, alt = '' }) {
  const [videoFailed, setVideoFailed] = useState(false)
  const showVideo = videoSrc && !videoFailed

  return (
    <div className="absolute inset-0">
      {showVideo ? (
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          poster={imageSrc}
          onError={() => setVideoFailed(true)}
        />
      ) : (
        <SmartImage src={imageSrc} alt={alt} className="h-full w-full object-cover" />
      )}
      <div className="absolute inset-0 bg-ink-950/35" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950/80 to-transparent" />
    </div>
  )
}
