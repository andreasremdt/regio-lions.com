import type { ImageWithTextBlock } from '@/payload-types'
import ImageKitImage from '../imagekit-image'
import Prose from './prose'

export default function ImageWithText({ title, description, image, text }: ImageWithTextBlock) {
  return (
    <section className="pt-16 md:pt-32 lg:pt-48">
      <h2 className="h2 mb-8">{title}</h2>
      <p className="mb-12 text-xl md:w-2/3">{description}</p>

      <div className="gap-16 md:flex">
        <ImageKitImage image={image} className="mb-16 rounded-xl shadow-lg md:mb-0 w-1/2" />

        <Prose content={text} className="w-1/2 -mt-4" />
      </div>
    </section>
  )
}
