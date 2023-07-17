const {User,Role}=require('../models/index');
class UserRepository{
    async create(data){
        try {
            const user=await User.create(data);
            return user;
            
        } catch (error) {
            console.log("errore in repository layer");
            throw{error};
            
        }
    }

    async destroy(userId){
        try {
            const result=await User.destroy({
                where:{
                    id:userId
                }
            });
            return result;
            
        } catch (error) {
            console.log("errore in repository layer");
            throw{error};
            
        }
    }
    async get(userId){
        try {
            const response=await User.findByPk(userId,{
                attributes:['email','id']

            });
            return response;
            
        } catch (error) {
            console.log("error in repository layer");
            throw{error};
            
        }
    }
    async getbyEmail(useremail){
        try {
            const user=await User.findOne({
                where:{
                    email:useremail
                }
            });
            
            return user;
            

        } catch (error) {
            console.log("error in repository");
            throw {error};
            
        }
    }
    async isadmin(userId)
    {
        try {
            const user=await User.findByPk(userId);
            const role=await Role.findOne({
                where:{
                    name:"Admin"
                }
            });
            var e={

            };
            const result= await user.hasRole(role);
            
            return result;
            
        } catch (error) {
            console.log("error in serviiice layer");
            throw error;
            
        }
    }

    

    
}
module.exports=UserRepository;