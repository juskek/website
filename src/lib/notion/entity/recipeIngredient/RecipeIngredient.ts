import { Ingredient } from '../ingredient/Ingredient'

export type RecipeIngredient = {
  ingredientId: string
  recipeId: string
  quantityGrams: number | null

  ingredient: Ingredient | null
}
