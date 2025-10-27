import type { GridBlock } from '@/payload-types'

export default function Grid({ title, description, items }: GridBlock) {
  return (
    <section className="py-16 md:py-32 lg:py-48">
      <h2 className="h2 mb-8">{title}</h2>
      <p className="mb-12 text-xl md:w-2/3">{description}</p>

      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <h3 className="h3 mb-2">{item.title}</h3>
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  )
}
