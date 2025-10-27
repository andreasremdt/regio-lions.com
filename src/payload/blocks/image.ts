import type { Block } from 'payload'

const image: Block = {
  slug: 'image',
  labels: {
    plural: 'Bilder',
    singular: 'Bild',
  },
  interfaceName: 'ImageBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Bild',
      required: true,
    },
  ],
}

export default image
