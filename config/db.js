const mongoose = require("mongoose")
const config = require('config')
const mongoose1  = require('mongodb')

const db = config.get("mongoURL");
const connectDB  = async () => {
    try {
        await mongoose.connect(db,{
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect thanh cong');
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB