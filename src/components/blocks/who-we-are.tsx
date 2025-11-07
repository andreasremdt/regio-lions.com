import type { WhoWeAreBlock } from '@/payload-types'
import Prose from './prose'
import Heading from '../ui/heading'

export default function WhoWeAre({ title, content, stats }: WhoWeAreBlock) {
  return (
    <section className="py-16 md:py-32 lg:py-48">
      <Heading level="h2" tag="h2" className="mb-4 md:mb-8">
        {title}
      </Heading>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <Prose content={content} className="md:w-3/5" />

        <ul className="space-y-8 md:w-2/5">
          {stats.map((stat) => (
            <li key={stat.id} className="md:text-xl">
              <Heading level="h3" tag="span" className="block md:mb-2">
                {stat.value}
              </Heading>
              {stat.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
