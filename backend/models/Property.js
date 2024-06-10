const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  creator: { type: String, required: true } 
});

module.exports = mongoose.model('Property', propertySchema);
