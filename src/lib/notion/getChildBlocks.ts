'use server'

import { notionClient } from './notionClient'

export async function getChildBlocks(blockId: string) {
  const response = await notionClient.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  })

  return response.results
}
