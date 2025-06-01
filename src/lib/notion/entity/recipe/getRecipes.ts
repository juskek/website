import { notionClient } from '../../notionClient'
import { Recipe } from './Recipe'

export async function enrichRecipesWithBasicInfo(recipes: Recipe[]) {
  console.log('Getting recipes...')

  for (const recipe of recipes) {
    const page = await notionClient.pages.retrieve({ page_id: recipe.id })

    if (page.object === 'page' && 'properties' in page) {
      const props = page.properties

      const nameProp = props['Name']
      const servingsProp = props['Servings']
      const timeProp = props['Time (mins)']

      recipe.name =
        nameProp?.type === 'title' ? nameProp.title.map((t) => t.plain_text).join('') : ''

      recipe.servings = servingsProp?.type === 'number' ? servingsProp.number : null

      recipe.timeMins = timeProp?.type === 'number' ? timeProp.number : null
    }
  }

  return recipes
}
