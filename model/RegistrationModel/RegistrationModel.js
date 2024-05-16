// models/UserModel.js

const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },
  
});

const User = mongoose.model('registrationSchema', registrationSchema);

module.exports = User;
