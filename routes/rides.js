
const express = require('express');
const { createRide } = require('../controllers/rideController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createRide);

module.exports = router;
