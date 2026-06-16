const express = require('express')
require("dotenv").config();
const app = express()
const port = process.env.PORT  || 5000;
const mongoDB = require('./db');
mongoDB();

const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})