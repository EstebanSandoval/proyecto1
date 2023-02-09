const mongoose=require("mongoose")

const userScheme=new mongoose.Schema(
    {
        name:{
            type:String
        },
        
        age:{
            type:String   
        },
        
        email:{
            type:String,
            unique:true,
        },
       
        password:{
            type:String
        },
        
        role:{
            type:String ["user", "admin"],
            default: "user",
        },
    },
    {
        timestamps:true,
        versionKey:true,
    }
)

module.exports = mongoose.model("user", userScheme);
