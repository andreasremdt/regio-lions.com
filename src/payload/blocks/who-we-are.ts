import type { Block } from 'payload'

const whoWeAre: Block = {
  slug: 'whoWeAre',
  labels: {
    plural: 'Wer wir sind',
    singular: 'Wer wir sind',
  },
  interfaceName: 'WhoWeAreBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Überschrift',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Inhalt',
      required: true,
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistiken',
      required: true,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Wert',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Beschreibung',
          required: true,
        },
      ],
    },
  ],
}

export default whoWeAre
