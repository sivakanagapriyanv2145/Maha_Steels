const express=require('express');
const router=express.Router();
const {quote,getQuote}=require('../controller/quote.controller.js');
router.post('/quote',quote);
router.get('/getquote',getQuote)

module.exports=router;