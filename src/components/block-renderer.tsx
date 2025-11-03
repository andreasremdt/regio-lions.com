import type { Page } from '@/payload-types'
import Header from './blocks/header'
import Prose from './blocks/prose'
import Hero from './blocks/hero'
import WhoWeAre from './blocks/who-we-are'
import ImageWithText from './blocks/image-with-text'
import Grid from './blocks/grid'
import News from './blocks/news'
import Clubs from './blocks/clubs'
import ContactForm from './blocks/contact-form'

type Props = {
  blocks: Page['content']
  pageNumber: number
}

export default function BlockRenderer({ blocks, pageNumber }: Props) {
  if (!blocks) return null

  return blocks.map((block) => {
    switch (block.blockType) {
      case 'header':
        return <Header {...block} key={block.id} />
      case 'richText':
        return <Prose {...block} key={block.id} />
      case 'hero':
        return <Hero {...block} key={block.id} />
      case 'whoWeAre':
        return <WhoWeAre {...block} key={block.id} />
      case 'imageWithText':
        return <ImageWithText {...block} key={block.id} />
      case 'grid':
        return <Grid {...block} key={block.id} />
      case 'news':
        return <News {...block} key={block.id} pageNumber={pageNumber} />
      case 'clubs':
        return <Clubs {...block} key={block.id} />
      case 'contactForm':
        return <ContactForm {...block} key={block.id} />
      default:
        return null
    }
  })
}
