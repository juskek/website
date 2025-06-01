import { deleteBlock } from '../../utils/deleteBlock'
import { getChildBlocks } from '../../utils/getChildBlocks'
import { isShoppingListDropdown } from './isShoppingListDropdown'

export async function deleteShoppingListBlock(bakingEventId: string) {
  const blocks = await getChildBlocks(bakingEventId)

  const shoppingListBlock = blocks.find(isShoppingListDropdown)

  if (shoppingListBlock) {
    console.log('Deleting shopping list block:', shoppingListBlock.id)
    await deleteBlock(shoppingListBlock.id)
  }
}
