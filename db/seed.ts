import pg from 'pg';
import {drizzle} from "drizzle-orm/node-postgres"
import { itemsTable } from './schema'
import "dotenv/config"


const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle(pool);


const itemsData = [
  { id: 1, name: 'Pepperoni Pizza', category: 'Pizza', price: '12.99', desc: 'Delicious hand-tossed pizza with fresh toppings.', image: '/img/pizza1.jpg' },
  { id: 2, name: 'Veggie Pizza', category: 'Pizza', price: '11.99', desc: 'Delicious hand-tossed pizza with fresh toppings.', image: '/img/pizza2.jpg' },
  { id: 3, name: 'Mac n Cheese', category: 'Pasta', price: '10.99', desc: 'Hearty and savory pasta dishes for all tastes.', image: '/img/pasta1.jpeg' },
  { id: 4, name: 'Fettucine', category: 'Pasta', price: '9.99', desc: 'Hearty and savory pasta dishes for all tastes.', image: '/img/pasta2.jpg' },
  { id: 5, name: 'Chocolate Shake', category: 'Shake', price: '5.99', desc: 'Creamy and refreshing shake in various flavors.', image: '/img/shake1.jpg' },
  { id: 6, name: 'Mango Shake', category: 'Shake', price: '5.99', desc: 'Creamy and refreshing shake in various flavors.', image: '/img/shake2.jpg' },
  { id: 7, name: 'Cake', category: 'Sweet', price: '6.99', desc: 'Indulgent and sweet desserts to satisfy your cravings.', image: '/img/sweet1.jpg' },
  { id: 8, name: 'Eclair', category: 'Sweet', price: '4.99', desc: 'Indulgent and sweet desserts to satisfy your cravings.', image: '/img/sweet2.webp' }
];
async function seed() {
  try {
    console.log("Seeding items...");

    // Insert the items into the database
    await db.insert(itemsTable).values(itemsData).execute();

    console.log("Seeding completed successfully!");
  } catch (err) {
    console.error("Error seeding data:", err);
    
  }
  finally {
    // Ensure that the pool is closed after the script runs
    await pool.end();
  }
}

// Run the seed function
seed();