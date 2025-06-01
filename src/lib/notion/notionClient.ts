import { Client } from '@notionhq/client'

if (typeof window !== 'undefined') {
  throw new Error('Notion client must only be used server-side')
}

export const notionClient = new Client({
  auth: process.env.NOTION_API_KEY,
})
