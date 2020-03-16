// let's go!
require("dotenv").config();

const createServer = require("./createServer");
const db = require("./createServer");

const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(
      `Server is now running on port http://localhost:${deets.port} `
    );
  }
);
