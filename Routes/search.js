const express=require("express");
const path=require("path");
const searchcontroller=require("../controllers/searchcontoller");
const router=express.Router();

router.get("/search",searchcontroller.getsearch);

module.exports=router;