module.exports = {
  dev: {
    mongoURI: "mongodb://localhost:27017/organizer",
  },
  test: {
    mongoURI: "mongodb://localhost:27017/organizer_test",
  },
  production: {
    mongoURI: "mongodb://localhost:27017/organizer",
  },
  // I know it shouldn't be like this, but this is demo project so whatever
  secret: "yoursecret",
};
