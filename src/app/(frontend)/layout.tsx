import { cn } from '@/lib/utils'
import { Roboto } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Button from '@/components/ui/button'
import '@/styles/globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata = {
  description: {
    default:
      'Regio Lions ist ein Verbund von verschiedenen Lions Clubs aus dem Dreiländereck Deutschland / Frankreich / Schweiz',
  },
  title: {
    default: 'Regio Lions',
    template: '%s | Regio Lions',
  },
  authors: [{ name: 'Andreas Remdt', url: 'https://andreasremdt.com' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://ik.imagekit.io" />
      </head>

      <body
        className={cn(
          roboto.variable,
          'leading-relaxed text-gray-600 antialiased dark:bg-gray-900 dark:text-gray-100',
        )}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <Button
          href="#content"
          className="absolute -top-1 left-1/2 z-10 -translate-x-1/2 -translate-y-full rounded-t-none transition-transform focus:translate-y-0"
        >
          Zum Inhalt springen
        </Button>

        <Header />

        <main id="content" className="mx-auto max-w-7xl px-4 md:px-8" itemProp="mainContentOfPage">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
