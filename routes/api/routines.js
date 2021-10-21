const { request } = require("express");
const express = require("express");
const mongodb = require("mongodb");
const loader = require("sass-loader");
const Routine = require("../../model/Routine.model");

const router = express.Router();

// Get Routines
router.get("/", async (req, res) => {
  const routines = await loadRoutinesCollection();
  res.send(await routines.find({}).toArray());
});

// Add Routines
router.post("/", async (req, res) => {
  const { title } = req.body;
  console.log(req.body.text);
  const routines = await loadRoutinesCollection();
  await routines.insertOne({
    title,
    createdAt: new Date(),
    is_active: false,
    priority: 5,
    activitiesOccurences: [],
  });
  res.status(201).send();
});

//Overwrite Routine
router.put("/:id", async (req, res) => {
  const routines = await loadRoutinesCollection();
  await routines.updateMany(
    { is_active: true },
    {
      $set: {
        is_active: false,
      },
    }
  )
   await routines.updateOne(
      { _id: new mongodb.ObjectID(req.params.id) },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          priority: req.body.priority,
          is_active: req.body.is_active,
          activitiesOccurences: req.body.activitiesOccurences,
          activityId: req.body.activityId,
          dayOfWeek: req.body.dayOfWeek,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
        },
      }
    );
  res.status(200).send();
});

// Delete Routine
router.delete("/:id", async (req, res) => {
  const routines = await loadRoutinesCollection();
  await routines.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadRoutinesCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://localhost:27017/organizer",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client.db("organizer").collection("routines");
}

module.exports = router;
