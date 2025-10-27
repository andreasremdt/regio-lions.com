import type { Page } from '@/payload-types'
import Header from './blocks/header'
import Prose from './blocks/prose'
import Hero from './blocks/hero'
import WhoWeAre from './blocks/who-we-are'
import ImageWithText from './blocks/image-with-text'
import Grid from './blocks/grid'

function BlockRenderer({ blocks }: { blocks: Page['content'] }) {
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
      default:
        return null
    }
  })
}

export default BlockRenderer
