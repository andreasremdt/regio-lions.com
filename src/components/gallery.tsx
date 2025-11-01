import { Media } from '@/payload-types'
import ImageKitImage from './imagekit-image'

export default function Gallery({ images }: { images: (string | Media)[] }) {
  return (
    <figure className="mt-6 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-3 md:gap-8 md:w-2/3 mx-auto">
      {images.map((image) => (
        <a
          key={typeof image === 'string' ? image : image.id}
          href={typeof image === 'string' ? image : image.imagekit?.url || ''}
          data-fancybox="gallery"
          className="bg-grey-100 focus-visible:outline-3 group overflow-hidden rounded-xl focus-visible:outline-hidden focus-visible:outline-offset-2 focus-visible:outline-primary-900 "
        >
          <ImageKitImage
            image={image}
            className="aspect-4/3 object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
          />
        </a>
      ))}
    </figure>
  )
}
