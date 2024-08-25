import { data, cartTable, eq, defineEventHandler, readBody, and } from "../utils/dbClient";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const {itemId, userId } = body

    if (!itemId || !userId) {
      return {
        statusCode: 400,
        body: { message: 'id is required' }
      };
    }
  
    try {
      // Perform the deletion
      const deleteItem= await data.delete(cartTable).where(and(eq(cartTable.userId, userId), eq(cartTable.itemId, itemId)))
      .returning();
      return deleteItem

    } catch (error) {
      // Return error response
      return { status: 500, body: { message: 'Error deleting item from cart' } };
    }
  });