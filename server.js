const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const app = express();
 
app.use(
  cors({
    origin: ["https://saintsquotes.org/"],
    methods: ["GET", "POST", "DELETE"],
    headers: {"Access-Control-Allow-Origin": "*"},
    credentials: true,
    origin: true
  })
);

server.use(middlewares);
server.use(router);

server.listen(port);
