const app = require("./app");
const config = require("./config");
const knex = require("knex")(config.db);

const PORT = process.env.DB_PORT;

(async () => {
  try {
    console.log("Running migrations");
    // console.log(db);
    await knex.migrate.latest().then(function() {
      return knex.seed.run();
    });

    console.log("Starting express");
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
