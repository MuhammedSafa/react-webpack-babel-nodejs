// server/index.js

const express = require("express");
const bodyParser = require('body-parser');
var cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const DIST_DIR = path.join(__dirname, '../dist'); 
app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.send("Hello King");
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server! The King will be back soon!!" });
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  console.log(req.body.name);
  res.json({ message: "Hello " + req.body.name });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});