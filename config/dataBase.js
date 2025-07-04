const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect( process.env.DATABASE_URL, {
        useNewUrlParser:true,
       useUnifiedTopology:true
    })
    .then(console.log("DB connected successfully"))
    .catch((err) => {
        console.log("error in db connection")
        console.log(err)
        process.exit(1)
    })
}

