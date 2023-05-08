// @ts-check

require('dotenv').config();

const config = {
  endpoint: process.env.URI,
  key: process.env.KEY,
  databaseId: "DatabaseNodeJS",
  containerId: "ContainerNodeJS",
  partitionKey: { kind: "Hash", paths: ["/id"] }
};

module.exports = config;
