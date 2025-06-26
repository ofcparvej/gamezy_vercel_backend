const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email,title,body) => {

    try {

        let transporterb = nodemailer.createTransport ({
            host:process.env.MAIL_HOST,
            auth:{                                                                      
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })



        //send 
        let info = await transporterb.sendMail({
            from:"from Parvej Bhai edu",
            to:`${email}`,
            subject:`${title}`,
            html:`${body},`
        })

        console.log("mail info::", info);
        return info;





    } catch(error) {
        console.log("error in mailSender");
        console.log(error);

    }
}

module.exports = mailSender;