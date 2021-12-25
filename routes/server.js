const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const config = require("../config.js");
var favicon = require('serve-favicon');

const db = config.db.mongoURI;

// Initialize the app
const app = express();

//Middlewares

//Form Data Middleware
app.use(
  express.urlencoded({
    extended: false,
  })
);

//Json Body Middleware
app.use(express.json());

//Cors Middleware
app.use(cors());

//Setting up static directory (for deployment)
// const clientPath = path.join(process.cwd(), 'client')
// app.use(express.static(path.join(clientPath, "public")));
// app.use(favicon(path.join(clientPath, 'public', 'favicon.ico')));

// User the passport Middlewere
app.use(passport.initialize());

//Brin in the Passport Strategy
require("../config/passport")(passport);

// Bring in the Database configuration adn connect with database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database connected successfully ${db}`);
  })
  .catch((err) => {
    console.log(`Unable to connect with database ${err}`);
  });

//Bring in the Posts route
const goals = require("./api/goals");
app.use("/api/goals", goals);
//Bring in the Users route
const users = require("./api/users");
app.use("/api/users", users);
//Bring in the Activities route
const activities = require("./api/activities");
app.use("/api/activities", activities);
//Bring in the Routines route
const routines = require("./api/routines");
app.use("/api/routines", routines);

module.exports = app;
