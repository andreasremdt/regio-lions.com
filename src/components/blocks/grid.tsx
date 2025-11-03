import type { GridBlock } from '@/payload-types'
import Heading from '../ui/heading'

export default function Grid({ title, description, items }: GridBlock) {
  return (
    <section className="py-16 md:py-32 lg:py-48">
      <Heading level="h2" tag="h2" className="mb-8">
        {title}
      </Heading>
      <p className="mb-12 text-xl md:w-2/3">{description}</p>

      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <Heading level="h3" tag="h3" className="mb-2">
              {item.title}
            </Heading>
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  )
}
