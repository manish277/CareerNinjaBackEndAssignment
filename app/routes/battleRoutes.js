const express = require("express");

const battleController = require("../controller/battleController");

const battleRoutes = function(app) {
    const router = express.Router();
    router.route("/list").get(battleController.allBattlePlace);
    router.route("/count").get(battleController.countTotalBattle);
    router.route("/search").get(battleController.searchData);
    router.route("/autosearch").get(battleController.autoCompleteSearchData);
    return router;
  };
  module.exports = battleRoutes;