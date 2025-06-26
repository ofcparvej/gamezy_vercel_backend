const express=require("express");
const router=express.Router();

const {addToList,removefomList,getWishList} = require("../Controllers/Wishlist");

router.post("/:id",addToList);
router.delete("/:userId/:wishlistItemId",removefomList);
router.get("/:id",getWishList );

module.exports=router; 