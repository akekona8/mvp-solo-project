const app = require("./app");
const config = require("./config");
const db = require("knex")(config.db);

const PORT = process.env.PORT || 8080;

(async () => {
  try {
    console.log("Running migrations");
    console.log(db);
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
