'use strict';
module.exports = function routes(app) {
  const gameController = require("../controllers/gameController")

  // todoList Routes
  app.route('/game')
    .post(gameController.getGameData);
};