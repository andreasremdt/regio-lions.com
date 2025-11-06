import type { News } from '@/payload-types'
import type { PaginatedDocs } from 'payload'
import Button from './ui/button'
import { cn } from '@/lib/utils'
import Icon from './ui/icon'

type Props = PaginatedDocs<News> & {
  className?: string
}

export default function Pagination({ totalPages, page, nextPage, prevPage, className }: Props) {
  return (
    <nav className={cn('mt-16 flex items-center justify-end gap-x-2 print:hidden', className)}>
      <p className="mr-6">
        Seite {page} von {totalPages}
      </p>
      {prevPage ? (
        <Button href={`/news?page=${prevPage}`} rel="prev" title={`Gehe zu Seite ${prevPage}`}>
          <Icon name="arrow-left" className="size-4" />
        </Button>
      ) : null}
      {nextPage ? (
        <Button href={`/news?page=${nextPage}`} rel="next" title={`Gehe zu Seite ${nextPage}`}>
          <Icon name="arrow-right" className="size-4" />
        </Button>
      ) : null}
    </nav>
  )
}
