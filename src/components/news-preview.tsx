import type { News } from '@/payload-types'
import ImageKitImage from './imagekit-image'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import NoImage from './no-image'

export default function NewsPreview({
  thumbnail,
  publishedAt,
  title,
  excerpt,
  slug,
  content,
  gallery,
}: News) {
  return (
    <article
      className="flex flex-col gap-6 lg:flex-row lg:gap-12"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {thumbnail ? (
        <ImageKitImage
          image={thumbnail}
          className="w-full lg:max-w-72 rounded-xl h-64 object-cover shadow-lg lg:aspect-square lg:h-auto"
        />
      ) : (
        <NoImage className="aspect-square w-full lg:max-w-72" />
      )}
      <div className="flex flex-1 flex-col items-start">
        <time
          itemProp="datePublished"
          dateTime={publishedAt}
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          {formatDate(publishedAt)}
        </time>
        <h2 className="h4 mb-6 mt-1" itemProp="headline">
          {content || gallery ? (
            <Link href={`/news/${slug}`} className="hover:text-primary-900">
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-6 max-w-prose" itemProp="abstract">
          {excerpt}
        </p>

        {content || gallery ? (
          <Link href={`/news/${slug}`} className="btn btn-secondary mt-auto lg:mt-0" itemProp="url">
            Weiterlesen &rarr;
          </Link>
        ) : null}
      </div>
    </article>
  )
}
