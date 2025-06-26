const express=require("express");
const router = express.Router();

const {addOrder,getAllOrders } = require("../Controllers/Order");

router.post("/:id", addOrder);
router.get("/:id", getAllOrders);





module.exports = router;