const Post=require("../model/post");

exports.getUpvoteBlog=async (req,res)=>{
    try{
    const blogId=req.params.id;
    const isUpvote=req.params.isUpvote;
    const userId = req.session.user._id._id.toString();

    const blog=await Post.findById({_id: blogId});
    if(isUpvote==="1"){
        console.log(userId);
        blog.upvoteLists.push(userId);
        let updatedupvotedLists = [];

        blog.upvoteLists.map(id=>{
            if(id!=userId){
                updatedupvotedLists.push(id);
            }
        })
        console.log(updatedupvotedLists)
        const updatedBlog=blog;

        let data=await JSON.stringify({upvote: updatedBlog.upvoteLists.length});
        res.send(data);
    }
    } catch(err){
        console.log(err);
    }
}

exports.getSingleBlog=async(req,res)=>{
    try{
    const id=req.params.id;
    console.log(id);
    const blog=Post.findById({_id:id})
    res.render("singleBlog.ejs",{blog:blog});
    } catch(err){
        console.log(err);
    }
}

exports.getAllblogs=async (req,res)=>{
    try{
        const blogs=await Post.find({});
        res.render("blog.ejs",{blogs});
    }catch (err){
        console.log(err);
    }
};
exports.getAllnotices=async (req,res)=>{
    try{
        const notices=await post.find({type:'notice'});
        res.render("notice.ejs",{notices});
    } catch(err){
        console.log(err);
    }
};