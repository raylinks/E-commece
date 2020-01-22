
require('dotenv').config();
let CONFIG = {} //Make this global to use all over the application
CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT  || '4000';
CONFIG.mongo_uri    = process.env.MONGODB_URI  || "mongodb+srv://raybaba:History99$$@raycommerce-od7dr.mongodb.net/test?retryWrites=true&w=majority";
CONFIG.mongodb      = process.env.MONGODB;
CONFIG.cloudinary_url = process.env.CLOUDINARY_URL


CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || '';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';
CONFIG.jwtSecret  = process.env.JWT_SECRET_KEY || 'secret';



// authentication
let authentication =  {
    jwtSecret: process.env.JWT_SECRET || 'secret'
};

module.exports = CONFIG, authentication;