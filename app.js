const config = require("./config.js");
const server = require('./api/server');

const PORT = config.apps.be_port;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
