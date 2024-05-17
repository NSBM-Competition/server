// models/UserModel.js
// firstName,lastName,username,mobileNumber,password,confirmedPassword,agreeTerms

const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },

  username: {
    type: String,
    required: true,
    unique: true
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  confirmedPassword: {
    type: String,
    required: true
  },

  agreeTerms: {
    type: Boolean,
    required: true
  },

  DTCNumber: {
    type: String,
    required: false
  },

  isAdmin: {
    type: Boolean,
    default:false
  },

  
});

const User = mongoose.model('registrationSchema', registrationSchema);

module.exports = User;
