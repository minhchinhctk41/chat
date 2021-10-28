import express from "express";
let app = express();

let hostname = "localhost";
let port = 8000;

app.get("/helloword", (req, res) => {
  res.send("<h1>Hello word !</h1>");
});

app.listen(port, hostname, () => {
  console.log(`Hello minhchinhctk41, I'm running at ${hostname}: ${port}`);
});