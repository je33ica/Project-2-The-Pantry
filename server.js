const express = require("express");
var db = require("./models");
const expressHandleBars = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();

const moment = require("moment"); // require
moment().format();

const htmlrouter = require("./routes/html-routes.js");
const apirouter = require("./routes/api-routes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

htmlrouter(app);
apirouter(app);
//force true is for dev use only and will be removed when live
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("listening on port", PORT);
  });
});
