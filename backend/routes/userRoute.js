const express = require ("express");
const router = express.Router();
const { registerUser, loginUser, logOut, getUser, loggedInStatus, updateUser } = require("../controllers/userController");
const protectRoute = require("../middleWare/authMiddleWare");
     
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logOut); 
router.get("/getuser", protectRoute, getUser); 
router.get("/loggedin",  loggedInStatus);     
router.patch("/updateuser", protectRoute,  updateUser);      
module.exports = router;    