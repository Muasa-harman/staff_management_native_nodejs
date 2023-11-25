const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");
const employeeRouter = require('./routes/employee')
app.use(cors());

const Attendance = require("./models/attendance")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected  mongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to mongoDB", error);
  });

  app.use(express.json({limit: '10mb'}))
  app.use(express.urlencoded({limit: '10mb', extended:true}))

// endpoint to register an employee
  app.use('/api/employees', employeeRouter)
  ap.use('/api/addEmployee', employeeRouter)
  app.use('/api/attendances', employeeRouter)



  
app.listen(port, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);

