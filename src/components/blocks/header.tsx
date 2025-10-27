import type { ReactNode } from 'react'

type Props = {
  title: string
  description: string
}

function Header({ title, description }: Props) {
  return (
    <header className="py-8">
      <h1 className="h1 mb-8" itemProp="headline">
        {title}
      </h1>
      <p className="mb-6 text-lg md:mb-12 md:w-2/3 md:text-xl" itemProp="abstract">
        {description}
      </p>
    </header>
  )
}

export default Header
