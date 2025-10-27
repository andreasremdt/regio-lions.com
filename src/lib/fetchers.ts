import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Club } from '@/payload-types'

export const getClubs = cache(async () => {
  const payload = await getPayload({ config })

  const clubs = await payload.find({
    collection: 'clubs',
    limit: 1000,
    pagination: false,
    draft: false,
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
