const express=require("express");
const router = express.Router();

const {addItem,getTodoById,removeItem,getCart,increaseItem,decreaseItem,emptyCart} = require("../Controllers/Cart");
router.get("/getTodos/:id" , getTodoById);






router.post("/additem/:id",addItem);
router.delete("/removeitem/:userId/:cartItemId",removeItem);
router.get("/getcart/:id",getCart);
router.post("/:userId/increase/:itemId",increaseItem);
router.post("/:userId/decrease/:itemId",decreaseItem);
router.post("/:userId/empty",emptyCart);






module.exports = router;