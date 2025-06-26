const User=require("../model/User");

exports.addToList = async (req,res) => {
    // console.log("INSIDE WISHLIST ----------------->"  )
    try {
        const user = await User.findOne({_id:req.params.id});
        if(!user){
            res.status(404).json("User not Found");
        }else{
            const wishlist = req.body;
            user.wishlist.push(wishlist);
            await user.save();
            res.status(200).json({
                message:"added to the list successfully",
                wishlist
            })


        }
         
  
    } catch(err) {
         res.status(400).json(err);
    }
}

exports.removefomList = async (req,res) => {

      console.log("rempveeee wishlist ---")

    try{

        
    const userId = req.params.userId;
    const wishlistItemId=req.params.wishlistItemId;
    // console.log("userId=>" , userId ,  wishlistItemId)
    const user = await User.findOne({_id:userId});
    // console.log("user=>" , user)

    // if(!user)res.status(400).json("User Not Found");

    const itemIndex = user.wishlist.findIndex(item => item._id == wishlistItemId);
    if(itemIndex === -1) res.status(400).json("item no found");

    user.wishlist.splice(itemIndex,1);
    const updatedUser = await user.save();
    // console.log("Updated => " , updatedUser)

    res.status(200).json("Product DELETED to wishlist successfully");


 
    } catch (err){
            res.status(500).json({err:err});
    //     const statusCode = err ? err.status || 500 : 200;
    //     res.status(statusCode).json({ message: err ? err.message : "Success" });

    }


}

exports.getWishList = async (req,res) => {
    try{
        const user=await User.findOne( {_id:req.params.id});
        res.status(200).json(user.wishlist);
    } catch(err) {
        const statusCode = err ? err.status || 500 : 200;
        res.status(statusCode).json({ message: err ? err.message : "Success" });
    }
}