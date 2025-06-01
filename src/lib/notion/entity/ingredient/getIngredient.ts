import { notionClient } from '../../notionClient'
import { Ingredient } from './Ingredient'

export async function getIngredient(ingredientId: string): Promise<Ingredient> {
  console.log('Getting ingredient for ID:', ingredientId)

  const page = await notionClient.pages.retrieve({ page_id: ingredientId })

  if (page.object !== 'page' || !('properties' in page)) {
    throw new Error(`Invalid page object for ingredient ID ${ingredientId}`)
  }

  const props = page.properties
  const nameProp = props['Name']
  const priceProp = props['Price (per kg)']

  const name = nameProp?.type === 'title' ? nameProp.title.map((t) => t.plain_text).join('') : ''

  const pricePerKg = priceProp?.type === 'number' ? priceProp.number : null

  return {
    id: page.id,
    name,
    pricePerKg,
  }
}
