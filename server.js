const express = require("express");
var db = require("./models");
const routes = require("./controllers/pantry-controller");
const expressHandleBars = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use(routes);
app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("listening on port", PORT);
  });
});

//app.listen(PORT, () => console.log("aplication is running" + PORT));
