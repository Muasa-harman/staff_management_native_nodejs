const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
            type: String,
            required: true
    },
    email: {
        type: String,
        required: true
    }        
})

const Register = mongoose.Schema('Register', registerSchema)

module.exports = Register