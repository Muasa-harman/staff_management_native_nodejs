const  router  = require('express').Router();
const employeeController = require('../controllers/employeeController')


router.get("/employees", employeeController.getAllEmployees)
router.post("/addEmployee", employeeController.createEmployee)


module.exports = router