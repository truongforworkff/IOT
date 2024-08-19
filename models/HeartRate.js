const mongoose = require('mongoose');

const heartRateSchema = new mongoose.Schema({
  heartRate: {
    type: Number,
    required: true
  },
  spo2: {
    type: Number,
     
  }
});

module.exports = mongoose.model('HeartRate', heartRateSchema);
