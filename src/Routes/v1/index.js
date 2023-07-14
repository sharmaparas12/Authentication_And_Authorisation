const express=require('express');
const userController=require('../../controllers/user-controllers');
const router=express.Router();
router.post('/signup',userController.create);
router.post('/signin',userController.Signin);
module.exports=router;