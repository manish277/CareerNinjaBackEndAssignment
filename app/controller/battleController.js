const { battleTable } = require("../models/battle");

const BattleController = {
    allBattlePlace: (req, res) => {
        battleTable.find({}).then((data) => {
            let totalPlace = [];
            data.forEach(eachData => {
                if (eachData.location != '') {
                    totalPlace.push(eachData.location);
                }
            })
            res.status(200).send(totalPlace);
        }).catch(err => {
            res.status(400).send(err);
            console.log("err", err)

        })
    },
    countTotalBattle: (req, res) => {
        battleTable.find({}).then((data) => {
            let totalNumberOfbattle = 0;
            data.forEach(eachData => {

                if (eachData.battle_number) {
                    let battlenumber = parseInt(eachData.battle_number)

                    totalNumberOfbattle += battlenumber;
                }
            })
            res.json(totalNumberOfbattle);
        }).catch(err => {
            res.send(err);
            console.log("err", err)

        })
    },
    searchData: (req, res) => {
        let query = req.query;
        battleTable.find(query).then((data) => {
            res.json(data);
        }).catch(err => {
            res.send(err);
            console.log("err", err)

        })
    },
    autoCompleteSearchData: (req, res) => {
        let totalPlace = [];
        battleTable.find({}).then((data) => {
            data.forEach(eachData => {
                if (eachData.location != '') {
                    totalPlace.push(eachData.location);
                }
            })
            const resultArray = [];
            const { value } = req.query;
            if (value) {
                for (let i = 0; i < totalPlace.length; i += 1) {
                    const c = totalPlace[i];
                    if (c.toLowerCase().startsWith(value.toLowerCase())) {
                        resultArray.push(c);
                    }
                }
            }
            res.json(resultArray);
        }).catch(err => {
            res.status(400).send(err);
            console.log("err", err)

        })
        
    }
};
module.exports = BattleController;
