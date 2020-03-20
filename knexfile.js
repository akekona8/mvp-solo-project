const db = require("./server/config");

module.exports = {
  development: {
    client: "pg",
    connection: db.connection,
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
  }
};
