import type { CollectionConfig } from 'payload'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

const news: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Titel',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
        description:
          'Der Slug wird automatisch aus dem Titel generiert, kann aber angepasst werden.',
      },
    },
    {
      name: 'publishedAt',
      label: 'Veröffentlichungsdatum',
      type: 'date',
      required: true,
      defaultValue: new Date(),
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'published',
      label: 'Veröffentlicht',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'excerpt',
      label: 'Beschreibung',
      type: 'textarea',
      required: true,
    },
    {
      name: 'thumbnail',
      label: 'Vorschaubild',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'thumbnailText',
      label: 'Text für das Vorschaubild',
      type: 'text',
    },
    {
      name: 'content',
      label: 'Inhalt',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              {
                slug: 'videoId',
                labels: {
                  plural: 'YouTube Videos',
                  singular: 'YouTube Video',
                },
                fields: [
                  {
                    name: 'videoId',
                    type: 'text',
                    required: true,
                    label: 'YouTube Video ID',
                    admin: {
                      description:
                        'Die YouTube Video ID ist die ID des Videos, die am Ende der URL steht. Die URL sieht zum Beispiel so aus: https://www.youtube.com/watch?v=dQw4w9WgXc4',
                    },
                  },
                ],
              },
            ],
            inlineBlocks: [],
          }),
        ],
      }),
    },
    {
      name: 'gallery',
      label: 'Galerie',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
  ],
}

export default news
