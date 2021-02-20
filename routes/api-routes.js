const db = require("../models");
//GET request, find all food data.
module.exports = function(app) {
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