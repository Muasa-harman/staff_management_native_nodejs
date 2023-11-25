const  router  = require('express').Router();
const employeeController = require('../controllers/employeeController')


router.get("/employees", employeeController.getAllEmployees)
router.post("/addEmployee", employeeController.createEmployee)
router.post("/attendance", employeeController.postAttendance)


module.exports = router