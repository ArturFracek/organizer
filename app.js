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

const routines = [
  {
    id: "1",
    name: "Bieganie",
    difficulty: 4,
  },
  {
    id: "2",
    name: "Biegi przelajowe",
    difficulty: 4,
  },
  {
    id: "2",
    name: "plywanie",
    difficulty: 4,
  },
];

function searchRoutineByName(name) {
  return routines.filter((routine) => routine.name.includes(name));
}

app.get("/routines", (req, res) => {
  return res.json(routines);
});

app.get("/routines/:name", (req, res) => {
  const name = req.params.name;
  const routine = searchRoutineByName(name);
  return res.json(routine);
});

app.post("/routines", (req, res) => {
  const newRoutine = req.body;
  routines.push(newRoutine);
  return res.json(newRoutine);
});

//Bring in the Posts route

const posts = require("./routes/api/posts");
app.use("/api/posts", posts);

//Bring in the Users route
const users = require("./routes/api/users");
app.use("/api/users", users);

//app.get("*", (req,res) => {
//  res.sendFile(path.join(__dirname, "public/index.html"));
//})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
