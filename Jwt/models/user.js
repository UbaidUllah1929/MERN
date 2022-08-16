const mongoose = require("mongoose");
const validator = require("validator");

// Student Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 20,
        required: true
    },
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    address: {
        type: String,

    },
    password: {
        type: String,
        
    }
    
})

// student collection
const User = new mongoose.model('user', userSchema);


module.exports = User;