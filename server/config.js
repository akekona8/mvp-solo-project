module.exports = {
  db: {
    client: "pg",
    searchPath: "public",
    connection: `postgres://${process.env.USER}@127.0.0.1:5432/mvp_solo_project` || {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || "mvp-solo-project",
      user: process.env.DB_USER || "ashleykekona",
      password: process.env.DB_PASSWORD || ""
    }
  }
};
