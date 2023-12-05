import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
        unique: true,
    },
    employeeName: {
        type: String,
        required:true,
    },
    designation: {
        type: String,
        require:true,
    },
    joiningDate: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    salary: {
        type:Number,
        required: true
    },
    activeEmployee: {
        type: Boolean,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type:String,
        required: true
    },
    createdAt:{
        type: String,
        default: Date.now
    }
})

const Employee = mongoose.model('Employee', EmployeeSchema);
export default  Employee;

