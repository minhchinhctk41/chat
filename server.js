var express = require("express");
var app = express();

var hostname = "localhost";
var port = 8000;

app.get("/helloword", (req, res) => {
  res.send("<h1>Hello word !</h1>");
});

app.listen(port, hostname, () => {
  console.log(`Hello minhchinhctk41, I'm running at ${hostname}: ${port}`);
});