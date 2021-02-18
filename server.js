const express = require("express");
var db = require("./models");
const expressHandleBars = require("express-handlebars");
const PORT = process.env.PORT || 5000;
const app = express();

const htmlrouter = require("./routes/html-routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

htmlrouter(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("listening on port", PORT);
  });
});


