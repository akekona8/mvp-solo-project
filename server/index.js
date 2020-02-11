const app = require("./app");
const config = require("../database/knexfile");
<<<<<<< HEAD
const knex = require("knex");

const PORT = process.env.PORT || 8080;
=======

const PORT = process.env.PORT || 3000;
>>>>>>> b3f658939936fa4de9a20dc4799d25aef54ca4dc

const db = knex({
  client: "pg",
  connection: config.connection,
  searchPath: "public"
});

(async () => {
  try {
    console.log("Running migrations");
<<<<<<< HEAD
    await db.migrate.latest("./database/migrations").then(function() {
      return db.seed.run("./database/migrations");
=======
    await db.migrate.latest().then(function() {
      return db.seed.run("./data");
>>>>>>> b3f658939936fa4de9a20dc4799d25aef54ca4dc
    });

    console.log("Starting express");
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();

module.exports = db;
