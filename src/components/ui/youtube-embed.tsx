import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

type Props = ComponentPropsWithoutRef<'iframe'> & {
  videoId: string
}

export default function YouTubeEmbed({ videoId, className, ...props }: Props) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={cn('my-8 aspect-video h-auto w-full rounded-xl shadow-xl print:hidden', className)}
      {...props}
    />
  )
}
