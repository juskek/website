import { NotionWebhookEvent } from '../types/NotionWebhookEvent'

export function isUpdateByPersonEvent(body: NotionWebhookEvent) {
  const isUpdateByPerson = body.authors.some((author) => author.type === 'person')

  return isUpdateByPerson
}
