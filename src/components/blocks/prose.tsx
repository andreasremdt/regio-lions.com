import type { Media, RichTextBlock } from '@/payload-types'
import { defaultJSXConverters, RichText } from '@payloadcms/richtext-lexical/react'
import { cn } from '@/lib/utils'
import ImageKitImage from '../imagekit-image'
import YouTubeEmbed from '../ui/youtube-embed'

type Props = Pick<RichTextBlock, 'content'> & {
  className?: string
}

export default function Prose({ content, className }: Props) {
  if (!content) return null

  return (
    <RichText
      converters={{
        ...defaultJSXConverters,
        upload: ({ node }) => {
          return <ImageKitImage image={node.value as Media} width={900} height={500} />
        },
        blocks: {
          videoId: ({ node }: Record<string, any>) => {
            if (node.fields.videoId) {
              return <YouTubeEmbed videoId={node.fields.videoId} />
            }

            return null
          },
        },
      }}
      data={content}
      className={cn(
        'prose prose-a:text-primary-900 prose-a:underline-offset-4 prose-a:underline-current prose-a:hover:text-neutral-900 prose-a:focus-visible:text-neutral-900 prose-img:rounded-xl prose-img:shadow-lg dark:prose-invert dark:prose-a:text-primary-200 dark:prose-a:hover:text-white dark:prose-a:focus-visible:text-white prose-a:focus-visible:outline-2 prose-a:focus-visible:outline-offset-2 prose-a:focus-visible:outline-solid prose-a:focus-visible:outline-primary-900 dark:prose-a:focus-visible:outline-primary-200 prose-a:rounded-xs max-w-none md:w-2/3',
        className,
      )}
    />
  )
}
