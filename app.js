
var express = require("express");
var app     = express();
var path    = require("path");


app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

let obj = {"name":"John", "age":30, "city":"New York"}; 

app.get('/json',function(req,res){
  res.send(obj);
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
