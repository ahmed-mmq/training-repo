const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


const bears = require("./api/routes/bears");

mongoose.connect("mongodb://ahmed:magdy@bear-shard-00-00-i5ioy.mongodb.net:27017,bear-shard-00-01-i5ioy.mongodb.net:27017,bear-shard-00-02-i5ioy.mongodb.net:27017/test?ssl=true&replicaSet=bear-shard-0&authSource=admin");

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use("/bears", bears);  




app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
