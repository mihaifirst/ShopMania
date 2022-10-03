const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const PORT = 3000;
const MONGO_URL = "mongodb://localhost:27017/ShopMania";

mongoose.connect(MONGO_URL, (err) => {
    if (err) {
        console.log("Mongo error!", err);
    }
    app.listen(PORT, () => {
        console.log(`Server started, on port ${PORT}`);
    });
});