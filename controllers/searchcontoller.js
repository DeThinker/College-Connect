exports.getsearch=(req,res)=>{
    res.render("search.ejs",{isLoggedIn:req.session.isLoggedIn});
};