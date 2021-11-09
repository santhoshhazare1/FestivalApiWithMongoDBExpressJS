const mongoose = require('mongoose');

const festivalSchema = mongoose.Schema({
    festivalName:{
        type:String,
        required:true
    },
    region:{
        type: String,
        required:true
    },
    religion:{
        type:String,
        required:true
    },
    state:{
       type:String,
       required:true 
    },
    description:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('Festival',festivalSchema);