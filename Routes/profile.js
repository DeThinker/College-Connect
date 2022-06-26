const express=require("express");
const isAuth=require("../middlewares/isAuth");
const User=require("../model/user")
const profilecontroller=require('../controllers/profilecontroller');
const router=express.Router();
const request=require('request');

router.get("/profile",isAuth,profilecontroller);
router.get("/search/username",async (req,res)=>{
    const username=req.query.username;
    let data=await User.findOne({username:username});
    if(data){
        let msg={
            message : "User exists"
        }
        let dataToSend=await JSON.stringify(msg);
        res.send(dataToSend);
    }else{
        let msg={
            message : "Username can be used"
        }
        let dataToSend=await JSON.stringify(msg);
        res.send(dataToSend);
    }
})
router.get("/dummy", async (req,res)=>{
    res.render("dummy/ejs");
})


module.exports=router;
