const express = require("express");

const PORT = 3001;

const app = express();

app.get("/api/ping", function (req, res) {
  res.send("Ok");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
