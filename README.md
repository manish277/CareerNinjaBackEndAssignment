# CareerNinjaBackEndAssignment
npm install
node server.js
Created api 

router.route("/list").get(battleController.allBattlePlace);
    router.route("/count").get(battleController.countTotalBattle);
    router.route("/search").get(battleController.searchData);
    router.route("/autosearch").get(battleController.autoCompleteSearchData);
    