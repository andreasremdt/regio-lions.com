'use client'

import { useState } from 'react'
import { Media } from '@/payload-types'
import ImageKitImage from './imagekit-image'
import Lightbox from './lightbox'

export default function Gallery({ images }: { images: (string | Media)[] }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <>
      <figure className="mx-auto mt-6 grid grid-cols-2 gap-4 md:mt-8 md:w-2/3 md:grid-cols-3 md:gap-8">
        {images.map((image, index) => (
          <a
            href={typeof image === 'string' ? image : image.imagekit?.url || ''}
            key={typeof image === 'string' ? image : image.id}
            onClick={(event) => {
              event.preventDefault()
              setCurrentImageIndex(index)
              setIsLightboxOpen(true)
            }}
            className="group focus-visible:outline-primary-900 bg-grey-100 overflow-hidden rounded-xl focus-visible:outline-hidden focus-visible:outline-3 focus-visible:outline-offset-2"
            aria-label={`Bild ${index + 1} von ${images.length} öffnen`}
          >
            <ImageKitImage
              image={image}
              className="aspect-4/3 object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        ))}
      </figure>

      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNext={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
        onPrevious={() =>
          setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
        }
      />
    </>
  )
}
