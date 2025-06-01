import { notionClient } from '../../notionClient'
import { Recipe } from './Recipe'

const BAKING_EVENTS_X_RECIPE_TABLE_ID = '2018f264-e43e-80f6-b3e0-f24ecbb9e565'

export async function getRecipesForBakingEventId(bakingEventId: string) {
  console.log('Getting recipes for Baking Event ID:', bakingEventId)

  const response = await notionClient.databases.query({
    database_id: BAKING_EVENTS_X_RECIPE_TABLE_ID,
    filter: {
      or: [
        {
          property: 'Baking Event',
          relation: {
            contains: bakingEventId,
          },
        },
      ],
    },
    archived: false,
    in_trash: false,
  })
  const pagesWithProperties = response.results.filter(
    (result) => result.object === 'page' && 'properties' in result
  )
  const recipes: Recipe[] = []

  for (const result of pagesWithProperties) {
    const recipeProp = result.properties['Recipe']
    const desiredServingsProp = result.properties['Desired Servings']

    if (recipeProp?.type !== 'relation') {
      throw new Error(`Missing or invalid Recipe relation in junction row ${result.id}`)
    }

    const recipeRel = recipeProp.relation

    if (!recipeRel || recipeRel.length === 0) {
      throw new Error(`No recipe linked in junction row ${result.id}`)
    }

    if (recipeRel.length > 1) {
      throw new Error(`More than one recipe linked in junction row ${result.id}. Expected one.`)
    }

    const recipeId = recipeRel[0].id

    recipes.push({
      id: recipeId,
      name: null,
      servings: null,
      servingsDesired: desiredServingsProp?.type === 'number' ? desiredServingsProp.number : null,
      timeMins: null,
      recipeIngredients: null,
    })
  }

  return recipes
}
