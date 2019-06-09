const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const compression = require("compression");
const errorhandler = require("errorhandler");

const app = express();
const routes = require("./routes");

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", routes.api);
app.use("/todo", routes.route);

// handler error

if (app.get("env") !== "production") {
  app.use(logger("dev"));
  app.use(errorhandler());
}

app.use((error, req, res) => res.send(error));

module.exports = app;
