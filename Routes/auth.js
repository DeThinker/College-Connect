const express=require("express");
const {getlogin,getsignup,postsignup,postlogin,logout}=require("../controllers/authcontroller");
const isNotAuth=require("../middlewares/isNotAuth")
const isAuth=require("../middlewares/isAuth")
const router=express.Router();

router.get("/login",isNotAuth,getlogin);
router.get("/Signup",isNotAuth,getsignup);
router.post("/Signup",isNotAuth,postsignup);
router.post("/login",isNotAuth,postlogin);
router.get("/logout",isAuth,logout);
module.exports=router;