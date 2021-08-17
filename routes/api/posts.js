const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({}).toArray());
})

// Add Post

// Delete Post

async function loadPostCollection() {
  const client = await mongodb.MongoClient
  .connect('mongodb+srv://Setius:123>@cluster0.setab.mongodb.net/organiser_auth?retryWrites=true&w=majority',
  { useNewUrlParser: true });
  return client.db('organiser_auth').collection('posts')
};

module.exports = router;