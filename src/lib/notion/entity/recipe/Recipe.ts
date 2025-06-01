import { RecipeIngredient } from '../recipeIngredient/RecipeIngredient'

export type Recipe = {
  id: string
  name: string | null
  servings: number | null
  servingsDesired: number | null
  timeMins: number | null
  recipeIngredients: RecipeIngredient[] | null
}
