const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,
    },
    Age:{
        type:Number,
    },
})

module.exports = mongoose.model('users',UserSchema)