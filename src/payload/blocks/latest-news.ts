import type { Block } from 'payload'

const latestNews: Block = {
  slug: 'latestNews',
  labels: {
    plural: 'Aktuelle News',
    singular: 'Aktuelle News',
  },
  interfaceName: 'LatestNewsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
      required: true,
    },
    {
      name: 'amount',
      type: 'number',
      label: 'Anzahl der News',
      required: true,
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

export default latestNews
