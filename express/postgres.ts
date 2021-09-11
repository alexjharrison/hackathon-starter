import { Pool } from "pg";

const pool = new Pool({
  host: "postgres",
  database: "auth",
  user: "postgres",
  password: "postgrespassword",
});

export const pg = pool;
