const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
  productId: { type: String, unique: true },
  rating: { type: Number },
});
const user = mongoose.model("user", userSchema);
module.exports = user;
