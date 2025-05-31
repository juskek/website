import { RecipeIngredient } from '../recipeIngredient/RecipeIngredient'

export type Recipe = {
  id: string
  name: string
  servings: number | null
  timeMins: number | null
  recipeIngredients: RecipeIngredient[] | null
}
