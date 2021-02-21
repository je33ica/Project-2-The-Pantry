// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/add", (req, res) => {
    res.render("add");
  });
  app.get("/perishable", (req, res) => {
    db.Food.findAll({
      where: {
        storageCondition: "perishable",
      },
    }).then((perishResp) => {
      res.render("perishable", { food: perishResp });
      console.log("response in api route", perishResp);
      //   console.log("response in api route", { Food: dataValues });
    });
  });
  app.get("/frozen", (req, res) => {
    db.Food.findAll({
      where: {
        storageCondition: "frozen",
      },
    }).then((frozenResp) => {
      res.render("frozen", { food: frozenResp });
      console.log("response in api route", frozenResp);
      //   console.log("response in api route", { Food: dataValues });
    });
  });

  app.get("/dry", (req, res) => {
    db.Food.findAll({
      where: {
        storageCondition: "dry",
      },
    }).then((dryResp) => {
      res.render("dry", { food: dryResp });
      console.log("response in api route", dryResp);
      //   console.log("response in api route", { Food: dataValues });
    });
  });

};
