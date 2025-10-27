import type { Block } from 'payload'

const grid: Block = {
  slug: 'grid',
  labels: {
    plural: 'Grids',
    singular: 'Grid',
  },
  interfaceName: 'GridBlock',
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
      name: 'items',
      type: 'array',
      label: 'Elemente',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Überschrift',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          label: 'Text',
          required: true,
        },
      ],
    },
  ],
}

export default grid
