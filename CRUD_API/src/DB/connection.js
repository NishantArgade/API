const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const db = () => {
  const uri =
    "mongodb+srv://nishantargade:1234@cluster0.cyqtblh.mongodb.net/mydb?retryWrites=true&w=majority";

  mongoose
    .connect(uri)
    .then((ans) => console.log("mongo conn successful"))
    .catch((err) => {
      console.log("mongo conn unsucess " + err);
    });
};

module.exports = db;
