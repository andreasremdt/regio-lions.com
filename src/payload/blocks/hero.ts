import type { Block } from 'payload'

const hero: Block = {
  slug: 'hero',
  labels: {
    plural: 'Heroes',
    singular: 'Hero',
  },
  interfaceName: 'HeroBlock',
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
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Bilder',
      hasMany: true,
      maxRows: 5,
      minRows: 5,
      admin: {
        description: 'Es müssen genau 5 Bilder ausgewählt werden.',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'buttonText',
          type: 'text',
          label: 'Text für den Button',
          required: true,
        },
        {
          name: 'buttonLink',
          type: 'text',
          label: 'Link für den Button',
          required: true,
        },
      ],
    },
  ],
}

export default hero
