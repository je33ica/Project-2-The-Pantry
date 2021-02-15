const express = require("express");
const routes = require("./controllers/pantry-controller");
const expressHandleBars = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use(routes);
app.engine("handlebars", expressHandleBars({defaultLayout: "main"}));
app.set("view engine", "handlebars");



app.listen(PORT, () => console.log("aplication is running" + PORT));