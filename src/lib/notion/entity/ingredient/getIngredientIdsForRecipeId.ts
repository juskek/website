import { notionClient } from '../../notionClient'

const RECIPES_X_INGREDIENTS_TABLE_ID = '2018f264-e43e-80af-82be-dc87b87010c8'

export async function getIngredientIdsForRecipeId(recipeId: string): Promise<string[]> {
  console.log('Getting ingredients for Recipe ID:', recipeId)

  const response = await notionClient.databases.query({
    database_id: RECIPES_X_INGREDIENTS_TABLE_ID,
    filter: {
      or: [
        {
          property: 'Recipe',
          relation: {
            contains: recipeId,
          },
        },
      ],
    },
  })

  const pagesWithProperties = response.results.filter(
    (result) => result.object === 'page' && 'properties' in result
  )

  const ingredientIds: string[] = pagesWithProperties.flatMap((result) => {
    const ingredientProperty = result.properties['Ingredient']
    if (ingredientProperty?.type === 'relation') {
      return ingredientProperty.relation.map((rel) => rel.id)
    }
    return []
  })

  return ingredientIds
}
