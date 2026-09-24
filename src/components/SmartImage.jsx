import { useState } from 'react'
import { ImageOff } from 'lucide-react'

/**
 * Renders an <img>, but if the file doesn't exist yet (e.g. you haven't
 * replaced the placeholder path), shows a clean fallback instead of a
 * broken-image icon. Once you drop your real file at the given path,
 * it displays automatically — no code changes needed.
 */
export default function SmartImage({ src, alt = '', className = '', ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        className={`ph-fallback flex flex-col items-center justify-center gap-2 text-bronze-200/70 ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff size={28} strokeWidth={1.5} />
        <span className="text-xs text-paper/50 px-2 text-center">{alt || 'Replace this image'}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
      {...rest}
    />
  )
}
