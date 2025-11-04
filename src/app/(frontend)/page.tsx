import type { Metadata } from 'next'
import { getPageBySlug } from '@/lib/fetchers'
import Page from './[slug]/page'

export default Page

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('home')

  if (!page) {
    return {
      title: 'Regio Lions',
      description:
        'Regio Lions ist ein Verbund von verschiedenen Lions Clubs aus dem Dreiländereck Deutschland / Frankreich / Schweiz',
    }
  }

  return {
    title: 'Willkommen | Regio Lions',
    description: page.description,
  }
}
