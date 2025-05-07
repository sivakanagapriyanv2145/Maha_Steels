const express=require('express');
const {alogin,asignup}=require('../controller/admin.controller.js');
const router=express.Router();
router.post('/login',alogin);
router.post('/signup',asignup);
module.exports=router;