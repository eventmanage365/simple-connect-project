// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/connect", (req, res) => {
  res.send("You are connected to backend!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
