// dbClient.ts
import {defineEventHandler, readBody, getQuery} from 'h3'
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq, and} from "drizzle-orm";
import { itemsTable, cartTable, } from '../../../db/schema'; // Adjust the path as needed
import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const data = drizzle(pool);
export { eq, and, itemsTable, cartTable,  defineEventHandler, readBody, getQuery }; // Re-exporting for convenience
