const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
dotenv.config();

const PORT= process.env.PORT;
const JWT_KEY=process.env.JWT_KEY;
module.exports={
    PORT,
    SALT:bcrypt.genSaltSync(10),
    JWT_KEY,
}
