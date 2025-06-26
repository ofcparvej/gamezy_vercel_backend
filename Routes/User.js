<<<<<<< HEAD
const express=require("express");
const router = express.Router();

const {signup , login , sendOtp , resetPassword} = require("../Controllers/Auth");
router.post("/signup",signup);
router.post("/login",login);
router.post("/sendotp", sendOtp);
router.post("/resetpassword", resetPassword);




module.exports = router;

=======
const express=require("express");
const router = express.Router();

const {signup , login , sendOtp , resetPassword} = require("../Controllers/Auth");
router.post("/signup",signup);
router.post("/login",login);
router.post("/sendotp", sendOtp);
router.post("/resetpassword", resetPassword);




module.exports = router;

>>>>>>> 2922d3e (Initial Commit)
