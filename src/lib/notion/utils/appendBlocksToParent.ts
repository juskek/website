'use server'

import { BlockObjectRequest } from '@notionhq/client'
import { notionClient } from '../notionClient'

export async function appendBlocksToParent(parentId: string, blocks: BlockObjectRequest[]) {
  const response = await notionClient.blocks.children.append({
    block_id: parentId,
    children: blocks,
  })
}
