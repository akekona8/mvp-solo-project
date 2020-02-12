const dotenv = require("dotenv");
dotenv.config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
// const db = require("./index.js");
const db = require("../database/db.js");
const bodyParser = require("body-parser");
const Knex = require("knex");

const app = express();
const router = express.Router();

//objection setup
const knexfile = require("../knexfile");
const knex = Knex(knexfile[process.env.NODE_ENV]);
Model.knex(knex);

app.use(bodyParser.json());

// Setup Logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));
// app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));

router.get("/api/travelog/", async (req, res) => {
  try {
    console.log("loading all data");
    const travelog = await db.select().table("travelog");
    res.json({ travelog });
    res.sendStatus(200);
  } catch (err) {
    console.error("Error loading travelog", err);
    res.sendStatus(500);
  }
});

//api routes

router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
