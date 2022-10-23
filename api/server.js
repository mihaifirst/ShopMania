const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("cors")());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const usersCollection = require("./app/modules/user/user.schema");

const { generateToken } = require("./app/modules/auth/token-generator");
require("./app/modules/auth/passport.middleware");

app.post("/api/auth/login", async (request, response) => {
  const user = await usersCollection.findOne({
    username: request.body.username,
  });

  const token = generateToken(user);
  response.json({ token });
});

const authRoutes = require("./app/modules/auth/auth.routes");
app.use("/api", authRoutes);

const PORT = 3000;
const MONGO_URL = "mongodb://localhost:27017/ShopMania";

console.log(MONGO_URL);
mongoose.connect(MONGO_URL, (err) => {
  if (err) {
    console.log("Mongo error!", err);
  }
  app.listen(PORT, () => {
    console.log(`Server started, on port ${PORT}`);
  });
});
