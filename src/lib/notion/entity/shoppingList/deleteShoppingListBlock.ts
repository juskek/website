import { deleteBlock } from '../../utils/deleteBlock'
import { getChildBlocks } from '../../utils/getChildBlocks'
import { isShoppingListDropdown } from './isShoppingListDropdown'

export async function deleteShoppingListBlock(bakingEventId: string) {
  const blocks = await getChildBlocks(bakingEventId)

  const shoppingListBlock = blocks.find(isShoppingListDropdown)

  if (shoppingListBlock) {
    await deleteBlock(shoppingListBlock.id)
  }
}
