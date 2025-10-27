import type { Media } from '@/payload-types'
import Image, { ImageProps } from 'next/image'

type Props = Omit<ImageProps, 'src'> & {
  image: string | Media
}

export default function ImageKitImage({
  image,
  quality = 75,
  loading = 'eager',
  decoding = 'async',
  ...props
}: Props) {
  const url = typeof image === 'string' ? image : image.imagekit?.url

  if (!url) {
    return null
  }

  return <Image src={url} loading={loading} quality={quality} decoding={decoding} {...props} />
}
