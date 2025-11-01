import type { News } from '@/payload-types'
import Link from 'next/link'
import type { PaginatedDocs } from 'payload'

export default function Pagination({ totalPages, page, nextPage, prevPage }: PaginatedDocs<News>) {
  return (
    <nav className="flex items-center justify-end gap-x-2 print:hidden mt-16">
      <p className="mr-6">
        Seite {page} von {totalPages}
      </p>
      {prevPage ? (
        <Link
          href={`/news?page=${prevPage}`}
          rel="prev"
          className="btn btn-primary"
          title={`Gehe zu Seite ${prevPage}`}
        >
          &larr;
        </Link>
      ) : null}
      {nextPage ? (
        <Link
          href={`/news?page=${nextPage}`}
          rel="next"
          className="btn btn-primary"
          title={`Gehe zu Seite ${nextPage}`}
        >
          &rarr;
        </Link>
      ) : null}
    </nav>
  )
}
