import { Pool } from "pg";

export const pg = new Pool({
  host: "postgres",
  database: "postgres",
  user: "postgres",
  password: "postgrespassword",
});
