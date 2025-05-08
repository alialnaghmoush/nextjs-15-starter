import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-serverless';
// import { withReplicas } from 'drizzle-orm/pg-core';

config({ path: '.env.local' });

// ================================================
// if you want to use the primary db only
// ================================================
const db = drizzle({ connection: process.env.DATABASE_URL!, casing: 'snake_case' });

// ================================================
// if you want to use the primary and replica db
// ================================================
// const primaryDb = drizzle({ connection: process.env.DATABASE_URL!, casing: 'snake_case' });
// const readReplicaDb1 = drizzle(process.env.DATABASE_URL_RR1!);

// const db = withReplicas(primaryDb, [readReplicaDb1]);

export default db;