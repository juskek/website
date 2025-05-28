import { NextRequest, NextResponse } from 'next/server'

const BAKING_EVENTS_RECIPE_TABLE_ID = '2018f264-e43e-80f6-b3e0-f24ecbb9e565'

export async function POST(req: NextRequest) {
  console.log('Received POST request to /api/notion/webhook')
  const body = await req.json()

  if ('verification_token' in body) {
    console.log('Webhook verification token received:', body['verification_token'])
    return NextResponse.json({ verification_token: body['verification_token'] })
  }

  console.log('Received webhook:', body)

  const isBakingEventsRecipesTableEvent =
    body.data.parent.type === 'database' && body.data.parent.id === BAKING_EVENTS_RECIPE_TABLE_ID
  if (isBakingEventsRecipesTableEvent) {
    console.log('Baking Event Recipe Table updated, entity id:', body.entity.id)
  }

  return NextResponse.json({ received: true })
}
