import { useState } from 'react'
import SmartImage from './SmartImage'

export default function ImageGallery({ images = [], mainImage, title = '' }) {
  const allImages = mainImage ? [mainImage, ...images.filter((i) => i !== mainImage)] : images
  const [active, setActive] = useState(allImages[0])

  if (allImages.length === 0) return null

  return (
    <div className="flex flex-col gap-3">
      <div className="aspect-[16/10] w-full overflow-hidden rounded-md">
        <SmartImage src={active} alt={title} className="h-full w-full object-cover" />
      </div>
      {allImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(img)}
              className={`h-20 w-28 shrink-0 overflow-hidden rounded-sm ring-2 transition-all ${
                active === img ? 'ring-bronze-500' : 'ring-transparent opacity-70 hover:opacity-100'
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <SmartImage src={img} alt={`${title} thumbnail ${i + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
