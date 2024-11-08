
const express = require('express');
const { addVehicle, getAllVehicles } = require('../controllers/vehicleController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, addVehicle);
router.get('/', authMiddleware, getAllVehicles);

module.exports = router;
