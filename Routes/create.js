const express=require("express");
const path=require("path");
const router=express.Router();
const {getAllcreatedposts,createpost}=require("../controllers/createcontroller")
const isAuth=require("../middlewares/isAuth");

router.get("/create-post",isAuth,getAllcreatedposts);
router.post("/create-post", isAuth,createpost);

module.exports=router;
