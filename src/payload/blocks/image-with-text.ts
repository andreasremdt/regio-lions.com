import type { Block } from 'payload'

const imageWithText: Block = {
  slug: 'imageWithText',
  labels: {
    plural: 'Bild mit Text',
    singular: 'Bild mit Text',
  },
  interfaceName: 'ImageWithTextBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Überschrift',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Bild',
    },
    {
      name: 'text',
      type: 'richText',
      label: 'Inhalt',
      required: true,
    },
  ],
}

export default imageWithText
