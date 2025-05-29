import { BlockObjectRequest } from '@notionhq/client'
import { NextRequest, NextResponse } from 'next/server'
import { appendBlockToParent } from 'src/lib/notion/appendBlockToParent'
import { isBakingEventPageUpdated } from 'src/lib/notion/bakingEvent/isBakingEventPageUpdated'
import { deleteBlock } from 'src/lib/notion/deleteBlock'
import { getChildBlocks } from 'src/lib/notion/getChildBlocks'
import { isShoppingListDropdown } from 'src/lib/notion/shoppingList/isShoppingListDropdown'

const BAKING_EVENTS_RECIPE_TABLE_ID = '2018f264-e43e-80f6-b3e0-f24ecbb9e565'

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
    console.log('Creating shopping list block...')
    const newShoppingListBlock: BlockObjectRequest = {
      object: 'block',
      type: 'heading_2',
      heading_2: {
        rich_text: [
          {
            type: 'text',
            text: {
              content: 'Shopping List',
            },
          },
        ],
        children: [
          {
            type: 'paragraph',
            paragraph: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: `(Last Updated: ${new Date().toUTCString()})`,
                  },
                },
              ],
            },
          },
        ],
        is_toggleable: true,
      },
    }
    await appendBlockToParent(bakingEventId, [newShoppingListBlock])
    console.log('Shopping List block created successfully.')
  }

  return NextResponse.json({ received: true })
}
