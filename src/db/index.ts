import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-serverless';

config({ path: '.env.local' });
const db = drizzle({ connection: process.env.DATABASE_URL!, casing: 'snake_case' });

export default db;