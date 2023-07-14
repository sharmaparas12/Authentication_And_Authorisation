const UserRepository=require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
const {JWT_KEY}=require('../config/serverconfig');
class Userservie{
    constructor()
    {
        this.userRepository=new UserRepository();
    }
    async create(data){
        try {
            const user=await this.userRepository.create(data);
            return user;
            
        } catch (error) {
            console.log("errore in service layer");
            throw{error};
        }
    }
    createToken(user)
    {
        try {
            const result=jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
            return result;
            
        } catch (error) {
            console.log("error in jwt");
            throw{error};
            
        }
    }
    verifyToken(token){
        try {
            const result=jwt.verify(token,JWT_KEY);
            return result;
            
        } catch (error) {
            console.log("error in service layer");
            throw {error};
            
        }
    }
    checkpassword(userinputpassword,encryptedpassword){
        try {
            return bcrypt.compareSync(userinputpassword,encryptedpassword);
            
        } catch (error) {
            console.log("errore in service layer");
            throw{error};
            
        }
    }
    async Signin(useremail,userpassword){
        try {
            const user=await this.userRepository.getbyEmail(useremail);
            console.log(user);
            const passwordmatch=this.checkpassword(userpassword,user.password);
            if(!passwordmatch){
                console.log("password doesnot mathc");
                throw{error:"incorrect password"};
            }
            const new_jwt=this.createToken({email:user.email,id:user.id});
            return new_jwt;
            
        } catch (error) {
            console.log("error in serviiice layer");
            throw error;
            
        }
    }
}
module.exports=Userservie;