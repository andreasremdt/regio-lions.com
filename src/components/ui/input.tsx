import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'input'> & {
  error?: string
}

export default function Input({ className, type = 'text', id, error, ...props }: Props) {
  return (
    <input
      className={cn(
        'h-12 w-full rounded-md border border-gray-300 px-4 shadow-xs transition-colors hover:border-gray-500 focus-visible:outline-solid focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary-900 focus-visible:ring-4 focus-visible:ring-primary-100 aria-[invalid]:border-red-400 aria-[invalid]:shadow-red-100 aria-[invalid]:focus-visible:outline-red-400 aria-[invalid]:focus-visible:ring-red-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:focus-visible:outline-primary-200 dark:focus-visible:ring-primary-100/30 dark:aria-[invalid]:focus-visible:ring-red-500/30',
        className,
      )}
      id={id}
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      {...props}
    />
  )
}
