const express = require("express");
const mongodb = require("mongodb");
const config = require('../../config.js');

const db = config.db.mongoURI;

const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  const activities = await loadActivitiesCollection();
  res.send(await activities.find({}).toArray());
});

// Add Post
router.post("/", async (req, res) => {
  const { title, description, priority } = req.body;
  const activities = await loadActivitiesCollection();
  await activities.insertOne({
    title,
    priority: 5,
    createdAt: new Date(),
    duration: 0,
  });
  res.status(201).send();
});

//Update Activity
router.put("/:id", async (req, res) => {
  const activities = await loadActivitiesCollection();
  await activities.updateOne(
    { _id: new mongodb.ObjectID(req.params.id) },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        duration: req.body.duration,
      },
    }
  );
  res.status(200).send();
});

// Delete Post
router.delete("/:id", async (req, res) => {
  const activities = await loadActivitiesCollection();
  await activities.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadActivitiesCollection() {
  const client = await mongodb.MongoClient.connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client.db().collection("activities");
}

module.exports = router;
