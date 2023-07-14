const Userservie=require('../services/user-service');
const userservie=new Userservie();
const {response}=require('express');



const create=async (req,res) => {
    try {
        const response=await userservie.create({
            email:req.body.email,
            password:req.body.password

        });
        return res.status(200).json({
            message:'user create succes',
            data:response,
            status:true,
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'something went wrong in controllers',
            data:{},
            status:false,
            err:error
        });
        
    }
}
const Signin=async (req,res) => {
    try {
        const response=await userservie.Signin(req.body.email,req.body.password);
        return res.status(400).json({
            message:'singin success',
            data:response,
            status:true,
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'something went wrong in controllers',
            data:{},
            status:false,
            err:error
        });
        

        
    }
}
module.exports={
    create,
    Signin
}