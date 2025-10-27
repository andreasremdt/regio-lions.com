import type { CollectionConfig } from 'payload'
import hero from '../blocks/hero'
import grid from '../blocks/grid'
import latestNews from '../blocks/latest-news'
import imageWithText from '../blocks/image-with-text'
import whoWeAre from '../blocks/who-we-are'
import image from '../blocks/image'
import richText from '../blocks/rich-text'
import header from '../blocks/header'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Titel',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Beschreibung',
      type: 'textarea',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Der Slug wird verwendet, um die Seite im Browser zu identifizieren.',
      },
    },
    {
      name: 'content',
      label: 'Inhalt',
      type: 'blocks',
      blocks: [hero, grid, latestNews, imageWithText, whoWeAre, image, richText, header],
    },
  ],
}

export default Pages
