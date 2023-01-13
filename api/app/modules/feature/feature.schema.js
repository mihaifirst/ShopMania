const mongoose = require ("mongoose");
const UnitEnum = require ("../../shared/enums/unit.enum");
const CurrencyEnum = require("../../shared/enums/currency.enum");


const featureSchema = mongoose.Schema({
    name: String,
    unit: {
        type: String,
        enum: UnitEnum,
    },
    price: Number,
    currency: {
        type: String,
        enum: CurrencyEnum,
    }
});

const FeatureCollection = mongoose.model("Feature", featureSchema);
module.exports = FeatureCollection;

