const Attendance = require("../models/attendance");
const Employee = require("./models/Employee");

// create a new Employee

module.exports = {
  createEmployee: async (req, res) => {
    const newEmployee = new Employee(req.body);
    try {
      await newEmployee.save();
      res
        .status(200)
        .json({
          message: "Employee created successfully",
          Employee: newEmployee,
        });
    } catch (error) {
      console.log("Error creating employee", error);
      res.status(500).json({ message: "Failed to add an employee" });
    }
  },
  getAllEmployees: async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json({ employees });
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve the employees" });
    }
  },
  postAttendance: async (req, res) => {
    try {
      const existingAttendance = await Attendance.findOne({ employeeId, date });
      if (existingAttendance) {
        existingAttendance.status = status;
        await existingAttendance.save();
        res.status(200).json(existingAttendance);
      } else {
        const newAttendance = new Attendance({
          employeeId,
          employeeName,
          date,
          status,
        });
        await newAttendance.save();
        res.status(200).json(newAttendance);
      }
    } catch (error) {
      res.status(500).json({ message: "Error submitting attendance" });
    }
  },
};
