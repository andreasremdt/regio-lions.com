import Heading from '../ui/heading'

type Props = {
  title: string
  description: string
}

export default function Header({ title, description }: Props) {
  return (
    <header className="py-8">
      <Heading level="h1" tag="h1" className="mb-8" itemProp="headline">
        {title}
      </Heading>
      <p className="mb-6 text-lg md:mb-12 md:w-2/3 md:text-xl" itemProp="abstract">
        {description}
      </p>
    </header>
  )
}
