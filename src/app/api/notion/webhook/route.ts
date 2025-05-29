import { NextRequest, NextResponse } from 'next/server'
import { appendBlockToParent } from 'src/lib/notion/appendBlockToParent'
import { isBakingEventPageUpdated } from 'src/lib/notion/bakingEvent/isBakingEventPageUpdated'
import { getRecipeIdsForBakingEventId } from 'src/lib/notion/database/getRecipeIdsForBakingEventId'
import { deleteBlock } from 'src/lib/notion/deleteBlock'
import { getChildBlocks } from 'src/lib/notion/getChildBlocks'
import { isShoppingListDropdown } from 'src/lib/notion/shoppingList/isShoppingListDropdown'
import { shoppingListBlockTemplate } from 'src/lib/notion/shoppingList/shoppingListBlockTemplate'

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

    await appendBlockToParent(bakingEventId, [shoppingListBlockTemplate()])
    console.log('Shopping List block created successfully.')
  }

  return NextResponse.json({ received: true })
}
