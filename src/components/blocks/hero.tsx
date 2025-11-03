import type { HeroBlock } from '@/payload-types'
import ImageKitImage from '../imagekit-image'
import Heading from '../ui/heading'

export default function Hero({ title, description, images, buttonText, buttonLink }: HeroBlock) {
  return (
    <section className="relative py-16 before:absolute before:bottom-32 before:right-0 before:-z-10 before:aspect-square before:w-64 before:rounded-full before:bg-fuchsia-100 before:blur-3xl after:absolute after:-bottom-48 after:right-32 after:-z-10 after:aspect-square after:w-72 after:rounded-full after:bg-purple-100 after:blur-3xl md:py-32 dark:before:bg-fuchsia-900 dark:after:bg-purple-950">
      <Heading level="h1" tag="h1" className="mb-8 md:w-3/5">
        {title}
      </Heading>
      <p className="mb-8 text-xl sm:w-2/3 md:w-1/2">{description}</p>
      <a href={buttonLink} className="btn btn-primary">
        {buttonText} &rarr;
      </a>

      <div className="right-0 mt-8 flex gap-4 md:absolute md:top-40 md:mt-0 md:w-2/5 md:gap-8 lg:top-48">
        <div className="pt-72">
          <ImageKitImage
            image={images[0]}
            priority
            className="aspect-[1/1.5] rounded-xl object-cover shadow-lg"
          />
        </div>
        <div className="pt-40">
          <ImageKitImage
            image={images[1]}
            priority
            className="mb-4 aspect-[1/1.5] rounded-xl object-cover shadow-lg md:mb-8"
          />
          <ImageKitImage
            image={images[2]}
            priority
            className="aspect-[1/1.5] rounded-xl object-cover shadow-lg"
          />
        </div>
        <div>
          <ImageKitImage
            image={images[3]}
            priority
            className="mb-4 aspect-[1/1.5] rounded-xl object-cover shadow-lg md:mb-8"
          />
          <ImageKitImage
            image={images[4]}
            priority
            className="mb-8 aspect-[1/1.5] rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
