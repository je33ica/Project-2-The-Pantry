// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function (app) {
  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
  });

};
