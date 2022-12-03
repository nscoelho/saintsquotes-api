const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const express = require("express");
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;
 
app.use(
  cors({
    origin: ["https://saintsquotes.org/"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
    origin: true
  })
);

server.use(middlewares);
server.use(router);

server.listen(port);
