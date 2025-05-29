/**
 * Represents the type of events that can be received from Notion webhooks.
 * @see https://developers.notion.com/reference/webhooks-events-delivery
 *
 * Created as there is no official type definition for Notion webhook event types.
 */
export type NotionWebhookEventType =
  | 'page.content_updated'
  | 'page.created'
  | 'page.deleted'
  | 'page.locked'
  | 'page.moved'
  | 'page.properties_updated'
  | 'page.undeleted'
  | 'page.unlocked'
  | 'database.content_updated'
  | 'database.created'
  | 'database.deleted'
  | 'database.moved'
  | 'database.schema_updated'
  | 'database.undeleted'
  | 'comment.created'
  | 'comment.deleted'
  | 'comment.updated'
