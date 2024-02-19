const express = require("express");
const app = express();
const Subscriber = require("./models/subscribers");

app.use(express.json());

app.get("/subscribers", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/subscribers/names", async (req, res) => {
  try {
    const subscribers = await Subscriber.find(
      {},
      { name: 1, subscribedChannel: 1 }
    );
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/subscribers/:id", async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(400).json({ message: "Subscriber not found" });
    }
    res.json(subscriber);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;
