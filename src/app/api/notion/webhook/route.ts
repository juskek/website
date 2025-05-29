import { NextRequest, NextResponse } from 'next/server'
import { getBlockChildren } from 'src/lib/notion/getBlockChildren'
import { isShoppingListDropdown } from 'src/lib/notion/shoppingList/isShoppingListDropdown'

const BAKING_EVENTS_RECIPE_TABLE_ID = '2018f264-e43e-80f6-b3e0-f24ecbb9e565'
const BAKING_EVENTS_TABLE_ID = '2018f264-e43e-806c-9161-f9712f858c51'

export async function POST(req: NextRequest) {
  console.log('Received POST request to /api/notion/webhook')
  const body = await req.json()

  if ('verification_token' in body) {
    console.log('Webhook verification token received:', body['verification_token'])
    return NextResponse.json({ verification_token: body['verification_token'] })
  }

  console.log('Received webhook:', body)

  const isBakingEventsTableEvent =
    body.data.parent.type === 'database' && body.data.parent.id === BAKING_EVENTS_TABLE_ID

  const pageUpdated =
    body.type === 'page.content_updated' || body.type === 'page.properties_updated'

  const isBakingEventPageUpdated = isBakingEventsTableEvent && pageUpdated

  if (isBakingEventPageUpdated) {
    const pageId = body.entity.id
    console.log('Baking Event Page updated, page id:', pageId)

    const blocks = await getBlockChildren(pageId)

    const shoppingListBlock = blocks.find(isShoppingListDropdown)
    if (shoppingListBlock) {
      console.log('Found Shopping List block:', shoppingListBlock.id)
    } else {
      console.log('No Shopping List block found in Baking Event page:', pageId)
    }
  }

  const isBakingEventsRecipesTableEvent =
    body.data.parent.type === 'database' && body.data.parent.id === BAKING_EVENTS_RECIPE_TABLE_ID
  if (isBakingEventsRecipesTableEvent) {
    console.log('Baking Event Recipe Table updated, Baking Event x Recipe id:', body.entity.id)
  }

  return NextResponse.json({ received: true })
}
