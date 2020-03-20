module.exports = {
  db: {
    client: "pg",
    searchPath: "public",
    connection: `postgres://${process.env.USER}@127.0.0.1:5432/mvp_solo_project` || {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  }
};
