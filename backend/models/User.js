const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true, // Make sure this field is required
        trim: true, // Optionally, trim whitespace from the input
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },


});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;