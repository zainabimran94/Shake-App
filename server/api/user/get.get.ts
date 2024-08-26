import { data, cartTable, itemsTable, eq, defineEventHandler, getQuery  } from "../utils/dbClient";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const userId = String(query.userId);
    
    if (!userId) {
        return {
            status: 400,
            body: { message: 'Invalid user ID or item ID' }
        };
    }
     try {
        // Fetch the cart items with item details for the specified user
        const cart = await data
            .select({
                quantity: cartTable.quantity,
                id: itemsTable.id,
                name: itemsTable.name,
                image: itemsTable.image,
                price: itemsTable.price,
            })
            .from(cartTable)
            .innerJoin(itemsTable, eq(cartTable.itemId, itemsTable.id))
            .where(eq(cartTable.userId, userId))
        return cart;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        return { status: 500, body: { message: 'Error fetching cart items' } };
    }
});






