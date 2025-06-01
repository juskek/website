import { BlockObjectRequest } from '@notionhq/client'

export function shoppingListBlockTemplate(): BlockObjectRequest {
  return {
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
}
