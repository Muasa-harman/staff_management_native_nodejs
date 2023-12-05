import express from 'express'
import bodyParser from 'body-parser';
import "dotenv/config";
import mongoose from 'mongoose';
import employeeRouter from './routes/employee.js'
import attendanceRouter from './routes/attendance.js'
const app = express();
const port = 3000;

// app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json({limit: '10mb'}))
app.use(express.urlencoded({limit: '10mb', extended:true}))

app.use('/api/employees', employeeRouter)
app.use('/api/attendance', attendanceRouter)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected  mongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to mongoDB", error);
  });


app.listen(port, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);

