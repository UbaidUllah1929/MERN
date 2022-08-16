const mongoose = require("mongoose");
const validator = require("validator");

// Student Schema
const studentSchema = new mongoose.Schema({
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
    phone: {
        type: Number,
        
    },
    address: {
        type: String,

    }
})

// student collection
const Student = new mongoose.model('student', studentSchema);


module.exports = Student;