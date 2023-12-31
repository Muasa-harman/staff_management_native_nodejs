import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
    employeeId: {
        type: Number,
        required: true
    },
    employeeName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const Attendance =  mongoose.model('Attendance', AttendanceSchema);

export default Attendance;