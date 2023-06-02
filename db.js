const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://vamsikrishnadulam:vamsi14885@cluster0.u5wtiec.mongodb.net/ONLINE_PROJECT_PLATFORM1?retryWrites=true&w=majority";
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
