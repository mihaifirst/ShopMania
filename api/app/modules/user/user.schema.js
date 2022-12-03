const mongoose = require("mongoose");
// a
const userSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password: { type: String, select: false },
  isAdmin: Boolean,
});

const usersCollection = mongoose.model("User", userSchema);
module.exports = usersCollection;
