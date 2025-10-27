import type { Block } from 'payload'

const header: Block = {
  slug: 'header',
  labels: {
    plural: 'Header',
    singular: 'Header',
  },
  interfaceName: 'HeaderBlock',
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
  ],
}

export default header
