const app = require("./server/app"); // the actual Express app
const http = require("http");
const config = require("./server/utils/config");
const logger = require("./server/utils/logger");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
