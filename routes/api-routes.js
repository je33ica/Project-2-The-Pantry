const db = require("../models");

//GET request, find all food data.
module.exports = function(app) {
  app.get("/api/foods", (req, res) => {
    db.Food.findAll({}).then((foodResp) => {
      res.json(foodResp);
    });
  });

  app.get("/api/perishable", (req, res) => {
    db.Food.findAll({
      where: {
        storageCondition: "perishable",
      },
    }).then((foodResp) => {
      res.render("perishable", { food: foodResp });
      console.log("response in api route", foodResp);
      //   console.log("response in api route", { Food: dataValues });
    });
  });

  //POST request, add food item to database.
  app.post("/api/foods", (req, res) => {
    const foods = {
      name: req.body.name,
      quantity: req.body.quantity,
      storageCondition: req.body.storageCondition,
      expiration: req.body.expiration,
      category: req.body.category,
      price: req.body.price,
    };

    db.Food.create(foods).then((foodResp) => {
      res.json(foodResp);
    });
  });
};
