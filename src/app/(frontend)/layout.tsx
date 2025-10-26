import { cn } from '@/lib/utils'
import { Roboto } from 'next/font/google'
import '@/styles/globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(roboto.variable)}>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout