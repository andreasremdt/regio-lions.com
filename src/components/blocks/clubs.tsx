import { getClubs } from '@/lib/fetchers'
import { Media } from '@/payload-types'
import Image from 'next/image'

async function Clubs() {
  const clubsByCountry = await getClubs()

  return Object.entries(clubsByCountry).map(([country, clubs]) => (
    <div key={country} className="mt-16 first-of-type:mt-0">
      <h2 className="text-3xl font-black leading-none text-primary-900 md:text-4xl lg:text-5xl dark:text-primary-200 mb-8">
        {country}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
        {clubs.map((club) => (
          <figure
            key={club.id}
            className="focus-within:outline-3 group relative isolate aspect-5/4 overflow-hidden rounded-xl shadow-lg after:absolute after:inset-0 after:z-0 after:rounded-xl after:bg-linear-to-b after:from-transparent after:to-gray-900/80 focus-within:outline-solid focus-within:outline-offset-2 focus-within:outline-primary-900 md:aspect-square dark:focus-within:outline-primary-200"
          >
            <Image
              src={(club.image as Media).imagekit?.url || ''}
              alt={club.name}
              width={400}
              height={400}
              quality={80}
              loading="eager"
              decoding="async"
              className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:max-h-none"
            />

            <figcaption className="absolute inset-0 z-10 flex flex-col justify-end p-4">
              <a
                href={club.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold leading-tight lg:text-xl dark:text-white text-white after:absolute after:inset-0 focus-visible:outline-hidden"
              >
                {club.name}
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  ))
}

export default Clubs
