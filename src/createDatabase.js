const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");
const dotenv = require("dotenv");
dotenv.config();

// Connect to DATABASE
const database_url = process.env.DATABASE_URL;
mongoose.connect(database_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database created..."));

const refreshAll = async () => {
  await subscriberModel.deleteMany({});
  // console.log(connection)
  await subscriberModel.insertMany(data);
  await mongoose.disconnect();
};
refreshAll();
