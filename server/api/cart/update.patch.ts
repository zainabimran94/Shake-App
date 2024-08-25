import { defineEventHandler, readBody } from 'h3';
import { data, cartTable, eq, and, getQuery} from '../utils/dbClient';

export default defineEventHandler(async (event) => {
  
  const { itemId, quantity, userId } = await readBody(event); // Extract quantity and userId from the request body

    if (!itemId || !quantity || !userId) {
      return {
        statusCode: 400,
        body: { message: ' item, quantity, and userId are required' },
      };
    }
    try {

    const updateCart = await data.update(cartTable)
      .set({ quantity })
      .where( and (eq(cartTable.userId, userId), eq(cartTable.itemId, itemId)))
      .returning();

    if (!updateCart|| updateCart.length === 0) {
      return {
        statusCode: 404,
        body: { message: 'Cart item not found' },
      };
    }

    return updateCart // Return the updated item
  
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: { message: 'Error updating cart item' },
    };
  }
});
