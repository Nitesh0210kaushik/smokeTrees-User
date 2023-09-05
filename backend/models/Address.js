const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true }, // Change 'require' to 'required'
    phoneNumber: { type: String, required: true },
    state: { type: String, required: true }
    // You can add other address-related fields here
});

module.exports = mongoose.model('Address', addressSchema);