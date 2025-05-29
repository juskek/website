import { notionClient } from '../notionClient'

const BAKING_EVENTS_X_RECIPE_TABLE_ID = '2018f264-e43e-80f6-b3e0-f24ecbb9e565'

export async function getRecipeIdsForBakingEventId(bakingEventId: string) {
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

  const recipeIds: string[] = pagesWithProperties.flatMap((result) => {
    const recipeProperty = result.properties['Recipe']
    if (recipeProperty?.type === 'relation') {
      return recipeProperty.relation.map((rel) => rel.id)
    }

    return []
  })

  return recipeIds
}
