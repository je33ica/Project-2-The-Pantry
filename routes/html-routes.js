// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
module.exports = function(app) {
  app.get("/foods", (req, res) => {
    db.Food.findAll({}).then((foodResp) => {
      res.json(foodResp);
    });
  });
  app.get("/add", (req, res) => {
    res.render("add");
  });
  //shoudl be returning JSON
  app.get("/perishable", (req, res) => {
    db.Food.find({
      where: {
        storageCondition: "perishable",
      },
    }).then((foodResp) => {
      res.render("perishable", { food: foodResp });
      console.log("response in api route", foodResp);
    });
  });
  app.get("/frozen", (req, res) => {
    db.Food.findAll({
      where: {
        storageCondition: "frozen",
      },
    }).then((foodResp) => {
      res.render("frozen", { food: foodResp });
      console.log("response in api route", foodResp);
    });
  });
  app.get("/dry", (req, res) => {
    db.Food.findAll({
      where: {
        storageCondition: "dry",
      },
    }).then((foodResp) => {
      res.render("dry", { food: foodResp });
      console.log("response in api route", foodResp);
    });
  });
};
