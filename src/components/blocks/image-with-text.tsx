import type { ImageWithTextBlock } from '@/payload-types'
import ImageKitImage from '../imagekit-image'
import Prose from './prose'
import Heading from '../ui/heading'

export default function ImageWithText({ title, description, image, text }: ImageWithTextBlock) {
  return (
    <section className="pt-16 md:pt-32 lg:pt-48">
      <Heading level="h2" tag="h2" className="mb-4 md:mb-8">
        {title}
      </Heading>
      <p className="mb-12 text-lg md:w-2/3 md:text-xl">{description}</p>

      <div className="gap-16 md:flex">
        <ImageKitImage image={image} className="mb-16 rounded-xl shadow-lg md:mb-0 md:w-1/2" />

        <Prose content={text} className="-mt-4 md:w-1/2" />
      </div>
    </section>
  )
}
