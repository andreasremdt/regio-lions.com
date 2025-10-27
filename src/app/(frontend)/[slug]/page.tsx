import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlockRenderer from '@/components/block-renderer'
import { getPageBySlug } from '@/lib/fetchers'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const page = await getPageBySlug(slug || 'home')

  if (!page) {
    notFound()
  }

  return <BlockRenderer blocks={page.content} />
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug || 'home')

  return {
    title: page.title,
    description: page.description,
    authors: [{ name: 'Andreas Remdt', url: 'https://andreasremdt.com' }],
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
    openGraph: {
      title: page.title as string,
      description: page.description as string,
      url: process.env.NEXT_PUBLIC_SERVER_URL,
      siteName: 'Regio Lions',
      locale: 'de-DE',
    },
  }
}
