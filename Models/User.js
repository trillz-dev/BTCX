const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    bank: {
        type: String,
    },
    acct: {
        type: Number,
    },
    btc: {
        type: String,
    },
    eth: {
        type: String,
    },
    ltc: {
        type: String,
    },
    resetPasswordToken: { 
        type: String 
    },
    resetPasswordExpires: {
        type: Date
    }
    
});


// The below is used so as to allow passport to reset password
UserSchema.plugin(passportLocalMongoose);


module.exports = User = mongoose.model('user', UserSchema)