const mongoose=require('mongoose');
const QuotationSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    projectType:{
        type:String,
        required:true,
    },
    materials:{
        type:[String],
        required:true
    },
    quantity:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    notes:{
        type:String
    }

})
const Quotation=mongoose.model('Quotation',QuotationSchema);    
module.exports=Quotation;