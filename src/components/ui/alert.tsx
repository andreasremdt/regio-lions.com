import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import Heading from './heading'
import Icon from './icon'

type Props = ComponentPropsWithoutRef<'div'> & {
  title: string
  variant: 'success' | 'error'
  children: ReactNode
}

export default function Alert({ children, className, title, variant, ...props }: Props) {
  return (
    <div role="alert" className={cn('animate-fade-in', className)} aria-live="polite" {...props}>
      <Icon
        name={variant === 'success' ? 'check' : 'error'}
        className={cn('mb-2 h-8 w-8 lg:mb-2', {
          'text-red-600': variant === 'error',
          'text-green-600': variant === 'success',
        })}
      />

      <Heading level="h3" tag="h2">
        {title}
      </Heading>
      <p>{children}</p>
    </div>
  )
}
