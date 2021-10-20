const express = require("express");
const mongodb = require("mongodb");

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
    "mongodb://localhost:27017/organizer",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client.db("organizer").collection("activities");
}

module.exports = router;
