const mongoose=require('mongoose');
const SellSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    quantity:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})
const Sell=mongoose.model('Sell',SellSchema);
module.exports=Sell;