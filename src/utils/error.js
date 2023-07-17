const e = require('express');
const {statusCode}=require('http-status-codes');


class Apperrors extends Error{
    constructor(
        name="AppError",
        message="Something went wrong",
        explanation="Something went wrong",
        statusCode= s
        ){
            this.message=message,
            this.name=name,
            this.explanation=explanation,
            this.statusCode=statusCode 
       
    }
}
module.exports=Apperrors;