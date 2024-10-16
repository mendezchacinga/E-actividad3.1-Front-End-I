const mongoose = require("mongoose");

const subsSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  caso: {
    type: String,
    required: true
  },
  comentario: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('subscriptions', subsSchema);