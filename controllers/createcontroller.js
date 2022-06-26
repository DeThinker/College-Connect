const post=require("../model/post")
exports.getAllcreatedposts=(req,res)=>{
    res.render("create-post.ejs",{isLoggedIn:req.session.isLoggedIn});
}
exports.createpost=async (req,res)=>{
    let {content,title}=req.body;
    let hashTags=content.split(" ").filter(st => st.startsWith("#"));
    console.log(hashTags);
    console.log(hashTags);
    try{
        const Post= await post.create({
            title,
            content,
            type:"Blog",
            author:req.session.user.username,
            date: new Date(),
            upvote:0,
            hashTags: hashTags
        })
        const posts=await post.find({});

        res.render("posts.ejs",{posts:posts});
    } catch(err){
        console.log(err);
    }; 
}