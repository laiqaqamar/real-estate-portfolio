import { useState } from 'react'
import { Play } from 'lucide-react'
import SmartImage from './SmartImage'

function getYouTubeEmbedUrl(url) {
  try {
    const idMatch = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/)
    const id = idMatch ? idMatch[1] : null
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null
  } catch {
    return null
  }
}

/**
 * Only renders if a video (mp4 path or YouTube URL) is provided.
 * Pass either `videoSrc` (mp4 from assets/videos) or `youtubeUrl`.
 */
export default function VideoSection({ videoSrc, youtubeUrl, poster, title = 'Video tour' }) {
  const [playing, setPlaying] = useState(false)

  if (!videoSrc && !youtubeUrl) return null

  const embedUrl = youtubeUrl ? getYouTubeEmbedUrl(youtubeUrl) : null

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md bg-ink-950">
      {playing ? (
        embedUrl ? (
          <iframe
            src={embedUrl}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video src={videoSrc} controls autoPlay className="h-full w-full object-cover" />
        )
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="group relative h-full w-full"
          aria-label={`Play ${title}`}
        >
          <SmartImage src={poster} alt={title} className="h-full w-full object-cover opacity-70" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bronze-500 text-ink-950 transition-transform group-hover:scale-110">
              <Play size={26} fill="currentColor" />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
