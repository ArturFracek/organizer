const express = require("express");
const mongodb = require("mongodb");
const config = require("../../config.js");
const _auth = require("./_auth");

const db = config.db.mongoURI;

const router = express.Router();

// Get Posts
router.get("/", _auth, async (req, res) => {
  const activitiesdb = await loadActivitiesCollection();
  res.send(await activitiesdb.find({ createdBy: req.user._id }).toArray());
});

// Add Post
router.post("/", _auth, async (req, res) => {
  const { title } = req.body;
  const activities = await loadActivitiesCollection();
  await activities.insertOne({
    title,
    priority: 5,
    createdAt: new Date(),
    duration: 0,
    createdBy: req.user._id,
  });
  res.status(201).send();
});

//Update Activity
router.put("/:id", _auth, async (req, res) => {
  const activities = await loadActivitiesCollection();
  await activities.updateOne(
    {
      _id: new mongodb.ObjectID(req.params.id, req.user._id),
    },
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
router.delete("/:id", _auth, async (req, res) => {
  const activities = await loadActivitiesCollection();
  await activities.deleteOne({
    _id: new mongodb.ObjectID(req.params.id, req.user._id),
  });
  res.status(200).send();
});

async function loadActivitiesCollection() {
  const client = await mongodb.MongoClient.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client.db().collection("activities");
}

module.exports = router;
