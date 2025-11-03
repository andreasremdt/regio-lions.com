import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'h1'> & {
  level: 'h1' | 'h2' | 'h3' | 'h4'
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
}

export default function Heading({ children, level, tag, className, ...props }: Props) {
  const Tag = tag

  return (
    <Tag
      className={cn(
        'leading-none text-balance',
        {
          'text-4xl font-black text-primary-900 md:text-5xl lg:text-6xl dark:text-primary-200':
            level === 'h1',
          'text-3xl font-black text-primary-900 md:text-4xl lg:text-5xl dark:text-primary-200':
            level === 'h2',
          'text-xl font-bold text-gray-900 md:text-2xl dark:text-white': level === 'h3',
          'text-lg font-bold text-gray-900 lg:text-xl dark:text-white': level === 'h4',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
