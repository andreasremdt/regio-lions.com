import ImageKitImage from '../imagekit-image'
import type { ClubsBlock } from '@/payload-types'
import Heading from '../ui/heading'

export default async function Clubs({ countries }: ClubsBlock) {
  return countries.map((country) => (
    <div key={country.country} className="mt-16 first-of-type:mt-0">
      <Heading level="h2" tag="h2" className="mb-8">
        {country.country}
      </Heading>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
        {country.clubs.map((club) => {
          if (typeof club === 'string') {
            return null
          }

          return (
            <figure
              key={club.id}
              className="group focus-within:outline-primary-900 dark:focus-within:outline-primary-200 relative isolate aspect-5/4 overflow-hidden rounded-xl shadow-lg after:absolute after:inset-0 after:z-0 after:rounded-xl after:bg-linear-to-b after:from-transparent after:to-gray-900/80 focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-solid md:aspect-square"
            >
              <ImageKitImage
                image={club.image}
                className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:max-h-none"
              />
              <figcaption className="absolute inset-0 z-10 flex flex-col justify-end p-4">
                <a
                  href={club.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg leading-tight font-bold text-white after:absolute after:inset-0 focus-visible:outline-hidden lg:text-xl dark:text-white"
                >
                  {club.name}
                </a>
              </figcaption>
            </figure>
          )
        })}
      </div>
    </div>
  ))
}
