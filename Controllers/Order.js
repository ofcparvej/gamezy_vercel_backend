<<<<<<< HEAD
// const mongoose = require("mongoose");
const User = require("../model/User");

exports.addOrder = async(req,res) => {
    console.log("ADD ORDER -----==========> " ,  req.body   )
    try {
         let id = req.params.id;
        const user = await User.findOne({_id:id});
        // console.log("user----->>>>>>>>>>",user);

        if(!user){
            return res.status(404).json("User Not Found");
        }else{
            const order = req.body;
            if(!user.orders){
                user.orders = [];
            }
            user.orders.push(order);
            await user.save();
            res.status(200).json("The product has been added to Orders")


        }   


    } catch (err) {
        res.status(400).json(err)
    }
}

exports.getAllOrders = async (req,res) => {
    // console.log("resPar=>" , req.params.id)
    let id = req.params.id;
    try {
        const user = await  User.findOne({_id:id});
        // console.log("idd", req.params.id);
        // console.log("orders",user);
        res.status(200).json(user.orders);

    } catch (err){
        res.status(400).json(err);
    }
}


=======
// const mongoose = require("mongoose");
const User = require("../model/User");

exports.addOrder = async(req,res) => {
    console.log("ADD ORDER -----==========> " ,  req.body   )
    try {
         let id = req.params.id;
        const user = await User.findOne({_id:id});
        // console.log("user----->>>>>>>>>>",user);

        if(!user){
            return res.status(404).json("User Not Found");
        }else{
            const order = req.body;
            if(!user.orders){
                user.orders = [];
            }
            user.orders.push(order);
            await user.save();
            res.status(200).json("The product has been added to Orders")


        }   


    } catch (err) {
        res.status(400).json(err)
    }
}

exports.getAllOrders = async (req,res) => {
    // console.log("resPar=>" , req.params.id)
    let id = req.params.id;
    try {
        const user = await  User.findOne({_id:id});
        // console.log("idd", req.params.id);
        // console.log("orders",user);
        res.status(200).json(user.orders);

    } catch (err){
        res.status(400).json(err);
    }
}


>>>>>>> 2922d3e (Initial Commit)
