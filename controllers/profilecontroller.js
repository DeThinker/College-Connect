const Post=require("../model/post");
exports.post=async (req,res)=>{
    let post=await this.Post.find({author:req.session.user.username})
    console.log(post);
    res.send("Hii");
}