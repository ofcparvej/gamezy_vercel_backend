<<<<<<< HEAD
// const User = require("../model/User");
const mongoose = require("mongoose");
const User = require("../model/User");

//add cart
exports.addItem = async (req,res) => {
    // console.log("inside cart------------------> ADD" , req.body  )
    let id = req.params.id

      try {
        // const user=await User.findById(id);
        const user = await User.findOne({_id:id})
        // console.log("user---->" , user)

    //     if(!user){
    //         // res.status(400).json("User not found");
    //         // const statusCode = err ? err.status || 500 : 200;
    //         res.status(400).json({ message : "No User" });
    //     }else {
            const cart = req.body;
            user.cart.push(cart);
            await user.save();

            res.status(200).json({msg:"product added to the cart",  user:user});
    //     }
       

      } catch (err) {
    //     // res.status(404).json("error",err);
    //     // const statusCode = err ? err.status || 500 : 200;
        res.status(400).json({ message : "product does not added in the cart" , err:err });
      }

    // res.status(200).json({msg:"success"})
}      

// remove fromcart
exports.removeItem = async (req,res) => {
    // console.log("remeve ffrom cart ================>")
    try {
      const userId=req.params.userId;
      const cartItemId=req.params.cartItemId;

      const user=await User.findById({_id:userId});
      if(!user){
        return res.status(400).json({msg:"User Not Found"});
      }

      const itemIndex = user.cart.findIndex(item => item._id == cartItemId);

      if(itemIndex === -1) return res.status(400).json({msg:"Item Not Found"});

      user.cart.splice(itemIndex,1);
      await user.save();
      return res.status(200).json({user_cart:user.cart});

    

    } catch (err) {
      res.status(404).json({error:err});
    //   const statusCode = err ? err.status || 500 : 200;
    //   res.status(statusCode).json({ message: err ? err.message : "Success" });
    }
}   

exports.getCart = async (req,res) => {
    // console.log("inside get cart---------->")
   
    try {
        const user = await User.findById(req.params.id);
        // console.log("userobj id",req.params.id);
        // console.log("user",user);
        res.status(200).json({
            success:true,
            message:"user is",
            user

        });

    } catch (err){
        res.status(500).json(err);

    }
}

//Increase quantity
exports.increaseItem = async (req,res) => {
    try {
         
        const user = await User.findById(req.params.userId);

        if(!user){
            return res.status(404).json("User Not Found");
        }

        const itemId = req.params.itemId;

        const item = user.cart.find(item => item.id == itemId);

        if(!item){
            return res.status(404).json("Item not found in users cart");
        }

        item.quantity += 1;
        await user.save();

        res.status(200).json({
            message:"quantity increased",
            
        });



    } catch {
         res.status(404).json(err);
    }
}

//decrease by one
exports.decreaseItem = async (req,res) => {
    try {
         
        const user = await User.findById(req.params.userId);

        if(!user){
            return res.status(404).json("User Not Found");
        }

        const itemId = req.params.itemId;

        const item = user.cart.find(item => item.id == itemId);

        if(!item){
            return res.status(404).json("Item not found in users cart");
        }

        if(item.quantity>=1)  item.quantity -= 1;
        await user.save();

        res.status(200).json({
            message:"quantity decreased",
            
        });
     


    } catch {
         res.status(404).json(err);
    }
}
//empty cart
exports.emptyCart = async (req,res) => {
    // console.log("Inside empty  car----")
    try {
        let id = req.params.userId;
        const user = await User.findById({_id:id});

        if(!user){
            return res.status(404).json({msg:"User Not Found"});
        }

        user.cart = [];
        await user.save();

        res.status(200).json({
            message:"cart is empty now",
            
        });



    }catch (err) {
        res.status(404).json(err);
    }
}














exports.getTodoById = async(req,res) => {
//     try {

//         //extract based on id....honi chahiye
//         const idd=req.params.id;
//         console.log("idd" , idd);

//         if (!mongoose.Types.ObjectId.isValid(idd)) {
//             return res.status(400).json({
//                 idd,
                
//                 message:"invalid obj id",
//             });
//           }



//         const user = await User.findById({_id: idd});

//         // if (!mongoose.Types.ObjectId.isValid(idd)) {
//         //     return res.status(400).send('Invalid ObjectId');
//         //   }

//         console.log("user====>>>>>>>",user);

//         res.status(200).json({
//             success:true,
//             user,
//             message:`single todo data is fetched ${idd}`,
//         })


//     }
// catch(err){
//     console.error(err);
//        res.status(500).json(
//           {
//             success:false,
//             data:"server error to get single todo",
//             message:err.message
//           }
//        )

// }

=======
// const User = require("../model/User");
const mongoose = require("mongoose");
const User = require("../model/User");

//add cart
exports.addItem = async (req,res) => {
    // console.log("inside cart------------------> ADD" , req.body  )
    let id = req.params.id

      try {
        // const user=await User.findById(id);
        const user = await User.findOne({_id:id})
        // console.log("user---->" , user)

    //     if(!user){
    //         // res.status(400).json("User not found");
    //         // const statusCode = err ? err.status || 500 : 200;
    //         res.status(400).json({ message : "No User" });
    //     }else {
            const cart = req.body;
            user.cart.push(cart);
            await user.save();

            res.status(200).json({msg:"product added to the cart",  user:user});
    //     }
       

      } catch (err) {
    //     // res.status(404).json("error",err);
    //     // const statusCode = err ? err.status || 500 : 200;
        res.status(400).json({ message : "product does not added in the cart" , err:err });
      }

    // res.status(200).json({msg:"success"})
}      

// remove fromcart
exports.removeItem = async (req,res) => {
    // console.log("remeve ffrom cart ================>")
    try {
      const userId=req.params.userId;
      const cartItemId=req.params.cartItemId;

      const user=await User.findById({_id:userId});
      if(!user){
        return res.status(400).json({msg:"User Not Found"});
      }

      const itemIndex = user.cart.findIndex(item => item._id == cartItemId);

      if(itemIndex === -1) return res.status(400).json({msg:"Item Not Found"});

      user.cart.splice(itemIndex,1);
      await user.save();
      return res.status(200).json({user_cart:user.cart});

    

    } catch (err) {
      res.status(404).json({error:err});
    //   const statusCode = err ? err.status || 500 : 200;
    //   res.status(statusCode).json({ message: err ? err.message : "Success" });
    }
}   

exports.getCart = async (req,res) => {
    // console.log("inside get cart---------->")
   
    try {
        const user = await User.findById(req.params.id);
        // console.log("userobj id",req.params.id);
        // console.log("user",user);
        res.status(200).json({
            success:true,
            message:"user is",
            user

        });

    } catch (err){
        res.status(500).json(err);

    }
}

//Increase quantity
exports.increaseItem = async (req,res) => {
    try {
         
        const user = await User.findById(req.params.userId);

        if(!user){
            return res.status(404).json("User Not Found");
        }

        const itemId = req.params.itemId;

        const item = user.cart.find(item => item.id == itemId);

        if(!item){
            return res.status(404).json("Item not found in users cart");
        }

        item.quantity += 1;
        await user.save();

        res.status(200).json({
            message:"quantity increased",
            
        });



    } catch {
         res.status(404).json(err);
    }
}

//decrease by one
exports.decreaseItem = async (req,res) => {
    try {
         
        const user = await User.findById(req.params.userId);

        if(!user){
            return res.status(404).json("User Not Found");
        }

        const itemId = req.params.itemId;

        const item = user.cart.find(item => item.id == itemId);

        if(!item){
            return res.status(404).json("Item not found in users cart");
        }

        if(item.quantity>=1)  item.quantity -= 1;
        await user.save();

        res.status(200).json({
            message:"quantity decreased",
            
        });
     


    } catch {
         res.status(404).json(err);
    }
}
//empty cart
exports.emptyCart = async (req,res) => {
    // console.log("Inside empty  car----")
    try {
        let id = req.params.userId;
        const user = await User.findById({_id:id});

        if(!user){
            return res.status(404).json({msg:"User Not Found"});
        }

        user.cart = [];
        await user.save();

        res.status(200).json({
            message:"cart is empty now",
            
        });



    }catch (err) {
        res.status(404).json(err);
    }
}














exports.getTodoById = async(req,res) => {
//     try {

//         //extract based on id....honi chahiye
//         const idd=req.params.id;
//         console.log("idd" , idd);

//         if (!mongoose.Types.ObjectId.isValid(idd)) {
//             return res.status(400).json({
//                 idd,
                
//                 message:"invalid obj id",
//             });
//           }



//         const user = await User.findById({_id: idd});

//         // if (!mongoose.Types.ObjectId.isValid(idd)) {
//         //     return res.status(400).send('Invalid ObjectId');
//         //   }

//         console.log("user====>>>>>>>",user);

//         res.status(200).json({
//             success:true,
//             user,
//             message:`single todo data is fetched ${idd}`,
//         })


//     }
// catch(err){
//     console.error(err);
//        res.status(500).json(
//           {
//             success:false,
//             data:"server error to get single todo",
//             message:err.message
//           }
//        )

// }

>>>>>>> 2922d3e (Initial Commit)
}