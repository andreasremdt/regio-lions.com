import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary'
}

export default function Button({
  children,
  className,
  type = 'button',
  variant = 'primary',
  ...props
}: Props) {
  return (
    <button
      className={cn(
        'inline-flex h-12 items-center cursor-pointer rounded-md border-2 px-6 font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-4 disabled:pointer-events-none disabled:cursor-not-allowed print:hidden',
        {
          'border-primary-900 bg-primary-900 text-white hover:bg-white hover:text-primary-900 focus-visible:bg-white focus-visible:text-primary-900 focus-visible:ring-primary-100 disabled:border-gray-500 disabled:bg-gray-500 dark:border-primary-200 dark:bg-primary-200 dark:text-primary-900 dark:hover:border-white dark:focus-visible:border-white dark:focus-visible:ring-white/60':
            variant === 'primary',
          'border-primary-900 bg-white text-primary-900 hover:bg-primary-900 hover:text-white focus-visible:bg-primary-900 focus-visible:text-white focus-visible:ring-primary-200 disabled:border-gray-500 disabled:text-gray-500 dark:border-white dark:bg-transparent dark:text-white dark:hover:border-primary-200 dark:hover:bg-transparent dark:hover:text-primary-200 dark:focus-visible:border-primary-200 dark:focus-visible:bg-transparent dark:focus-visible:text-primary-200 dark:focus-visible:ring-white/30':
            variant === 'secondary',
        },
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
