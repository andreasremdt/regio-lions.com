import type { RichTextBlock } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { cn } from '@/lib/utils'

type Props = Pick<RichTextBlock, 'content'> & {
  className?: string
}

function Prose({ content, className }: Props) {
  if (!content) return null

  return (
    <RichText
      data={content}
      className={cn(
        'prose max-w-none md:w-2/3 prose-a:text-primary-900 prose-a:underline-offset-4 prose-a:underline-current prose-a:hover:text-neutral-900 prose-a:focus-visible:text-neutral-900',
        className,
      )}
    />
  )
}

export default Prose
