require('dotenv').config()

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.json());

const tokenUpdater = require("./api/controllers/authController");
tokenUpdater.getToken();

const routes = require("./api/routes/routes");
routes(app);  

app.listen(port);

console.log('API de consumo à IGDB rodando na Porta: ' + port);