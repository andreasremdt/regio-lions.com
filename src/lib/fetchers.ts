import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Club } from '@/payload-types'
import { draftMode } from 'next/headers'

export const getClubs = cache(async () => {
  const { isEnabled } = await draftMode()
  const payload = await getPayload({ config })

  const clubs = await payload.find({
    collection: 'clubs',
    limit: 1000,
    pagination: false,
    draft: isEnabled,
  })

  const clubsByCountry: Record<string, Club[]> = {}

  for (const club of clubs.docs) {
    if (clubsByCountry[club.country]) {
      clubsByCountry[club.country].push(club)
    } else {
      clubsByCountry[club.country] = [club]
    }
  }

  return clubsByCountry
})

export const getAllNews = cache(async (limit: number = 10, page: number = 1) => {
  const { isEnabled } = await draftMode()
  const payload = await getPayload({ config })

  const news = await payload.find({
    collection: 'news',
    limit,
    page,
    pagination: true,
    draft: isEnabled,
  })

  return news
})

export const getNewsBySlug = cache(async (slug: string) => {
  const { isEnabled } = await draftMode()
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'news',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
    draft: isEnabled,
  })

  return result.docs[0]
})

export const getPageBySlug = cache(async function getPageBySlug(slug: string) {
  const { isEnabled } = await draftMode()
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'pages',
    draft: isEnabled,
    pagination: false,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs[0]
})

export const getAllPages = cache(async function getAllPages() {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'pages',
    pagination: false,
    draft: false,
    limit: 1000,
  })

  return result.docs
})
