const  mongoose=require("mongoose") 

const storegeScheme=new mongoose.Schema(
    {
    url:{
        type:String,
    },
    filename:{
        type:Number,
    },
    

},
{
    timestamps: true,
    versionkey: true,
}
)

module.exports = mongoose.model("storages", storegeScheme);