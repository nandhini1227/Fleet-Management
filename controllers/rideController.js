
const Ride = require('../models/Ride');

// Create ride
exports.createRide = async (req, res) => {
    const { vehicle, pickupLocation, dropoffLocation } = req.body;
    const ride = new Ride({ vehicle, pickupLocation, dropoffLocation, driver: req.user.id });

    try {
        await ride.save();
        res.status(201).json(ride);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
