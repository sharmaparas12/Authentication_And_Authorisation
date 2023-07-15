const express=require('express');
const userController=require('../../controllers/user-controllers');
const router=express.Router();
const validater=require('../../middleware/index');

router.post(
    '/signup',
    validater.validateauth.validateAuthentication,
    userController.create
    );



router.post(
    '/signin',
    validater.validateauth.validateAuthentication,
    userController.Signin
    );

router.get('/isauthenticated',userController.isauthenticated);

router.get(
    '/isadmin',
    validater.validateauth.isadmin,
    userController.isadmin
    );

module.exports=router;