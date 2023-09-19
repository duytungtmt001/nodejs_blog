const express = require("express");
const app = express();
const port = 3004;

app.get("/home", (req, res) => {
  res.send("Hello ae!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
