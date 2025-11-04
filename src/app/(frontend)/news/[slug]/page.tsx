import {} from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'
import Header from '@/components/blocks/header'
import Prose from '@/components/blocks/prose'
import ImageKitImage from '@/components/imagekit-image'
import { getNewsBySlug } from '@/lib/fetchers'
import { notFound } from 'next/navigation'
import Gallery from '@/components/gallery'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const news = await getNewsBySlug(slug)

  if (!news) {
    notFound()
  }

  return (
    <>
      <Header title={news.title} description={news.excerpt} />

      {news.thumbnail ? (
        <figure className="mb-12">
          <ImageKitImage
            image={news.thumbnail}
            className="mb-4 w-full rounded-xl object-cover object-center shadow-lg"
          />
          {news.thumbnailText ? (
            <figcaption className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2 h-5 w-5 shrink-0 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                ></path>
              </svg>
              <p className="text-sm text-gray-500 dark:text-gray-100">{news.thumbnailText}</p>
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      {news.content ? (
        <div className="flex justify-center">
          <Prose content={news.content} />
        </div>
      ) : null}

      {news.gallery ? <Gallery images={news.gallery} /> : null}
    </>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const news = await getNewsBySlug(slug)

  if (!news) {
    return {
      title: 'Seite nicht gefunden',
      description:
        'Die von Ihnen gewünschte Seite konnte nicht gefunden werden. Bitte vergewissern Sie sich, das die URL stimmt.',
    }
  }

  return {
    title: news.title,
    description: news.excerpt,
  }
}
