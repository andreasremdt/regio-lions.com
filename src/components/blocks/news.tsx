import { getAllNews } from '@/lib/fetchers'
import type { NewsBlock } from '@/payload-types'
import NewsPreview from '../news-preview'
import Pagination from '../pagination'

export default async function News({ amount, pageNumber }: NewsBlock & { pageNumber: number }) {
  const news = await getAllNews(amount, pageNumber)

  return (
    <div className="mb-16 grid grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2 md:gap-x-8 lg:grid-cols-1">
      {news.docs.map((entry) => (
        <NewsPreview key={entry.id} {...entry} />
      ))}

      <Pagination {...news} />
    </div>
  )
}
