const express = require("express");
const mongodb = require("mongodb");
const loader = require("sass-loader");

const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Post

router.post("/", async (req, res) => {
  console.log(req.body.text);
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date(),
  });
  res.status(201).send();
});

// Delete Post

router.delete('/id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  res.status(200).send()
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect("mongodb+srv://Setius:123@cluster0.setab.mongodb.net/organiser_auth", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client.db("organiser_auth").collection("posts");
}

module.exports = router;