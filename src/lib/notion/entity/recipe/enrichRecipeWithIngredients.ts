import { getIngredientIdsForRecipeId } from '../ingredient/getIngredientIdsForRecipeId'
import { Recipe } from './Recipe'

export async function enrichRecipesWithIngredients(recipes: Recipe[]) {
  console.log('Enriching recipes with ingredients...')

  for (const recipe of recipes) {
    if (!recipe.ingredients) {
      console.log(`Fetching ingredients for recipe ${recipe.id}...`)
      const ingredientIds: string[] = await getIngredientIdsForRecipeId(recipe.id)
    }
  }

  console.log('Recipes enriched with ingredients:', recipes)
}
