import type { Block } from 'payload'

const news: Block = {
  slug: 'news',
  labels: {
    plural: 'Alle News',
    singular: 'Alle News',
  },
  interfaceName: 'NewsBlock',
  fields: [
    {
      name: 'amount',
      type: 'number',
      label: 'Anzahl der News pro Seite',
      required: true,
      defaultValue: 10,
    },
  ],
}

export default news
