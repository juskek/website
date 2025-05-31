import { getIngredient } from '../ingredient/getIngredient'
import { getRecipeIngredientsForRecipeId } from '../recipeIngredient/getRecipeIngredientsForRecipeId'
import { Recipe } from './Recipe'

export async function enrichRecipesWithIngredients(recipes: Recipe[]) {
  console.log('Enriching recipes with ingredients...')

  for (const recipe of recipes) {
    const recipeIngredients = await getRecipeIngredientsForRecipeId(recipe.id)

    for (const recipeIngredient of recipeIngredients) {
      recipeIngredient.ingredient = await getIngredient(recipeIngredient.ingredientId)
    }

    recipe.recipeIngredients = recipeIngredients
  }
}
