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
          return <ImageKitImage image={node.value as Media} loading="lazy" />
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
        'prose prose-a:text-primary-900 prose-a:underline-offset-4 prose-a:underline-current prose-a:hover:text-neutral-900 prose-a:focus-visible:text-neutral-900 prose-img:rounded-xl prose-img:shadow-lg max-w-none md:w-2/3',
        className,
      )}
    />
  )
}
