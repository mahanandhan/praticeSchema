const express = require('express');
const  connectDB  = require('./connect.js');
const dotenv = require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.json("server is running");
})

app.listen(3000, () => {
    connectDB()
    console.log("server is running at port 3000");
});