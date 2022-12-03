const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
 
app.use(
  cors({
    origin: ["https://saintsquotes.org/"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
    origin: true
  })
);

var express = require('express');
var cors = require('cors');
var app = express();

var corsOptions = {
  origin: function (origin, callback) {
    // db.loadOrigins is an example call to load
    // a list of origins from a backing database
    db.loadOrigins(function (error, origins) {
      callback(error, origins)
    })
  }
}

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for an allowed domain.'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
server.use(middlewares);
server.use(router);

server.listen(port);
