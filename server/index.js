const app = require("./app");
const config = require("../knexfile.js");
const knex = require("knex");

const PORT = process.env.PORT || 8080;

const db = knex({
  client: "pg",
  connection: config.connection,
  searchPath: "public"
});

(async () => {
  try {
    console.log("Running migrations");
    await db.migrate.latest().then(function() {
      return db.seed.run();
    });

    console.log("Starting express");
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();

module.exports = db;
