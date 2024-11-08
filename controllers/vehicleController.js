
const Vehicle = require('../models/Vehicle');

// Add vehicle
exports.addVehicle = async (req, res) => {
   const { plateNumber, model } = req.body;
   const vehicle = new Vehicle({ driver: req.user.id, plateNumber, model });

    try {
        await vehicle.save();
        res.status(201).json(vehicle);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all vehicles
exports.getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find().populate('driver', 'username');
        res.json(vehicles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
