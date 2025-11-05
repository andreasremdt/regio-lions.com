import type { LatestNewsBlock } from '@/payload-types'
import Heading from '../ui/heading'
import Button from '../ui/button'
import { getAllNews } from '@/lib/fetchers'
import ImageKitImage from '../imagekit-image'
import Link from 'next/link'
import NoImage from '../ui/no-image'
import { formatDate } from '@/lib/utils'

export default async function LatestNews({
  title,
  description,
  amount,
  buttonText,
  buttonLink,
}: LatestNewsBlock) {
  const news = await getAllNews(amount)

  return (
    <section>
      <Heading level="h2" tag="h2" className="mb-8">
        {title}
      </Heading>
      <p className="mb-12 text-xl md:w-2/3 lg:w-1/2">{description}</p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {news.docs.map((entry) => (
          <article
            key={entry.id}
            className="group focus-within:outline-primary-900 dark:focus-within:outline-primary-200 relative isolate aspect-5/4 overflow-hidden rounded-xl shadow-lg after:absolute after:inset-0 after:z-0 after:rounded-xl after:bg-linear-to-b after:from-transparent after:to-gray-900/80 focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-solid md:aspect-square"
          >
            {entry.thumbnail ? (
              <ImageKitImage
                image={entry.thumbnail}
                className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:max-h-none"
              />
            ) : (
              <NoImage />
            )}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 md:px-8 md:py-6">
              <time dateTime={entry.publishedAt} className="mb-1 text-gray-200">
                {formatDate(entry.publishedAt)}
              </time>
              <Heading level="h4" tag="h3" className="mb-1">
                <Link
                  href={`/news/${entry.slug}`}
                  className="text-white after:absolute after:inset-0 focus-visible:outline-hidden"
                >
                  {entry.title}
                </Link>
              </Heading>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href={buttonLink}>{buttonText} &rarr;</Button>
      </div>
    </section>
  )
}
