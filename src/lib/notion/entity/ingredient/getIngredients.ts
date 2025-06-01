import { notionClient } from '../../notionClient'
import { Ingredient } from './Ingredient'

export async function getIngredients(ingredientIds: string[]): Promise<Ingredient[]> {
  console.log('Getting ingredients...')

  const ingredients: Ingredient[] = []

  for (const id of ingredientIds) {
    const page = await notionClient.pages.retrieve({ page_id: id })

    if (page.object === 'page' && 'properties' in page) {
      const props = page.properties

      const nameProp = props['Name']
      const priceProp = props['Price (per kg)']

      const name =
        nameProp?.type === 'title' ? nameProp.title.map((t) => t.plain_text).join('') : ''

      const pricePerKg = priceProp?.type === 'number' ? priceProp.number : null

      ingredients.push({
        id: page.id,
        name,
        pricePerKg,
      })
    }
  }

  return ingredients
}
