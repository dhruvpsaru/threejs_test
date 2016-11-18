var express = require("express");
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
  res.send("index.html")
})
app.listen(9000, function(){
  console.log("Server is up at port 9000. You can access it at http://localhost:9000");
})
