import { appendBlocksToParent } from '../../utils/appendBlocksToParent'
import { appendBlockToParent } from '../../utils/appendBlockToParent'
import { deleteBlock } from '../../utils/deleteBlock'
import { getChildBlocks } from '../../utils/getChildBlocks'
import { enrichRecipesWithIngredients } from '../recipe/enrichRecipeWithIngredients'
import { getRecipeIdsForBakingEventId } from '../recipe/getRecipeIdsForBakingEventId'
import { getRecipes } from '../recipe/getRecipes'
import { computeShoppingList } from '../shoppingList/computeShoppingList'
import { generateShoppingListBlocks } from '../shoppingList/generateShoppingListBlocks'
import { isShoppingListDropdown } from '../shoppingList/isShoppingListDropdown'
import { shoppingListBlockTemplate } from '../shoppingList/shoppingListBlockTemplate'

export async function processBakingEventPageUpdate(body: any) {
  const bakingEventId = body.entity.id

  const blocks = await getChildBlocks(bakingEventId)

  const shoppingListBlock = blocks.find(isShoppingListDropdown)

  if (shoppingListBlock) {
    await deleteBlock(shoppingListBlock.id)
  }

  const recipeIds = await getRecipeIdsForBakingEventId(bakingEventId)
  console.log('Creating shopping list block...')
  const recipes = await getRecipes(recipeIds)
  await enrichRecipesWithIngredients(recipes)
  console.log('Recipes retrieved:')
  console.dir(recipes, { depth: null })
  const shoppingList = computeShoppingList(recipes)

  console.log('Shopping list computed:')
  console.dir(shoppingList, { depth: null })

  const shoppingListDropdownBlockId = await appendBlockToParent(
    bakingEventId,
    shoppingListBlockTemplate()
  )

  await appendBlocksToParent(shoppingListDropdownBlockId, generateShoppingListBlocks(shoppingList))

  console.log('Shopping List block created successfully.')
}
