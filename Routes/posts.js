const express=require("express");
const path=require("path");
const {getSingleBlog,getAllblogs,getAllnotices,getUpvoteBlog}=require('../controllers/postcontroller');
const router=express.Router();
const isAuth=require("../middlewares/isAuth");

router.get("/singleBlog/:id",getSingleBlog);
router.get("/blog/vote/:id/:isUpvote",isAuth,getUpvoteBlog);
router.get("/blog",getAllblogs);
router.get("/notice",getAllnotices);

module.exports=router;