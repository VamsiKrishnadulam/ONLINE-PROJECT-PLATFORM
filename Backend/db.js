const mongoose = require("mongoose");
const mongoURI =
  "MONGO_URI";
const connectToMongo = () => {
  try {
    mongoose.connect(mongoURI, () => {
      console.log("connected to mongo");
    });
  } catch {
    console.log("unsucessful connection");
  }
};

mongoose.connection.on("connected", () => {
  console.log("mongoose is connected");
});

module.exports = connectToMongo;
