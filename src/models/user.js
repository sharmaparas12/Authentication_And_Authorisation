
'use strict';
const bcrypt = require('bcrypt');
const {SALT}=require('../config/serverconfig');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Role,{
        through:'User_Roles'
      });
    
    }
  }
  User.init({
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    }
    ,
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
       len:[3,200]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    console.log(SALT);
    const encryptpasword = bcrypt.hashSync(user.password,SALT);
    user.password=encryptpasword;
    
  });
  return User;
};