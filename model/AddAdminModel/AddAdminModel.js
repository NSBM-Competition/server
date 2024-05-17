const mongoose = require('mongoose');

const addAdminSchema = new mongoose.Schema({
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

        adminType: {
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

const addAdmin = mongoose.model('addAdminSchema', addAdminSchema);

module.exports = addAdmin;
