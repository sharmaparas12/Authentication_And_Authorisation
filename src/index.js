const express=require('express');
const bodyparser=require('body-parser');
const apiRoutes=require('./Routes/index');
const app=express();
const{Role,User}=require('./models/index');
const {PORT}=require('./config/serverconfig');
const Userservie=require('./services/user-service');
const UserRepository=require('./repository/user-repository');
const db=require('./models/index');
const PrepareAndStartserver= () => {
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
   
    app.listen(PORT,async () => {
        console.log("server started at "+ PORT);
        if(process.env.DB_SYNC=='true')
        {
            
            db.sequelize.sync({alter:true});
        }
        // const u1=await User.findByPk(3);
        // const r1=await Role.findByPk(1);
        // r1.addUser(u1);
        // const obj=new UserRepository();
        // const response=await obj.get(1);
        // console.log(response);
        // const obj=new Userservie();
        // // const token=obj.createToken({email:'paras@gmail.com',
        // // id:1
        // // });
        // // console.log("token is:"+token);
        // // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFzQGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2ODkyNzIzODUsImV4cCI6MTY4OTI3MjQxNX0.3arqvasKPeWVhc7eU8JBuhmicXiMdN2PdJwaPBeWl1w";
        // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFzQGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2ODkyNzI1NTQsImV4cCI6MTY4OTI3NjE1NH0.rND9fP-ljGGP7qRgbiUSE5lSWitex7ipWgdKUFPMWhg";
        // console.log(obj.verifyToken(token));
    });

}
PrepareAndStartserver();