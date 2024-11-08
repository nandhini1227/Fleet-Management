// models/Vehicle.js
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    plateNumber: { type: String, required: true, unique: true },
    model: String,
    status: { type: String, enum: ['available', 'in-use', 'maintenance'], default: 'available' },
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
