import { defineEventHandler } from 'h3';
import { data,  eq,  itemsTable,  } from '../utils/dbClient';


export default defineEventHandler(async (event) => {
    const id = Number(event.context.params?.id);
    
    if (!id) {
      return { statusCode: 400, body: { error: 'not id' } };
    }
  
    try {
      const item = await data.select().from(itemsTable).where(eq(itemsTable.id, id));
      return item
   
    } catch (error) {
      console.error('Error fetching items:', error);
      return { statusCode: 500, body: { error: 'Internal Server Error' } };
    }
  });






