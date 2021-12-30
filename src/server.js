const express = require("express");
const { table } = require("table");
const app = express();
const host = "0.0.0.0";
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send(""));

app.listen(port, host, (result) => {});
