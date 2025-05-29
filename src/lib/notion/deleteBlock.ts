'use server'

import { notionClient } from './notionClient'

export async function deleteBlock(blockId: string) {
  await notionClient.blocks.delete({
    block_id: blockId,
  })
}
