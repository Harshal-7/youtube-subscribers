const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
const path = require("path");

const port = 3000;

// Connect to DATABASE
const DATABASE_URL =
  "mongodb+srv://aech:mongodb@cluster0.o0eoews.mongodb.net/youtube-subscribers?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL, {
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
