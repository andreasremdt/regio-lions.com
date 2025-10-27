import type { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      label: 'Alternativer Text',
      type: 'text',
      admin: {
        description:
          'Dieser Text wird für Suchmaschinen und Menschen mit Sehbehinderungen benötigt.',
      },
    },
  ],
  upload: true,
}

export default Media
