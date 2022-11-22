const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();   
const app = express();   
const userRoute = require ("./routes/userRoute");
const errorHandler = require("./middleWare/errorMiddleWare");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;  
  
// Middlewares             
app.use(express.json()); 
app.use(cookieParser()); 
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());                
     
// Routes middleware
 app.use("/api/users", userRoute)  

// Routes     
app.get("/", (req, res)=>{  
    res.send("Home Page")
})

// Error Middleware
app.use(errorHandler);
   
// Connect DB & Start Server 
 
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
}).catch( err => console.log(err));           