import type { Block } from 'payload'

const clubs: Block = {
  slug: 'clubs',
  labels: {
    plural: 'Clubs',
    singular: 'Clubs',
  },
  interfaceName: 'ClubsBlock',
  fields: [
    {
      name: 'countries',
      label: 'Clubs pro Land',
      labels: {
        plural: 'Länder',
        singular: 'Land',
      },
      type: 'array',
      required: true,
      fields: [
        {
          name: 'country',
          type: 'select',
          options: [
            {
              label: 'Deutschland',
              value: 'Deutschland',
            },
            {
              label: 'Frankreich',
              value: 'Frankreich',
            },
            {
              label: 'Schweiz',
              value: 'Schweiz',
            },
          ],
          label: 'Land',
          required: true,
        },
        {
          name: 'clubs',
          type: 'relationship',
          label: 'Clubs',
          required: true,
          relationTo: 'clubs',
          hasMany: true,
        },
      ],
    },
  ],
}
export default clubs
