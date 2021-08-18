const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();


// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
})

// Add Post

router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
});

// Delete Post

async function loadPostsCollection() {
  const client = await mongodb.MongoClient
  .connect('mongodb+srv://Setius:123@cluster0.setab.mongodb.net/organiser_auth?retryWrites=true&w=majority',
  { 
    useNewUrlParser: true 
  });
  return client.db("organiser_auth").collection("posts");
}

module.exports = router;