import type { Page } from '@/payload-types'
import Header from './blocks/header'
import Prose from './blocks/prose'

function BlockRenderer({ blocks }: { blocks: Page['content'] }) {
  if (!blocks) return null

  return blocks.map((block) => {
    switch (block.blockType) {
      case 'header':
        return <Header {...block} key={block.id} />
      case 'richText':
        return <Prose {...block} key={block.id} />
    }
  })
}

export default BlockRenderer
