const express = require("express");
const mongodb = require("mongodb");
const loader = require("sass-loader");

const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  const activities = await loadActivitiesCollection();
  res.send(await activities.find({}).toArray());
});

// Add Post
router.post("/", async (req, res) => {
  const { title, description, priority } = req.body;
  console.log(req.body.text);
  const activities = await loadActivitiesCollection();
  await activities.insertOne({
    title,
    description,
    priority,
    createdAt: new Date(),
  });
  res.status(201).send();
});

//Update Activity
router.put("/:id", async (req, res) => {
  const activities = await loadActivitiesCollection();
  await activities.updateOne(
    { _id: new mongodb.ObjectID(req.params.id) },
    { $set: { description: req.body.description, priority: req.body.priority } }
  );
  console.log(req.body);
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
    "mongodb+srv://Setius:123@cluster0.setab.mongodb.net/organiser_auth",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client.db("organiser_auth").collection("activities");
}

module.exports = router;
