const config = require("./config.js");
const server = require("./routes/server");

const PORT = config.apps.be_port;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
