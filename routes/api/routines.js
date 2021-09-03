const express = require("express");
const mongodb = require("mongodb");
const loader = require("sass-loader");

const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  const routines = await loadRoutinesCollection();
  res.send(await routines.find({}).toArray());
});

// Add Post

router.post("/", async (req, res) => {
  const { title, description, priority } = req.body;
  console.log(req.body.text);
  const routines = await loadRoutinesCollection();
  await routines.insertOne({
    title,
    description,
    priority,
    createdAt: new Date(),
  });
  res.status(201).send();
});

// Delete Post

router.delete("/:id", async (req, res) => {
  const routines = await loadRoutinesCollection();
  await routines.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadRoutinesCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://Setius:123@cluster0.setab.mongodb.net/organiser_auth",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client.db("organiser_auth").collection("routines");
}

module.exports = router;
