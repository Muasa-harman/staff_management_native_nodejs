import Employee from "../models/Employee.js";


// create a new Employee
 export const createEmployee =  async (req, res) => {
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
  };

  // get employees
  export const  getAllEmployees = async(req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json({ employees });
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve the employees" });
    }
  };

  // post attendance
  export const postAttendance = async(req, res) => {
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
  };

