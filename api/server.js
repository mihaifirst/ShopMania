const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("cors")());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

require("./app/modules/auth/passport.middleware");

/* Routes */
const authRoutes = require("./app/modules/auth/auth.routes");
const userRoutes = require("./app/modules/user/user.routes");
const clientRoutes = require("./app/modules/client/client.routes");
const featureRoutes = require("./app/modules/feature/feature.routes")
const contractRoutes = require("./app/modules/contract/contract.routes")

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/features", featureRoutes);
app.use("/api/contracts", contractRoutes);

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
