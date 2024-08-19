const mongoose = require('mongoose');

const heartRateSchema = new mongoose.Schema({
  heartRate: {
    type: String,
    required: true
  },
  spo2: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('HeartRate', heartRateSchema);
