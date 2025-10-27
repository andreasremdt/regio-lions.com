import type { CollectionConfig } from 'payload'

const Clubs: CollectionConfig = {
  slug: 'clubs',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'url',
          label: 'Webseite',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'country',
          label: 'Land',
          type: 'select',
          required: true,

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
        },
      ],
    },
    {
      name: 'image',
      label: 'Bild',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
  ],
}

export default Clubs
