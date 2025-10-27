import type { Media } from '@/payload-types'
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes))
}

export function getImageUrl(image: Media | string) {
  if (typeof image === 'string') {
    return image
  }

  return image.imagekit?.url || image.url
}
