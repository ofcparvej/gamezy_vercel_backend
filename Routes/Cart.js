<<<<<<< HEAD
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






=======
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






>>>>>>> 2922d3e (Initial Commit)
module.exports = router;