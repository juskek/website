import { notionClient } from '../../notionClient'
import { Recipe } from './Recipe'

export async function getRecipes(recipeIds: string[]): Promise<Recipe[]> {
  console.log('Getting recipes...')

  const recipes: Recipe[] = []

  for (const id of recipeIds) {
    const page = await notionClient.pages.retrieve({ page_id: id })

    if (page.object === 'page' && 'properties' in page) {
      const props = page.properties

      const nameProp = props['Name']
      const servingsProp = props['Servings']
      const timeProp = props['Time (mins)']

      const name =
        nameProp?.type === 'title' ? nameProp.title.map((t) => t.plain_text).join('') : ''

      const servings = servingsProp?.type === 'number' ? servingsProp.number : null

      const timeMins = timeProp?.type === 'number' ? timeProp.number : null

      recipes.push({
        id: page.id,
        name,
        servings,
        timeMins,
        recipeIngredients: null,
      })
    }
  }

  return recipes
}
