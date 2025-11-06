import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { de } from '@payloadcms/translations/languages/de'
import { en } from '@payloadcms/translations/languages/en'

import users from './payload/collections/users'
import media from './payload/collections/media'
import clubs from './payload/collections/clubs'
import pages from './payload/collections/pages'
import news from './payload/collections/news'
import messages from './payload/collections/messages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [users, media, clubs, pages, news, messages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
    connectOptions: {
      dbName: process.env.DATABASE_NAME,
      appName: process.env.DATABASE_APP_NAME,
      retryWrites: true,
      writeConcern: {
        w: 'majority',
      },
    },
  }),
  email: nodemailerAdapter({
    defaultFromAddress: 'no-reply@regio-lions.com',
    defaultFromName: 'Regio Lions',
    transportOptions: {
      host: process.env.EMAIL_SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.EMAIL_SMTP_USER,
        pass: process.env.EMAIL_SMTP_PASSWORD,
      },
    },
  }),
  graphQL: {
    disable: true,
  },
  i18n: {
    supportedLanguages: { de, en },
    fallbackLanguage: 'de',
  },
})
