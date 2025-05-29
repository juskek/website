import { BlockObjectResponse } from '@notionhq/client'

export const isShoppingListDropdown = (block: BlockObjectResponse) =>
  block.type === 'heading_2' &&
  block.heading_2.is_toggleable &&
  block.heading_2.rich_text.some(
    (rich_text_object) =>
      rich_text_object.type === 'text' && rich_text_object.text.content === 'Shopping List'
  )
