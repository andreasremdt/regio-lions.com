import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type BaseProps = {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  className?: string
}

type ButtonProps = BaseProps &
  ComponentPropsWithoutRef<'button'> & {
    href?: never
  }

type LinkProps = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> & {
    href: string
    type?: never
  }

type Props = ButtonProps | LinkProps

export default function Button({
  children,
  className,
  type = 'button',
  variant = 'primary',
  href,
  ...props
}: Props) {
  const baseClasses = cn(
    'inline-flex h-12 items-center gap-x-2 cursor-pointer rounded-md border-2 px-6 font-medium focus-visible:outline-hidden focus-visible:ring-4 disabled:pointer-events-none disabled:cursor-not-allowed print:hidden',
    {
      'border-primary-900 bg-primary-900 text-white hover:bg-white hover:text-primary-900 focus-visible:bg-white focus-visible:text-primary-900 focus-visible:ring-primary-100 disabled:border-gray-500 disabled:bg-gray-500 dark:border-primary-200 dark:bg-primary-200 dark:text-primary-900 dark:hover:border-white dark:focus-visible:border-white dark:focus-visible:ring-white/60':
        variant === 'primary',
      'border-primary-900 bg-white text-primary-900 hover:bg-primary-900 hover:text-white focus-visible:bg-primary-900 focus-visible:text-white focus-visible:ring-primary-200 disabled:border-gray-500 disabled:text-gray-500 dark:border-primary-200 dark:bg-transparent dark:text-primary-200 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white dark:focus-visible:border-white dark:focus-visible:bg-transparent dark:focus-visible:text-white dark:focus-visible:ring-white/30':
        variant === 'secondary',
    },
    className,
  )

  if (href) {
    return (
      <Link
        prefetch={href ? href.startsWith('/') : undefined}
        href={href}
        className={baseClasses}
        {...(props as Omit<ComponentPropsWithoutRef<typeof Link>, 'href'>)}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={baseClasses} type={type} {...(props as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}
