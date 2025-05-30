import { Ingredient } from '../ingredient/Ingredient'

export type Recipe = {
  id: string
  name: string
  servings: number | null
  timeMins: number | null
  ingredients: Ingredient[] | null
}
