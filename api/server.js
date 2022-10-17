const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("cors")());

app.use(require("body-parser").json());

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//alex

const PORT = 3000;
const MONGO_URL = "mongodb://localhost:27017/ShopMania";

const authRoutes = require("./app/modules/auth/auth.routes");
app.use("/api", authRoutes);

mongoose.connect(MONGO_URL, (err) => {
  if (err) {
    console.log("Mongo error!", err);
  }
  app.listen(PORT, () => {
    console.log(`Server started, on port ${PORT}`);
  });
});
