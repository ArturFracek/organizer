const express = require("express");
const mongodb = require("mongodb");
const config = require("../../config.js");

const db = config.db.mongoURI;

const router = express.Router();

// Get Goals
router.get("/", async (req, res) => {
  const goals = await loadGoalsCollection();
  res.send(await goals.find({}).toArray());
});

// Add Goal
router.post("/", async (req, res) => {
  const { title, description, priority } = req.body;
  console.log(req.body.text);
  const goals = await loadGoalsCollection();
  await goals.insertOne({
    title,
    createdAt: new Date(),
    priority: 5,
  });
  res.status(201).send();
});

//Update Goal
router.put("/:id", async (req, res) => {
  const goals = await loadGoalsCollection();
  await goals.updateOne(
    { _id: new mongodb.ObjectID(req.params.id) },
    {
      $set: {
        description: req.body.description,
        priority: req.body.priority,
        deadline: req.body.deadline,
      },
    }
  );
  res.status(200).send();
});

// Delete Goal
router.delete("/:id", async (req, res) => {
  const goals = await loadGoalsCollection();
  await goals.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadGoalsCollection() {
  const client = await mongodb.MongoClient.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client.db().collection("goals");
}

module.exports = router;
