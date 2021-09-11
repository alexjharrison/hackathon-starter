const Pool = require("pg").Pool;

let database: string, user: string, password: string;

const pool = new Pool({
  host: "db",
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
module.exports = {
  pg: {
    query: (text: string, params: string) => pool.query(text, params),
    pool: pool,
  },
};
