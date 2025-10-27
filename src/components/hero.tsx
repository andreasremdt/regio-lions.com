import type { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

function Hero({ title, children }: Props) {
  return (
    <header className="py-8">
      <h1 className="h1 mb-8" itemProp="headline">
        {title}
      </h1>
      <p className="mb-6 text-lg md:mb-12 md:w-2/3 md:text-xl lg:w-1/2" itemProp="abstract">
        {children}
      </p>
    </header>
  )
}

export default Hero
