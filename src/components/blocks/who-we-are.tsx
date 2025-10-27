import type { WhoWeAreBlock } from '@/payload-types'
import Prose from './prose'

export default function WhoWeAre({ title, content, stats }: WhoWeAreBlock) {
  return (
    <section className="py-16 md:py-32 lg:py-48">
      <h2 className="h2 mb-8">{title}</h2>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <Prose content={content} className="md:w-3/5" />

        <ul className="space-y-8 md:w-2/5">
          {stats.map((stat) => (
            <li key={stat.id} className="md:text-xl">
              <span className="h3 block md:mb-2">{stat.value}</span>
              {stat.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
