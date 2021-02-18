const express = require("express");
var db = require("./models");
const expressHandleBars = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();

const htmlrouter = require("./routes/html-routes.js")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

htmlrouter(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("listening on port", PORT);
  });
});


