import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'
import Icon from './icon'

type Props = ComponentPropsWithoutRef<'span'> & {
  className?: string
}

export default function NoImage({ className, ...props }: Props) {
  return (
    <span
      role="presentation"
      className={cn(
        'flex h-full flex-col items-center justify-center rounded-xl bg-gray-50 text-sm text-gray-500 transition-transform group-hover:scale-110 dark:bg-gray-600 dark:text-white',
        className,
      )}
      {...props}
    >
      <Icon name="no-image" className="mb-2 size-8 text-gray-300" />
      Kein Bild verfügbar
    </span>
  )
}
