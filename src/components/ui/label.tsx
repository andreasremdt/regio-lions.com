import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'label'> & {
  optional?: boolean
}

export default function Label({ children, optional, className, ...props }: Props) {
  return (
    <label
      className={cn('mb-1 flex items-center font-medium text-gray-900 dark:text-white', className)}
      {...props}
    >
      {children}

      {optional ? (
        <span className="ml-auto text-xs font-normal text-gray-500 uppercase">optional</span>
      ) : null}
    </label>
  )
}
