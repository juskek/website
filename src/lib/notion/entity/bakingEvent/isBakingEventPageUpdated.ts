import { NotionWebhookEvent } from '../../types/NotionWebhookEvent'

const BAKING_EVENTS_TABLE_ID = '2018f264-e43e-806c-9161-f9712f858c51'

export function isBakingEventPageUpdated(body: NotionWebhookEvent) {
  const isBakingEventsTableEvent =
    body.data.parent.type === 'database' && body.data.parent.id === BAKING_EVENTS_TABLE_ID

  const pageUpdated =
    body.type === 'page.content_updated' || body.type === 'page.properties_updated'

  const isBakingEventPageUpdated = isBakingEventsTableEvent && pageUpdated
  return isBakingEventPageUpdated
}
