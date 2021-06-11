require('dotenv').config()

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.json());
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
const tokenUpdater = require("./api/controllers/authController");
tokenUpdater.getToken();

const routes = require("./api/routes/routes");
routes(app);  

app.listen(port);

console.log('API de consumo à IGDB rodando na Porta: ' + port);