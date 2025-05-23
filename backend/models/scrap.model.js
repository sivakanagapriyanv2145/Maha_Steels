const mongoose=require('mongoose');
const ScrapSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})
const Scrap=mongoose.model('Scrap',ScrapSchema);
module.exports=Scrap;