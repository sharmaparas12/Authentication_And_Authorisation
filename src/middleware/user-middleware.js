const validateAuthentication=(req,res,next) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            message:"email or password is missing",
            data:{},
            sucess:false,
            err:'error in middlware'

        });
    }
    next();
}


const isadmin=(req,res,next) => {
    if(!req.body.id)
    {
        return res.status(400).json({
            sucess:false,
            err:'errore in getting id',
            message:"id is missing",
            data:{}


        });
    }
    next();
}
module.exports={
    validateAuthentication,
    isadmin
}