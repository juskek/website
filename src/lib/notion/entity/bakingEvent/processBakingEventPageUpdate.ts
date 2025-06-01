import { NotionWebhookEvent } from '../../types/NotionWebhookEvent'
import { appendBlocksToParent } from '../../utils/appendBlocksToParent'
import { appendBlockToParent } from '../../utils/appendBlockToParent'
import { enrichRecipesWithIngredients } from '../recipe/enrichRecipeWithIngredients'
import { getRecipesForBakingEventId } from '../recipe/getRecipeIdsForBakingEventId'
import { enrichRecipesWithBasicInfo } from '../recipe/getRecipes'
import { computeShoppingList } from '../shoppingList/computeShoppingList'
import { deleteShoppingListBlock } from '../shoppingList/deleteShoppingListBlock'
import { generateShoppingListBlocks } from '../shoppingList/generateShoppingListBlocks'
import { shoppingListBlockTemplate } from '../shoppingList/shoppingListBlockTemplate'

export async function processBakingEventPageUpdate(body: NotionWebhookEvent) {
  const bakingEventId = body.entity.id

  await deleteShoppingListBlock(bakingEventId)

  const recipes = await getRecipesForBakingEventId(bakingEventId)
  await enrichRecipesWithBasicInfo(recipes)
  await enrichRecipesWithIngredients(recipes)

  const shoppingList = computeShoppingList(recipes)

  const shoppingListDropdownBlock = shoppingListBlockTemplate()
  const shoppingListDropdownBlockId = await appendBlockToParent(
    bakingEventId,
    shoppingListDropdownBlock
  )

  const shoppingListBlocks = generateShoppingListBlocks(shoppingList)
  await appendBlocksToParent(shoppingListDropdownBlockId, shoppingListBlocks)

  console.log('Shopping List block created successfully.')
}
