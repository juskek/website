import { NextRequest, NextResponse } from 'next/server'
import { isBakingEventPageUpdated } from 'src/lib/notion/entity/bakingEvent/isBakingEventPageUpdated'
import { enrichRecipesWithIngredients } from 'src/lib/notion/entity/recipe/enrichRecipeWithIngredients'
import { getRecipeIdsForBakingEventId } from 'src/lib/notion/entity/recipe/getRecipeIdsForBakingEventId'
import { getRecipes } from 'src/lib/notion/entity/recipe/getRecipes'
import { computeShoppingList } from 'src/lib/notion/entity/shoppingList/computeShoppingList'
import { isShoppingListDropdown } from 'src/lib/notion/entity/shoppingList/isShoppingListDropdown'
import { shoppingListBlockTemplate } from 'src/lib/notion/entity/shoppingList/shoppingListBlockTemplate'
import { appendBlockToParent } from 'src/lib/notion/utils/appendBlockToParent'
import { deleteBlock } from 'src/lib/notion/utils/deleteBlock'
import { getChildBlocks } from 'src/lib/notion/utils/getChildBlocks'

export async function POST(req: NextRequest) {
  console.log('Received POST request to /api/notion/webhook')
  const body = await req.json()

  if ('verification_token' in body) {
    console.log('Webhook verification token received:', body['verification_token'])
    return NextResponse.json({ verification_token: body['verification_token'] })
  }

  console.log('Received webhook:', body)

  const isUpdateByPerson = body.authors.some((author) => author.type === 'person')
  if (!isUpdateByPerson) {
    console.log('Ignoring update from bot')
    return NextResponse.json({ received: true })
  }

  if (isBakingEventPageUpdated(body)) {
    const bakingEventId = body.entity.id
    console.log('Baking Event Page updated, bakingEventId:', bakingEventId)

    const blocks = await getChildBlocks(bakingEventId)

    const shoppingListBlock = blocks.find(isShoppingListDropdown)

    if (shoppingListBlock) {
      console.log('Found Shopping List block, deleting...')
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
    await appendBlockToParent(bakingEventId, [shoppingListBlockTemplate()])
    console.log('Shopping List block created successfully.')
  }

  return NextResponse.json({ received: true })
}
