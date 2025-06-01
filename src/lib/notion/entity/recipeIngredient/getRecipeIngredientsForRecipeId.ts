import { PageObjectResponse } from '@notionhq/client'
import { notionClient } from '../../notionClient'
import { RecipeIngredient } from './RecipeIngredient'

const RECIPES_X_INGREDIENTS_TABLE_ID = '2018f264-e43e-80af-82be-dc87b87010c8'

export async function getRecipeIngredientsForRecipeId(
  recipeId: string
): Promise<RecipeIngredient[]> {
  console.log('Getting recipe ingredients for Recipe ID:', recipeId)

  const response = await notionClient.databases.query({
    database_id: RECIPES_X_INGREDIENTS_TABLE_ID,
    filter: {
      property: 'Recipe',
      relation: {
        contains: recipeId,
      },
    },
  })

  const pagesWithProperties = response.results.filter(
    (result): result is PageObjectResponse => result.object === 'page' && 'properties' in result
  )

  const recipeIngredients: RecipeIngredient[] = pagesWithProperties.flatMap((result) => {
    const props = result.properties
    const ingredientProp = props['Ingredient']
    const quantityProp = props['Quantity (g)']

    if (ingredientProp?.type !== 'relation') return []

    return ingredientProp.relation.map((rel) => ({
      recipeId,
      ingredientId: rel.id,
      quantityGrams: quantityProp?.type === 'number' ? quantityProp.number : null,
      ingredient: null,
    }))
  })

  return recipeIngredients
}
