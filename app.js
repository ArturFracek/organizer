const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

// Initialize the app
const app = express();

//Middlewares

//Form Data Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Json Body Middleware
app.use(express.json());

//Cors Middleware
app.use(cors());

//Setting up static directory
app.use(express.static(path.join(__dirname, "public")));

// User the passport Middlewere
app.use(passport.initialize());

//Brin in the Passport Strategy
require("./config/passport")(passport);

// Bring in the Database configuration adn connect with database
const db = require("./config/keys").mongoURI;
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
const posts = require("./routes/api/posts");
app.use("/api/posts", posts);
//Bring in the Users route
const users = require("./routes/api/users");
app.use("/api/users", users);
//Bring in the Activities route 
const activities = require("./routes/api/activities");
app.use("/api/activities", activities);
//Bring in the Routines route 
const routines = require("./routes/api/routines");
app.use("/api/routines", routines);

//app.get("*", (req,res) => {
//  res.sendFile(path.join(__dirname, "public/index.html"));
//})



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
