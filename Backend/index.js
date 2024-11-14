const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173'
}));
const dotenv= require('dotenv');
dotenv.config();
app.use(express.json());
const connectDB= require('./config/db');
const EmployeeRoutes= require('./routes/employeeroute');
connectDB();
app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.use('/api',EmployeeRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
})