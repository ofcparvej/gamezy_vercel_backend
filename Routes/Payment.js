<<<<<<< HEAD
const express=require("express");
const router = express.Router();

const {payment } = require("../Controllers/Payment");
const {emptyCart} = require("../Controllers/Cart")

router.post("/create-checkout-session", payment);
// router.get("/:id", getAllOrders);





=======
const express=require("express");
const router = express.Router();

const {payment } = require("../Controllers/Payment");
const {emptyCart} = require("../Controllers/Cart")

router.post("/create-checkout-session", payment);
// router.get("/:id", getAllOrders);





>>>>>>> 2922d3e (Initial Commit)
module.exports = router;