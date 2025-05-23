const express=require('express');
const {scrapdetails,getScrap}=require('../controller/scrap.controller')
const router=express.Router();
router.post("/scrap",scrapdetails);
router.get("/getscrap",getScrap);

module.exports=router;