const express = require ("express");
const mongoose = require ("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Connect DB & Start Server

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
}).catch( err => console.log(err));