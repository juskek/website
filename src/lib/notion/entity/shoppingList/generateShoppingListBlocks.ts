import { BlockObjectRequest } from '@notionhq/client/build/src/api-endpoints'

export function generateShoppingListBlocks(shoppingList: {
  totalCost: number
  shoppingList: {
    id: string
    name: string
    quantityGrams: number
    estimatedCost: number
  }[]
}): BlockObjectRequest[] {
  return [
    {
      object: 'block',
      type: 'heading_2',
      heading_2: {
        is_toggleable: false,
        rich_text: [
          {
            type: 'text',
            text: {
              content: '🛒 Shopping Checklist',
            },
          },
        ],
      },
    },
    ...shoppingList.shoppingList.map(
      (item): BlockObjectRequest => ({
        object: 'block',
        type: 'to_do',
        to_do: {
          checked: false,
          rich_text: [
            {
              type: 'text',
              text: {
                content: `${item.name}: ${item.quantityGrams}g – £${item.estimatedCost.toFixed(2)}`,
              },
            },
          ],
        },
      })
    ),
    {
      object: 'block',
      type: 'paragraph',
      paragraph: {
        rich_text: [
          {
            type: 'text',
            text: {
              content: `💰 Total Estimated Cost: £${shoppingList.totalCost.toFixed(2)}`,
            },
          },
        ],
      },
    },
  ]
}
