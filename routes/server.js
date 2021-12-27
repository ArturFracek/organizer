const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const config = require("../config.js");

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
const staticPath = path.join(process.cwd(), 'dist')
app.use(express.static(staticPath));



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

// All vue urls should return index.html and vue-router should be responsible
// for loading actual view
app.get(/^(?!\/api)[^.]*$/, function (req, res) {
  res.sendFile(path.join(staticPath, 'index.html'));
})

module.exports = app;
