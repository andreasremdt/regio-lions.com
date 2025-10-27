import { cn } from '@/lib/utils'
import { Roboto } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import JumpToContent from '@/components/jump-to-content'
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
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={cn(
          roboto.variable,
          'antialiased leading-relaxed text-gray-600 dark:bg-gray-900 dark:text-gray-100',
        )}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <JumpToContent />

        <Header />

        <main id="content" className="mx-auto max-w-7xl px-4 md:px-8" itemProp="mainContentOfPage">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}

export default Layout
