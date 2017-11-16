// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Initiate express app
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

// I am listening..
app.listen(PORT,function(){
  console.log("Listening on localhost: ",PORT);
});
