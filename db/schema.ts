
import { integer, pgTable, serial, text, numeric, timestamp} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';


// Define the `items` table schema
export const itemsTable = pgTable('items', {
  id: integer('id').primaryKey().notNull(),
  name: text('name').notNull(),
  category: text('category').notNull(),
  price: numeric('price').notNull(),
  desc: text('desc'),
  image: text('image'),
});

// Define the `cartItems` table schema
export const cartTable = pgTable('cart_items', {
  id: serial('id').primaryKey(),
  itemId: integer('item_id').notNull().references(() => itemsTable.id),
  userId: integer('user_id'),
  quantity: integer('quantity').notNull(),
});


export type InsertItem = typeof itemsTable.$inferInsert;
export type SelectItem = typeof itemsTable.$inferSelect;

export type InsertCart = typeof cartTable.$inferInsert;
export type SelectCart = typeof cartTable.$inferSelect;