// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/add", (req, res) => {
    res.render("add");
  });
  app.get("/perishable", (req, res) => {
    res.render("perishable");
  });
};
