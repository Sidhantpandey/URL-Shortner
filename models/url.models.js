import mongoose from "mongoose"

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },

    redirectUrl:{
        type:String,
        required:true,

    },
    visitedHistory:[{timeStamps:{type:Number}}],
},{timeStamps:true}
);

const url= mongoose.model("url",urlSchema);
export default url