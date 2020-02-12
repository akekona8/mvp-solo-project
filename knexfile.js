const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  // development: {
  client: "pg",
  connection:
    process.env.DB_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/mvp_solo_project`,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations"
  },
  seeds: {
    directory: "./seeds"
  }
  // },
};
