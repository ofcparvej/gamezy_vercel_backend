<<<<<<< HEAD
const express = require("express");
var cors = require('cors')

const app = express();
require('dotenv').config();     

const PORT=process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

require("./config/dataBase").connect();

const user = require("./Routes/User");
const cart=require("./Routes/Cart");
const order=require("./Routes/Order");
const wishlist=require("./Routes/Wishlist");
const paymentRoute=require("./Routes/Payment")
app.use("/api/auth",user);
app.use("/api/cart",cart);
app.use("/api/order",order);
app.use("/api/wishlist",wishlist);
app.use("/api/payment",paymentRoute);




app.get("/",(req,res)=>{

    return res.json({
        success:true,
        message:"your server is up and running..."
    })
})

 



app.listen(PORT , ()=>{
    console.log(`app is listening at po ${PORT} `)
})





=======
const express = require("express");
var cors = require('cors')

const app = express();
require('dotenv').config();     

const PORT=process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

require("./config/dataBase").connect();

const user = require("./Routes/User");
const cart=require("./Routes/Cart");
const order=require("./Routes/Order");
const wishlist=require("./Routes/Wishlist");
const paymentRoute=require("./Routes/Payment")
app.use("/api/auth",user);
app.use("/api/cart",cart);
app.use("/api/order",order);
app.use("/api/wishlist",wishlist);
app.use("/api/payment",paymentRoute);




app.get("/",(req,res)=>{

    return res.json({
        success:true,
        message:"your server is up and running..."
    })
})

 



app.listen(PORT , ()=>{
    console.log(`app is listening at po ${PORT} `)
})





>>>>>>> 2922d3e (Initial Commit)
