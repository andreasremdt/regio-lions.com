import type { ImageBlock } from '@/payload-types'
import ImageKitImage from '../imagekit-image'

export default function ImageBlock({ image }: ImageBlock) {
  return (
    <figure>
      <ImageKitImage
        image={image}
        className="max-h-[450px] w-full rounded-xl object-cover object-center shadow-lg"
      />
    </figure>
  )
}
