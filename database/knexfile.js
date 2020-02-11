require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
<<<<<<< HEAD
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "mvp_solo_project",
      user: process.env.DB_USER || "ashleykekona",
      password: process.env.DB_PASSWORD || ""
=======
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
>>>>>>> b3f658939936fa4de9a20dc4799d25aef54ca4dc
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
<<<<<<< HEAD
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
=======
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
>>>>>>> b3f658939936fa4de9a20dc4799d25aef54ca4dc
    }
  }
};
