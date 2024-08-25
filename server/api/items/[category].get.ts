import { data, defineEventHandler, itemsTable, eq } from "../utils/dbClient";

export default defineEventHandler(async (event) => {
  const category = event.context.params?.category;
  
  if (!category) {
    return { statusCode: 400, body: { error: 'Category parameter is missing.' } };
  }

  try {
    const items = await data
      .select()
      .from(itemsTable)
      .where(eq(itemsTable.category, category));
      return items
 
  } catch (error) {
    console.error('Error fetching items:', error);
    return { statusCode: 500, body: { error: 'Internal Server Error' } };
  }
});


