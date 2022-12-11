const mongoose = require("mongoose");
const EntityEnum = require("../../shared/enums/entity.enum");

const clientSchema = mongoose.Schema({
  name: String,
  entity: {
    type: String,
    enum: EntityEnum,
  },
  cui: String,
  cnp: String,
  address: String,
  city: String,
  country: String,
  zipcode: String,
  contactPersonName: String,
  phone: String,
  email: String,
  website: String,
  userId: String,
});

const clientCollection = mongoose.model("Client", clientSchema);
module.exports = clientCollection;
