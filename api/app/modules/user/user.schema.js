const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  firstName: String,
  fullName: String,
  lastName: String,
  email: String,
  password: { type: String, select: false },
  isActive: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const usersCollection = mongoose.model("User", userSchema);
module.exports = usersCollection;
