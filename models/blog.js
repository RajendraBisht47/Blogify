const {Schema,model}=require("mongoose");

const blogSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        requied:true,
    },
    coverImageURL:{
        type:String,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user",
    },
},{timeseries:true});

const Blog=model('blog',blogSchema);
 
module.exports=Blog;