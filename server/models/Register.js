import mongoose from 'mongoose';

const RegisterSchema = new mongoose.Schema({
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

const Register = mongoose.Schema('Register', RegisterSchema)

export default Register