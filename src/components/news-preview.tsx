import type { News } from '@/payload-types'
import ImageKitImage from './imagekit-image'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import NoImage from './ui/no-image'
import Heading from './ui/heading'
import Button from './ui/button'
import Icon from './ui/icon'

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
          className="h-64 w-full rounded-xl object-cover shadow-lg lg:aspect-square lg:h-auto lg:max-w-72"
          width={300}
          height={300}
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
        <Heading level="h3" tag="h2" className="mt-1 mb-6" itemProp="headline">
          {content || gallery ? (
            <Link
              href={`/news/${slug}`}
              className="hover:text-primary-900 focus-visible:text-primary-900 focus-visible:outline-primary-900 dark:hover:text-primary-200 dark:focus-visible:text-primary-200 dark:focus-visible:outline-primary-200 rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </Heading>
        <p className="mb-6 max-w-prose" itemProp="abstract">
          {excerpt}
        </p>

        {content || gallery ? (
          <Button
            href={`/news/${slug}`}
            variant="secondary"
            className="mt-auto lg:mt-0"
            itemProp="url"
          >
            Weiterlesen <Icon name="arrow-right" className="size-4" />
          </Button>
        ) : null}
      </div>
    </article>
  )
}
