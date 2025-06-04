const Pool = require("pg").Pool;
//conecter à la bdd
const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: 5432,
  database: "Alfec",
});

module.exports = pool;
