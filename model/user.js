const mongoose = require('mongoose')

const User = new mongoose.Schema({
    first_name : {
        type : String,
        required : true,
    },
    last_name : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        min : 2,
        required : true,
    },
    address :  {
        type : String,
        required : true,
    },
})

module.exports = mongoose.model('users', User) 