import type { News } from '@/payload-types'
import type { PaginatedDocs } from 'payload'
import Button from './ui/button'

export default function Pagination({ totalPages, page, nextPage, prevPage }: PaginatedDocs<News>) {
  return (
    <nav className="flex items-center justify-end gap-x-2 print:hidden mt-16">
      <p className="mr-6">
        Seite {page} von {totalPages}
      </p>
      {prevPage ? (
        <Button href={`/news?page=${prevPage}`} rel="prev" title={`Gehe zu Seite ${prevPage}`}>
          &larr;
        </Button>
      ) : null}
      {nextPage ? (
        <Button href={`/news?page=${nextPage}`} rel="next" title={`Gehe zu Seite ${nextPage}`}>
          &rarr;
        </Button>
      ) : null}
    </nav>
  )
}
