const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.db_uri)
        console.log('dataBase connected....');
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB