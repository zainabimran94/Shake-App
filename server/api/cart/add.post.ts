import { data, cartTable, defineEventHandler, readBody} from "../utils/dbClient";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { userId, itemId, quantity } = body;
   

    if (!itemId) {
      return { status: 400, body: { message: 'Invalid itemId' } };
    }

    try {
        const newItem = await data.insert(cartTable).values
        ({ itemId, userId, quantity })
        .returning(); 
        return newItem ;
      
    } catch (error) {
      console.error('Error:', error);
      return { status: 500, body: { message: 'Error adding item to cart' } };
    }
  });