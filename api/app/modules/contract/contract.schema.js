const mongoose = require("mongoose");

const contractSchema = mongoose.Schema({
    no: String,
    issuedAt: Date
})

const contractCollection = mongoose.model("Contract", contractSchema);
module.exports = contractCollection;
