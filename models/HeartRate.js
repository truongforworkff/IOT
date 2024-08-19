const mongoose = require('mongoose');

const heartRateSchema = new mongoose.Schema({
  heartRate: Number,
  spo2: Number,
  timestamp: { type: Date, default: Date.now }
});

const HeartRate = mongoose.model('HeartRate', heartRateSchema);

module.exports = HeartRate;
