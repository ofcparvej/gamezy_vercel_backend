<<<<<<< HEAD
const express=require("express");
const router = express.Router();

const {addOrder,getAllOrders } = require("../Controllers/Order");

router.post("/:id", addOrder);
router.get("/:id", getAllOrders);





=======
const express=require("express");
const router = express.Router();

const {addOrder,getAllOrders } = require("../Controllers/Order");

router.post("/:id", addOrder);
router.get("/:id", getAllOrders);





>>>>>>> 2922d3e (Initial Commit)
module.exports = router;