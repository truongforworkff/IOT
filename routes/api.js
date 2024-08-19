const express = require('express');
const router = express.Router();
const HeartRate = require('../models/HeartRate');

// POST route to receive data from IoT device
app.post('/data', (req, res) => {
    const heartRate = parseInt(req.body.heartRate, 10);
    const spo2 = parseInt(req.body.spo2, 10);

    if (isNaN(heartRate) || isNaN(spo2)) {
        return res.status(400).send('Invalid data');
    }

    // Lưu dữ liệu vào cơ sở dữ liệu
    const newData = new Data({
        heartRate: heartRate,
        spo2: spo2
    });

    newData.save((err) => {
        if (err) {
            console.error('Error saving data:', err);
            return res.status(500).send('Error saving data');
        }
        res.status(200).send('Data saved successfully');
    });
});


module.exports = router;
