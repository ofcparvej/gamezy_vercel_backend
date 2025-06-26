<<<<<<< HEAD
// const router = require("express").Router();
const bcrypt = require("bcrypt");
const User =  require("../model/User");
require("dotenv").config();
const OTP = require("../model/Otp");
const otpGenarator = require("otp-generator");
// const mailSender=require("../utils/mailSender")

exports.signup = async (req,res) => {

   try {

        const {username,email,password} = req.body;
        if(!username || !email || !password){
            res.status(400),json({
                success:false,
                message:"all username,email,password required"
            })
        }

        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password , 10);                       
        } catch (err) {
            res.status(400).json({
                success:false,
                message:"error in hashing",
            })
        }

        const newUser = new User({
            username:username,
            email:email,
            password:hashedPassword
        });

        const user = await newUser.save();

        res.status(200).json({
            sucess:true,
            message:"singed up succesfully",
            user
        });



   } catch (err){
      res.status(400).json({
        success:false,
        message:"error in signup"
      })



   }





}

exports.login= async (req,res) => {
    try {

        const {email , password} = req.body;

        // console.log("req-------------->" , req.body);
       

        // if(!email || !password){
        //     res.status(400).json({
        //         success:false,
        //         message:"all filds are required",
        //     })
        // }

        let foundUser= await User.findOne({email:email});

        // console.log("foundUser--------------->" , foundUser);

        // if(!foundUser){
        //     res.status(400).json({
        //         success:false,
        //         message:"User Not Found Please Sign Up In",
        //     })
        // }


       

        // if(! await bcrypt.compare(password, foundUser.password)){
        //     res.status(400).json({
        //         success:false,
        //         message:"incorrect password",
        //     })
        // }

        res.status(200).json({
            success:true,
            message:"user logged in ",
            foundUser
        })


    } catch (err) {
        res.status(404).json({
            success:false,
            message:"error in login"
        })
    }
}   

 exports.sendOtp= async (req,res) => {


           try{
    
            //.
    
            //fetch mail
          const {email } = req.body;
    
       
          //generate otp...
          var otp = otpGenarator.generate(6, {
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
          })
        //   console.log("otp ganerated -" , otp);
          // is unique....
          const result = await OTP.findOne({otp:otp});
    
          while (result) {
            otp = otpGenarator.generate(6, {
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
              });
              const result = await OTP.findOne({otp:otp});
          }
    
          //otp ka obj...
    
          const otpPayload = {email,otp};
          //create entry in db..
          const otpBody = await OTP.create(otpPayload);
        //   console.log(otpBody);
    
          res.status(200).json({
            success:true,
            message:"otp send success",
            otp
          });
    
    
    
    
    
           //.
           }catch(error) {
               console.log("error on otp send");
               console.log(error);
               res.json({
                success:false,
                message:"error in sending otp"
               })
           }
    
    
    
          
    
    }

exports.resetPassword = async (req,res) => {
     try {
        const {email,enteredOtp,newPassword} = req.body;
        const foundOtpUser = await OTP.findOne({otp:enteredOtp});
        const foundOtp=  foundOtpUser.otp;
        // console.log("helo");
        if(!foundOtpUser){
            res.status(404).json("invalid otp");
        }
       

        try{
            if(foundOtp === enteredOtp){
               

                const foundUser=await User.findOne({email});
                const oldPassword=foundUser.password;
        
                let hashedPassword;
                try{
                    hashedPassword = await bcrypt.hash(newPassword , 10);  
        
                } catch(err){
                    res.status(404).json("error in hashing");
                }
        
                foundUser.password = hashedPassword;
                await foundUser.save();
        
            
                    res.status(200).json({
                        success:true,
                        message:"otp shi",
                        foundUser,
                        oldPassword,
                        newPassword,
                        hashedPassword
                        
            
                    })
            }

        } catch (err) {
            res.status(400).json({
                success:false,
                message:"Failed to reset password incorrect otp"
            })
        }


        res.status(200).json({
                    success:true,
                    message:"le otp",      
                    enteredOtp,
                    foundOtp,
                    newPassword,
                    email
                })



     } catch (err) {
        res.status(400).json({
            success:false,
            message:"Failed to reset password incorrect otp"
        })
     }
}

=======
// const router = require("express").Router();
const bcrypt = require("bcrypt");
const User =  require("../model/User");
require("dotenv").config();
const OTP = require("../model/Otp");
const otpGenarator = require("otp-generator");
// const mailSender=require("../utils/mailSender")

exports.signup = async (req,res) => {

   try {

        const {username,email,password} = req.body;
        if(!username || !email || !password){
            res.status(400),json({
                success:false,
                message:"all username,email,password required"
            })
        }

        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password , 10);                       
        } catch (err) {
            res.status(400).json({
                success:false,
                message:"error in hashing",
            })
        }

        const newUser = new User({
            username:username,
            email:email,
            password:hashedPassword
        });

        const user = await newUser.save();

        res.status(200).json({
            sucess:true,
            message:"singed up succesfully",
            user
        });



   } catch (err){
      res.status(400).json({
        success:false,
        message:"error in signup"
      })



   }





}

exports.login= async (req,res) => {
    try {

        const {email , password} = req.body;

        // console.log("req-------------->" , req.body);
       

        // if(!email || !password){
        //     res.status(400).json({
        //         success:false,
        //         message:"all filds are required",
        //     })
        // }

        let foundUser= await User.findOne({email:email});

        // console.log("foundUser--------------->" , foundUser);

        // if(!foundUser){
        //     res.status(400).json({
        //         success:false,
        //         message:"User Not Found Please Sign Up In",
        //     })
        // }


       

        // if(! await bcrypt.compare(password, foundUser.password)){
        //     res.status(400).json({
        //         success:false,
        //         message:"incorrect password",
        //     })
        // }

        res.status(200).json({
            success:true,
            message:"user logged in ",
            foundUser
        })


    } catch (err) {
        res.status(404).json({
            success:false,
            message:"error in login"
        })
    }
}   

 exports.sendOtp= async (req,res) => {


           try{
    
            //.
    
            //fetch mail
          const {email } = req.body;
    
       
          //generate otp...
          var otp = otpGenarator.generate(6, {
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
          })
        //   console.log("otp ganerated -" , otp);
          // is unique....
          const result = await OTP.findOne({otp:otp});
    
          while (result) {
            otp = otpGenarator.generate(6, {
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
              });
              const result = await OTP.findOne({otp:otp});
          }
    
          //otp ka obj...
    
          const otpPayload = {email,otp};
          //create entry in db..
          const otpBody = await OTP.create(otpPayload);
        //   console.log(otpBody);
    
          res.status(200).json({
            success:true,
            message:"otp send success",
            otp
          });
    
    
    
    
    
           //.
           }catch(error) {
               console.log("error on otp send");
               console.log(error);
               res.json({
                success:false,
                message:"error in sending otp"
               })
           }
    
    
    
          
    
    }

exports.resetPassword = async (req,res) => {
     try {
        const {email,enteredOtp,newPassword} = req.body;
        const foundOtpUser = await OTP.findOne({otp:enteredOtp});
        const foundOtp=  foundOtpUser.otp;
        // console.log("helo");
        if(!foundOtpUser){
            res.status(404).json("invalid otp");
        }
       

        try{
            if(foundOtp === enteredOtp){
               

                const foundUser=await User.findOne({email});
                const oldPassword=foundUser.password;
        
                let hashedPassword;
                try{
                    hashedPassword = await bcrypt.hash(newPassword , 10);  
        
                } catch(err){
                    res.status(404).json("error in hashing");
                }
        
                foundUser.password = hashedPassword;
                await foundUser.save();
        
            
                    res.status(200).json({
                        success:true,
                        message:"otp shi",
                        foundUser,
                        oldPassword,
                        newPassword,
                        hashedPassword
                        
            
                    })
            }

        } catch (err) {
            res.status(400).json({
                success:false,
                message:"Failed to reset password incorrect otp"
            })
        }


        res.status(200).json({
                    success:true,
                    message:"le otp",      
                    enteredOtp,
                    foundOtp,
                    newPassword,
                    email
                })



     } catch (err) {
        res.status(400).json({
            success:false,
            message:"Failed to reset password incorrect otp"
        })
     }
}

>>>>>>> 2922d3e (Initial Commit)
