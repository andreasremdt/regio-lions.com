import type { RichTextBlock } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

function Prose({ content }: RichTextBlock) {
  if (!content) return null

  return (
    <RichText
      data={content}
      className="prose max-w-none md:w-2/3 prose-a:text-primary-900 prose-a:underline-offset-4 prose-a:underline-current prose-a:hover:text-neutral-900 prose-a:focus-visible:text-neutral-900"
    />
  )
}

export default Prose
