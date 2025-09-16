// drizzle.config.js
import 'dotenv/config'; // loads DATABASE_URL from .env

const config = {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts", // correct path
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL, // only this is needed
  },
};

export default config;
