'use server'

import { BlockObjectRequest } from '@notionhq/client'
import { notionClient } from '../notionClient'

export async function appendBlockToParent(parentId: string, block: BlockObjectRequest) {
  const response = await notionClient.blocks.children.append({
    block_id: parentId,
    children: [block],
  })
  const blockId = response.results[0]?.id
  return blockId
}
