"use strict";

const data = require("./data/storage");
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const logger = require("morgan");
const Path = require("path");
const pug = require("pug");

const sleep = delay => {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
};

module.exports = function startServer(port, path, callback) {
  const app = express();
  const server = http.createServer(app);

  app.use(express.static(Path.join(__dirname, path)));
  app.use(logger("dev"));
  app.use(bodyParser.urlencoded({ extended: true }));

  // EXAMPLES

  // app.post("/stocks/", (req, res) => {
  //   const index = Math.round(Math.random() * 10);
  //   const stocks = data.stocks.slice(index);

  //   sleep(1000).then(() => {
  //     res.json({ stocks });
  //   });
  // });

  // app.get("/news/", (req, res) => {
  //   const html = pug.renderFile("./frontend/templates/news-list.pug", {
  //     basedir: '/'
  //   });

  //   sleep(1000).then(() => {
  //     res.json({ html, last: true });
  //   });
  // });

  server.listen(port, callback);
};
