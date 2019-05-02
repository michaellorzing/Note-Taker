var express = require("express");
var apiRoutes = require("./routes/apiroutes");
var htmlRoutes = require("./routes/htmlroutes");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log("You done did it on: " + PORT)
});
