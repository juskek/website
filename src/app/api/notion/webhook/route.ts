import { NextRequest, NextResponse } from 'next/server'
import { isBakingEventPageUpdated } from 'src/lib/notion/entity/bakingEvent/isBakingEventPageUpdated'
import { processBakingEventPageUpdate } from 'src/lib/notion/entity/bakingEvent/processBakingEventPageUpdate'
import { isUpdateByPersonEvent } from 'src/lib/notion/utils/isUpdateByPersonEvent'
import { isVerificationEvent } from 'src/lib/notion/utils/isVerificationEvent'

export async function POST(req: NextRequest) {
  console.log('Received POST request to /api/notion/webhook')
  const body = await req.json()

  if (isVerificationEvent(body)) {
    return NextResponse.json({ verification_token: body['verification_token'] })
  }

  if (!isUpdateByPersonEvent(body)) {
    console.log('Ignoring update from bot')
    return NextResponse.json({ received: true })
  }

  console.log('Received webhook:', body)

  if (isBakingEventPageUpdated(body)) {
    processBakingEventPageUpdate(body)
  }

  return NextResponse.json({ received: true })
}
