const mongoose = require('mongoose');

const addUserSchema = new mongoose.Schema({
        firstName: {
                type: String,
                required: true
        },

        lastName: {
                type: String,
                required: true,
        },
        email: {
                type: String,
                required: true,
                unique: true
        },

        username: {
                type: String,
                required: true,
        },
        
        mobileNumber: {
                type: String,
                required: true,
        },

        password: {
                type: String,
                required: true
        },

        confirmedPassword: {
                type: String,
                required: true
        },

});

const addUser = mongoose.model('addUserSchema', addUserSchema);

module.exports = addUser;
