import { NotionWebhookEventType } from './NotionWebhookEventType'

/**
 * Represents a Notion webhook event.
 * @see https://developers.notion.com/reference/webhooks-events-delivery
 *
 * Created as there is no official type definition for Notion webhook events.
 */
export type NotionWebhookEvent = {
  id: string // UUID
  timestamp: string // ISO 8601 string
  workspace_id: string // UUID
  subscription_id: string // UUID
  integration_id: string // UUID
  type: NotionWebhookEventType

  authors: Array<{
    id: string // UUID
    type: 'person' | 'bot' | 'agent'
  }>

  accessible_by?: Array<{
    id: string
    type: 'person' | 'bot'
  }>

  attempt_number: number // 1–8

  entity: {
    id: string
    type: 'page' | 'block' | 'database'
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any> // Can be refined based on event type
}
