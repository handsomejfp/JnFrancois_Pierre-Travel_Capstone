const mongoose = require('mongoose');

const TravelSchema = new mongoose.Schema({
    state: { type: String, required: true },
    activities: [{ type: String, required: true }],
});

module.exports = mongoose.model('Travel', TravelSchema);
