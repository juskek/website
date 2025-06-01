'use server'

import { notionClient } from '../notionClient'

export async function deleteBlock(blockId: string) {
  console.log('Deleting block with ID:', blockId)
  await notionClient.blocks.delete({
    block_id: blockId,
  })
}
