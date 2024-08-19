const express = require('express');
const router = express.Router();
const HeartRate = require('../models/HeartRate');

// GET route to serve the main page
router.get('/', (req, res) => {
  res.render('index');
});

// GET route to fetch data for the web interface
router.get('/api/data', async (req, res) => {
  try {
    const data = await HeartRate.find().sort({ timestamp: -1 }).limit(10);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/heart-rates', async (req, res) => {
  try {
    const heartRates = await HeartRate.find().sort({ timestamp: -1 }).exec();
    res.render('heartRates', { heartRates });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
