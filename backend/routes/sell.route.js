const express=require('express');
const {selllist,getsell}=require('../controller/sell.controller.js');
const router=express.Router();
router.post("/post",selllist);
router.get("/getsell",getsell);

module.exports=router;
