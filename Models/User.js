const mongoose = require('mongoose');
const Schema = mongoose.Schema
let passportLocalMongoose = require('passport-local-mongoose');
const shortid = require('shortid')

let curday = function(){
    today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //As January is 0.
    let yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (`${mm} - ${dd} - ${yyyy}`);
    };

const reqString = {
    type: String,
    required: true
};

const reqNum = {
    type: Number,
    required: true
};
const uuid = {
    type: String,
    default: shortid.generate
};

const transSchema = new Schema({
    _id: uuid,
    desc: reqString,
    status: {
        type: String,
        default: 'Pending'
    },
    amount: reqNum,
    date: {
        type: String,
        default: curday
    },
    img: {
        data: Buffer,
        contentType: String
    }
});


const UserSchema = new Schema({
    firstName: reqString,
    lastName: reqString,
    email: reqString,
    number: reqNum,
    password: reqString,
    date: {
        type: Date,
        default: Date.now
    },
    bank: String,
    rtn: Number,
    btc: Number,
    resetPasswordToken: { 
        data: String 
    },
    resetPasswordExpires: {
        type: Date
    },
    trans: [transSchema],
    availBal: {
        type: Number,
        default: 0.00
        },
    investBal: {
        type: Number,
        default: 0.00
    },
    roiBal: {
        type: Number,
        default: 0.00
    }
});


// The below is used so as to allow passport to reset password
UserSchema.plugin(passportLocalMongoose);


module.exports = User = mongoose.model('user', UserSchema)