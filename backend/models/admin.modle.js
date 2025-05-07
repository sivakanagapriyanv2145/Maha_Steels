const mongoose=require('mongoose');
const AdminSchmea=mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true
        }

    }
)
const Admin=mongoose.model('AdminLogin',AdminSchmea);
module.exports=Admin;