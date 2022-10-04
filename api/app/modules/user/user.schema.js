const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});

const usersCollection = mongoose.model("User", userSchema);
module.exports = usersCollection;
