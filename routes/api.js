const express = require('express');
const router = express.Router();
const HeartRate = require('../models/HeartRate');

// POST route to receive data from IoT device
router.post('/data', async (req, res) => {
  const { heartRate, spo2 } = req.body;

  try {
    const newHeartRate = new HeartRate({ heartRate, spo2 });
    await newHeartRate.save();
    res.status(201).json(newHeartRate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
