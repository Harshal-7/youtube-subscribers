const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const port = 3000;

// Connect to DATABASE
const database_url = process.env.DATABASE_URL;
mongoose.connect(database_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));
