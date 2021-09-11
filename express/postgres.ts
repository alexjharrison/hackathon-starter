import { Pool } from "pg";

const pool = new Pool({
  host: "postres",
  database: "postgres",
  user: "postgres",
  password: "postgrespassword",
});

export const pg = pool;
