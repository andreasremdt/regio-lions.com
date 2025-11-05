'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import useFocusTrap from '@/hooks/use-focus-trap'
import useMobileMenu from '@/hooks/use-mobile-menu'

export default function Header() {
  const { isMenuVisible, setIsMenuVisible, tabIndex, menuRef, toggleRef } = useMobileMenu()
  const focusTrapRef = useFocusTrap(isMenuVisible)
  const pathname = usePathname()

  return (
    <header
      ref={focusTrapRef}
      className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 before:absolute before:-top-1/2 before:right-0 before:bottom-32 before:-z-10 before:aspect-square before:w-48 before:rounded-full before:bg-purple-100 before:blur-3xl md:px-8 md:py-8 dark:before:bg-purple-900 print:hidden"
    >
      <Image
        src="https://ik.imagekit.io/6uqkzvybwk/regio-lions/logo.png?updatedAt=1707247965694"
        alt="Regio Lions Logo"
        width={250}
        height={194}
        quality={75}
        loading="eager"
        priority
        className="w-24 rounded-md md:w-32"
      />

      <button
        type="button"
        aria-label={isMenuVisible ? 'Schließe das Hauptmenü' : 'Öffne das Hauptmenü'}
        aria-live="polite"
        ref={toggleRef}
        aria-controls="menu"
        aria-expanded={isMenuVisible}
        onClick={() => setIsMenuVisible(!isMenuVisible)}
        className="hover:text-primary-900 focus-visible:text-primary-900 focus-visible:outline-primary-900 dark:hover:text-primary-200 dark:focus-visible:text-primary-200 dark:focus-visible:outline-primary-200 z-20 cursor-pointer rounded-xs text-gray-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid md:hidden dark:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          aria-hidden="true"
          stroke="currentColor"
          className="z-20 h-10 w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            className={cn({ hidden: isMenuVisible })}
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn({ hidden: !isMenuVisible })}
            d="M6 18 18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <nav
        aria-label="Seitennavigation"
        ref={menuRef}
        className={cn(
          'fixed inset-0 z-10 flex h-screen w-full flex-col justify-center gap-8 bg-white p-12 text-xl transition-opacity md:pointer-events-auto md:static md:h-auto md:w-auto md:flex-row md:bg-transparent md:p-0 md:text-base md:opacity-100 dark:bg-gray-900 dark:md:bg-transparent',
          {
            'pointer-events-none opacity-0': !isMenuVisible,
          },
        )}
        aria-hidden={!isMenuVisible}
        id="menu"
      >
        <Link
          className="hover:text-primary-900 focus-visible:text-primary-900 focus-visible:outline-primary-900 dark:hover:text-primary-200 dark:focus-visible:text-primary-200 dark:focus-visible:outline-primary-200 aria-[current]:text-primary-900 dark:aria-[current]:text-primary-200 rounded-xs font-medium text-gray-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid aria-[current]:underline dark:text-white"
          href="/"
          tabIndex={tabIndex}
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          Home
        </Link>
        <Link
          className="hover:text-primary-900 focus-visible:text-primary-900 focus-visible:outline-primary-900 dark:hover:text-primary-200 dark:focus-visible:text-primary-200 dark:focus-visible:outline-primary-200 aria-[current]:text-primary-900 dark:aria-[current]:text-primary-200 rounded-xs font-medium text-gray-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid aria-[current]:underline dark:text-white"
          href="/news"
          tabIndex={tabIndex}
          aria-current={pathname === '/news' ? 'page' : undefined}
        >
          News
        </Link>
        <Link
          className="hover:text-primary-900 focus-visible:text-primary-900 focus-visible:outline-primary-900 dark:hover:text-primary-200 dark:focus-visible:text-primary-200 dark:focus-visible:outline-primary-200 aria-[current]:text-primary-900 dark:aria-[current]:text-primary-200 rounded-xs font-medium text-gray-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid aria-[current]:underline dark:text-white"
          href="/clubs"
          tabIndex={tabIndex}
          aria-current={pathname === '/clubs' ? 'page' : undefined}
        >
          Clubs
        </Link>
        <a
          className="hover:text-primary-900 focus-visible:text-primary-900 focus-visible:outline-primary-900 dark:hover:text-primary-200 dark:focus-visible:text-primary-200 dark:focus-visible:outline-primary-200 inline-flex items-center gap-x-2 rounded-xs font-medium text-gray-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid dark:text-white"
          href="https://www.3laenderlauf.org/"
          target="_blank"
          rel="noopener nofollow noreferrer"
          tabIndex={tabIndex}
        >
          3-Länderlauf{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 -translate-y-px text-gray-400 dark:text-gray-200"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            ></path>
          </svg>
        </a>
        <Link
          className="hover:text-primary-900 focus-visible:text-primary-900 focus-visible:outline-primary-900 dark:hover:text-primary-200 dark:focus-visible:text-primary-200 dark:focus-visible:outline-primary-200 aria-[current]:text-primary-900 dark:aria-[current]:text-primary-200 rounded-xs font-medium text-gray-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid aria-[current]:underline dark:text-white"
          href="/kontakt"
          tabIndex={tabIndex}
          aria-current={pathname === '/kontakt' ? 'page' : undefined}
        >
          Kontakt
        </Link>
      </nav>
    </header>
  )
}
