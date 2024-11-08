// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'driver'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
