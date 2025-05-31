import { Recipe } from '../recipe/Recipe'

export function computeShoppingList(recipes: Recipe[]) {
  const summary = new Map<
    string,
    {
      name: string
      totalGrams: number
      pricePerKg: number
    }
  >()

  for (const recipe of recipes) {
    if (recipe.recipeIngredients === null || recipe.recipeIngredients.length === 0) {
      console.warn(`Recipe ${recipe.name} has no ingredients.`)
      continue
    }

    for (const recipeIngredient of recipe.recipeIngredients) {
      const { ingredient, quantityGrams } = recipeIngredient
      if (quantityGrams === null) {
        throw new Error(
          `Recipe ingredient ${recipeIngredient.ingredientId} has no quantity specified.`
        )
      }
      if (ingredient === null) {
        throw new Error(
          `Recipe ingredient ${recipeIngredient.ingredientId} has no associated ingredient.`
        )
      }

      if (recipeIngredient.quantityGrams === null) {
        throw new Error(
          `Recipe ingredient ${recipeIngredient.ingredientId} has no quantity specified.`
        )
      }
      if (ingredient.pricePerKg === null) {
        throw new Error(
          `Ingredient ${ingredient.id} (${ingredient.name}) has no price per kg specified.`
        )
      }
      const existing = summary.get(ingredient.id)

      if (existing) {
        existing.totalGrams += quantityGrams
        continue
      }

      summary.set(ingredient.id, {
        name: ingredient.name,
        totalGrams: recipeIngredient.quantityGrams,
        pricePerKg: ingredient.pricePerKg,
      })
    }
  }

  let totalCost = 0

  for (const { totalGrams, pricePerKg } of summary.values()) {
    totalCost += (totalGrams / 1000) * pricePerKg
  }

  return {
    totalCost,
    shoppingList: Array.from(summary.entries()).map(([id, entry]) => ({
      id,
      name: entry.name,
      quantityGrams: entry.totalGrams,
      estimatedCost: (entry.totalGrams / 1000) * entry.pricePerKg,
    })),
  }
}
